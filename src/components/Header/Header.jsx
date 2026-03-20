export default function Header({ onToggleSidebar }) {
  return (
    <div
      style={{
        height: "72px",
        background: "#f8f8f8",
        borderBottom: "1px solid #d9d9d9",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 1rem",
        boxSizing: "border-box",
      }}
    >
      <button
        onClick={onToggleSidebar}
        style={{
          border: "1px solid #bdbdbd",
          background: "#fff",
          borderRadius: "10px",
          width: "44px",
          height: "44px",
          cursor: "pointer",
          fontSize: "1.2rem",
        }}
      >
        ☰
      </button>

      <div style={{ display: "flex", alignItems: "center", gap: "0.8rem" }}>
        <span style={{ fontWeight: 600, color: "#444" }}>Usuario</span>

        <div
          style={{
            width: "42px",
            height: "42px",
            borderRadius: "50%",
            border: "1px solid #bdbdbd",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "#fff",
            fontSize: "0.8rem",
            color: "#666",
          }}
        >
          Foto
        </div>
      </div>
    </div>
  );
}