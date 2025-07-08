import { Link } from "react-router-dom";
import "../CSS/Home.css";

const Home = () => {
  return (
    <>
      <section className="hero" aria-labelledby="hero-title">
        <div className="container">
          <div className="hero-content">
            <h1 id="hero-title">
              Dome.io: <strong>AI-Powered Development & API Automation</strong>
            </h1>
            <p>
              Build the future with Dome.io's AI-driven development and API automation solutions. From intelligent applications to seamless integrations, we empower businesses to innovate, scale, and succeed.
            </p>
            <div className="hero-ctas">
              <Link to="/contact" className="but primary" title="Get Started">
                Get Started
              </Link>
              <a href="https://www.dome.io/demo" className="but secondary" title="Request a Demo">
                Request a Demo
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="combined-section" aria-labelledby="combined-title">
        <div className="container">
          <h2 id="combined-title" className="section-title">Discover Dome.io's Capabilities</h2>
          <p className="section-lead">
            Explore our AI-driven services, unique advantages, and real-world success stories that showcase how Dome.io transforms businesses.
          </p>

          {/* Services Subsection */}
          <div className="services-subsection" aria-labelledby="services-title">
            <h2 id="services-title">Our AI & Development Services</h2>
            <p className="subsection-lead">
              Leverage Dome.io's expertise in AI, API automation, and enterprise development to transform your digital ecosystem.
            </p>
            <div className="services-grid">
              <div className="service-card">
                <i className="fas fa-brain" aria-hidden="true"></i>
                <h3>AI Development</h3>
                <p>
                  Create intelligent applications with machine learning, generative AI, and predictive analytics. Our AI solutions enhance decision-making, personalize user experiences, and automate complex tasks.
                </p>
                <Link to="/services/ai" className="cta" title="Learn More About AI">
                  Learn More
                </Link>
              </div>
              <div className="service-card">
                <i className="fas fa-code-branch" aria-hidden="true"></i>
                <h3>API Automation</h3>
                <p>
                  Streamline workflows with automated API integrations, orchestration, and real-time data processing. Connect systems like CRMs, ERPs, and third-party services effortlessly.
                </p>
                <Link to="/services/api" className="cta" title="Learn More About API Automation">
                  Learn More
                </Link>
              </div>
              <div className="service-card">
                <i className="fas fa-mobile-alt" aria-hidden="true"></i>
                <h3>Mobile & Web Development</h3>
                <p>
                  Build scalable, cross-platform mobile and web applications using React, Flutter, and Node.js, optimized for performance, accessibility, and user engagement.
                </p>
                <Link to="/services/mobile-web" className="cta" title="Learn More About Mobile & Web">
                  Learn More
                </Link>
              </div>
              <div className="service-card">
                <i className="fas fa-cloud" aria-hidden="true"></i>
                <h3>Cloud & IoT Solutions</h3>
                <p>
                  Deploy cloud-native applications and IoT ecosystems with AWS, Azure, and edge computing. Our solutions ensure scalability, security, and real-time data insights.
                </p>
                <Link to="/services/cloud-iot" className="cta" title="Learn More About Cloud & IoT">
                  Learn More
                </Link>
              </div>
            </div>
          </div>

          <div className="section-divider"></div>

          {/* Benefits Subsection */}
          <div className="benefits-subsection" aria-labelledby="benefits-title">
            <h2 id="benefits-title">Why Dome.io?</h2>
            <p className="subsection-lead">
              Our AI and automation solutions deliver unparalleled value, helping you stay ahead in a digital-first world.
            </p>
            <div className="benefits-grid">
              <div className="benefit-item">
                <i className="fas fa-rocket" aria-hidden="true"></i>
                <h3>Scalability</h3>
                <p>
                  Our solutions scale seamlessly to support millions of users, high traffic, and complex workflows.
                </p>
              </div>
              <div className="benefit-item">
                <i className="fas fa-shield-alt" aria-hidden="true"></i>
                <h3>Security</h3>
                <p>
                  Industry-leading encryption, DDoS protection, and compliance ensure your data and applications are secure.
                </p>
              </div>
              <div className="benefit-item">
                <i className="fas fa-lightbulb" aria-hidden="true"></i>
                <h3>Innovation</h3>
                <p>
                  Harness AI, machine learning, and automation to drive innovation and differentiate your business.
                </p>
              </div>
              <div className="benefit-item">
                <i className="fas fa-users" aria-hidden="true"></i>
                <h3>Developer-Friendly</h3>
                <p>
                  Comprehensive SDKs, APIs, and documentation empower your developers to build faster and smarter.
                </p>
              </div>
            </div>
          </div>

          <div className="section-divider"></div>

          {/* Case Studies Subsection */}
          <div className="case-studies-subsection" aria-labelledby="case-studies-title">
            <h2 id="case-studies-title">Success Stories</h2>
            <p className="subsection-lead">
              Discover how Dome.io's AI and automation solutions have transformed businesses worldwide.
            </p>
            <div className="case-studies-grid">
              <div className="case-study">
                <h3>AI-Powered Retail</h3>
                <p>
                  Developed a generative AI chatbot for a global retailer, increasing customer engagement by 40% and reducing support costs.
                </p>
                <a href="https://www.dome.io/case-studies/retail" className="cta" title="Read Retail Case Study">
                  Read Case Study
                </a>
              </div>
              <div className="case-study">
                <h3>API-Driven Logistics</h3>
                <p>
                  Automated logistics workflows for a shipping company, integrating 20+ APIs to improve delivery times by 25%.
                </p>
                <a href="https://www.dome.io/case-studies/logistics" className="cta" title="Read Logistics Case Study">
                  Read Case Study
                </a>
              </div>
              <div className="case-study">
                <h3>Smart Healthcare IoT</h3>
                <p>
                  Built an IoT platform for a healthcare provider, connecting 10,000+ devices for real-time patient monitoring.
                </p>
                <a href="https://www.dome.io/case-studies/healthcare" className="cta" title="Read Healthcare Case Study">
                  Read Case Study
                </a>
              </div>
            </div>
          </div>

          {/* Testimonials Section */}
          <section className="testimonials-section" aria-labelledby="testimonials-title">
            <div className="container">
              <h2 id="testimonials-title">What Our Clients Say</h2>
              <div className="testimonials-grid">
                <blockquote className="testimonial">
                  <p>"Dome.io's AI solutions helped us automate our support and scale globally. The team is responsive and truly innovative."</p>
                  <footer>— Jane Smith, CTO, RetailCorp</footer>
                </blockquote>
                <blockquote className="testimonial">
                  <p>"The API automation from Dome.io cut our manual work in half. We saw ROI in just two months!"</p>
                  <footer>— Michael Lee, Operations Lead, ShipFast</footer>
                </blockquote>
                <blockquote className="testimonial">
                  <p>"Their cloud and IoT expertise enabled us to launch a new product line with confidence and speed."</p>
                  <footer>— Priya Patel, Product Manager, HealthTech</footer>
                </blockquote>
              </div>
            </div>
          </section>
        </div>
      </section>

      <section className="cta-section" aria-labelledby="cta-title">
        <div className="container">
          <h2 id="cta-title">Ready to Innovate with Dome.io?</h2>
          <p className="section-lead">
            Join thousands of developers and businesses leveraging Dome.io's AI and automation tools. Start building today!
          </p>
          <div className="jst-ctr">
            <Link to="/signup" className="but primary" title="Start for Free">
              Start for Free
            </Link>
            <a href="https://www.dome.io/docs" className="but secondary" title="Explore Developer Docs">
              Explore Developer Docs
            </a>
          </div>
        </div>
      </section>

      {/* Newsletter Signup Section */}
      <section className="newsletter-section" aria-labelledby="newsletter-title">
        <div className="container">
          <h2 id="newsletter-title">Stay Updated</h2>
          <form className="newsletter-form" onSubmit={e => {
            e.preventDefault();
            const email = e.target.elements.newsletterEmail.value;
            if (email) {
              alert(`Thank you for subscribing, ${email}!`);
              e.target.reset();
            }
          }}>
            <input
              type="email"
              name="newsletterEmail"
              placeholder="Enter your email"
              required
              aria-label="Email address"
            />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </section>

      <footer className="footer" aria-label="Footer">
        <div className="container">
          <div className="footer-grid flex jst-ctr">
            <div className="footer-column">
              <h3>Company</h3>
              <ul>
                <li><a className="down" href="https://www.dome.io/news">News</a></li>
                <li><a className="down" href="https://www.dome.io/careers">Careers</a></li>
                <li><Link className="down" to="/contact">Contact</Link></li>
              </ul>
            </div>
            <div className="footer-column">
              <h3>Products</h3>
              <ul>
                <li><a className="down" href="https://www.dome.io/ai">Dome.io AI</a></li>
                <li><a className="down" href="https://www.dome.io/api">API Automation</a></li>
                <li><a className="down" href="https://www.dome.io/cloud">Cloud & IoT</a></li>
              </ul>
            </div>
            <div className="footer-column">
              <h3>Resources</h3>
              <ul>
                <li><a className="down" href="https://www.dome.io/docs">Developer Docs</a></li>
                <li><a className="down" href="https://www.dome.io/community">Community</a></li>
                <li><a className="down" href="https://www.dome.io/support">Support</a></li>
              </ul>
            </div>
            <div className="footer-column">
              <h3>Social</h3>
              <ul className="social-links">
                <li className="social-item">
                  <a href="https://www.linkedin.com/company/dome-io" className="social-link" aria-label="LinkedIn">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </li>
                <li className="social-item">
                  <a href="https://www.facebook.com/dome.io" className="social-link" aria-label="Facebook">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li className="social-item">
                  <a href="https://twitter.com/dome_io" className="social-link" aria-label="Twitter">
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
                <li className="social-item">
                  <a href="https://github.com/dome-io" className="social-link" aria-label="GitHub">
                    <i className="fab fa-github"></i>
                  </a>
                </li>
                <li className="social-item">
                  <a href="https://www.youtube.com/c/domeio" className="social-link" aria-label="YouTube">
                    <i className="fab fa-youtube"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>
              Contact our sales team at <a href="mailto:sales@dome.io">sales@dome.io</a> or support at <a href="mailto:support@dome.io">support@dome.io</a>.
            </p>
            <p>© 2025 Dome.io. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Home;