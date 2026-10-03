import Button from './Button'

export default function ErrorState({
  title = 'Something went off track',
  body = 'The page could not be loaded. Try again, or return to the dashboard.',
  actionLabel = 'Back to dashboard',
  actionTo = '/dashboard',
}) {
  return (
    <div className="state-block state-error" role="alert">
      <p className="state-kicker">Unable to continue</p>
      <h2 className="state-title">{title}</h2>
      <p className="state-body">{body}</p>
      <Button to={actionTo} variant="secondary">
        {actionLabel}
      </Button>
    </div>
  )
}
