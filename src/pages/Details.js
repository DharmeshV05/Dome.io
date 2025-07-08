import "../CSS/About.css"; // Adjust the path as necessary

function Details() {
  return (
    <section id="about" className="section" aria-labelledby="about-title">
      <div className="container">
        <h2 id="about-title" className="title">About Dome.io</h2>
        <p>
          Dome.io provides cutting-edge CDN services, DDoS mitigation, and Internet security solutions.
        </p>
        <p>
          Founded in 2009, Dome.io has grown to serve millions with offices in San Francisco, London, and Singapore.
        </p>
      </div>
    </section>
  );
}

export default Details;