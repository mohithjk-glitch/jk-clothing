export default function Rating({ rating, reviews, showCount = true }) {
  const full = Math.round(rating);
  return (
    <span className="stars">
      <span className="star-icons" aria-hidden="true">
        {'★'.repeat(full)}
        {'☆'.repeat(5 - full)}
      </span>
      <span>{rating.toFixed(1)}{showCount && reviews != null ? ` (${reviews})` : ''}</span>
    </span>
  );
}
