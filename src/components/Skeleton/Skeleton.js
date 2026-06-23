import './Skeleton.css';

export default function Skeleton() {
  return (
    <div className="skeleton-card">
      <div className="skeleton-header">
        <div className="skeleton-avatar" />
        <div className="skeleton-lines">
          <div className="skeleton-line skeleton-line--short" />
          <div className="skeleton-line skeleton-line--shorter" />
        </div>
      </div>
      <div className="skeleton-image" />
      <div className="skeleton-body">
        <div className="skeleton-line skeleton-line--long" />
        <div className="skeleton-line skeleton-line--medium" />
        <div className="skeleton-tags">
          <div className="skeleton-tag" />
          <div className="skeleton-tag" />
          <div className="skeleton-tag" />
        </div>
      </div>
    </div>
  );
}
