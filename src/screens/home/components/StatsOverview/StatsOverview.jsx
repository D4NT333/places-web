import StatItem from "./StatItem";

export default function StatsOverview({ stats = [] }) {
  return (
    <section className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
      {stats.map((stat) => (
        <StatItem
          key={stat.id}
          label={stat.label}
          value={stat.value}
          helper={stat.helper}
          tone={stat.tone}
        />
      ))}
    </section>
  );
}