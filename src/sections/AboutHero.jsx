
import { motion } from "framer-motion";
import "./AboutHero.css";

function AboutHero() {
  return (
    <section className="about-hero">

      <div className="about-hero-glow" />

      <div className="about-hero-content">

        <motion.div
          className="about-hero-label"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span />
          ABOUT CREATIF
          <span />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15 }}
        >
          Smart Software.
          <br />
          <span>Smarter Business.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
        >
          Creatif Digital Solutions builds practical software
          solutions that simplify everyday business operations,
          connect teams, and help businesses work smarter
          and grow with confidence.
        </motion.p>

        <motion.div
          className="about-hero-tagline"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.55 }}
        >
          Building Smarter Businesses Through Technology
        </motion.div>

      </div>

    </section>
  );
}

export default AboutHero;
