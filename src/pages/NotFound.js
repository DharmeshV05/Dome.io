import "../CSS/NotFound.css"; // Adjust the path as necessary

const NotFound = () => (
  <main className="container">
    <section className="not-found" aria-labelledby="not-found-title">
      <h2 id="not-found-title">404 - Page Not Found</h2>
      <p>Sorry, the page you're looking for doesn't exist.</p>
    </section>
  </main>
);

export default NotFound;