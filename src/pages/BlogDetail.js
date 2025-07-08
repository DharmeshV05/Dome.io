import { useParams, Link } from "react-router-dom";

const demoWorks = [
  {
    id: "ai-demo",
    icon: "fas fa-brain",
    title: "AI-Powered Customer Support Chatbot",
    service: "AI Development",
    description:
      "Dome.io developed an intelligent chatbot for a retail e-commerce platform to enhance customer support. The chatbot uses natural language processing (NLP) to handle customer inquiries, provide product recommendations, and resolve issues in real-time, reducing support ticket volume by 40%.",
    technologies: ["OpenAI GPT-4", "React", "Node.js", "AWS Lambda"],
    outcomes: [
      "40% reduction in support ticket volume",
      "25% increase in customer satisfaction scores",
      "24/7 availability with 95% query resolution accuracy",
    ],
  },
  {
    id: "api-demo",
    icon: "fas fa-code-branch",
    title: "Automated Inventory Sync API",
    service: "API Automation",
    description:
      "For a logistics company, Dome.io built an API automation system to synchronize inventory across multiple warehouses in real-time. The system integrates with third-party ERP platforms, automating stock updates and reducing manual errors by 50%.",
    technologies: ["MuleSoft", "REST APIs", "MongoDB", "Zapier"],
    outcomes: [
      "50% reduction in manual inventory errors",
      "Real-time stock updates across 10 warehouses",
      "30% faster order processing times",
    ],
  },
  {
    id: "mobile-web-demo",
    icon: "fas fa-mobile-alt",
    title: "Cross-Platform Fitness App",
    service: "Mobile & Web Development",
    description:
      "Dome.io created a cross-platform fitness app for a wellness startup, featuring personalized workout plans and real-time progress tracking. Built with React Native, the app ensures seamless performance on iOS and Android, increasing user engagement by 35%.",
    technologies: ["React Native", "Firebase", "GraphQL", "Figma"],
    outcomes: [
      "35% increase in user engagement",
      "Cross-platform compatibility with 99% uptime",
      "10,000+ active users within 3 months",
    ],
  },
  {
    id: "cloud-iot-demo",
    icon: "fas fa-cloud",
    title: "Smart Home IoT Ecosystem",
    service: "Cloud & IoT Solutions",
    description:
      "Dome.io designed a cloud-based IoT solution for a smart home provider, integrating devices like thermostats and lights with a central AWS IoT hub. The system enables real-time control via a mobile app, reducing energy consumption by 20%.",
    technologies: ["AWS IoT Core", "MQTT", "React", "Raspberry Pi"],
    outcomes: [
      "20% reduction in energy consumption",
      "99.9% system reliability for 5,000+ devices",
      "15% increase in user adoption rates",
    ],
  },
];

function BlogDetail() {
  const { id } = useParams();
  const demo = demoWorks.find((d) => d.id === id);

  if (!demo) {
    return (
      <main className="container">
        <h2>Blog Post Not Found</h2>
        <Link to="/blog">Back to Blog</Link>
      </main>
    );
  }

  return (
    <main className="container blog-detail" aria-labelledby="blog-detail-title">
      <Link to="/blog" className="back-link">&larr; Back to Blog</Link>
      <article>
        <h2 id="blog-detail-title">
          <i className={demo.icon} aria-hidden="true" /> {demo.title}
        </h2>
        <p className="demo-service">Service: {demo.service}</p>
        <p>{demo.description}</p>
        <div className="demo-details">
          <h4>Technologies Used:</h4>
          <ul>
            {demo.technologies.map((tech, idx) => (
              <li key={idx}>{tech}</li>
            ))}
          </ul>
          <h4>Outcomes:</h4>
          <ul>
            {demo.outcomes.map((outcome, idx) => (
              <li key={idx}>{outcome}</li>
            ))}
          </ul>
        </div>
      </article>
    </main>
  );
}

export default BlogDetail; 