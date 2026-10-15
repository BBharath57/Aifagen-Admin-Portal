function StatCard({
  title,
  value,
  change,
  icon: Icon,
  positive = true,
}) {
  return (
    <div className="stat-card">

      <div className="stat-top">

        <span>{title}</span>

        <div className="stat-icon">
          <Icon size={17} />
        </div>

      </div>

      <h2>{value}</h2>

      <p className={positive ? "stat-change positive" : "stat-change negative"}>
        {positive ? "↗" : "↘"} {change}
      </p>

    </div>
  )
}

export default StatCard