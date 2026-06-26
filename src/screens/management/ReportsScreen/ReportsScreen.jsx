import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

import LayoutScreen from "../../../layout";

import styles from "./styles";

import {
  ReportFilters,
  ReportStats,
  ReportsTable,
} from "./Components";

import {
  mockReports,
  REPORT_STATUS_FILTERS,
} from "./data";

const PAGE_LIMIT = 15;

const breadcrumbs = [
  {
    label: "Inicio",
    to: "/",
  },
  {
    label: "Reportes",
  },
];

export default function ReportsScreen() {
  const navigate = useNavigate();

  const [selectedStatus, setSelectedStatus] = useState("all");

  const filteredReports = useMemo(() => {
    if (selectedStatus === "all") {
      return mockReports;
    }

    return mockReports.filter(
      (report) => report.status === selectedStatus
    );
  }, [selectedStatus]);

  const loadedBatches =
    filteredReports.length > 0
      ? Math.ceil(filteredReports.length / PAGE_LIMIT)
      : 0;

  function handleOpenReport(report) {
    navigate(`/reports/${report.id}`, {
      state: {
        report,
        selectedStatus,
      },
    });
  }

  return (
    <LayoutScreen breadcrumbs={breadcrumbs}>
      <div style={styles.container}>
        <div style={styles.header}>
          <div>
            <h1 style={styles.title}>
              Reportes
            </h1>

            <p style={styles.subtitle}>
              Gestiona reportes enviados por usuarios sobre el sistema,
              lugares y perfiles.
            </p>

            <ReportStats
              reportsCount={filteredReports.length}
              batchesCount={loadedBatches}
            />
          </div>

          <ReportFilters
            filters={REPORT_STATUS_FILTERS}
            selectedStatus={selectedStatus}
            onChangeStatus={setSelectedStatus}
          />
        </div>

        <ReportsTable
          reports={filteredReports}
          onOpenReport={handleOpenReport}
        />
      </div>
    </LayoutScreen>
  );
}