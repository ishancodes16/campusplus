import Button from './Button'

export default function EmptyState({
  title,
  body,
  actionLabel,
  actionTo,
}) {
  return (
    <div className="state-block state-empty">
      <p className="state-kicker">Nothing here yet</p>
      <h2 className="state-title">{title}</h2>
      <p className="state-body">{body}</p>
      {actionLabel && actionTo ? (
        <Button to={actionTo} variant="secondary">
          {actionLabel}
        </Button>
      ) : null}
    </div>
  )
}
