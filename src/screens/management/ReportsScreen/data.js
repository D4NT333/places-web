export const REPORT_STATUS_FILTERS = [
  {
    id: "all",
    label: "Todas",
  },
  {
    id: "pending",
    label: "Pendientes",
  },
  {
    id: "resolved",
    label: "Resueltos",
  },
  {
    id: "dismissed",
    label: "Descartados",
  },
];

export const REPORT_STATUS_LABELS = {
  pending: "Pendiente",
  resolved: "Resuelto",
  dismissed: "Descartado",
};

export const REPORT_TYPE_LABELS = {
  general: "General",
  place: "Lugar",
  user: "Usuario",
};

export const REPORT_REASON_LABELS = {
  error: "Error",
  performance: "Rendimiento",
  visual_problem: "Problema visual",
  wrong_info: "Información incorrecta",
  closed_place: "Lugar cerrado",
  bad_location: "Ubicación incorrecta",
  spam: "Spam",
  inappropriate_behavior: "Comportamiento inapropiado",
  offensive_content: "Contenido ofensivo",
};

export const mockReports = [
  {
    id: "report_001",
    type: "general",
    reason: "performance",
    relatedLabel: "Sistema general",
    createdAtLabel: "24 jun 2026",
    status: "pending",
    user: {
      name: "Dante",
      photoURL: null,
    },
  },
  {
    id: "report_002",
    type: "place",
    reason: "wrong_info",
    relatedLabel: "Parque Metropolitano",
    createdAtLabel: "23 jun 2026",
    status: "pending",
    user: {
      name: "Ana López",
      photoURL: null,
    },
  },
  {
    id: "report_003",
    type: "user",
    reason: "spam",
    relatedLabel: "Usuario reportado",
    createdAtLabel: "22 jun 2026",
    status: "resolved",
    user: {
      name: "Carlos Ruiz",
      photoURL: null,
    },
  },
  {
    id: "report_004",
    type: "general",
    reason: "visual_problem",
    relatedLabel: "Sistema general",
    createdAtLabel: "21 jun 2026",
    status: "dismissed",
    user: {
      name: "María Pérez",
      photoURL: null,
    },
  },
];