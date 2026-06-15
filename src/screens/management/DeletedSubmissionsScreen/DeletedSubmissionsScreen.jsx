import React, { useState } from "react";

import LayoutScreen from "../../../layout";

import DeletedSubmissionsTable from "./Components/DeletedSubmissionsTable";
import SubmissionSummaryModal from "./Components/SubmissionSummaryModal";
import DeleteSubmissionModal from "./Components/DeleteSubmissionModal";

import deletedSubmissionsMock from "./data";
import styles from "./styles";

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
  const [submissions, setSubmissions] = useState(
    deletedSubmissionsMock
  );

  const [
    selectedSubmission,
    setSelectedSubmission,
  ] = useState(null);

  const [
    submissionToDelete,
    setSubmissionToDelete,
  ] = useState(null);

  function handleOpenSummary(submission) {
    setSelectedSubmission(submission);
  }

  function handleCloseSummary() {
    setSelectedSubmission(null);
  }

  function handleRequestDelete(submission) {
    setSubmissionToDelete(submission);
  }

  function handleCancelDelete() {
    setSubmissionToDelete(null);
  }

  function handleConfirmDelete() {
    if (!submissionToDelete) {
      return;
    }

    const submissionId =
      submissionToDelete.id;

    setSubmissions((currentSubmissions) =>
      currentSubmissions.filter(
        (submission) =>
          submission.id !== submissionId
      )
    );

    if (
      selectedSubmission?.id ===
      submissionId
    ) {
      setSelectedSubmission(null);
    }

    setSubmissionToDelete(null);
  }

  function handleDeleteFromSummary(submission) {
    setSelectedSubmission(null);
    setSubmissionToDelete(submission);
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
          onViewSummary={handleOpenSummary}
          onDelete={handleRequestDelete}
        />
      </main>

      <SubmissionSummaryModal
        submission={selectedSubmission}
        onClose={handleCloseSummary}
        onDelete={handleDeleteFromSummary}
      />

      <DeleteSubmissionModal
        submission={submissionToDelete}
        onCancel={handleCancelDelete}
        onConfirm={handleConfirmDelete}
      />
    </LayoutScreen>
  );
}