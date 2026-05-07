import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import LayoutScreen from "../../../../../layout";
import styles from "./styles";

import ReturnTextArea from "./Components/ReturnTextArea";
import ReturnCorrectionItem from "./Components/ReturnCorrectionItem";
import ReturnActionButtons from "./Components/ReturnActionButtons";

import getPlaceSubmissionDetailService from "../../../../../services/submissions/getPlaceSubmissionDetail.service";

import returnPlaceSubmissionService from "../../../../../services/submissions/returnPlaceSubmission.service";

import getReturnedPlaceSubmissionReviewService from "../../../../../services/submissions/getReturnedPlaceSubmissionReview.service";

const correctionFields = [
  {
    key: "name",
    label: "Nombre",
    getValue: (submission) => submission?.name || "",
  },
  {
    key: "description",
    label: "Descripción",
    getValue: (submission) => submission?.description || "",
  },
  {
    key: "tag",
    label: "Etiqueta",
    getValue: (submission) =>
      submission?.tagLabel ||
      submission?.tag?.label ||
      submission?.tagId ||
      "",
  },
  {
    key: "subtags",
    label: "Subetiqueta",
    getValue: (submission) => {
      const subtags = submission?.subtags || submission?.subtagLabels || [];

      if (Array.isArray(subtags)) {
        return subtags.map((item) => item?.label || item).filter(Boolean);
      }

      return [];
    },
  },
  {
    key: "approaches",
    label: "Enfoque",
    getValue: (submission) => {
      const approaches =
        submission?.approaches ||
        submission?.approach ||
        submission?.approachLabels ||
        submission?.focuses ||
        submission?.focusLabels ||
        [];

      if (Array.isArray(approaches)) {
        return approaches.map((item) => item?.label || item).filter(Boolean);
      }

      return (
        submission?.approachLabel ||
        submission?.approach?.label ||
        submission?.focus ||
        ""
      );
    },
  },
  {
    key: "price",
    label: "Rango de precio",
    getValue: (submission) =>
      submission?.price ||
      submission?.priceLabel ||
      submission?.priceRangeLabel ||
      submission?.priceRange?.label ||
      "",
  },
  {
    key: "photos",
    label: "Fotos",
    type: "photos",
    getValue: (submission) => {
      const photos = submission?.photos || submission?.photoUrls || [];

      if (!Array.isArray(photos)) {
        return [];
      }

      return photos
        .map((photo) => {
          if (typeof photo === "string") return photo;

          return (
            photo?.thumbnailURL ||
            photo?.mediumURL ||
            photo?.downloadURL ||
            photo?.url ||
            photo?.uri ||
            photo?.src ||
            null
          );
        })
        .filter(Boolean);
    },
  },
  {
    key: "location",
    label: "Ubicación",
    type: "location",
    getValue: (submission) =>
      submission?.location || submission?.coordinates || null,
  },
];

