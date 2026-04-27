import React, { useEffect, useMemo, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import LayoutScreen from "../../../../../layout";
import styles from "./styles";
import ReturnTextArea from "./Components/ReturnTextArea";
import ReturnCorrectionItem from "./Components/ReturnCorrectionItem";
import ReturnActionButtons from "./Components/ReturnActionButtons";
// import getPlaceSubmissionDetailService from "../services/getPlaceSubmissionDetail.service";

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
    getValue: (submission) => submission?.tagLabel || submission?.tag?.label || "",
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
    key: "approach",
    label: "Enfoque",
    getValue: (submission) =>
      submission?.approachLabel || submission?.approach?.label || "",
  },
  {
    key: "priceRange",
    label: "Rango de precio",
    getValue: (submission) =>
      submission?.priceRangeLabel || submission?.priceRange?.label || "",
  },
  {
    key: "photos",
    label: "Fotos",
    type: "photos",
    getValue: (submission) => submission?.photoUrls || submission?.photos || [],
  },
  {
    key: "location",
    label: "Ubicación",
    type: "location",
    getValue: (submission) => submission?.location || submission?.coordinates || null,
  },
];

export default function PlaceReturnSubmissionScreen() {
  const navigate = useNavigate();
  const location = useLocation();
  const { placeSubmissionId } = useParams();

  const [submission, setSubmission] = useState(location.state?.submission || null);
  const [loading, setLoading] = useState(!location.state?.submission);
  const [generalComment, setGeneralComment] = useState("");
  const [selectedFields, setSelectedFields] = useState({});
  const [fieldComments, setFieldComments] = useState({});

  useEffect(() => {
    async function loadSubmissionIfNeeded() {
      if (submission) return;

      try {
        setLoading(true);

        // Descomenta cuando tengas el service listo/importado:
        // const response = await getPlaceSubmissionDetailService(placeSubmissionId);
        // setSubmission(response);

        console.log("FETCH DETAIL FALLBACK:", placeSubmissionId);
      } catch (error) {
        console.error("Error loading submission detail:", error);
      } finally {
        setLoading(false);
      }
    }

    loadSubmissionIfNeeded();
  }, [placeSubmissionId, submission]);

  const visibleCorrectionFields = useMemo(() => {
    return correctionFields.map((field) => ({
      ...field,
      value: field.getValue(submission),
    }));
  }, [submission]);

  const handleToggleField = (fieldKey) => {
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
  };

  const handleChangeFieldComment = (fieldKey, value) => {
    setFieldComments((prev) => ({
      ...prev,
      [fieldKey]: value,
    }));
  };

  const selectedFieldKeys = Object.keys(selectedFields);

  const hasValidFieldComments = selectedFieldKeys.every((fieldKey) => {
    return fieldComments[fieldKey]?.trim().length >= 5;
  });

  const canSubmit =
    generalComment.trim().length >= 10 &&
    selectedFieldKeys.length > 0 &&
    hasValidFieldComments;

  const handleSubmit = () => {
    if (!canSubmit) return;

    const correctionRequests = selectedFieldKeys.map((fieldKey) => {
      const field = correctionFields.find((item) => item.key === fieldKey);

      return {
        field: fieldKey,
        label: field?.label || fieldKey,
        comment: fieldComments[fieldKey].trim(),
      };
    });

    const payload = {
      status: "returned",
      returnGeneralComment: generalComment.trim(),
      correctionRequests,
    };

    console.log("RETURN PAYLOAD:", payload);

    // Luego:
    // await returnPlaceSubmissionService(placeSubmissionId, payload)

    navigate(-1);
  };

  if (loading) {
    return (
      <LayoutScreen>
        <div style={styles.loadingContainer}>Cargando propuesta...</div>
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
                onToggle={() => handleToggleField(field.key)}
                onCommentChange={(value) =>
                  handleChangeFieldComment(field.key, value)
                }
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