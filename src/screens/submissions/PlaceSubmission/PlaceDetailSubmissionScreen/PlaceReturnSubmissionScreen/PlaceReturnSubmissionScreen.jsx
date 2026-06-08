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

function getPhotoUrl(photo, preferredSize = "thumbnail") {
  if (!photo) return null;

  if (typeof photo === "string") return photo;

  if (preferredSize === "thumbnail") {
    return (
      photo.thumbnailUrl ||
      photo.thumbnail?.url ||
      photo.displayUrl ||
      photo.mediumUrl ||
      photo.medium?.url ||
      photo.originalUrl ||
      photo.original?.url ||
      photo.thumbnailURL ||
      photo.mediumURL ||
      photo.downloadURL ||
      photo.url ||
      photo.photoUrl ||
      photo.imageUrl ||
      photo.uri ||
      photo.src ||
      null
    );
  }

  if (preferredSize === "original") {
    return (
      photo.originalUrl ||
      photo.original?.url ||
      photo.downloadURL ||
      photo.displayUrl ||
      photo.mediumUrl ||
      photo.medium?.url ||
      photo.thumbnailUrl ||
      photo.thumbnail?.url ||
      photo.mediumURL ||
      photo.thumbnailURL ||
      photo.url ||
      photo.photoUrl ||
      photo.imageUrl ||
      photo.uri ||
      photo.src ||
      null
    );
  }

  return (
    photo.displayUrl ||
    photo.mediumUrl ||
    photo.medium?.url ||
    photo.originalUrl ||
    photo.original?.url ||
    photo.thumbnailUrl ||
    photo.thumbnail?.url ||
    photo.mediumURL ||
    photo.downloadURL ||
    photo.thumbnailURL ||
    photo.url ||
    photo.photoUrl ||
    photo.imageUrl ||
    photo.uri ||
    photo.src ||
    null
  );
}

function normalizePhotoForReturn(photo, index) {
  const url = getPhotoUrl(photo, "thumbnail");

  if (!url) return null;

  return {
    index,
    url,
  };
}

