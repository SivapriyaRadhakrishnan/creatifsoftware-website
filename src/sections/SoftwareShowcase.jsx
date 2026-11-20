
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Users,
  Cloud,
  ChartNoAxesColumnIncreasing,
  Settings,
  Sparkles,
  ArrowUpRight,
  Zap,
  TrendingUp
} from "lucide-react";

import Container from "../components/Container";

const advantages = [
  { icon: ShieldCheck, label: "Secure" },
  { icon: Cloud, label: "Cloud Based" },
  { icon: Users, label: "Connected" },
  { icon: TrendingUp, label: "Scalable" },
  { icon: Settings, label: "Flexible" },
  { icon: ChartNoAxesColumnIncreasing, label: "Insights" }
];

const features = [
  {
    number: "01",
    title: "Smart & Simple",
    description:
      "Powerful technology made simple, so your team can manage everyday tasks with ease.",
    image: "/images/smart-simple.png",
    className: "smart-card"
  },
  {
    number: "02",
    title: "Ready to Grow",
    description:
      "Flexible software solutions that adapt to your business and support long-term growth.",
    image: "/images/ready-grow.png",
    className: "grow-card"
  },
  {
    number: "03",
    title: "Boost Efficiency & Productivity",
    description:
      "Automate everyday tasks, simplify workflows, and help your team focus on what matters most.",
    image: "/images/boost-efficiency.png",
    className: "efficiency-card"
  },
  {
    number: "04",
    title: "Smarter Business Insights",
    description:
      "Turn your business data into clear insights, track performance, identify opportunities, and make better decisions for sustainable growth.",
    image: "/images/business-insights.png",
    className: "insights-card"
  }
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15
    }
  }
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 40
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

function SoftwareShowcase() {
  return (
    <section className="software-showcase" id="software">

      <Container>

        {/* SECTION HEADING */}

        <motion.div
          className="software-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >

          <div className="software-label">
            <span />
            OUR SOFTWARE
            <span />
          </div>

          <h2>
            Powerful Software for Every Business
            <span> Need</span>
          </h2>

          <p>
            From customer management and business operations
            to payroll and AI-powered automation, our software
            solutions help you simplify workflows, improve
            efficiency, and grow with confidence.
          </p>

        </motion.div>


        {/* OUR ADVANTAGE CARD */}

        <motion.div
          className="advantage-card"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >

          <div className="advantage-header">
            <div>
             
              <h3>Our Advantage</h3>
              <p>
                Technology that works for your business.
              </p>
            </div>

            
          </div>

          <div className="advantage-items">

            {advantages.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  className="advantage-item"
                  key={item.label}
                >
                  <div className="advantage-icon">
                    <Icon size={25} strokeWidth={1.6} />
                  </div>

                  <span>{item.label}</span>
                </div>
              );
            })}

          </div>

        </motion.div>


        {/* SOFTWARE FEATURE CARDS */}

        <motion.div
          className="software-cards-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >

          {features.map((item) => (
            <motion.article
              className={`software-feature-card ${item.className}`}
              key={item.number}
              variants={cardVariants}
              whileHover={{
                y: -8,
                transition: { duration: 0.3 }
              }}
            >

              <div className="software-card-content">

                

                <h3>{item.title}</h3>

                <p>{item.description}</p>

              </div>

              <div className="software-card-image">

                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                />

              </div>

            </motion.article>
          ))}

        </motion.div>


        {/* BOTTOM CTA */}

        <motion.div
          className="software-bottom-cta"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >

          <div>
           
            <span>Ready to make your business smarter?</span>
          </div>

          <a href="/contact">
            Explore More
            <ArrowUpRight size={19} />
          </a>

        </motion.div>

      </Container>

    </section>
  );
}

export default SoftwareShowcase;
