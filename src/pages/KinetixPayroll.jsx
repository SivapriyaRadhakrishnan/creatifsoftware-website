
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import {
  ArrowRight,
  Users,
  CalendarCheck,
  Wallet,
  ShieldCheck,
  FileText,
  BarChart3,
  Clock,
  CheckCircle2,
  Calculator,
  ClipboardList,
} from "lucide-react";

import "./KinetixPayroll.css";

// FEATURES
const features = [
  {
    icon: Users,
    title: "Employee Management",
    description:
      "Maintain employee profiles, job details and payroll information in one organized system.",
  },
  {
    icon: CalendarCheck,
    title: "Attendance & Leave",
    description:
      "Track employee attendance, working days, leave requests and attendance records.",
  },
  {
    icon: Calculator,
    title: "Salary Processing",
    description:
      "Calculate salaries using employee pay details, attendance and configured deductions.",
  },
  {
    icon: FileText,
    title: "Payslip Generation",
    description:
      "Generate clear salary statements and make payslip records easy to access.",
  },
  {
    icon: ShieldCheck,
    title: "Statutory Compliance",
    description:
      "Organize payroll compliance information such as PF and ESI records, where applicable.",
  },
  {
    icon: BarChart3,
    title: "Payroll Reports",
    description:
      "Review salary summaries, attendance reports and payroll activity.",
  },
];

