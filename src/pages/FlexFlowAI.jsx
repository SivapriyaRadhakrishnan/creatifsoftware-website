
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import {
  ArrowRight,
  Workflow,
  Bot,
  Zap,
  Clock,
  BarChart3,
  CheckCircle2,
  Settings,
  Bell,
  RefreshCw,
  Database,
} from "lucide-react";

import "./FlexFlowAI.css";

// FEATURES
const features = [
  {
    icon: Workflow,
    title: "Workflow Automation",
    description:
      "Automate repetitive business processes and make everyday tasks easier to manage.",
  },
  {
    icon: Bot,
    title: "AI-Powered Assistance",
    description:
      "Use intelligent assistance to support daily business activities and workflows.",
  },
  {
    icon: RefreshCw,
    title: "Process Integration",
    description:
      "Connect your business tools and simplify information flow between different processes.",
  },
  {
    icon: Bell,
    title: "Smart Notifications",
    description:
      "Stay informed with timely updates, reminders and workflow notifications.",
  },
  {
    icon: Database,
    title: "Centralized Information",
    description:
      "Keep important workflow data and activity records organized in one place.",
  },
  {
    icon: BarChart3,
    title: "Performance Insights",
    description:
      "Monitor workflow activity and understand how your business processes are performing.",
  },
];

// BENEFITS
const benefits = [
  "Automate repetitive everyday business tasks",
  "Reduce manual work and save valuable time",
  "Connect workflows across your business",
  "Improve team productivity and coordination",
  "Monitor activities with clear performance insights",
];

