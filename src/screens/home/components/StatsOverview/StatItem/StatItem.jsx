
function formatValue(value) {
  if (value === null || value === undefined) return "--";

  if (typeof value === "number") {
    return new Intl.NumberFormat("es-MX").format(value);
  }

  return value;
}

export default function StatItem({
  label,
  value,
  helper,
  tone = "default",
}) {
  const valueColor =
    tone === "danger" ? "text-red-600" : "text-neutral-950";

  return (
    <article className="flex min-h-[160px] items-center rounded-2xl border border-neutral-300 bg-white px-6 py-5">
      <div className={`mr-5 text-6xl font-bold leading-none tracking-tight ${valueColor}`}>
        {formatValue(value)}
      </div>

      <div className="flex flex-col">
        <p className="text-2xl font-medium leading-snug text-neutral-800">
          {label}
        </p>

        {helper ? (
          <p className="mt-2 text-sm text-neutral-500">
            {helper}
          </p>
        ) : null}
      </div>
    </article>
  );
}