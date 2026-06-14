import React, { useEffect, useState } from "react";

import LayoutScreen from "../../../layout/Layout";
import PhotoSubmissionCard from "./Components/PhotoSubmissionCard";

import getPhotoSubmissionsService from "../../../services/api/submissions/photo/read/getPhotoSubmissions.service";

import styles from "./styles";

const PAGE_LIMIT = 15;

const statusFilters = [
  {
    label: "Todas",
    value: "all",
  },
  {
    label: "Pendientes",
    value: "in_review",
  },
  {
    label: "Aprobadas",
    value: "approved",
  },
  {
    label: "Rechazadas",
    value: "rejected",
  },
];

export default function PhotoSubmissionScreen() {
  const [selectedStatus, setSelectedStatus] =
    useState("all");

  const [photoSubmissions, setPhotoSubmissions] =
    useState([]);

  const [nextCursor, setNextCursor] =
    useState(null);

  const [hasMore, setHasMore] =
    useState(false);

  const [loadedBatches, setLoadedBatches] =
    useState(0);

  const [loading, setLoading] =
    useState(true);

  const [loadingMore, setLoadingMore] =
    useState(false);

  const [error, setError] =
    useState("");

  useEffect(() => {
    let cancelled = false;

    async function loadPhotoSubmissions() {
      try {
        setLoading(true);
        setError("");

        setPhotoSubmissions([]);
        setNextCursor(null);
        setHasMore(false);
        setLoadedBatches(0);

        const result =
          await getPhotoSubmissionsService({
            status: selectedStatus,
            limit: PAGE_LIMIT,
          });

        if (cancelled) return;

        setPhotoSubmissions(
          result.submissions
        );

        setNextCursor(
          result.pagination.nextCursor
        );

        setHasMore(
          result.pagination.hasMore
        );

        setLoadedBatches(
          result.submissions.length > 0
            ? 1
            : 0
        );
      } catch (requestError) {
        if (cancelled) return;

        console.error(
          "Error cargando propuestas de fotografías:",
          requestError
        );

        setError(
          requestError.response?.data?.message ||
            requestError.message ||
            "No se pudieron cargar las propuestas de fotografías."
        );
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    }

    loadPhotoSubmissions();

    return () => {
      cancelled = true;
    };
  }, [selectedStatus]);

  const handleStatusChange = (
    statusValue
  ) => {
    if (statusValue === selectedStatus) {
      return;
    }

    setSelectedStatus(statusValue);
  };

  const handleLoadMore = async () => {
    if (
      loadingMore ||
      !hasMore ||
      !nextCursor
    ) {
      return;
    }

    try {
      setLoadingMore(true);
      setError("");

      const result =
        await getPhotoSubmissionsService({
          status: selectedStatus,
          limit: PAGE_LIMIT,
          cursor: nextCursor,
        });

      setPhotoSubmissions(
        (currentSubmissions) => {
          const currentIds = new Set(
            currentSubmissions.map(
              (submission) =>
                submission.id
            )
          );

          const newSubmissions =
            result.submissions.filter(
              (submission) =>
                !currentIds.has(
                  submission.id
                )
            );

          return [
            ...currentSubmissions,
            ...newSubmissions,
          ];
        }
      );

      setNextCursor(
        result.pagination.nextCursor
      );

      setHasMore(
        result.pagination.hasMore
      );

      if (
        result.submissions.length > 0
      ) {
        setLoadedBatches(
          (currentBatches) =>
            currentBatches + 1
        );
      }
    } catch (requestError) {
      console.error(
        "Error cargando más propuestas:",
        requestError
      );

      setError(
        requestError.response?.data?.message ||
          requestError.message ||
          "No se pudieron cargar más propuestas."
      );
    } finally {
      setLoadingMore(false);
    }
  };

  return (
    <LayoutScreen
      breadcrumbs={[
        {
          label: "Inicio",
          to: "/",
        },
        {
          label:
            "Propuestas de fotografías",
        },
      ]}
    >
      <main style={styles.container}>
        <header style={styles.header}>
          <div
            style={
              styles.headerInformation
            }
          >
            <h1 style={styles.title}>
              Propuestas de fotografías
            </h1>

            <p style={styles.subtitle}>
              Revisión de fotografías
              propuestas por los usuarios.
            </p>

            <div
              style={
                styles.summaryChips
              }
            >
              <div
                style={
                  styles.summaryChip
                }
              >
                Propuestas cargadas:
                <strong>
                  {
                    photoSubmissions.length
                  }
                </strong>
              </div>

              <div
                style={
                  styles.summaryChip
                }
              >
                Lotes cargados:
                <strong>
                  {loadedBatches}
                </strong>
              </div>
            </div>
          </div>

          <div style={styles.filters}>
            {statusFilters.map(
              (filter) => {
                const isActive =
                  selectedStatus ===
                  filter.value;

                return (
                  <button
                    key={filter.value}
                    type="button"
                    disabled={loading}
                    style={{
                      ...styles.filterButton,

                      ...(isActive
                        ? styles.filterButtonActive
                        : {}),

                      ...(loading
                        ? styles.filterButtonDisabled
                        : {}),
                    }}
                    onClick={() =>
                      handleStatusChange(
                        filter.value
                      )
                    }
                  >
                    {filter.label}
                  </button>
                );
              }
            )}
          </div>
        </header>

        {error ? (
          <div style={styles.errorState}>
            {error}
          </div>
        ) : null}

        {loading ? (
          <div style={styles.loadingState}>
            Cargando propuestas de
            fotografías...
          </div>
        ) : null}

        {!loading &&
        photoSubmissions.length > 0 ? (
          <>
            <section style={styles.grid}>
              {photoSubmissions.map(
                (submission) => (
                  <PhotoSubmissionCard
                    key={submission.id}
                    submission={
                      submission
                    }
                  />
                )
              )}
            </section>

            {hasMore ? (
              <div
                style={
                  styles.loadMoreWrapper
                }
              >
                <button
                  type="button"
                  disabled={loadingMore}
                  style={{
                    ...styles.loadMoreButton,

                    ...(loadingMore
                      ? styles.loadMoreButtonDisabled
                      : {}),
                  }}
                  onClick={
                    handleLoadMore
                  }
                >
                  {loadingMore
                    ? "Cargando..."
                    : "Cargar más propuestas"}
                </button>
              </div>
            ) : (
              <div
                style={
                  styles.paginationEnd
                }
              >
                Llegaste al final. Ya se
                cargaron todas las
                propuestas de
                fotografías.
              </div>
            )}
          </>
        ) : null}

        {!loading &&
        !error &&
        photoSubmissions.length === 0 ? (
          <div style={styles.emptyState}>
            No hay propuestas de
            fotografías con este estado.
          </div>
        ) : null}
      </main>
    </LayoutScreen>
  );
}