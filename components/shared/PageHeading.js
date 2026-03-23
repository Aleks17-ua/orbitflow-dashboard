export default function PageHeading({ eyebrow, title, description, actions }) {
  return (
    <div className="page-heading">
      <div>
        {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
        <h2>{title}</h2>
        {description ? <p className="muted">{description}</p> : null}
      </div>
      {actions ? <div className="page-heading__actions">{actions}</div> : null}
    </div>
  );
}
