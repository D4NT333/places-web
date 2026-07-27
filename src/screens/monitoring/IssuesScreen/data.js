export const ISSUE_PROJECT_FILTERS = [
  {
    id: "all",
    label: "Todos los proyectos",
  },
  {
    id: "mobile",
    label: "Aplicación móvil",
  },
  {
    id: "web",
    label: "Panel web",
  },
  {
    id: "backend",
    label: "Backend",
  },
];

export const ISSUE_CATEGORY_FILTERS = [
  {
    id: "all",
    label: "Todas las categorías",
  },
  {
    id: "javascript",
    label: "Código JavaScript",
  },
  {
    id: "network",
    label: "Red y servicios",
  },
  {
    id: "authentication",
    label: "Autenticación",
  },
  {
    id: "location",
    label: "Ubicación y mapa",
  },
  {
    id: "storage",
    label: "Archivos y fotografías",
  },
  {
    id: "validation",
    label: "Datos y validaciones",
  },
  {
    id: "performance",
    label: "Rendimiento",
  },
  {
    id: "server",
    label: "Servidor",
  },
];

export const ISSUE_LEVEL_FILTERS = [
  {
    id: "all",
    label: "Todos los niveles",
  },
  {
    id: "fatal",
    label: "Crítico",
  },
  {
    id: "error",
    label: "Error",
  },
  {
    id: "warning",
    label: "Advertencia",
  },
  {
    id: "info",
    label: "Información",
  },
];

export const ISSUE_STATUS_FILTERS = [
  {
    id: "all",
    label: "Todos los estados",
  },
  {
    id: "unresolved",
    label: "Abierto",
  },
  {
    id: "reviewing",
    label: "En revisión",
  },
  {
    id: "resolved",
    label: "Resuelto",
  },
  {
    id: "ignored",
    label: "Ignorado",
  },
  {
    id: "reopened",
    label: "Reabierto",
  },
  {
    id: "regression",
    label: "Regresión",
  },
];

export const ISSUE_PERIOD_FILTERS = [
  {
    id: "24h",
    label: "Últimas 24 horas",
  },
  {
    id: "7d",
    label: "Últimos 7 días",
  },
  {
    id: "30d",
    label: "Últimos 30 días",
  },
  {
    id: "all",
    label: "Todo el periodo",
  },
];

export const issueStats = {
  openIssues: 18,
  criticalIssues: 4,
  reviewingIssues: 6,
  affectedUsers: 21,
};

