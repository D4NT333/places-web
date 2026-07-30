import React, {
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";

import {
  Layers3,
  Trash2,
} from "lucide-react";

import LayoutScreen from "../../../layout";

import DeletedSubmissionsTable from "./Components/DeletedSubmissionsTable";
import DeleteSubmissionModal from "./Components/DeleteSubmissionModal";

import getDeletedSubmissionsService from "../../../services/api/submissions/getDeletedSubmissions.service";

import deleteDeletedSubmissionService from "../../../services/api/submissions/deleteDeletedSubmission.service";

import styles from "./styles";

const PAGE_LIMIT = 15;

const EMPTY_PAGINATION = {
  limit: PAGE_LIMIT,
  hasMore: false,
  nextCursor: null,
};

const breadcrumbs = [
  {
    label: "Inicio",
    to: "/",
  },
  {
    label: "Propuestas eliminadas",
  },
];

function getSubmissionBatchId(
  submission,
) {
  return (
    submission?.deletionBatchId ||
    submission?.batchId ||
    submission?.deletedBatchId ||
    submission?.requestBatchId ||
    null
  );
}

export default function DeletedSubmissionsScreen() {
  const [
    submissions,
    setSubmissions,
  ] = useState([]);

  const [
    pagination,
    setPagination,
  ] = useState(
    EMPTY_PAGINATION,
  );

  const [
    submissionToDelete,
    setSubmissionToDelete,
  ] = useState(null);

  const [
    isLoading,
    setIsLoading,
  ] = useState(true);

  const [
    isLoadingMore,
    setIsLoadingMore,
  ] = useState(false);

  const [
    isDeleting,
    setIsDeleting,
  ] = useState(false);

  const [
    errorMessage,
    setErrorMessage,
  ] = useState("");

  const deletedSubmissionsCount =
    submissions.length;

  const deletedBatchesCount =
    useMemo(() => {
      if (
        submissions.length === 0
      ) {
        return 0;
      }

      const batchIds =
        submissions
          .map(
            getSubmissionBatchId,
          )
          .filter(Boolean);

      if (
        batchIds.length === 0
      ) {
        return 1;
      }

      return new Set(
        batchIds,
      ).size;
    }, [
      submissions,
    ]);

  const loadSubmissions =
    useCallback(
      async ({
        cursor = null,
        append = false,
      } = {}) => {
        if (append) {
          setIsLoadingMore(
            true,
          );
        } else {
          setIsLoading(
            true,
          );
        }

        setErrorMessage("");

        try {
          const result =
            await getDeletedSubmissionsService({
              limit:
                PAGE_LIMIT,
              cursor,
            });

          const nextItems =
            Array.isArray(
              result?.items,
            )
              ? result.items
              : [];

          setSubmissions(
            (
              currentSubmissions,
            ) =>
              append
                ? [
                    ...currentSubmissions,
                    ...nextItems.filter(
                      (
                        nextSubmission,
                      ) =>
                        !currentSubmissions.some(
                          (
                            currentSubmission,
                          ) =>
                            currentSubmission.id ===
                            nextSubmission.id,
                        ),
                    ),
                  ]
                : nextItems,
          );

          setPagination(
            result?.pagination ||
              EMPTY_PAGINATION,
          );
        } catch (error) {
          console.error(
            "Error al cargar propuestas eliminadas:",
            error,
          );

          setErrorMessage(
            error?.response?.data
              ?.message ||
              error?.message ||
              "No fue posible cargar las propuestas eliminadas.",
          );
        } finally {
          setIsLoading(false);

          setIsLoadingMore(
            false,
          );
        }
      },
      [],
    );

  useEffect(() => {
    loadSubmissions();
  }, [
    loadSubmissions,
  ]);

  function handleRequestDelete(
    submission,
  ) {
    setSubmissionToDelete(
      submission,
    );
  }

  function handleCancelDelete() {
    if (isDeleting) {
      return;
    }

    setSubmissionToDelete(
      null,
    );
  }

  async function handleConfirmDelete() {
    if (
      !submissionToDelete ||
      isDeleting
    ) {
      return;
    }

    const deletedSubmissionId =
      submissionToDelete.id;

    setIsDeleting(true);
    setErrorMessage("");

    try {
      await deleteDeletedSubmissionService(
        deletedSubmissionId,
      );

      setSubmissions(
        (
          currentSubmissions,
        ) =>
          currentSubmissions.filter(
            (
              submission,
            ) =>
              submission.id !==
              deletedSubmissionId,
          ),
      );

      setSubmissionToDelete(
        null,
      );
    } catch (error) {
      console.error(
        "Error al eliminar definitivamente la propuesta:",
        error,
      );

      setErrorMessage(
        error?.response?.data
          ?.message ||
          error?.message ||
          "No fue posible eliminar definitivamente la propuesta.",
      );
    } finally {
      setIsDeleting(false);
    }
  }

  function handleLoadMore() {
    if (
      isLoadingMore ||
      !pagination.hasMore ||
      !pagination.nextCursor
    ) {
      return;
    }

    loadSubmissions({
      cursor:
        pagination.nextCursor,
      append: true,
    });
  }

  function handleRetry() {
    setPagination(
      EMPTY_PAGINATION,
    );

    loadSubmissions();
  }

  return (
    <LayoutScreen
      breadcrumbs={
        breadcrumbs
      }
      padding="0"
      maxWidth="100%"
      scroll
      fullHeight
      showHeader
      showSidebar
      showFooter
      stickyHeader
    >
      <main style={styles.screen}>
        <section
          style={
            styles.headerSection
          }
        >
          <div
            style={
              styles.headingBlock
            }
          >
            <div
              style={
                styles.titleLine
              }
            >
              <div
                style={
                  styles.titleIcon
                }
              >
                <Trash2
                  size={50}
                  strokeWidth={
                    2.15
                  }
                />
              </div>

              <div>
                <h1
                  style={
                    styles.title
                  }
                >
                  Propuestas
                  eliminadas
                </h1>

                <p
                  style={
                    styles.subtitle
                  }
                >
                  Gestiona las
                  propuestas que los
                  usuarios enviaron a
                  eliminación y decide
                  cuándo borrarlas
                  definitivamente.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          style={
            styles.summarySection
          }
        >
          <article
            style={
              styles.summaryCard
            }
          >
            <div
              style={
                styles.summaryIconBlue
              }
            >
              <Trash2
                size={50}
                strokeWidth={
                  2.15
                }
              />
            </div>

            <div
              style={
                styles.summaryContent
              }
            >
              <span
                style={
                  styles.summaryLabel
                }
              >
                Propuestas
                eliminadas
              </span>

              <strong
                style={
                  styles.summaryValueBlue
                }
              >
                {
                  deletedSubmissionsCount
                }
              </strong>
            </div>
          </article>

          <article
            style={
              styles.summaryCard
            }
          >
            <div
              style={
                styles.summaryIconGreen
              }
            >
              <Layers3
                size={50}
                strokeWidth={
                  2.15
                }
              />
            </div>

            <div
              style={
                styles.summaryContent
              }
            >
              <span
                style={
                  styles.summaryLabel
                }
              >
                Lotes eliminados
              </span>

              <strong
                style={
                  styles.summaryValueGreen
                }
              >
                {
                  deletedBatchesCount
                }
              </strong>
            </div>
          </article>
        </section>

        <DeletedSubmissionsTable
          submissions={
            submissions
          }
          isLoading={
            isLoading
          }
          errorMessage={
            errorMessage
          }
          onRetry={
            handleRetry
          }
          onDelete={
            handleRequestDelete
          }
        />

        {!isLoading &&
          !errorMessage &&
          submissions.length >
            0 && (
            <div
              style={
                styles.resultMessage
              }
            >
              <span
                style={
                  styles.resultIcon
                }
              >
                ✓
              </span>

              <span>
                Se cargaron las
                propuestas eliminadas.
              </span>
            </div>
          )}

        {!isLoading &&
          !errorMessage &&
          pagination.hasMore && (
            <div
              style={
                styles.loadMoreWrapper
              }
            >
              <button
                type="button"
                style={{
                  ...styles.loadMoreButton,

                  ...(isLoadingMore
                    ? styles.loadMoreButtonDisabled
                    : {}),
                }}
                disabled={
                  isLoadingMore
                }
                onClick={
                  handleLoadMore
                }
              >
                {isLoadingMore
                  ? "Cargando propuestas..."
                  : "Cargar más propuestas"}
              </button>
            </div>
          )}

        <DeleteSubmissionModal
          submission={
            submissionToDelete
          }
          onCancel={
            handleCancelDelete
          }
          onConfirm={
            handleConfirmDelete
          }
          isDeleting={
            isDeleting
          }
        />
      </main>
    </LayoutScreen>
  );
}