const TAG_SUBTAGS_DEFAULT_COMMENT =
  "Debe corregirse porque depende de la etiqueta principal seleccionada.";

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
    label: "Subetiquetas",
    type: "items",
    getValue: (submission) => {
      const subtags = submission?.subtags || submission?.subtagLabels || [];

      if (Array.isArray(subtags)) {
        return subtags
          .map((item, index) => ({
            index,
            label: item?.label || item,
          }))
          .filter((item) => Boolean(item.label));
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
    key: "schedule",
    label: "Horario",
    getValue: (submission) =>
      submission?.openingHours?.label ||
      submission?.schedule ||
      "Horario no especificado",
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
        .map((photo, index) => normalizePhotoForReturn(photo, index))
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

  const [selectedSubtags, setSelectedSubtags] = useState({});
  const [subtagComments, setSubtagComments] = useState({});

  const mode = location.state?.mode || "edit";
  const isReadonly = mode === "readonly";

  const [returnReview, setReturnReview] = useState(null);

  const breadcrumbs = [
    { label: "Inicio", to: "/" },
    { label: "Propuesta de lugares", to: "/submissions/places" },
    { label: isReadonly ? "Motivo de devolución" : "Devolver propuesta" },
  ];

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
        const nextSelectedSubtags = {};
        const nextSubtagComments = {};

        const fields = data.returnFields || data.fields || {};

        Object.entries(fields).forEach(([fieldKey, fieldValue]) => {
          if (!fieldValue?.selected) return;

          nextSelectedFields[fieldKey] = true;

          if (fieldKey !== "photos" && fieldKey !== "subtags") {
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

        const subtagItems = Array.isArray(fields.subtags?.items)
          ? fields.subtags.items
          : [];

        subtagItems.forEach((subtag) => {
          if (!subtag.selected) return;

          const indexKey = String(subtag.index);

          nextSelectedSubtags[indexKey] = true;
          nextSubtagComments[indexKey] = subtag.message || "";
        });

        setSelectedFields(nextSelectedFields);
        setFieldComments(nextFieldComments);
        setSelectedPhotos(nextSelectedPhotos);
        setPhotoComments(nextPhotoComments);
        setSelectedSubtags(nextSelectedSubtags);
        setSubtagComments(nextSubtagComments);
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

  const getVisibleSubtags = useCallback(() => {
  const subtagsField = visibleCorrectionFields.find(
    (item) => item.key === "subtags"
  );

  return Array.isArray(subtagsField?.value) ? subtagsField.value : [];
}, [visibleCorrectionFields]);


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

      if (fieldKey === "tag") {
        delete nextSelected.subtags;

        setSelectedSubtags({});
        setSubtagComments({});
      }

      return nextSelected;
    }

    const nextSelected = {
      ...prev,
      [fieldKey]: true,
    };

    if (fieldKey === "tag") {
      nextSelected.subtags = true;

      const subtags = getVisibleSubtags();

      setSelectedSubtags((prevSelectedSubtags) => {
        const nextSelectedSubtags = { ...prevSelectedSubtags };

        subtags.forEach((subtag, index) => {
          const subtagIndex =
            typeof subtag?.index === "number" ? subtag.index : index;

          const indexKey = String(subtagIndex);

          nextSelectedSubtags[indexKey] = true;
        });

        return nextSelectedSubtags;
      });

      setSubtagComments((prevSubtagComments) => {
        const nextSubtagComments = { ...prevSubtagComments };

        subtags.forEach((subtag, index) => {
          const subtagIndex =
            typeof subtag?.index === "number" ? subtag.index : index;

          const indexKey = String(subtagIndex);

          if (!nextSubtagComments[indexKey]?.trim()) {
            nextSubtagComments[indexKey] = TAG_SUBTAGS_DEFAULT_COMMENT;
          }
        });

        return nextSubtagComments;
      });
    }

    return nextSelected;
  });
}, [getVisibleSubtags]);


  const handleChangeFieldComment = useCallback((fieldKey, value) => {
    setFieldComments((prev) => ({
      ...prev,
      [fieldKey]: value,
    }));
  }, []);

  const handleTogglePhoto = useCallback((photoIndex) => {
    setSelectedPhotos((prev) => {
      const indexKey = String(photoIndex);
      const isSelected = Boolean(prev[indexKey]);
      const nextSelected = { ...prev };

      if (isSelected) {
        delete nextSelected[indexKey];

        setPhotoComments((prevComments) => {
          const nextComments = { ...prevComments };
          delete nextComments[indexKey];
          return nextComments;
        });
      } else {
        nextSelected[indexKey] = true;
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
    const indexKey = String(photoIndex);

    setPhotoComments((prev) => ({
      ...prev,
      [indexKey]: value,
    }));
  }, []);

 const handleToggleSubtag = useCallback((subtagIndex) => {
  setSelectedSubtags((prev) => {
    const indexKey = String(subtagIndex);
    const isSelected = Boolean(prev[indexKey]);
    const nextSelected = { ...prev };

    if (isSelected) {
      delete nextSelected[indexKey];

      setSubtagComments((prevComments) => {
        const nextComments = { ...prevComments };
        delete nextComments[indexKey];
        return nextComments;
      });
    } else {
      nextSelected[indexKey] = true;

      setSubtagComments((prevComments) => {
        const nextComments = { ...prevComments };

        if (!nextComments[indexKey]?.trim() && selectedFields.tag) {
          nextComments[indexKey] = TAG_SUBTAGS_DEFAULT_COMMENT;
        }

        return nextComments;
      });
    }

    setSelectedFields((prevFields) => {
      const nextFields = { ...prevFields };

      if (Object.keys(nextSelected).length > 0 || nextFields.tag) {
        nextFields.subtags = true;
      } else {
        delete nextFields.subtags;
      }

      return nextFields;
    });

    return nextSelected;
  });
}, [selectedFields.tag]);

  const handleChangeSubtagComment = useCallback((subtagIndex, value) => {
    const indexKey = String(subtagIndex);

    setSubtagComments((prev) => ({
      ...prev,
      [indexKey]: value,
    }));
  }, []);

  const selectedFieldKeys = Object.keys(selectedFields);
  const selectedPhotoIndexes = Object.keys(selectedPhotos);
  const selectedSubtagIndexes = Object.keys(selectedSubtags);

  const hasValidFieldComments = selectedFieldKeys.every((fieldKey) => {
    if (fieldKey === "photos") {
      return selectedPhotoIndexes.length > 0;
    }

    if (fieldKey === "subtags") {
      return selectedSubtagIndexes.length > 0;
    }

    return fieldComments[fieldKey]?.trim().length >= 5;
  });

  const hasValidPhotoComments = selectedPhotoIndexes.every((photoIndex) => {
    return photoComments[photoIndex]?.trim().length >= 5;
  });

  const hasValidSubtagComments = selectedSubtagIndexes.every((subtagIndex) => {
    return subtagComments[subtagIndex]?.trim().length >= 5;
  });

  const canSubmit =
    generalComment.trim().length >= 10 &&
    selectedFieldKeys.length > 0 &&
    hasValidFieldComments &&
    hasValidPhotoComments &&
    hasValidSubtagComments;

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

        const photoItems = photos.map((photo, index) => {
          const photoIndex =
            typeof photo?.index === "number" ? photo.index : index;

          const indexKey = String(photoIndex);
          const isPhotoSelected = Boolean(selectedPhotos[indexKey]);

          return {
            index: photoIndex,
            url: photo?.url || "",
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

      if (field.key === "subtags") {
        const subtagsField = visibleCorrectionFields.find(
          (item) => item.key === "subtags"
        );

        const subtags = Array.isArray(subtagsField?.value)
          ? subtagsField.value
          : [];

        const subtagItems = subtags.map((subtag, index) => {
          const subtagIndex =
            typeof subtag?.index === "number" ? subtag.index : index;

          const indexKey = String(subtagIndex);
          const isSubtagSelected = Boolean(selectedSubtags[indexKey]);

          return {
            index: subtagIndex,
            label: subtag?.label || "",
            selected: isSubtagSelected,
            message: isSubtagSelected
              ? subtagComments[indexKey]?.trim() || ""
              : "",
          };
        });

        fields.subtags = {
          selected: subtagItems.some((subtag) => subtag.selected),
          message: "",
          items: subtagItems,
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
      <LayoutScreen breadcrumbs={breadcrumbs}>
        <div style={styles.loadingContainer}>Cargando propuesta...</div>
      </LayoutScreen>
    );
  }

  if (errorMessage) {
    return (
      <LayoutScreen breadcrumbs={breadcrumbs}>
        <div style={styles.loadingContainer}>{errorMessage}</div>
      </LayoutScreen>
    );
  }

  return (
    <LayoutScreen breadcrumbs={breadcrumbs}>
      <div style={styles.screen}>
        <section style={styles.pagePanel}>
          <header style={styles.header}>
            <div>
              <h1 style={styles.title}>
                {isReadonly ? "Motivo de devolución" : "Devolver para corrección"}
              </h1>

              <p style={styles.subtitle}>
                {isReadonly
                  ? "Consulta los campos que fueron solicitados para corrección."
                  : "Selecciona los campos que el usuario debe corregir y escribe el motivo de forma clara."}
              </p>
            </div>
          </header>

          <section style={styles.contentGrid}>
            <div style={styles.generalCommentPanel}>
              <ReturnTextArea
                label="Comentario general"
                placeholder="Escribe un comentario general para el usuario..."
                value={generalComment}
                onChange={setGeneralComment}
                minLength={10}
                readOnly={isReadonly}
              />
            </div>

            <aside style={styles.helperPanel}>
              <h2 style={styles.helperTitle}>Guía rápida</h2>

              <p style={styles.helperText}>
                Marca únicamente los campos que necesitan corrección. Cada campo
                marcado debe tener un motivo específico para que el usuario sepa
                qué cambiar.
              </p>

              <div style={styles.helperList}>
                <span>Comentario general: mínimo 10 caracteres.</span>
                <span>Motivo por campo: mínimo 5 caracteres.</span>
                <span>Fotos y subetiquetas se revisan individualmente.</span>
              </div>
            </aside>
          </section>

          <section style={styles.fieldsSection}>
            <div style={styles.sectionHeader}>
              <h2 style={styles.sectionTitle}>Campos de la propuesta</h2>

              <p style={styles.sectionSubtitle}>
                Selecciona uno o varios campos para solicitar corrección.
              </p>
            </div>

            <div style={styles.fieldsContainer}>
              {visibleCorrectionFields.map((field) => (
                <div key={field.key} style={styles.fieldCard}>
                  <ReturnCorrectionItem
                    fieldKey={field.key}
                    label={field.label}
                    value={field.value}
                    type={field.type}
                    selected={Boolean(selectedFields[field.key])}
                    comment={fieldComments[field.key] || ""}
                    selectedPhotos={selectedPhotos}
                    photoComments={photoComments}
                    selectedSubtags={selectedSubtags}
                    subtagComments={subtagComments}
                    onToggle={handleToggleField}
                    onCommentChange={handleChangeFieldComment}
                    onTogglePhoto={handleTogglePhoto}
                    onPhotoCommentChange={handleChangePhotoComment}
                    onToggleSubtag={handleToggleSubtag}
                    onSubtagCommentChange={handleChangeSubtagComment}
                    readOnly={isReadonly}
                  />
                </div>
              ))}
            </div>
          </section>

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