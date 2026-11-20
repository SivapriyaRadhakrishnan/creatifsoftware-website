
import { motion } from "framer-motion";
import "./FounderMessage.css";

function FounderMessage() {
  return (
    <section className="founder-message">
      <div className="founder-message-container">

        <motion.div
          className="founder-image"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="/images/team/raziq-founder.jpeg"
            alt="Founder of Creatif Digital Solutions"
          />
        </motion.div>

        <motion.div
          className="founder-content"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="founder-label">
            A MESSAGE FROM OUR FOUNDER
          </span>

          <div className="founder-quote-mark">“</div>

          <h2>
            Great ideas become
            <span> great businesses </span>
            when technology meets vision.
          </h2>

          <p className="founder-quote">
            "Our vision is to make technology simple,
            accessible and meaningful for every business.
            At Creatif, we believe in creating solutions
            that help businesses grow and move forward."
          </p>

          <div className="founder-details">
            <h3>Founder Name</h3>
            <p>Founder & CEO — Creatif Digital Solutions</p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default FounderMessage;
