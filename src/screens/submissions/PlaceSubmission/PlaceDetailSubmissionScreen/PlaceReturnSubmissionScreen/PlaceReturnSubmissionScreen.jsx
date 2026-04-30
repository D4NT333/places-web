import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import LayoutScreen from "../../../../../layout";
import styles from "./styles";

import ReturnTextArea from "./Components/ReturnTextArea";
import ReturnCorrectionItem from "./Components/ReturnCorrectionItem";
import ReturnActionButtons from "./Components/ReturnActionButtons";

import getPlaceSubmissionDetailService from "../../../../../services/submissions/getPlaceSubmissionDetail.service";

import returnPlaceSubmissionService from "../../../../../services/submissions/returnPlaceSubmission.service";

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

  const selectedFieldKeys = Object.keys(selectedFields);

  const hasValidFieldComments = selectedFieldKeys.every((fieldKey) => {
    return fieldComments[fieldKey]?.trim().length >= 5;
  });

  const canSubmit =
    generalComment.trim().length >= 10 &&
    selectedFieldKeys.length > 0 &&
    hasValidFieldComments;

    const buildReturnFieldsPayload = () => {
    const fields = {};

    correctionFields.forEach((field) => {
      const isSelected = Boolean(selectedFields[field.key]);

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
            <h1 style={styles.title}>Devolver para corrección</h1>
            <p style={styles.subtitle}>
              Selecciona los campos que el usuario debe corregir y escribe el motivo.
            </p>
          </div>

          <ReturnTextArea
            label="Comentario general"
            placeholder="Escribe un comentario general para el usuario..."
            value={generalComment}
            onChange={setGeneralComment}
            minLength={10}
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
                onToggle={handleToggleField}
                onCommentChange={handleChangeFieldComment}
              />
            ))}
          </div>

          <ReturnActionButtons
            canSubmit={canSubmit}
            onCancel={() => navigate(-1)}
            onSubmit={handleSubmit}
          />
        </section>
      </div>
    </LayoutScreen>
  );
}

export default React.memo(PlaceReturnSubmissionScreen);