// ANIMATION VARIANTS
const revealUp = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const revealLeft = {
  hidden: {
    opacity: 0,
    x: -45,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const revealRight = {
  hidden: {
    opacity: 0,
    x: 45,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

// STAGGER ANIMATION
const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

// CHILD ANIMATION
const revealChild = {
  hidden: {
    opacity: 0,
    y: 25,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

// SCROLL SETTINGS
const revealProps = {
  initial: "hidden",
  whileInView: "visible",
  viewport: {
    once: true,
    amount: 0.2,
  },
};

function FlexFlowAI() {
  return (
    <main className="flexflow-page">

      {/* HERO */}
      <section className="flexflow-hero">
        <div className="flexflow-hero-glow"></div>

        <div className="flexflow-container flexflow-hero-grid">

          {/* HERO CONTENT */}
          <motion.div
            className="flexflow-hero-content"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.span
              className="flexflow-eyebrow"
              variants={revealChild}
            >
              FLEXFLOW AI
            </motion.span>

            <motion.h1 variants={revealChild}>
              Automate Workflows
              <span> with FlexFlow AI</span>
            </motion.h1>

            <motion.p variants={revealChild}>
              A smart business assistant that helps you automate tasks,
              streamline processes and get more done with less effort.
            </motion.p>

            <motion.div
              className="flexflow-hero-actions"
              variants={revealChild}
            >
              <motion.div
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
              >
                <Link
                  to="/contact"
                  className="flexflow-btn flexflow-btn-primary"
                >
                  Get Started <ArrowRight size={18} />
                </Link>
              </motion.div>

              <motion.a
                href="#flexflow-features"
                className="flexflow-btn flexflow-btn-outline"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
              >
                Explore Features
              </motion.a>
            </motion.div>

            <motion.div
              className="flexflow-trust-note"
              variants={revealChild}
            >
              <CheckCircle2 size={17} />
              <span>
                Smarter workflows for more productive businesses
              </span>
            </motion.div>
          </motion.div>

          {/* DASHBOARD PREVIEW */}
          <motion.div
            className="flexflow-dashboard"
            initial={{
              opacity: 0,
              x: 55,
              scale: 0.96,
            }}
            animate={{
              opacity: 1,
              x: 0,
              scale: 1,
            }}
            transition={{
              duration: 1,
              delay: 0.25,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className="flexflow-dashboard-header">
              <div>
                <span>WORKFLOW OVERVIEW</span>
                <h3>FlexFlow AI Dashboard</h3>
              </div>

              <span className="flexflow-status">
                <i></i> Active
              </span>
            </div>

            <div className="flexflow-stats">

              <div className="flexflow-stat">
                <Workflow size={19} />
                <small>Automations</small>
                <strong>24</strong>
                <span>Active processes</span>
              </div>

              <div className="flexflow-stat">
                <Settings size={19} />
                <small>Workflows</small>
                <strong>12</strong>
                <span>Connected flows</span>
              </div>

              <div className="flexflow-stat">
                <Clock size={19} />
                <small>Time Saved</small>
                <strong>46 hrs</strong>
                <span>Sample overview</span>
              </div>

              <div className="flexflow-stat">
                <Zap size={19} />
                <small>Task Success</small>
                <strong>98%</strong>
                <span>Sample rate</span>
              </div>

            </div>

            <div className="flexflow-dashboard-bottom">

              <div className="flexflow-chart">
                <h4>Workflow Activity</h4>

                <div className="flexflow-bars">
                  {[25, 38, 48, 65, 82, 100].map((height, index) => (
                    <div className="flexflow-bar-item" key={index}>
                      <div className="flexflow-bar-track">
                        <i style={{ height: `${height}%` }}></i>
                      </div>

                      <span>
                        {["Jan", "Feb", "Mar", "Apr", "May", "Jun"][index]}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flexflow-automation">
                <h4>Recent Automations</h4>

                {[
                  "Generate reports",
                  "Send notifications",
                  "Update records",
                ].map((item) => (
                  <div className="flexflow-automation-row" key={item}>
                    <CheckCircle2 size={15} />
                    <span>{item}</span>
                    <b>Active</b>
                  </div>
                ))}
              </div>

            </div>
          </motion.div>

        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="flexflow-intro">
        <motion.div
          className="flexflow-container flexflow-intro-content"
          variants={revealUp}
          {...revealProps}
        >
          <span className="flexflow-eyebrow">
            WORK SMARTER, NOT HARDER
          </span>

          <h2>Let Automation Handle the Repetitive Work</h2>

          <p>
            Everyday business operations often involve repeated tasks,
            manual updates and disconnected processes. FlexFlow AI helps
            simplify these activities through intelligent workflow
            automation, helping your team focus on more important work.
          </p>
        </motion.div>
      </section>

      {/* FEATURES */}
      <section className="flexflow-features" id="flexflow-features">
        <div className="flexflow-container">

          <motion.div
            className="flexflow-section-heading"
            variants={revealUp}
            {...revealProps}
          >
            <span className="flexflow-eyebrow">
              POWERFUL CAPABILITIES
            </span>

            <h2>Everything You Need to Automate Workflows</h2>

            <p>
              Smart capabilities designed to simplify business processes
              and improve the way your team works.
            </p>
          </motion.div>

          <motion.div
            className="flexflow-feature-grid"
            variants={staggerContainer}
            {...revealProps}
          >
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <motion.article
                  className="flexflow-feature-card"
                  key={feature.title}
                  variants={revealChild}
                  whileHover={{
                    y: -8,
                    transition: { duration: 0.25 },
                  }}
                >
                  <div className="flexflow-feature-icon">
                    <Icon size={25} />
                  </div>

                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </motion.article>
              );
            })}
          </motion.div>

        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="flexflow-process">
        <div className="flexflow-container">

          <motion.div
            className="flexflow-section-heading"
            variants={revealUp}
            {...revealProps}
          >
            <span className="flexflow-eyebrow">
              SIMPLE WORKFLOW
            </span>

            <h2>From Manual Tasks to Smart Automation</h2>

            <p>
              A simple approach to making your everyday business processes
              more organized and efficient.
            </p>
          </motion.div>

          <motion.div
            className="flexflow-process-grid"
            variants={staggerContainer}
            {...revealProps}
          >
            <motion.div
              className="flexflow-process-card"
              variants={revealChild}
              whileHover={{ y: -8 }}
            >
              <span>01</span>
              <Settings size={29} />
              <h3>Set Your Workflow</h3>
              <p>
                Identify repetitive tasks and define the process you want to automate.
              </p>
            </motion.div>

            <motion.div
              className="flexflow-process-card"
              variants={revealChild}
              whileHover={{ y: -8 }}
            >
              <span>02</span>
              <Workflow size={29} />
              <h3>Automate Processes</h3>
              <p>
                Connect the steps and configure automated actions for your workflow.
              </p>
            </motion.div>

            <motion.div
              className="flexflow-process-card"
              variants={revealChild}
              whileHover={{ y: -8 }}
            >
              <span>03</span>
              <BarChart3 size={29} />
              <h3>Monitor Results</h3>
              <p>
                Review activity, track performance and improve your processes.
              </p>
            </motion.div>
          </motion.div>

        </div>
      </section>

      {/* BENEFITS */}
      <section className="flexflow-benefits">
        <div className="flexflow-container flexflow-benefits-grid">

          <motion.div
            className="flexflow-benefits-content"
            variants={revealLeft}
            {...revealProps}
          >
            <span className="flexflow-eyebrow">
              WHY FLEXFLOW AI?
            </span>

            <h2>Give Your Team More Time for What Matters</h2>

            <p>
              Reduce repetitive work and create smoother business processes
              with intelligent automation.
            </p>

            <motion.ul variants={staggerContainer}>
              {benefits.map((benefit) => (
                <motion.li
                  key={benefit}
                  variants={revealChild}
                >
                  <CheckCircle2 size={19} />
                  <span>{benefit}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* DASHBOARD IMAGE */}
          <motion.div
            className="flexflow-benefits-visual"
            variants={revealRight}
            {...revealProps}
          >
            <motion.img
              src="/images/flexflow-dashboard.png"
              alt="FlexFlow AI dashboard showing automated workflows, activity and performance"
              className="flexflow-benefits-image"
              loading="lazy"
              whileHover={{
                scale: 1.03,
                transition: { duration: 0.3 },
              }}
            />
          </motion.div>

        </div>
      </section>

      {/* CTA */}
      <section className="flexflow-cta">
        <motion.div
          className="flexflow-container flexflow-cta-content"
          variants={revealUp}
          {...revealProps}
        >
          <span className="flexflow-eyebrow">
            READY TO AUTOMATE?
          </span>

          <h2>
            Make Your Business Work Smarter with FlexFlow AI.
          </h2>

          <p>
            Tell us about your business processes and let's explore how
            workflow automation can help your team.
          </p>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            <Link
              to="/contact"
              className="flexflow-btn flexflow-btn-primary"
            >
              Talk to Our Team <ArrowRight size={18} />
            </Link>
          </motion.div>
        </motion.div>
      </section>

    </main>
  );
}

export default FlexFlowAI;
