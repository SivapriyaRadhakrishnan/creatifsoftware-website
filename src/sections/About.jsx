
import { motion } from "framer-motion";
import { Sparkles, ArrowUpRight } from "lucide-react";

import Container from "../components/Container";

const features = [
  {
    title: "Smart Automation",
    color: "#ff8a00"
  },
  {
    title: "AI Content Assistant",
    color: "#a855f7"
  },
  {
    title: "Intelligent Insights",
    color: "#10b981"
  },
  {
    title: "Faster Decisions",
    color: "#087cff"
  },
  {
    title: "Workflow Automation",
    color: "#ff302b"
  },
  {
    title: "AI-Powered Analytics",
    color: "#eab308"
  },
  {
    title: "Task Management",
    color: "#e000d5"
  }
];

const headingVariants = {
  hidden: {
    opacity: 0,
    y: 35
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

function About() {
  return (
    <section className="about-section" id="about">

      {/* Perspective background */}
      <div className="about-floor">
        <div className="floor-grid" />
        <div className="floor-glow" />
      </div>

      <Container>

        <div className="about-content">

          {/* Section label */}
          <motion.div
            className="about-label"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="label-line" />
            <span>About Us</span>
            <span className="label-line" />
          </motion.div>

          {/* Main heading */}
          <motion.h2
            variants={headingVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
          >
            We create powerful software solutions that help
            businesses work smarter, faster, and more
            efficiently.
          </motion.h2>

          {/* About button */}
          <motion.a
            href="/about"
            className="about-button"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            More About Us
            <ArrowUpRight size={21} />
          </motion.a>

          {/* Feature badges */}
          <motion.div
            className="about-features"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.1
                }
              }
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >

            {features.map((feature) => (
              <motion.div
                className="about-feature"
                key={feature.title}
                variants={{
                  hidden: {
                    opacity: 0,
                    y: 25,
                    scale: 0.95
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: {
                      duration: 0.5
                    }
                  }
                }}
                whileHover={{
                  y: -5,
                  transition: { duration: 0.2 }
                }}
              >

                <Sparkles
                  size={19}
                  fill={feature.color}
                  color={feature.color}
                  strokeWidth={1.5}
                />

                <span>{feature.title}</span>

              </motion.div>
            ))}

          </motion.div>

        </div>

      </Container>

      {/* Decorative floor lines */}
      <div className="about-floor-frame">
        <div className="floor-frame-left" />
        <div className="floor-frame-right" />
        <div className="floor-frame-bottom" />
      </div>

    </section>
  );
}

export default About;
