
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Container from "../components/Container";

const solutions = [
  {
    image: "/images/solutions/crm.png",
    title: "CRM Solutions",
    description:
      "Build stronger relationships, track leads and manage customers with smart CRM solutions.",
    link: "/services/crm",
  },
  {
    image: "/images/solutions/erp.png",
    title: "ERP Software",
    description:
      "Connect and automate your core business operations with powerful ERP software.",
    link: "/services/erp",
  },
  {
    image: "/images/solutions/flexflow-ai.png",
    title: "FlexFlow AI",
    description:
      "Create, manage and track invoices while making your billing process faster and easier.",
    link: "/services/flexflow-ai",
  },
  {
    image: "/images/solutions/payroll.png",
    title: "Kinetix Payroll System",
    description:
      "Manage employees, attendance and payroll efficiently with streamlined HR software.",
    link: "/services/kinetix-payroll",
  },
  {
    image: "/images/solutions/chatbot.png",
    title: "AI Chatbot",
    description:
      "Power your sales with a reliable point-of-sale system built for modern businesses.",
    link: "/services/ai-chatbot",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.13,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 55,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

function Solutions() {
  return (
    <section className="solutions-section" id="solutions">
      <div className="solutions-bg" />

      <Container>
        <motion.div
          className="solutions-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {solutions.map((item) => (
            <motion.article
              className="solution-card"
              key={item.title}
              variants={cardVariants}
              whileHover={{
                y: -12,
                transition: { duration: 0.3 },
              }}
            >
              {/* SOLUTION IMAGE */}
              <div className="solution-image-wrap">
                <img
                  src={item.image}
                  alt={`${item.title} 3D illustration`}
                  className="solution-image"
                  loading="lazy"
                />
              </div>

              {/* CARD CONTENT */}
              <div className="solution-card-content">
                <h3>{item.title}</h3>

                <p>{item.description}</p>

                <Link to={item.link} className="solution-link">
                  Explore <span>→</span>
                </Link>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}

export default Solutions;
