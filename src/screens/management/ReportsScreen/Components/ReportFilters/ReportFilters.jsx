import styles from "./styles";

export default function ReportFilters({
  filters,
  selectedStatus,
  onChangeStatus,
}) {
  return (
    <div style={styles.container}>
      {filters.map((filter) => {
        const isActive =
          selectedStatus === filter.id;

        return (
          <button
            key={filter.id}
            type="button"
            style={{
              ...styles.filterButton,
              ...(isActive
                ? styles.filterButtonActive
                : {}),
            }}
            onClick={() =>
              onChangeStatus(filter.id)
            }
          >
            {filter.label}
          </button>
        );
      })}
    </div>
  );
}