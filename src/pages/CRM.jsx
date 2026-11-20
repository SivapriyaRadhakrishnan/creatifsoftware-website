
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import {
  ArrowRight,
  Users,
  Target,
  TrendingUp,
  MessageSquare,
  CalendarCheck,
  BarChart3,
  CheckCircle2,
} from "lucide-react";

import "./CRM.css";

// ANIMATION VARIANTS
const revealUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

const revealLeft = {
  hidden: { opacity: 0, x: -45 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

const revealRight = {
  hidden: { opacity: 0, x: 45 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const revealChild = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

const revealProps = {
  initial: "hidden",
  whileInView: "visible",
  viewport: { once: true, amount: 0.2 },
};

// CRM FEATURES
const features = [
  {
    icon: Users,
    title: "Customer Management",
    description:
      "Keep customer information, contact details and interactions organized in one place.",
  },
  {
    icon: Target,
    title: "Lead Management",
    description:
      "Capture, organize and track potential customers throughout your sales journey.",
  },
  {
    icon: TrendingUp,
    title: "Sales Pipeline",
    description:
      "Monitor sales opportunities and understand where each deal stands.",
  },
  {
    icon: CalendarCheck,
    title: "Follow-up Reminders",
    description:
      "Stay on top of meetings, calls and important customer follow-ups.",
  },
  {
    icon: MessageSquare,
    title: "Customer Communication",
    description:
      "Keep track of customer conversations and build stronger business relationships.",
  },
  {
    icon: BarChart3,
    title: "Reports & Analytics",
    description:
      "Understand your sales performance with clear reports and business insights.",
  },
];

const benefits = [
  "Organize customer information in one place",
  "Improve lead tracking and follow-ups",
  "Save time on repetitive tasks",
  "Understand your sales performance",
  "Build stronger customer relationships",
];

function CRM() {
  return (
    <main className="crm-page">

      {/* HERO SECTION */}
      <section className="crm-hero">
        <div className="crm-hero-glow"></div>

        <div className="crm-container crm-hero-grid">

          <motion.div
            className="crm-hero-content"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.span
              className="crm-eyebrow"
              variants={revealChild}
            >
              CUSTOMER RELATIONSHIP MANAGEMENT
            </motion.span>

            <motion.h1 variants={revealChild}>
              Build Better
              <span> Customer Relationships</span>
            </motion.h1>

            <motion.p variants={revealChild}>
              Manage customers, track leads and organize your sales process
              with a CRM solution designed to make business management easier.
            </motion.p>

            <motion.div
              className="crm-hero-actions"
              variants={revealChild}
            >
              <Link to="/contact" className="crm-btn crm-btn-primary">
                Get Started <ArrowRight size={18} />
              </Link>

              <a href="#crm-features" className="crm-btn crm-btn-outline">
                Explore Features
              </a>
            </motion.div>

            <motion.div
              className="crm-trust-note"
              variants={revealChild}
            >
              <CheckCircle2 size={17} />
              <span>
                Smarter customer management for growing businesses
              </span>
            </motion.div>
          </motion.div>

          {/* CRM DASHBOARD PREVIEW */}
          <motion.div
            className="crm-dashboard"
            initial={{ opacity: 0, x: 55, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{
              duration: 1,
              delay: 0.3,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className="crm-dashboard-top">
              <div>
                <span className="crm-dashboard-label">OVERVIEW</span>
                <h3>CRM Dashboard</h3>
              </div>

              <span className="crm-live-dot">● Live Overview</span>
            </div>

            <div className="crm-stats">
              <div className="crm-stat-card">
                <Users size={19} />
                <span>Total Customers</span>
                <strong>1,248</strong>
                <small>Customer records</small>
              </div>

              <div className="crm-stat-card">
                <Target size={19} />
                <span>Active Leads</span>
                <strong>86</strong>
                <small>Potential customers</small>
              </div>
            </div>

            <div className="crm-pipeline">
              <div className="crm-pipeline-heading">
                <strong>Sales Pipeline</strong>
                <span>Sample preview</span>
              </div>

              <div className="crm-pipeline-row">
                <span>New Leads</span>
                <div><i style={{ width: "85%" }}></i></div>
                <b>85%</b>
              </div>

              <div className="crm-pipeline-row">
                <span>In Progress</span>
                <div><i style={{ width: "65%" }}></i></div>
                <b>65%</b>
              </div>

              <div className="crm-pipeline-row">
                <span>Converted</span>
                <div><i style={{ width: "45%" }}></i></div>
                <b>45%</b>
              </div>
            </div>

            <div className="crm-dashboard-footer">
              <span><CheckCircle2 size={15} /> Customer records</span>
              <span><CalendarCheck size={15} /> Follow-up tracking</span>
            </div>
          </motion.div>

        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="crm-intro">
        <motion.div
          className="crm-container crm-intro-content"
          {...revealProps}
          variants={revealUp}
        >
          <span className="crm-eyebrow">
            ONE PLACE. BETTER CONTROL.
          </span>

          <h2>Manage Your Customers. Grow Your Business.</h2>

          <p>
            Managing customer information across different files and tools
            can become difficult as your business grows. A CRM system helps
            bring customer records, leads, communication and sales activities
            into one organized platform.
          </p>
        </motion.div>
      </section>

      {/* FEATURES */}
      <section className="crm-features" id="crm-features">
        <div className="crm-container">

          <motion.div
            className="crm-section-heading"
            {...revealProps}
            variants={revealUp}
          >
            <span className="crm-eyebrow">WHAT YOU GET</span>

            <h2>Everything You Need to Manage Customers</h2>

            <p>
              Useful tools to organize your customer information and manage
              your sales activities more efficiently.
            </p>
          </motion.div>

          <motion.div
            className="crm-feature-grid"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <motion.article
                  className="crm-feature-card"
                  key={feature.title}
                  variants={revealChild}
                  whileHover={{
                    y: -8,
                    transition: { duration: 0.3 },
                  }}
                >
                  <div className="crm-feature-icon">
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

      {/* BENEFITS */}
      <section className="crm-benefits">
        <div className="crm-container crm-benefits-grid">

          <motion.div
            className="crm-benefits-content"
            {...revealProps}
            variants={revealLeft}
          >
            <span className="crm-eyebrow">WHY CHOOSE CRM?</span>

            <h2>Make Customer Management Simpler</h2>

            <p>
              Spend less time managing scattered information and more time
              building meaningful customer relationships.
            </p>

            <motion.ul
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
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

          {/* CRM DASHBOARD IMAGE */}
          <motion.div
            className="crm-benefits-visual"
            {...revealProps}
            variants={revealRight}
          >
            <motion.img
              src="/images/crm-dashboard.png"
              alt="Creatif CRM dashboard showing customer records, sales pipeline and analytics"
              className="crm-benefits-image"
              loading="lazy"
              whileHover={{ scale: 1.025 }}
              transition={{ duration: 0.4 }}
            />
          </motion.div>

        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="crm-cta">
        <motion.div
          className="crm-container crm-cta-content"
          {...revealProps}
          variants={revealUp}
        >
          <span className="crm-eyebrow">READY TO GET STARTED?</span>

          <h2>Let's Make Customer Management Easier.</h2>

          <p>
            Tell us about your business and let's discuss a CRM solution
            that fits your requirements.
          </p>

          <motion.div
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
          >
            <Link to="/contact" className="crm-btn crm-btn-primary">
              Talk to Our Team <ArrowRight size={18} />
            </Link>
          </motion.div>
        </motion.div>
      </section>

    </main>
  );
}

export default CRM;
