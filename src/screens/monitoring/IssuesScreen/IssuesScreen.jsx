import React, {
  useMemo,
  useState,
} from "react";

import LayoutScreen from "../../../layout";

import IssueStats from "./Components/IssueStats";
import IssueFilters from "./Components/IssueFilters";
import IssuesTable from "./Components/IssuesTable";
import IssueDetailModal from "./Components/IssueDetailModal";

import {
  ISSUE_CATEGORY_FILTERS,
  ISSUE_LEVEL_FILTERS,
  ISSUE_PERIOD_FILTERS,
  ISSUE_PROJECT_FILTERS,
  ISSUE_STATUS_FILTERS,
  issueStats,
  issuesData,
} from "./data";

import styles from "./styles";

const breadcrumbs = [
  {
    label: "Inicio",
    to: "/",
  },
  {
    label: "Incidencias",
  },
];

export default function IssuesScreen() {
  const [
    selectedProject,
    setSelectedProject,
  ] = useState("all");

  const [
    selectedCategory,
    setSelectedCategory,
  ] = useState("all");

  const [
    selectedLevel,
    setSelectedLevel,
  ] = useState("all");

  const [
    selectedStatus,
    setSelectedStatus,
  ] = useState("all");

  const [
    selectedPeriod,
    setSelectedPeriod,
  ] = useState("7d");

  const [
    selectedIssue,
    setSelectedIssue,
  ] = useState(null);

  const filteredIssues = useMemo(() => {
    return issuesData.filter((issue) => {
      const matchesProject =
        selectedProject === "all" ||
        issue.projectId === selectedProject;

      const matchesCategory =
        selectedCategory === "all" ||
        issue.category === selectedCategory;

      const matchesLevel =
        selectedLevel === "all" ||
        issue.level === selectedLevel;

      const matchesStatus =
        selectedStatus === "all" ||
        issue.status === selectedStatus;

      /*
       * Por ahora este filtro solo forma parte de la UI.
       * Cuando se conecte Sentry, el periodo se enviará
       * al backend para consultar el rango seleccionado.
       */
      const matchesPeriod =
        Boolean(selectedPeriod);

      return (
        matchesProject &&
        matchesCategory &&
        matchesLevel &&
        matchesStatus &&
        matchesPeriod
      );
    });
  }, [
    selectedProject,
    selectedCategory,
    selectedLevel,
    selectedStatus,
    selectedPeriod,
  ]);

  function handleClearFilters() {
    setSelectedProject("all");
    setSelectedCategory("all");
    setSelectedLevel("all");
    setSelectedStatus("all");
    setSelectedPeriod("7d");
  }

  function handleOpenIssue(issue) {
    setSelectedIssue(issue);
  }

  function handleCloseIssue() {
    setSelectedIssue(null);
  }

  return (
    <LayoutScreen
      padding="0"
      showFooter={false}
      breadcrumbs={breadcrumbs}
    >
      <div style={styles.container}>
        <header style={styles.header}>
          <p style={styles.sectionLabel}>
            MONITOREO
          </p>

          <h1 style={styles.title}>
            Incidencias
          </h1>

          <p style={styles.description}>
            Consulta los errores y problemas técnicos detectados en
            la aplicación móvil, el panel web y el backend de
            Lsearch.
          </p>
        </header>

        <IssueStats
          stats={issueStats}
        />

        <IssueFilters
          project={selectedProject}
          category={selectedCategory}
          level={selectedLevel}
          status={selectedStatus}
          period={selectedPeriod}

          projectOptions={ISSUE_PROJECT_FILTERS}
          categoryOptions={ISSUE_CATEGORY_FILTERS}
          levelOptions={ISSUE_LEVEL_FILTERS}
          statusOptions={ISSUE_STATUS_FILTERS}
          periodOptions={ISSUE_PERIOD_FILTERS}

          onChangeProject={setSelectedProject}
          onChangeCategory={setSelectedCategory}
          onChangeLevel={setSelectedLevel}
          onChangeStatus={setSelectedStatus}
          onChangePeriod={setSelectedPeriod}
          onClearFilters={handleClearFilters}
        />

        <IssuesTable
          issues={filteredIssues}
          onOpenIssue={handleOpenIssue}
        />
      </div>

      <IssueDetailModal
        isOpen={Boolean(selectedIssue)}
        issue={selectedIssue}
        onClose={handleCloseIssue}
      />
    </LayoutScreen>
  );
}