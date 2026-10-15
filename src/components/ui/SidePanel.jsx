import { X } from "lucide-react"

function SidePanel({
  open,
  onClose,
  title,
  subtitle,
  children,
}) {
  if (!open) {
    return null
  }

  return (
    <div
      className="panel-overlay"
      onClick={onClose}
    >

      <aside
        className="side-panel"
        onClick={(event) =>
          event.stopPropagation()
        }
      >

        <div className="panel-header">

          <div>
            <h2>{title}</h2>

            {subtitle && (
              <p>{subtitle}</p>
            )}
          </div>

          <button
            className="close-btn"
            onClick={onClose}
          >
            <X size={18} />
          </button>

        </div>

        <div className="panel-content">
          {children}
        </div>

      </aside>

    </div>
  )
}

export default SidePanel