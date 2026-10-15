function Badge({ children, type = "default" }) {
  return (
    <span className={`badge badge-${type.toLowerCase().replace(" ", "-")}`}>
      {children}
    </span>
  )
}

export default Badge