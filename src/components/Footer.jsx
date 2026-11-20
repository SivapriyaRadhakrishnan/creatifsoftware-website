
function InstagramIcon() {
  return <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg>;
}

function LinkedinIcon() {
  return <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M5 3a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM3.5 9h3v12h-3V9Zm5 0h2.9v1.65h.04C11.85 9.7 13.1 8.7 15 8.7c3.2 0 3.8 2.1 3.8 4.9V21h-3v-6.55c0-1.55-.03-3.55-2.15-3.55-2.15 0-2.48 1.68-2.48 3.43V21h-3V9Z"/></svg>;
}

function FacebookIcon() {
  return <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M13.5 21v-8.2h2.8l.4-3.2h-3.2V7.6c0-.9.3-1.5 1.6-1.5h1.7V3.2c-.3 0-1.4-.1-2.6-.1-2.7 0-4.5 1.6-4.5 4.7v1.8H6.9v3.2h2.8V21h3.8Z"/></svg>;
}

function ArrowIcon() {
  return <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17 17 7M7 7h10v10"/></svg>;
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container">

        <div className="footer-content">

          <div className="footer-brand">
            <img src="/creatif-logo.png" alt="Creatif Software Solutions" />
            <p>
              Building smart software solutions that
              simplify business operations and drive growth.
            </p>
          </div>

          <div className="footer-links">
            <h4>Quick Links</h4>
            <a href="/home">Home</a>
            <a href="/about">About Us</a>
            <a href="/contact">Contact</a>
          </div>

          <div className="footer-links">
            <h4>Our Solutions</h4>
            <a href="/services/crm">CRM Software</a>
            <a href="/services/erp">ERP Software</a>
            <a href="/services/flexflow-ai">Flexflow Ai</a>
            <a href="/services/kinetix-payroll">Kinetix Payroll</a>
            <a href="/services/ai-chatbot">Ai Chatbot</a>
          </div>

          {/* ADDRESS - FOURTH COLUMN */}
          <div className="footer-links footer-address">
            <h4>Address</h4>
            <p>
              First Floor, CIASL Business Centre,
              CIAL Aero Park
            </p>

            <h4 className="footer-contact-heading">Contact Us</h4>
            <a href="mailto:creatifdigitalsolution@gmail.com">
              creatifdigitalsolution@gmail.com
            </a>
            <a href="tel:+9072272293">+9072272293</a>
          </div>

          {/* GET IN TOUCH - FIFTH COLUMN */}
          <div className="footer-links footer-touch">
            <h4>Get In Touch</h4>

            <a href="/contact">
              Let's Talk <ArrowIcon />
            </a>

            <div className="footer-socials">
              <a href="https://www.instagram.com/creatif.software.solutions/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <InstagramIcon />
              </a>

              <a href="https://www.linkedin.com/in/creatif-group-of-companies-967ab73bb/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <LinkedinIcon />
              </a>

              <a href="https://www.facebook.com/creatifbusinesssolutions" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <FacebookIcon />
              </a>
            </div>
          </div>

        </div>

        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} Creatif Software Solutions.
            All rights reserved.
          </p>
          <p>Designed to make business smarter.</p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
