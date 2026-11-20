
import { motion } from "framer-motion";
import {
  CheckCircle2,
  ArrowUpRight,
  Sparkles
} from "lucide-react";

import Container from "../components/Container";

const benefits = [
  "All-in-one business management",
  "Simplified and automated workflows",
  "Real-time business insights",
  "Technology that grows with your business"
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15
    }
  }
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 30
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

function WhyCreatif() {
  return (
    <section className="why-section" id="why-creatif">

      <Container>

        <div className="why-layout">

          {/* LEFT IMAGE */}

          <motion.div
            className="why-visual"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.9,
              ease: "easeOut"
            }}
          >

            <div className="why-image-glow" />

            <motion.div
              className="why-image-frame"
              animate={{
                y: [0, -10, 0]
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >

              <img
                src="/images/why-creatif.png"
                alt="Creatif connected software ecosystem"
                className="why-image"
              />

            </motion.div>

            <div className="why-image-overlay" />

            <div className="why-floating-label">
              <Sparkles size={15} />
              <span>One Connected Ecosystem</span>
            </div>

          </motion.div>


          {/* RIGHT CONTENT */}

          <motion.div
            className="why-content"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >

            {/* Label */}

            <motion.div
              className="why-label"
              variants={itemVariants}
            >
              <span className="why-label-line" />
              WHY CREATIF
              <span className="why-label-line" />
            </motion.div>


            {/* Heading */}

            <motion.h2 variants={itemVariants}>
              Smart Solutions.
              <br />
              <span>Stronger Businesses.</span>
            </motion.h2>


            {/* Description */}

            <motion.p
              className="why-description"
              variants={itemVariants}
            >
              From customer management to payroll and
              AI-powered automation, Creatif brings your
              essential business operations together in
              one connected ecosystem.
            </motion.p>


            {/* Benefits */}

            <motion.div
              className="why-benefits"
              variants={containerVariants}
            >

              {benefits.map((benefit) => (
                <motion.div
                  className="why-benefit"
                  key={benefit}
                  variants={itemVariants}
                >

                  <CheckCircle2
                    size={19}
                    strokeWidth={2}
                  />

                  <span>{benefit}</span>

                </motion.div>
              ))}

            </motion.div>


            {/* CTA */}

            <motion.a
              href="/contact"
              className="why-button"
              variants={itemVariants}
              whileHover={{
                y: -4,
                boxShadow: "0 12px 30px rgba(237,27,47,0.3)"
              }}
              whileTap={{ scale: 0.97 }}
            >
              Explore Our Platform

              <ArrowUpRight size={19} />

            </motion.a>


            {/* Small supporting text */}

            <motion.div
              className="why-note"
              variants={itemVariants}
            >
              <span className="why-status-dot" />
              <span>Built for smarter business operations</span>
            </motion.div>

          </motion.div>

        </div>

      </Container>

    </section>
  );
}

export default WhyCreatif;
