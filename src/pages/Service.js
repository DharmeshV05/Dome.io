import { Link } from "react-router-dom";
import "../CSS/Service.css";

const services = [
  {
    id: "ai",
    icon: "fas fa-brain",
    title: "AI Development",
    description: "Create intelligent applications with machine learning, generative AI, and predictive analytics to enhance decision-making and automate tasks.",
    link: "/services/ai",
  },
  {
    id: "api",
    icon: "fas fa-code-branch",
    title: "API Automation",
    description: "Streamline workflows with automated API integrations, orchestration, and real-time data processing for seamless system connectivity.",
    link: "/services/api",
  },
  {
    id: "mobile-web",
    icon: "fas fa-mobile-alt",
    title: "Mobile & Web Development",
    description: "Build scalable, cross-platform mobile and web applications using React, Flutter, and Node.js, optimized for performance and accessibility.",
    link: "/services/mobile-web",
  },
  {
    id: "cloud-iot",
    icon: "fas fa-cloud",
    title: "Cloud & IoT Solutions",
    description: "Deploy cloud-native applications and IoT ecosystems with AWS, Azure, and edge computing for scalability and real-time insights.",
    link: "/services/cloud-iot",
  },
];

function Service() {
  return (
    <section className="container" aria-labelledby="services-title">
      <h2 id="services-title" className="title">Our Services</h2>
      <p className="section-lead">
        Discover Dome.io's comprehensive suite of AI-driven development and automation services designed to empower your business.
      </p>
      <div className="services-grid">
        {services.map((service) => (
          <div key={service.id} className={`service service-${service.id}`}>
            <i className={service.icon} aria-hidden="true" />
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <Link to={service.link} className="cta" aria-label={`Read more about ${service.title}`}>
              Read More <i className="fas fa-angle-right" aria-hidden="true" />
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Service;