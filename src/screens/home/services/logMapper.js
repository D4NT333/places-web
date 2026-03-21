function normalizeCreatedAt(createdAt) {
  if (!createdAt) return "";

  try {
    if (typeof createdAt?.toDate === "function") {
      return createdAt.toDate().toISOString();
    }

    if (createdAt instanceof Date) {
      return createdAt.toISOString();
    }

    if (typeof createdAt === "string") {
      return createdAt;
    }

    return "";
  } catch {
    return "";
  }
}

export function mapActivityLogToCard(log) {
  const createdAt = normalizeCreatedAt(log.createdAt);

  switch (log.type) {
    case "place_approved":
      return {
        id: log.id,
        title: "Lugar aprobado",
        description: `${log.metadata?.adminName ?? "Un administrador"} aprobó el lugar ${log.metadata?.placeName ?? "sin nombre"} en ${log.metadata?.zoneName ?? "una zona"}`,
        status: "success",
        createdAt,
      };

    case "place_rejected":
      return {
        id: log.id,
        title: "Lugar rechazado",
        description: `${log.metadata?.adminName ?? "Un administrador"} rechazó el lugar ${log.metadata?.placeName ?? "sin nombre"}`,
        status: "warning",
        createdAt,
      };

    case "photo_rejected":
      return {
        id: log.id,
        title: "Fotografía rechazada",
        description: `${log.metadata?.adminName ?? "Un administrador"} rechazó una fotografía de ${log.metadata?.placeName ?? "un lugar"}`,
        status: "warning",
        createdAt,
      };

    case "place_updated":
      return {
        id: log.id,
        title: "Lugar actualizado",
        description: `${log.metadata?.adminName ?? "Un administrador"} actualizó la información de ${log.metadata?.placeName ?? "un lugar"}`,
        status: "info",
        createdAt,
      };

    case "sync_error":
      return {
        id: log.id,
        title: "Error de sincronización",
        description:
          log.metadata?.message ??
          "Se detectó un error en la sincronización de Places",
        status: "error",
        createdAt,
      };

    case "places_refresh":
      return {
        id: log.id,
        title: "Refresh de Places",
        description: `Se ejecutó la actualización de lugares para ${log.metadata?.zoneName ?? "una zona"}`,
        status: "info",
        createdAt,
      };

    default:
      return {
        id: log.id,
        title: "Actividad del sistema",
        description: "Se registró una nueva actividad administrativa",
        status: "info",
        createdAt,
      };
  }
}