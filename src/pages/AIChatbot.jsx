
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import {
  ArrowRight,
  Bot,
  MessageSquare,
  BrainCircuit,
  Clock,
  Headphones,
  BarChart3,
  CheckCircle2,
  Zap,
  MessagesSquare,
  Database,
  ShieldCheck,
  Sparkles,
  Send,
} from "lucide-react";

import "./AIChatbot.css";

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

// FEATURES
const features = [
  {
    icon: MessageSquare,
    title: "Automated Conversations",
    description:
      "Respond to common customer questions automatically and provide quick assistance.",
  },
  {
    icon: BrainCircuit,
    title: "AI-Powered Responses",
    description:
      "Generate relevant responses using AI to make customer interactions more helpful.",
  },
  {
    icon: Clock,
    title: "24/7 Customer Support",
    description:
      "Allow customers to get assistance even outside your regular business hours.",
  },
  {
    icon: Database,
    title: "Knowledge Integration",
    description:
      "Organize business information so the chatbot can answer questions using your provided content.",
  },
  {
    icon: Headphones,
    title: "Customer Assistance",
    description:
      "Help customers find information, understand services and get answers to common questions.",
  },
  {
    icon: BarChart3,
    title: "Conversation Insights",
    description:
      "Review chatbot interactions and understand common customer questions.",
  },
];

const benefits = [
  "Provide quick responses to customer questions",
  "Reduce repetitive customer support tasks",
  "Offer assistance beyond business hours",
  "Make important business information easier to access",
  "Improve the customer support experience",
];

