import React, {
  useCallback,
  useEffect,
  useState,
} from "react";

import LayoutScreen from "../../../layout";

import DeletedSubmissionsTable from "./Components/DeletedSubmissionsTable";
import SubmissionSummaryModal from "./Components/SubmissionSummaryModal";
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

export default function DeletedSubmissionsScreen() {
  const [
    submissions,
    setSubmissions,
  ] = useState([]);

  const [
    pagination,
    setPagination,
  ] = useState(
    EMPTY_PAGINATION
  );

  const [
    selectedSubmission,
    setSelectedSubmission,
  ] = useState(null);

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

  const loadSubmissions =
    useCallback(
      async ({
        cursor = null,
        append = false,
      } = {}) => {
        if (append) {
          setIsLoadingMore(true);
        } else {
          setIsLoading(true);
        }

        setErrorMessage("");

        try {
          const result =
            await getDeletedSubmissionsService({
              limit: PAGE_LIMIT,
              cursor,
            });

          setSubmissions(
            (currentSubmissions) =>
              append
                ? [
                    ...currentSubmissions,
                    ...result.items,
                  ]
                : result.items
          );

          setPagination(
            result.pagination
          );
        } catch (error) {
          console.error(
            "Error al cargar propuestas eliminadas:",
            error
          );

          setErrorMessage(
            error?.response?.data?.message ||
              error?.message ||
              "No fue posible cargar las propuestas eliminadas."
          );
        } finally {
          setIsLoading(false);
          setIsLoadingMore(false);
        }
      },
      []
    );

  useEffect(() => {
    loadSubmissions();
  }, [loadSubmissions]);

  function handleOpenSummary(
    submission
  ) {
    setSelectedSubmission(
      submission
    );
  }

  function handleCloseSummary() {
    setSelectedSubmission(null);
  }

  function handleRequestDelete(
    submission
  ) {
    setSubmissionToDelete(
      submission
    );
  }

  function handleCancelDelete() {
    if (isDeleting) {
      return;
    }

    setSubmissionToDelete(null);
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
        deletedSubmissionId
      );

      setSubmissions(
        (currentSubmissions) =>
          currentSubmissions.filter(
            (submission) =>
              submission.id !==
              deletedSubmissionId
          )
      );

      if (
        selectedSubmission?.id ===
        deletedSubmissionId
      ) {
        setSelectedSubmission(null);
      }

      setSubmissionToDelete(null);
    } catch (error) {
      console.error(
        "Error al eliminar definitivamente la propuesta:",
        error
      );

      setErrorMessage(
        error?.response?.data?.message ||
          error?.message ||
          "No fue posible eliminar definitivamente la propuesta."
      );
    } finally {
      setIsDeleting(false);
    }
  }

  function handleDeleteFromSummary(
    submission
  ) {
    setSelectedSubmission(null);

    setSubmissionToDelete(
      submission
    );
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
      EMPTY_PAGINATION
    );

    loadSubmissions();
  }

  return (
    <LayoutScreen breadcrumbs={breadcrumbs}>
      <main style={styles.container}>
        <header style={styles.headerBlock}>
          <h1 style={styles.title}>
            Propuestas eliminadas
          </h1>

          <p style={styles.subtitle}>
            Propuestas eliminadas por los usuarios
            pendientes de eliminación definitiva.
          </p>
        </header>

        <DeletedSubmissionsTable
          submissions={submissions}
          isLoading={isLoading}
          errorMessage={errorMessage}
          onRetry={handleRetry}
          onViewSummary={
            handleOpenSummary
          }
          onDelete={
            handleRequestDelete
          }
        />

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
                style={
                  styles.loadMoreButton
                }
                disabled={
                  isLoadingMore
                }
                onClick={
                  handleLoadMore
                }
              >
                {isLoadingMore
                  ? "Cargando..."
                  : "Cargar más propuestas"}
              </button>
            </div>
          )}
      </main>

      <SubmissionSummaryModal
        submission={
          selectedSubmission
        }
        onClose={
          handleCloseSummary
        }
        onDelete={
          handleDeleteFromSummary
        }
      />

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
        isDeleting={isDeleting}
      />
    </LayoutScreen>
  );
}