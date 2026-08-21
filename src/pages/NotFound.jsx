import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="container notfound">
      <span className="nf-code">404</span>
      <h1>This page stepped out of the collection.</h1>
      <p>The page you're looking for doesn't exist or may have moved.</p>
      <Link to="/" className="btn btn-primary">Back to Home</Link>
    </div>
  );
}