const baseIssuesData = [
  {
    id: "issue-1",
    code: "LSEARCH-MOBILE-12",

    title:
      "No fue posible obtener la ubicación del dispositivo",

    message:
      "Location request failed after the configured timeout.",

    projectId: "mobile",
    project: "Aplicación móvil",

    module: "Ubicación",
    category: "location",
    categoryLabel: "Ubicación y mapa",

    level: "error",
    status: "reopened",

    events: 43,
    users: 11,

    environment: "Producción",
    release: "lsearch-mobile@1.0.4",

    firstSeen: "24 jul. 2026, 10:18",
    lastSeen: "Hace 8 minutos",

    file:
      "src/services/location/getCurrentLocation.service.js",

    functionName:
      "getCurrentLocationService",

    platform: "Android 15",
    device: "Samsung Galaxy S24 Ultra",

    stackTrace: [
      "LocationError: Location request timed out",
      "at getCurrentLocationService (getCurrentLocation.service.js:74)",
      "at loadNearbyPlaces (HomeScreen.jsx:129)",
    ],

    breadcrumbs: [
      {
        time: "12:16:31",
        category: "navigation",
        message: "Usuario abrió HomeScreen",
      },
      {
        time: "12:16:34",
        category: "location",
        message: "Permiso de ubicación confirmado",
      },
      {
        time: "12:16:45",
        category: "error",
        message:
          "La solicitud de ubicación excedió el tiempo límite",
      },
    ],
  },

  {
    id: "issue-2",
    code: "LSEARCH-BACKEND-7",

    title:
      "Error 500 al registrar una propuesta de lugar",

    message:
      "Internal server error while creating place submission.",

    projectId: "backend",
    project: "Backend",

    module: "Propuestas",
    category: "server",
    categoryLabel: "Servidor",

    level: "fatal",
    status: "reviewing",

    events: 19,
    users: 4,

    environment: "Producción",
    release: "places-backend@1.2.1",

    firstSeen: "25 jul. 2026, 08:41",
    lastSeen: "Hace 21 minutos",

    file:
      "src/services/submissions/createPlaceSubmission.service.js",

    functionName:
      "createPlaceSubmissionService",

    platform: "Node.js 22",
    device: "Firebase Functions",

    stackTrace: [
      "TypeError: Cannot read properties of undefined",
      "at createPlaceSubmissionService (createPlaceSubmission.service.js:188)",
      "at createPlaceSubmissionController (createPlaceSubmission.controller.js:46)",
    ],

    breadcrumbs: [
      {
        time: "11:57:04",
        category: "http",
        message: "POST /api/place-submissions",
      },
      {
        time: "11:57:05",
        category: "firestore",
        message: "Inicio de escritura de propuesta",
      },
      {
        time: "11:57:05",
        category: "error",
        message: "Falló la creación del documento",
      },
    ],
  },

  {
    id: "issue-3",
    code: "LSEARCH-WEB-5",

    title:
      "Unhandled Promise Rejection al cargar reportes",

    message:
      "Promise rejected without an error handler.",

    projectId: "web",
    project: "Panel web",

    module: "Reportes",
    category: "javascript",
    categoryLabel: "Código JavaScript",

    level: "error",
    status: "unresolved",

    events: 14,
    users: 7,

    environment: "Producción",
    release: "places-web@1.1.8",

    firstSeen: "25 jul. 2026, 13:22",
    lastSeen: "Hace 46 minutos",

    file:
      "src/services/api/reports/read/getReports.service.js",

    functionName:
      "getReportsService",

    platform: "Chrome 150",
    device: "Windows 11",

    stackTrace: [
      "UnhandledPromiseRejection: Failed to fetch reports",
      "at getReportsService (getReports.service.js:31)",
      "at fetchReports (ReportsScreen.jsx:102)",
    ],

    breadcrumbs: [
      {
        time: "11:30:18",
        category: "navigation",
        message: "Administrador abrió Reportes",
      },
      {
        time: "11:30:19",
        category: "http",
        message: "GET /api/reports",
      },
      {
        time: "11:30:32",
        category: "error",
        message: "La petición fue rechazada",
      },
    ],
  },

  {
    id: "issue-4",
    code: "LSEARCH-MOBILE-9",

    title:
      "Fallo durante la subida de fotografías",

    message:
      "One or more image uploads could not be completed.",

    projectId: "mobile",
    project: "Aplicación móvil",

    module: "Fotografías",
    category: "storage",
    categoryLabel: "Archivos y fotografías",

    level: "warning",
    status: "reviewing",

    events: 12,
    users: 8,

    environment: "Producción",
    release: "lsearch-mobile@1.0.4",

    firstSeen: "24 jul. 2026, 18:11",
    lastSeen: "Hace 1 hora",

    file:
      "src/services/submissions/uploadSubmissionPhotos.service.js",

    functionName:
      "uploadSubmissionPhotosService",

    platform: "Android 14",
    device: "Google Pixel 8",

    stackTrace: [
      "FirebaseStorageError: Upload canceled",
      "at uploadSubmissionPhotosService (uploadSubmissionPhotos.service.js:93)",
      "at submitPlaceProposal (AddPlacesScreen.jsx:288)",
    ],

    breadcrumbs: [
      {
        time: "10:41:16",
        category: "ui",
        message: "Usuario seleccionó 5 fotografías",
      },
      {
        time: "10:41:20",
        category: "storage",
        message: "Comenzó la subida de fotografías",
      },
      {
        time: "10:41:48",
        category: "error",
        message: "La fotografía 4 no pudo subirse",
      },
    ],
  },

  {
    id: "issue-5",
    code: "LSEARCH-BACKEND-3",

    title:
      "Timeout al consultar Google Places",

    message:
      "Google Places request exceeded the configured timeout.",

    projectId: "backend",
    project: "Backend",

    module: "Google Places",
    category: "network",
    categoryLabel: "Red y servicios",

    level: "error",
    status: "reopened",

    events: 8,
    users: 3,

    environment: "Producción",
    release: "places-backend@1.2.1",

    firstSeen: "23 jul. 2026, 19:07",
    lastSeen: "Hace 2 horas",

    file:
      "src/services/googlePlaces/searchNearbyPlaces.service.js",

    functionName:
      "searchNearbyPlacesService",

    platform: "Node.js 22",
    device: "Firebase Functions",

    stackTrace: [
      "AbortError: Request timeout",
      "at searchNearbyPlacesService (searchNearbyPlaces.service.js:117)",
      "at discoverPlacesByH3Controller (discoverPlacesByH3.controller.js:62)",
    ],

    breadcrumbs: [
      {
        time: "09:28:51",
        category: "http",
        message: "Inicio de consulta a Google Places",
      },
      {
        time: "09:29:01",
        category: "network",
        message: "La consulta superó 10 segundos",
      },
      {
        time: "09:29:01",
        category: "error",
        message: "La solicitud fue cancelada",
      },
    ],
  },

  {
    id: "issue-6",
    code: "LSEARCH-MOBILE-15",

    title:
      "La sesión expiró durante el envío de una propuesta",

    message:
      "Firebase authentication token expired during submission.",

    projectId: "mobile",
    project: "Aplicación móvil",

    module: "Autenticación",
    category: "authentication",
    categoryLabel: "Autenticación",

    level: "warning",
    status: "unresolved",

    events: 7,
    users: 6,

    environment: "Producción",
    release: "lsearch-mobile@1.0.4",

    firstSeen: "26 jul. 2026, 06:18",
    lastSeen: "Hace 3 horas",

    file:
      "src/services/auth/getAuthenticatedRequest.service.js",

    functionName:
      "getAuthenticatedRequest",

    platform: "Android 15",
    device: "Xiaomi 14",

    stackTrace: [
      "FirebaseAuthError: ID token has expired",
      "at getAuthenticatedRequest (getAuthenticatedRequest.service.js:49)",
      "at submitPlaceProposal (AddPlacesScreen.jsx:307)",
    ],

    breadcrumbs: [
      {
        time: "08:05:09",
        category: "ui",
        message: "Usuario completó el formulario",
      },
      {
        time: "08:05:10",
        category: "auth",
        message: "Se comprobó el token de sesión",
      },
      {
        time: "08:05:11",
        category: "error",
        message: "El token ya no era válido",
      },
    ],
  },

  {
    id: "issue-7",
    code: "LSEARCH-WEB-8",

    title:
      "ResizeObserver loop limit exceeded",

    message:
      "ResizeObserver detected repeated layout changes.",

    projectId: "web",
    project: "Panel web",

    module: "Métricas",
    category: "performance",
    categoryLabel: "Rendimiento",

    level: "warning",
    status: "ignored",

    events: 6,
    users: 2,

    environment: "Producción",
    release: "places-web@1.1.8",

    firstSeen: "22 jul. 2026, 16:04",
    lastSeen: "Hace 5 horas",

    file:
      "src/views/Metrics/Demand/Components/DemandChart/index.jsx",

    functionName:
      "DemandChart",

    platform: "Chrome 150",
    device: "Windows 11",

    stackTrace: [
      "ResizeObserver loop limit exceeded",
      "at DemandChart (DemandChart/index.jsx:58)",
    ],

    breadcrumbs: [
      {
        time: "06:21:14",
        category: "navigation",
        message: "Administrador abrió Métricas",
      },
      {
        time: "06:21:15",
        category: "chart",
        message: "La gráfica cambió de tamaño",
      },
      {
        time: "06:21:15",
        category: "warning",
        message:
          "ResizeObserver detectó cambios repetidos",
      },
    ],
  },

  {
    id: "issue-8",
    code: "LSEARCH-BACKEND-11",

    title:
      "Falló el envío de una notificación push",

    message:
      "Expo Push API rejected the notification request.",

    projectId: "backend",
    project: "Backend",

    module: "Notificaciones",
    category: "network",
    categoryLabel: "Red y servicios",

    level: "warning",
    status: "reviewing",

    events: 5,
    users: 5,

    environment: "Producción",
    release: "places-backend@1.2.1",

    firstSeen: "26 jul. 2026, 03:46",
    lastSeen: "Hace 6 horas",

    file:
      "src/services/notifications/sendPushNotificationToUser.service.js",

    functionName:
      "sendPushNotificationToUserService",

    platform: "Node.js 22",
    device: "Firebase Functions",

    stackTrace: [
      "ExpoPushError: DeviceNotRegistered",
      "at sendPushNotificationToUserService (sendPushNotificationToUser.service.js:88)",
    ],

    breadcrumbs: [
      {
        time: "04:18:23",
        category: "notification",
        message: "Se creó la notificación interna",
      },
      {
        time: "04:18:24",
        category: "http",
        message: "Se envió la solicitud a Expo",
      },
      {
        time: "04:18:25",
        category: "warning",
        message: "El token ya no estaba registrado",
      },
    ],
  },

  {
    id: "issue-9",
    code: "LSEARCH-BACKEND-14",

    title:
      "El job de actividad no pudo actualizar algunos lugares",

    message:
      "Scheduled job completed with partial failures.",

    projectId: "backend",
    project: "Backend",

    module: "Actividad de lugares",
    category: "server",
    categoryLabel: "Servidor",

    level: "error",
    status: "resolved",

    events: 4,
    users: 0,

    environment: "Producción",
    release: "places-backend@1.2.1",

    firstSeen: "25 jul. 2026, 02:10",
    lastSeen: "Ayer",

    file:
      "src/jobs/updatePlaceActivityStatus.job.js",

    functionName:
      "updatePlaceActivityStatusJob",

    platform: "Node.js 22",
    device: "Cloud Scheduler",

    stackTrace: [
      "FirebaseError: Transaction failed",
      "at updatePlaceActivityStatusJob (updatePlaceActivityStatus.job.js:143)",
    ],

    breadcrumbs: [
      {
        time: "02:10:00",
        category: "job",
        message: "Inició el job de actividad",
      },
      {
        time: "02:10:06",
        category: "firestore",
        message: "Se procesaron 71 lugares",
      },
      {
        time: "02:10:07",
        category: "error",
        message: "3 lugares no pudieron actualizarse",
      },
    ],
  },

  {
    id: "issue-10",
    code: "LSEARCH-WEB-12",

    title:
      "ChunkLoadError después de una nueva versión",

    message:
      "The requested JavaScript chunk could not be loaded.",

    projectId: "web",
    project: "Panel web",

    module: "Aplicación web",
    category: "javascript",
    categoryLabel: "Código JavaScript",

    level: "error",
    status: "regression",

    events: 3,
    users: 3,

    environment: "Producción",
    release: "places-web@1.1.8",

    firstSeen: "24 jul. 2026, 21:31",
    lastSeen: "Ayer",

    file:
      "dist/assets/PlaceDetail-8H2S1.js",

    functionName:
      "lazyImport",

    platform: "Chrome 149",
    device: "Windows 11",

    stackTrace: [
      "ChunkLoadError: Loading chunk failed",
      "at lazyImport (router.jsx:42)",
    ],

    breadcrumbs: [
      {
        time: "21:31:18",
        category: "navigation",
        message:
          "Administrador abrió detalle de lugar",
      },
      {
        time: "21:31:19",
        category: "resource",
        message:
          "El navegador solicitó un chunk anterior",
      },
      {
        time: "21:31:19",
        category: "error",
        message: "El recurso respondió 404",
      },
    ],
  },
];

