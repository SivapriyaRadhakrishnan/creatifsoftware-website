
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  CheckCircle2,
  Lightbulb,
  Target,
  Users,
} from "lucide-react";

import "./AboutStory.css";

function AboutStory() {
  const highlights = [
    "Practical software built around business needs",
    "Connected systems for smoother operations",
    "Technology designed for long-term growth",
  ];

  return (
    <section className="about-story">

      <div className="about-story-container">

        {/* LEFT CONTENT */}
        <motion.div
          className="about-story-content"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >

          <span className="about-story-label">
            OUR STORY
          </span>

          <h2>
            Turning Business
            <br />
            Challenges Into
            <span> Smart Solutions.</span>
          </h2>

          <p className="about-story-intro">
            At Creatif Digital Solutions, we believe technology
            should make business simpler, smarter, and more
            efficient.
          </p>

          <p className="about-story-description">
            We develop practical software solutions that help
            businesses manage their everyday operations,
            connect their teams, and improve the way they work.
            From customer management and business automation
            to intelligent AI-powered solutions, our goal is
            to bring essential business processes together
            through technology.
          </p>

          <div className="about-story-highlights">
            {highlights.map((item, index) => (
              <div className="about-story-highlight" key={index}>
                <CheckCircle2 size={19} />
                <span>{item}</span>
              </div>
            ))}
          </div>

          <a href="/contact" className="about-story-button">
            Let's Work Together
            <ArrowUpRight size={18} />
          </a>

        </motion.div>

        {/* RIGHT VISUAL */}
        <motion.div
          className="about-story-visual"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.9 }}
        >

          <div className="story-visual-glow" />

          <div className="story-visual-top">
            <span className="story-dot red" />
            <span className="story-dot yellow" />
            <span className="story-dot green" />
            <span className="story-visual-title">
              Creatif Ecosystem
            </span>
          </div>

          <div className="story-center">

            <div className="story-center-orbit orbit-one" />
            <div className="story-center-orbit orbit-two" />

            <div className="story-logo-circle">
              <span>C</span>
            </div>

            <h3>CREATIF</h3>
            <p>SOFTWARE SOLUTIONS</p>

          </div>

          <div className="story-floating-card story-card-one">
            <div className="story-card-icon">
              <Users size={22} />
            </div>
            <div>
              <strong>Business Management</strong>
              <span>Connected operations</span>
            </div>
          </div>

          <div className="story-floating-card story-card-two">
            <div className="story-card-icon">
              <Lightbulb size={22} />
            </div>
            <div>
              <strong>Smart Innovation</strong>
              <span>Technology that works</span>
            </div>
          </div>

          <div className="story-floating-card story-card-three">
            <div className="story-card-icon">
              <Target size={22} />
            </div>
            <div>
              <strong>Business Growth</strong>
              <span>Built for the future</span>
            </div>
          </div>

          <div className="story-visual-bottom">
            <span className="story-status-dot" />
            Connecting Technology With Business
          </div>

        </motion.div>

      </div>

    </section>
  );
}

export default AboutStory;