function AIChatbot() {
  return (
    <main className="chatbot-page">

      {/* HERO SECTION */}
      <section className="chatbot-hero">
        <div className="chatbot-hero-glow"></div>

        <div className="chatbot-container chatbot-hero-grid">

          <motion.div
            className="chatbot-hero-content"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.span
              className="chatbot-eyebrow"
              variants={revealChild}
            >
              AI-POWERED CUSTOMER SUPPORT
            </motion.span>

            <motion.h1 variants={revealChild}>
              Smarter Conversations
              <span> with AI Chatbot</span>
            </motion.h1>

            <motion.p variants={revealChild}>
              Make customer support easier with an intelligent chatbot
              that answers questions, provides useful information and
              helps your business stay connected with customers.
            </motion.p>

            <motion.div
              className="chatbot-hero-actions"
              variants={revealChild}
            >
              <Link to="/contact" className="chatbot-btn chatbot-btn-primary">
                Get Started <ArrowRight size={18} />
              </Link>

              <a
                href="#chatbot-features"
                className="chatbot-btn chatbot-btn-outline"
              >
                Explore Features
              </a>
            </motion.div>

            <motion.div
              className="chatbot-trust-note"
              variants={revealChild}
            >
              <CheckCircle2 size={17} />
              <span>
                Intelligent customer assistance for modern businesses
              </span>
            </motion.div>
          </motion.div>

          {/* CHATBOT DASHBOARD PREVIEW */}
          <motion.div
            className="chatbot-dashboard"
            initial={{ opacity: 0, x: 55, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{
              duration: 1,
              delay: 0.3,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className="chatbot-dashboard-header">
              <div>
                <span>CHATBOT OVERVIEW</span>
                <h3>AI Assistant Dashboard</h3>
              </div>

              <span className="chatbot-status">
                <i></i> Online
              </span>
            </div>

            <div className="chatbot-stats">
              <div className="chatbot-stat">
                <MessagesSquare size={19} />
                <small>Total Conversations</small>
                <strong>1,284</strong>
                <span>Sample activity</span>
              </div>

              <div className="chatbot-stat">
                <Bot size={19} />
                <small>Automated Responses</small>
                <strong>962</strong>
                <span>Sample responses</span>
              </div>

              <div className="chatbot-stat">
                <Clock size={19} />
                <small>Availability</small>
                <strong>24/7</strong>
                <span>Always accessible</span>
              </div>

              <div className="chatbot-stat">
                <Zap size={19} />
                <small>Response Rate</small>
                <strong>98%</strong>
                <span>Sample rate</span>
              </div>
            </div>

            <div className="chatbot-conversation">
              <div className="chatbot-conversation-heading">
                <strong>Recent Conversation</strong>
                <span>Sample preview</span>
              </div>

              <div className="chatbot-message chatbot-user-message">
                Hi, can you tell me about your services?
              </div>

              <div className="chatbot-message chatbot-ai-message">
                <span><Bot size={15} /> AI Assistant</span>
                Hello! I'd be happy to help. What service would you like
                to know more about?
              </div>

              <div className="chatbot-input-preview">
                <span>Type your message...</span>
                <Send size={16} />
              </div>
            </div>

            <div className="chatbot-dashboard-footer">
              <span><ShieldCheck size={14} /> Organized interactions</span>
              <span><Sparkles size={14} /> AI assistance</span>
            </div>
          </motion.div>

        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="chatbot-intro">
        <motion.div
          className="chatbot-container chatbot-intro-content"
          {...revealProps}
          variants={revealUp}
        >
          <span className="chatbot-eyebrow">
            CUSTOMER SUPPORT, REIMAGINED
          </span>

          <h2>Give Every Customer a Faster Way to Get Answers</h2>

          <p>
            Customers often need quick answers about products, services,
            pricing and business information. An AI chatbot helps handle
            common questions, provide relevant information and make
            customer support more accessible.
          </p>
        </motion.div>
      </section>

      {/* FEATURES */}
      <section className="chatbot-features" id="chatbot-features">
        <div className="chatbot-container">

          <motion.div
            className="chatbot-section-heading"
            {...revealProps}
            variants={revealUp}
          >
            <span className="chatbot-eyebrow">SMART FEATURES</span>

            <h2>Everything You Need for Intelligent Customer Support</h2>

            <p>
              Useful AI capabilities that help businesses communicate
              with customers and manage common support activities.
            </p>
          </motion.div>

          <motion.div
            className="chatbot-feature-grid"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <motion.article
                  className="chatbot-feature-card"
                  key={feature.title}
                  variants={revealChild}
                  whileHover={{
                    y: -8,
                    transition: { duration: 0.3 },
                  }}
                >
                  <div className="chatbot-feature-icon">
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
      <section className="chatbot-workflow">
        <div className="chatbot-container">

          <motion.div
            className="chatbot-section-heading"
            {...revealProps}
            variants={revealUp}
          >
            <span className="chatbot-eyebrow">HOW IT WORKS</span>

            <h2>From Customer Questions to Helpful Answers</h2>

            <p>
              A simple process that helps your chatbot provide useful
              information to customers.
            </p>
          </motion.div>

          <motion.div
            className="chatbot-workflow-grid"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.article
              className="chatbot-workflow-card"
              variants={revealChild}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              <span>01</span>
              <Database size={29} />
              <h3>Add Business Information</h3>
              <p>
                Provide relevant business details, services and frequently
                asked questions.
              </p>
            </motion.article>

            <motion.article
              className="chatbot-workflow-card"
              variants={revealChild}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              <span>02</span>
              <BrainCircuit size={29} />
              <h3>AI Understands Questions</h3>
              <p>
                The chatbot processes customer questions and finds
                relevant information.
              </p>
            </motion.article>

            <motion.article
              className="chatbot-workflow-card"
              variants={revealChild}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              <span>03</span>
              <MessageSquare size={29} />
              <h3>Deliver Helpful Responses</h3>
              <p>
                Provide customers with useful answers and assistance
                through conversations.
              </p>
            </motion.article>
          </motion.div>

        </div>
      </section>

      {/* BENEFITS */}
      <section className="chatbot-benefits">
        <div className="chatbot-container chatbot-benefits-grid">

          <motion.div
            className="chatbot-benefits-content"
            {...revealProps}
            variants={revealLeft}
          >
            <span className="chatbot-eyebrow">
              WHY CHOOSE AI CHATBOT?
            </span>

            <h2>Make Customer Communication Simpler</h2>

            <p>
              Help your customers find information quickly while reducing
              the time your team spends answering repetitive questions.
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

          {/* DASHBOARD IMAGE */}
          <motion.div
            className="chatbot-benefits-visual"
            {...revealProps}
            variants={revealRight}
          >
            <motion.img
              src="/images/ai-chatbot-dashboard.png"
              alt="Creatif AI Chatbot dashboard showing customer conversations and AI assistance"
              className="chatbot-benefits-image"
              loading="lazy"
              whileHover={{ scale: 1.025 }}
              transition={{ duration: 0.4 }}
            />
          </motion.div>

        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="chatbot-cta">
        <motion.div
          className="chatbot-container chatbot-cta-content"
          {...revealProps}
          variants={revealUp}
        >
          <span className="chatbot-eyebrow">
            READY TO GET STARTED?
          </span>

          <h2>Bring Smarter Conversations to Your Business.</h2>

          <p>
            Tell us about your customer support requirements and let's
            explore an AI chatbot solution for your business.
          </p>

          <motion.div
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
          >
            <Link to="/contact" className="chatbot-btn chatbot-btn-primary">
              Talk to Our Team <ArrowRight size={18} />
            </Link>
          </motion.div>
        </motion.div>
      </section>

    </main>
  );
}

export default AIChatbot;
