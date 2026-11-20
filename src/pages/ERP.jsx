
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import {
  ArrowRight,
  Package,
  Wallet,
  Users,
  ShoppingCart,
  BarChart3,
  Truck,
  CheckCircle2,
  ClipboardList,
  TrendingUp,
  Layers3
} from "lucide-react";

import "./ERP.css";

// ERP MODULES
const modules = [
  {
    icon: Package,
    title: "Inventory Management",
    description:
      "Track stock levels, manage products and monitor inventory movements across your business.",
  },
  {
    icon: Wallet,
    title: "Finance & Accounting",
    description:
      "Manage income, expenses, invoices and financial records in one organized system.",
  },
  {
    icon: Users,
    title: "HR Management",
    description:
      "Organize employee records, attendance, payroll and important HR activities.",
  },
  {
    icon: ShoppingCart,
    title: "Sales Management",
    description:
      "Manage customer orders, sales activities and business transactions efficiently.",
  },
  {
    icon: Truck,
    title: "Purchase Management",
    description:
      "Track purchase orders, suppliers and procurement activities from one place.",
  },
  {
    icon: BarChart3,
    title: "Reports & Analytics",
    description:
      "View business reports and understand performance with organized data and insights.",
  },
];

// BENEFITS
const benefits = [
  "Connect different business departments",
  "Reduce manual work and repeated data entry",
  "Monitor business operations in one place",
  "Improve inventory and resource management",
  "Make better decisions with business reports",
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

function ERP() {
  return (
    <main className="erp-page">

      {/* HERO SECTION */}
      <section className="erp-hero">
        <div className="erp-hero-glow"></div>

        <div className="erp-container erp-hero-grid">

          {/* HERO CONTENT */}
          <motion.div
            className="erp-hero-content"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.span
              className="erp-eyebrow"
              variants={revealChild}
            >
              ENTERPRISE RESOURCE PLANNING
            </motion.span>

            <motion.h1 variants={revealChild}>
              Manage Your Entire
              <span> Business in One Place</span>
            </motion.h1>

            <motion.p variants={revealChild}>
              Bring your business operations together with ERP software
              designed to simplify workflows, connect departments and
              improve business management.
            </motion.p>

            <motion.div
              className="erp-hero-actions"
              variants={revealChild}
            >
              <motion.div
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
              >
                <Link
                  to="/contact"
                  className="erp-btn erp-btn-primary"
                >
                  Get Started <ArrowRight size={18} />
                </Link>
              </motion.div>

              <motion.a
                href="#erp-modules"
                className="erp-btn erp-btn-outline"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
              >
                Explore Modules
              </motion.a>
            </motion.div>

            <motion.div
              className="erp-trust-note"
              variants={revealChild}
            >
              <CheckCircle2 size={17} />
              <span>
                One connected system for your business operations
              </span>
            </motion.div>
          </motion.div>

          {/* ERP DASHBOARD PREVIEW */}
          <motion.div
            className="erp-dashboard"
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
            <div className="erp-dashboard-header">
              <div>
                <span className="erp-dashboard-label">
                  BUSINESS OVERVIEW
                </span>
                <h3>ERP Dashboard</h3>
              </div>

              <span className="erp-dashboard-status">
                <i></i> System Overview
              </span>
            </div>

            <div className="erp-dashboard-stats">

              <div className="erp-stat">
                <span className="erp-stat-icon">
                  <Package size={19} />
                </span>
                <small>Total Products</small>
                <strong>2,450</strong>
                <span className="erp-stat-note">
                  Inventory records
                </span>
              </div>

              <div className="erp-stat">
                <span className="erp-stat-icon">
                  <Users size={19} />
                </span>
                <small>Employees</small>
                <strong>128</strong>
                <span className="erp-stat-note">
                  Team records
                </span>
              </div>

              <div className="erp-stat">
                <span className="erp-stat-icon">
                  <ShoppingCart size={19} />
                </span>
                <small>Orders</small>
                <strong>356</strong>
                <span className="erp-stat-note">
                  Business orders
                </span>
              </div>

              <div className="erp-stat">
                <span className="erp-stat-icon">
                  <TrendingUp size={19} />
                </span>
                <small>Revenue</small>
                <strong>₹8.5L</strong>
                <span className="erp-stat-note">
                  Sample overview
                </span>
              </div>

            </div>

            <div className="erp-dashboard-bottom">

              <div className="erp-activity">
                <h4>Business Activities</h4>

                <div className="erp-activity-row">
                  <span>
                    <Package size={15} /> Inventory updated
                  </span>
                  <b>Done</b>
                </div>

                <div className="erp-activity-row">
                  <span>
                    <ClipboardList size={15} /> New order received
                  </span>
                  <b>New</b>
                </div>

                <div className="erp-activity-row">
                  <span>
                    <Users size={15} /> Employee records
                  </span>
                  <b>Updated</b>
                </div>
              </div>

              <div className="erp-module-preview">
                <h4>Connected Modules</h4>

                <div className="erp-module-icons">
                  <span><Package /></span>
                  <span><Wallet /></span>
                  <span><Users /></span>
                  <span><ShoppingCart /></span>
                  <span><BarChart3 /></span>
                </div>

                <p>Business operations in one platform</p>
              </div>

            </div>
          </motion.div>

        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="erp-intro">
        <motion.div
          className="erp-container erp-intro-content"
          variants={revealUp}
          {...revealProps}
        >
          <span className="erp-eyebrow">
            ONE CONNECTED PLATFORM
          </span>

          <h2>
            Bring Every Part of Your Business Together
          </h2>

          <p>
            Managing different departments with separate tools can make
            business operations complicated. ERP software connects important
            business activities in one system, helping teams access organized
            information and work more efficiently.
          </p>
        </motion.div>
      </section>

      {/* MODULES */}
      <section className="erp-modules" id="erp-modules">
        <div className="erp-container">

          <motion.div
            className="erp-section-heading"
            variants={revealUp}
            {...revealProps}
          >
            <span className="erp-eyebrow">
              ERP MODULES
            </span>

            <h2>Everything Your Business Needs</h2>

            <p>
              Manage your daily operations with connected modules designed
              for different business departments.
            </p>
          </motion.div>

          <motion.div
            className="erp-module-grid"
            variants={staggerContainer}
            {...revealProps}
          >
            {modules.map((module) => {
              const Icon = module.icon;

              return (
                <motion.article
                  className="erp-module-card"
                  key={module.title}
                  variants={revealChild}
                  whileHover={{
                    y: -8,
                    transition: { duration: 0.25 },
                  }}
                >
                  <div className="erp-module-icon">
                    <Icon size={25} />
                  </div>

                  <h3>{module.title}</h3>

                  <p>{module.description}</p>

                  <span className="erp-module-link">
                    Connected business module <ArrowRight size={15} />
                  </span>
                </motion.article>
              );
            })}
          </motion.div>

        </div>
      </section>

      {/* BUSINESS WORKFLOW */}
      <section className="erp-workflow">
        <div className="erp-container">

          <motion.div
            className="erp-section-heading"
            variants={revealUp}
            {...revealProps}
          >
            <span className="erp-eyebrow">
              HOW IT WORKS
            </span>

            <h2>One System. Connected Departments.</h2>

            <p>
              Your teams can work with shared business information instead
              of managing disconnected records.
            </p>
          </motion.div>

          <motion.div
            className="erp-workflow-grid"
            variants={staggerContainer}
            {...revealProps}
          >
            <motion.div
              className="erp-workflow-card"
              variants={revealChild}
              whileHover={{ y: -8 }}
            >
              <span>01</span>
              <Package size={28} />
              <h3>Manage Resources</h3>
              <p>
                Organize products, inventory and business resources.
              </p>
            </motion.div>

            <motion.div
              className="erp-workflow-card"
              variants={revealChild}
              whileHover={{ y: -8 }}
            >
              <span>02</span>
              <Layers3 size={28} />
              <h3>Connect Operations</h3>
              <p>
                Bring finance, HR, sales and purchasing together.
              </p>
            </motion.div>

            <motion.div
              className="erp-workflow-card"
              variants={revealChild}
              whileHover={{ y: -8 }}
            >
              <span>03</span>
              <BarChart3 size={28} />
              <h3>Track Performance</h3>
              <p>
                Review reports and understand your business activities.
              </p>
            </motion.div>
          </motion.div>

        </div>
      </section>

      {/* BENEFITS */}
      <section className="erp-benefits">
        <div className="erp-container erp-benefits-grid">

          <motion.div
            className="erp-benefits-content"
            variants={revealLeft}
            {...revealProps}
          >
            <span className="erp-eyebrow">
              WHY CHOOSE ERP?
            </span>

            <h2>
              Make Business Operations More Efficient
            </h2>

            <p>
              Replace disconnected processes with a centralized system
              that helps your team manage business activities more clearly.
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
            className="erp-benefits-visual"
            variants={revealRight}
            {...revealProps}
          >
            <motion.img
              src="/images/erp-dashboard.png"
              alt="Creatif ERP dashboard showing inventory, finance, employees and business analytics"
              className="erp-benefits-image"
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
      <section className="erp-cta">
        <motion.div
          className="erp-container erp-cta-content"
          variants={revealUp}
          {...revealProps}
        >
          <span className="erp-eyebrow">
            READY TO CONNECT YOUR BUSINESS?
          </span>

          <h2>
            Let's Build a Smarter Way to Manage Your Business.
          </h2>

          <p>
            Tell us about your business requirements and let's discuss
            an ERP solution that works for your operations.
          </p>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            <Link
              to="/contact"
              className="erp-btn erp-btn-primary"
            >
              Talk to Our Team <ArrowRight size={18} />
            </Link>
          </motion.div>
        </motion.div>
      </section>

    </main>
  );
}

export default ERP;