const ISSUE_HISTORY = {
  "issue-1": [
    {
      id: "issue-1-history-1",
      action: "detected",
      actionLabel: "Detectada",
      previousStatus: "Sin registro",
      currentStatus: "Abierto",
      actor: "Sentry",
      date: "24 jul. 2026, 10:18",
      note:
        "La incidencia fue creada al detectar varias solicitudes de ubicación que excedieron el tiempo permitido.",
    },
    {
      id: "issue-1-history-2",
      action: "reviewing",
      actionLabel: "En revisión",
      previousStatus: "Abierto",
      currentStatus: "En revisión",
      actor: "Dante",
      date: "26 jul. 2026, 13:05",
      note:
        "Se inició la revisión del servicio encargado de obtener la ubicación del dispositivo.",
    },
    {
      id: "issue-1-history-3",
      action: "reopened",
      actionLabel: "Reabierta",
      previousStatus: "En revisión",
      currentStatus: "Abierto",
      actor: "Sentry",
      date: "27 jul. 2026, 08:22",
      note:
        "La incidencia volvió a registrarse después de una nueva aparición del error.",
    },
  ],

  "issue-2": [
    {
      id: "issue-2-history-1",
      action: "detected",
      actionLabel: "Detectada",
      previousStatus: "Sin registro",
      currentStatus: "Abierto",
      actor: "Sentry",
      date: "25 jul. 2026, 08:41",
      note:
        "Se detectó un error interno al crear una propuesta de lugar.",
    },
    {
      id: "issue-2-history-2",
      action: "reviewing",
      actionLabel: "En revisión",
      previousStatus: "Abierto",
      currentStatus: "En revisión",
      actor: "Dante",
      date: "26 jul. 2026, 21:04",
      note:
        "La incidencia fue marcada en revisión debido a que impide enviar propuestas.",
    },
  ],

  "issue-3": [
    {
      id: "issue-3-history-1",
      action: "detected",
      actionLabel: "Detectada",
      previousStatus: "Sin registro",
      currentStatus: "Abierto",
      actor: "Sentry",
      date: "25 jul. 2026, 13:22",
      note:
        "Se detectó una promesa rechazada sin manejo de error durante la carga de reportes.",
    },
  ],

  "issue-4": [
    {
      id: "issue-4-history-1",
      action: "detected",
      actionLabel: "Detectada",
      previousStatus: "Sin registro",
      currentStatus: "Abierto",
      actor: "Sentry",
      date: "24 jul. 2026, 18:11",
      note:
        "Se detectaron cargas incompletas durante el envío de fotografías.",
    },
    {
      id: "issue-4-history-2",
      action: "reviewing",
      actionLabel: "En revisión",
      previousStatus: "Abierto",
      currentStatus: "En revisión",
      actor: "Dante",
      date: "26 jul. 2026, 10:50",
      note:
        "Se comenzó a revisar el manejo de cancelaciones y errores de Firebase Storage.",
    },
  ],

  "issue-5": [
    {
      id: "issue-5-history-1",
      action: "detected",
      actionLabel: "Detectada",
      previousStatus: "Sin registro",
      currentStatus: "Abierto",
      actor: "Sentry",
      date: "23 jul. 2026, 19:07",
      note:
        "Se detectó que la consulta hacia Google Places superó el tiempo máximo permitido.",
    },
    {
      id: "issue-5-history-2",
      action: "resolved",
      actionLabel: "Resuelta",
      previousStatus: "Abierto",
      currentStatus: "Resuelto",
      actor: "Dante",
      date: "25 jul. 2026, 14:30",
      note:
        "Se agregó cancelación controlada y un tiempo máximo para la petición externa.",
    },
    {
      id: "issue-5-history-3",
      action: "reopened",
      actionLabel: "Reabierta",
      previousStatus: "Resuelto",
      currentStatus: "Abierto",
      actor: "Sentry",
      date: "26 jul. 2026, 15:11",
      note:
        "El timeout volvió a presentarse después de haber sido marcado como resuelto.",
    },
  ],

  "issue-6": [
    {
      id: "issue-6-history-1",
      action: "detected",
      actionLabel: "Detectada",
      previousStatus: "Sin registro",
      currentStatus: "Abierto",
      actor: "Sentry",
      date: "26 jul. 2026, 06:18",
      note:
        "Se detectó que el token de autenticación expiró durante el envío de una propuesta.",
    },
  ],

  "issue-7": [
    {
      id: "issue-7-history-1",
      action: "detected",
      actionLabel: "Detectada",
      previousStatus: "Sin registro",
      currentStatus: "Abierto",
      actor: "Sentry",
      date: "22 jul. 2026, 16:04",
      note:
        "Se registró una advertencia provocada por cambios repetidos en el tamaño de una gráfica.",
    },
    {
      id: "issue-7-history-2",
      action: "ignored",
      actionLabel: "Ignorada",
      previousStatus: "Abierto",
      currentStatus: "Ignorado",
      actor: "Dante",
      date: "26 jul. 2026, 18:36",
      note:
        "La incidencia fue ignorada temporalmente porque no bloquea ni rompe la vista.",
    },
  ],

  "issue-8": [
    {
      id: "issue-8-history-1",
      action: "detected",
      actionLabel: "Detectada",
      previousStatus: "Sin registro",
      currentStatus: "Abierto",
      actor: "Sentry",
      date: "26 jul. 2026, 03:46",
      note:
        "La API de Expo rechazó el envío hacia un token que ya no estaba registrado.",
    },
    {
      id: "issue-8-history-2",
      action: "reviewing",
      actionLabel: "En revisión",
      previousStatus: "Abierto",
      currentStatus: "En revisión",
      actor: "Dante",
      date: "26 jul. 2026, 17:08",
      note:
        "Se está revisando la eliminación automática de tokens inválidos.",
    },
  ],

  "issue-9": [
    {
      id: "issue-9-history-1",
      action: "detected",
      actionLabel: "Detectada",
      previousStatus: "Sin registro",
      currentStatus: "Abierto",
      actor: "Sentry",
      date: "25 jul. 2026, 02:10",
      note:
        "El job terminó con errores parciales durante la actualización de algunos lugares.",
    },
    {
      id: "issue-9-history-2",
      action: "reviewing",
      actionLabel: "En revisión",
      previousStatus: "Abierto",
      currentStatus: "En revisión",
      actor: "Dante",
      date: "26 jul. 2026, 09:20",
      note:
        "Se identificaron documentos con información incompleta en el control de actividad.",
    },
    {
      id: "issue-9-history-3",
      action: "resolved",
      actionLabel: "Resuelta",
      previousStatus: "En revisión",
      currentStatus: "Resuelto",
      actor: "Dante",
      date: "27 jul. 2026, 07:42",
      note:
        "Se agregó control individual para evitar que un documento detenga todo el proceso.",
    },
  ],

  "issue-10": [
    {
      id: "issue-10-history-1",
      action: "detected",
      actionLabel: "Detectada",
      previousStatus: "Sin registro",
      currentStatus: "Abierto",
      actor: "Sentry",
      date: "24 jul. 2026, 21:31",
      note:
        "El navegador intentó descargar un archivo JavaScript perteneciente a una versión anterior.",
    },
    {
      id: "issue-10-history-2",
      action: "resolved",
      actionLabel: "Resuelta",
      previousStatus: "Abierto",
      currentStatus: "Resuelto",
      actor: "Dante",
      date: "26 jul. 2026, 23:18",
      note:
        "Se realizó un despliegue completo y se corrigió el manejo de caché de los archivos.",
    },
    {
      id: "issue-10-history-3",
      action: "regression",
      actionLabel: "Regresión",
      previousStatus: "Resuelto",
      currentStatus: "Abierto",
      actor: "Sentry",
      date: "27 jul. 2026, 08:05",
      note:
        "El problema reapareció después de publicar una nueva versión del panel.",
    },
  ],
};

export const issuesData = baseIssuesData.map((issue) => ({
  ...issue,
  history: ISSUE_HISTORY[issue.id] || [],
}));