function PlaceReturnSubmissionScreen() {
  const navigate = useNavigate();
  const location = useLocation();
  const params = useParams();

  const submissionId = params.submissionId || params.placeSubmissionId;

  const initialSubmissionRef = useRef(location.state?.submission || null);

  const [submission, setSubmission] = useState(initialSubmissionRef.current);
  const [loading, setLoading] = useState(!initialSubmissionRef.current);
  const [errorMessage, setErrorMessage] = useState("");

  const [generalComment, setGeneralComment] = useState("");
  const [selectedFields, setSelectedFields] = useState({});
  const [fieldComments, setFieldComments] = useState({});

  const [selectedPhotos, setSelectedPhotos] = useState({});
  const [photoComments, setPhotoComments] = useState({});

  const mode = location.state?.mode || "edit";
  const isReadonly = mode === "readonly";

  const [returnReview, setReturnReview] = useState(null);

  useEffect(() => {
  async function loadReturnReviewIfReadonly() {
    if (!isReadonly) return;

    if (!submissionId) {
      setErrorMessage("No se encontró el ID de la propuesta.");
      return;
    }

    try {
      setLoading(true);
      setErrorMessage("");

      const data = await getReturnedPlaceSubmissionReviewService(submissionId);

      setReturnReview(data);

      setGeneralComment(data.generalMessage || "");

      const nextSelectedFields = {};
      const nextFieldComments = {};
      const nextSelectedPhotos = {};
      const nextPhotoComments = {};

      const fields = data.returnFields || {};

      Object.entries(fields).forEach(([fieldKey, fieldValue]) => {
        if (!fieldValue?.selected) return;

        nextSelectedFields[fieldKey] = true;

        if (fieldKey !== "photos") {
          nextFieldComments[fieldKey] = fieldValue.message || "";
        }
      });

      const photoItems = Array.isArray(fields.photos?.items)
        ? fields.photos.items
        : [];

      photoItems.forEach((photo) => {
        if (!photo.selected) return;

        const indexKey = String(photo.index);

        nextSelectedPhotos[indexKey] = true;
        nextPhotoComments[indexKey] = photo.message || "";
      });

      setSelectedFields(nextSelectedFields);
      setFieldComments(nextFieldComments);
      setSelectedPhotos(nextSelectedPhotos);
      setPhotoComments(nextPhotoComments);
    } catch (error) {
      console.error("Error cargando motivo de devolución:", error);
      setErrorMessage(
        error.message || "No se pudo cargar el motivo de devolución."
      );
    } finally {
      setLoading(false);
    }
  }

  loadReturnReviewIfReadonly();
}, [isReadonly, submissionId]);

  useEffect(() => {
    async function loadSubmissionIfNeeded() {
      if (submission) return;

      if (!submissionId) {
        setErrorMessage("No se encontró el ID de la propuesta.");
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        setErrorMessage("");

        const response = await getPlaceSubmissionDetailService(submissionId);
        setSubmission(response);
      } catch (error) {
        console.error("Error loading submission detail:", error);
        setErrorMessage(
          error.message || "No se pudo cargar la propuesta para devolución."
        );
      } finally {
        setLoading(false);
      }
    }

    loadSubmissionIfNeeded();
  }, [submissionId, submission]);

  const visibleCorrectionFields = useMemo(() => {
    return correctionFields.map((field) => ({
      ...field,
      value: field.getValue(submission),
    }));
  }, [submission]);

  const handleToggleField = useCallback((fieldKey) => {
    setSelectedFields((prev) => {
      const isSelected = Boolean(prev[fieldKey]);

      if (isSelected) {
        const nextSelected = { ...prev };
        delete nextSelected[fieldKey];

        setFieldComments((prevComments) => {
          const nextComments = { ...prevComments };
          delete nextComments[fieldKey];
          return nextComments;
        });

        return nextSelected;
      }

      return {
        ...prev,
        [fieldKey]: true,
      };
    });
  }, []);

  const handleChangeFieldComment = useCallback((fieldKey, value) => {
    setFieldComments((prev) => ({
      ...prev,
      [fieldKey]: value,
    }));
  }, []);

  const handleTogglePhoto = useCallback((photoIndex) => {
  setSelectedPhotos((prev) => {
    const isSelected = Boolean(prev[photoIndex]);
    let nextSelected = { ...prev };

    if (isSelected) {
      delete nextSelected[photoIndex];

      setPhotoComments((prevComments) => {
        const nextComments = { ...prevComments };
        delete nextComments[photoIndex];
        return nextComments;
      });
    } else {
      nextSelected[photoIndex] = true;
    }

    setSelectedFields((prevFields) => {
      const nextFields = { ...prevFields };

      if (Object.keys(nextSelected).length > 0) {
        nextFields.photos = true;
      } else {
        delete nextFields.photos;
      }

      return nextFields;
    });

    return nextSelected;
  });
}, []);

const handleChangePhotoComment = useCallback((photoIndex, value) => {
  setPhotoComments((prev) => ({
    ...prev,
    [photoIndex]: value,
  }));
}, []);

  const selectedFieldKeys = Object.keys(selectedFields);
  const selectedPhotoIndexes = Object.keys(selectedPhotos);

  const hasValidFieldComments = selectedFieldKeys.every((fieldKey) => {
    if (fieldKey === "photos") {
      return selectedPhotoIndexes.length > 0;
    }

    return fieldComments[fieldKey]?.trim().length >= 5;
  });

  const hasValidPhotoComments = selectedPhotoIndexes.every((photoIndex) => {
    return photoComments[photoIndex]?.trim().length >= 5;
  });

const canSubmit =
  generalComment.trim().length >= 10 &&
  selectedFieldKeys.length > 0 &&
  hasValidFieldComments &&
  hasValidPhotoComments;

  const buildReturnFieldsPayload = () => {
  const fields = {};

  correctionFields.forEach((field) => {
    const isSelected = Boolean(selectedFields[field.key]);

    if (field.key === "photos") {
      const photosField = visibleCorrectionFields.find(
        (item) => item.key === "photos"
      );

      const photos = Array.isArray(photosField?.value)
        ? photosField.value
        : [];

      const photoItems = photos.map((photoUrl, index) => {
        const indexKey = String(index);
        const isPhotoSelected = Boolean(selectedPhotos[indexKey]);

        return {
          index,
          url: photoUrl,
          selected: isPhotoSelected,
          message: isPhotoSelected
            ? photoComments[indexKey]?.trim() || ""
            : "",
        };
      });

      fields.photos = {
        selected: photoItems.some((photo) => photo.selected),
        message: "",
        items: photoItems,
      };

      return;
    }

    fields[field.key] = {
      selected: isSelected,
      message: isSelected ? fieldComments[field.key]?.trim() || "" : "",
    };
  });

  return fields;
};

  const handleSubmit = async () => {
  if (!canSubmit) return;

  const payload = {
    generalMessage: generalComment.trim(),
    fields: buildReturnFieldsPayload(),
  };

  try {
    console.log("RETURN PAYLOAD:", payload);

    const response = await returnPlaceSubmissionService(submissionId, payload);

    console.log("RETURN RESPONSE:", response);

    navigate(-1);
  } catch (error) {
    console.error("Error devolviendo propuesta:", error);
    setErrorMessage(
      error.message || "No se pudo devolver la propuesta para corrección."
    );
  }
};

  if (loading) {
    return (
      <LayoutScreen>
        <div style={styles.loadingContainer}>Cargando propuesta...</div>
      </LayoutScreen>
    );
  }

  if (errorMessage) {
    return (
      <LayoutScreen>
        <div style={styles.loadingContainer}>{errorMessage}</div>
      </LayoutScreen>
    );
  }

  return (
    <LayoutScreen>
      <div style={styles.screen}>
        <section style={styles.card}>
          <div style={styles.header}>
            <h1 style={styles.title}>
              {isReadonly ? "Motivo de devolución" : "Devolver para corrección"}
            </h1>

            <p style={styles.subtitle}>
              {isReadonly
                ? "Consulta los campos que fueron solicitados para corrección."
                : "Selecciona los campos que el usuario debe corregir y escribe el motivo."}
            </p>
          </div>

        <ReturnTextArea
          label="Comentario general"
          placeholder="Escribe un comentario general para el usuario..."
          value={generalComment}
          onChange={setGeneralComment}
          minLength={10}
          readOnly={isReadonly}
        />

          <div style={styles.fieldsContainer}>
            {visibleCorrectionFields.map((field) => (
             <ReturnCorrectionItem
              key={field.key}
              fieldKey={field.key}
              label={field.label}
              value={field.value}
              type={field.type}
              selected={Boolean(selectedFields[field.key])}
              comment={fieldComments[field.key] || ""}
              selectedPhotos={selectedPhotos}
              photoComments={photoComments}
              onToggle={handleToggleField}
              onCommentChange={handleChangeFieldComment}
              onTogglePhoto={handleTogglePhoto}
              onPhotoCommentChange={handleChangePhotoComment}
              readOnly={isReadonly}
            />
              ))}
          </div>

          <ReturnActionButtons
            canSubmit={canSubmit}
            onCancel={() => navigate(-1)}
            onSubmit={handleSubmit}
            readOnly={isReadonly}
          />
        </section>
      </div>
    </LayoutScreen>
  );
}

export default React.memo(PlaceReturnSubmissionScreen);