// BENEFITS
const benefits = [
  "Simplify monthly salary processing",
  "Manage attendance and leave records",
  "Keep employee information organized",
  "Generate payslips and payroll reports",
  "Maintain payroll compliance records",
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

function KinetixPayroll() {
  return (
    <main className="kinetix-page">

      {/* HERO */}
      <section className="kinetix-hero">
        <div className="kinetix-glow"></div>

        <div className="kinetix-container kinetix-hero-grid">

          {/* HERO CONTENT */}
          <motion.div
            className="kinetix-hero-content"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.span
              className="kinetix-eyebrow"
              variants={revealChild}
            >
              KINETIX PAYROLL SYSTEM
            </motion.span>

            <motion.h1 variants={revealChild}>
              Simplify Payroll
              <span> Management with Kinetix</span>
            </motion.h1>

            <motion.p variants={revealChild}>
              Manage employee salaries, attendance, payslips and payroll
              records through one organized platform designed to make
              payroll management easier.
            </motion.p>

            <motion.div
              className="kinetix-hero-actions"
              variants={revealChild}
            >
              <motion.div
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
              >
                <Link
                  to="/contact"
                  className="kinetix-btn kinetix-btn-primary"
                >
                  Get Started <ArrowRight size={18} />
                </Link>
              </motion.div>

              <motion.a
                href="#kinetix-features"
                className="kinetix-btn kinetix-btn-outline"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
              >
                Explore Features
              </motion.a>
            </motion.div>

            <motion.div
              className="kinetix-trust-note"
              variants={revealChild}
            >
              <CheckCircle2 size={17} />
              <span>
                Smarter payroll management for growing teams
              </span>
            </motion.div>
          </motion.div>

          {/* DASHBOARD PREVIEW */}
          <motion.div
            className="kinetix-dashboard"
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
            <div className="kinetix-dashboard-header">
              <div>
                <span>PAYROLL OVERVIEW</span>
                <h3>Kinetix Dashboard</h3>
              </div>

              <span className="kinetix-status">
                <i></i> Overview
              </span>
            </div>

            <div className="kinetix-stats">
              <div className="kinetix-stat">
                <Users size={19} />
                <small>Total Employees</small>
                <strong>248</strong>
                <span>Employee records</span>
              </div>

              <div className="kinetix-stat">
                <CalendarCheck size={19} />
                <small>Attendance</small>
                <strong>96%</strong>
                <span>Sample attendance</span>
              </div>

              <div className="kinetix-stat">
                <Wallet size={19} />
                <small>Payroll Amount</small>
                <strong>₹28.5L</strong>
                <span>Sample payroll</span>
              </div>

              <div className="kinetix-stat">
                <ShieldCheck size={19} />
                <small>Compliance</small>
                <strong>100%</strong>
                <span>Sample overview</span>
              </div>
            </div>

            <div className="kinetix-dashboard-bottom">

              <div className="kinetix-payroll-chart">
                <h4>Payroll Trend</h4>

                <div className="kinetix-bars">
                  {[28, 42, 55, 68, 82, 100].map((height, index) => (
                    <div className="kinetix-bar-item" key={index}>
                      <div className="kinetix-bar-track">
                        <i style={{ height: `${height}%` }}></i>
                      </div>

                      <span>
                        {["Jan", "Feb", "Mar", "Apr", "May", "Jun"][index]}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="kinetix-payroll-status">
                <h4>Payroll Status</h4>

                <div className="kinetix-status-circle">
                  <strong>248</strong>
                  <span>Employees</span>
                </div>

                <div className="kinetix-status-list">
                  <span>
                    <i className="processed"></i> Processed (92%)
                  </span>
                  <span>
                    <i className="review"></i> In Review (5%)
                  </span>
                  <span>
                    <i className="pending"></i> Pending (3%)
                  </span>
                </div>
              </div>

            </div>

            <div className="kinetix-dashboard-footer">
              <span>
                <Clock size={14} /> Attendance tracking
              </span>
              <span>
                <FileText size={14} /> Payroll records
              </span>
            </div>
          </motion.div>

        </div>
      </section>

      {/* INTRO */}
      <section className="kinetix-intro">
        <motion.div
          className="kinetix-container kinetix-intro-content"
          variants={revealUp}
          {...revealProps}
        >
          <span className="kinetix-eyebrow">
            PAYROLL MADE SIMPLE
          </span>

          <h2>Take Control of Your Payroll Process</h2>

          <p>
            Managing employee salaries, attendance and payroll records
            manually can take valuable time. Kinetix brings these activities
            together to help your team organize payroll operations and
            maintain accurate employee records.
          </p>
        </motion.div>
      </section>

      {/* FEATURES */}
      <section className="kinetix-features" id="kinetix-features">
        <div className="kinetix-container">

          <motion.div
            className="kinetix-section-heading"
            variants={revealUp}
            {...revealProps}
          >
            <span className="kinetix-eyebrow">
              KEY FEATURES
            </span>

            <h2>
              Everything You Need for Payroll Management
            </h2>

            <p>
              Manage employee information and payroll activities with
              practical tools designed for your business.
            </p>
          </motion.div>

          <motion.div
            className="kinetix-feature-grid"
            variants={staggerContainer}
            {...revealProps}
          >
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <motion.article
                  className="kinetix-feature-card"
                  key={feature.title}
                  variants={revealChild}
                  whileHover={{
                    y: -8,
                    transition: { duration: 0.25 },
                  }}
                >
                  <div className="kinetix-feature-icon">
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

      {/* WORKFLOW */}
      <section className="kinetix-workflow">
        <div className="kinetix-container">

          <motion.div
            className="kinetix-section-heading"
            variants={revealUp}
            {...revealProps}
          >
            <span className="kinetix-eyebrow">
              HOW IT WORKS
            </span>

            <h2>A More Organized Payroll Workflow</h2>

            <p>
              Keep essential payroll activities connected through a
              straightforward process.
            </p>
          </motion.div>

          <motion.div
            className="kinetix-workflow-grid"
            variants={staggerContainer}
            {...revealProps}
          >
            <motion.article
              className="kinetix-workflow-card"
              variants={revealChild}
              whileHover={{ y: -8 }}
            >
              <span>01</span>
              <Users size={29} />
              <h3>Manage Employees</h3>
              <p>
                Maintain employee details, salary information and records.
              </p>
            </motion.article>

            <motion.article
              className="kinetix-workflow-card"
              variants={revealChild}
              whileHover={{ y: -8 }}
            >
              <span>02</span>
              <ClipboardList size={29} />
              <h3>Track Attendance</h3>
              <p>
                Review attendance, working days and leave information.
              </p>
            </motion.article>

            <motion.article
              className="kinetix-workflow-card"
              variants={revealChild}
              whileHover={{ y: -8 }}
            >
              <span>03</span>
              <Wallet size={29} />
              <h3>Process Payroll</h3>
              <p>
                Prepare salary records, payslips and payroll reports.
              </p>
            </motion.article>
          </motion.div>

        </div>
      </section>

      {/* BENEFITS */}
      <section className="kinetix-benefits">
        <div className="kinetix-container kinetix-benefits-grid">

          <motion.div
            className="kinetix-benefits-content"
            variants={revealLeft}
            {...revealProps}
          >
            <span className="kinetix-eyebrow">
              WHY CHOOSE KINETIX?
            </span>

            <h2>Make Payroll Management Easier</h2>

            <p>
              Spend less time handling payroll records and more time
              focusing on your people and business.
            </p>

            <motion.ul
              variants={staggerContainer}
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

          {/* DASHBOARD IMAGE */}
          <motion.div
            className="kinetix-benefits-visual"
            variants={revealRight}
            {...revealProps}
          >
            <motion.img
              src="/images/kinetix-dashboard.png"
              alt="Kinetix Payroll dashboard showing employee, attendance and payroll information"
              className="kinetix-benefits-image"
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
      <section className="kinetix-cta">
        <motion.div
          className="kinetix-container kinetix-cta-content"
          variants={revealUp}
          {...revealProps}
        >
          <span className="kinetix-eyebrow">
            READY TO SIMPLIFY PAYROLL?
          </span>

          <h2>
            Give Your Team a Better Payroll Experience.
          </h2>

          <p>
            Tell us about your payroll requirements and let's discuss
            how Kinetix can support your business.
          </p>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            <Link
              to="/contact"
              className="kinetix-btn kinetix-btn-primary"
            >
              Talk to Our Team <ArrowRight size={18} />
            </Link>
          </motion.div>
        </motion.div>
      </section>

    </main>
  );
}

export default KinetixPayroll;
