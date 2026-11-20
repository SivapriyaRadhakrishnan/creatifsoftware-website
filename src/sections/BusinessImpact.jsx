
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";
import Container from "../components/Container";

const stats = [
  { value: 500, suffix: "+", label: "Businesses Supported" },
  { value: 25, suffix: "K+", label: "Transactions Managed" },
  { value: 10, suffix: "K+", label: "Employees Managed" },
  { value: 300, suffix: "+", label: "Projects Delivered" }
];

const brands = [
  { name: "Grande", image: "/images/brands/grande.png" },
  { name: "Baglamak", image: "/images/brands/baglamak.png" },
  { name: "Groohome", image: "/images/brands/groohome.png" },
  { name: "Zaatar", image: "/images/brands/zaatar.png" },
  { name: "Kinza", image: "/images/brands/kinza.png" },
  { name: "Hezfun", image: "/images/brands/hezfun.png" }
];

function AnimatedCounter({ value, suffix }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const count = useMotionValue(0);
  const spring = useSpring(count, {
    stiffness: 65,
    damping: 20
  });

  const rounded = useMotionValue("0");

  useEffect(() => {
    const unsubscribe = spring.on("change", (latest) => {
      rounded.set(Math.round(latest).toLocaleString("en-IN"));
    });

    return unsubscribe;
  }, [spring, rounded]);

  useEffect(() => {
    if (isInView) {
      count.set(value);
    }
  }, [isInView, value, count]);

  return (
    <div className="impact-number" ref={ref}>
      <motion.span>{rounded}</motion.span>
      <span>{suffix}</span>
    </div>
  );
}

function BusinessImpact() {
  return (
    <section className="business-impact" id="impact">

      <Container>

        {/* HEADING */}

        <motion.div
          className="impact-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="software-label">
            <span />
            BUSINESS IMPACT
            <span />
          </div>

          <h2>
            Built to Deliver
            <br />
            Real Business Results
          </h2>
        </motion.div>


        {/* RATING BADGE */}

        <motion.div
          className="impact-rating"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >

          <div className="rating-avatars">
            <img src="/images/avatars/user-1.png" alt="" />
            <img src="/images/avatars/user-2.png" alt="" />
            <img src="/images/avatars/user-3.png" alt="" />
          </div>

          <div className="rating-content">
            <div className="rating-top">
              <strong>4.9/5</strong>
              <span className="rating-stars">★★★★★</span>
            </div>

            <p>Trusted by businesses across Kerala</p>
          </div>

        </motion.div>


        {/* STATISTICS */}

        <motion.div
          className="impact-stats"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.15 }
            }
          }}
        >

          {stats.map((stat) => (
            <motion.div
              className="impact-stat"
              key={stat.label}
              variants={{
                hidden: { opacity: 0, y: 35 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.7 }
                }
              }}
            >

              <AnimatedCounter
                value={stat.value}
                suffix={stat.suffix}
              />

              <p>{stat.label}</p>

            </motion.div>
          ))}

        </motion.div>


        {/* TRUSTED BRANDS */}

        <motion.div
          className="trusted-brands"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >

          <p className="trusted-title">
            Trusted by 500+ Brands & Companies
          </p>

          <div className="brand-grid">

            {brands.map((brand, index) => (
              <motion.div
                className="brand-item"
                key={brand.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08
                }}
              >

                <img
                  src={brand.image}
                  alt={brand.name}
                  loading="lazy"
                />

              </motion.div>
            ))}

          </div>

        </motion.div>

      </Container>

    </section>
  );
}

export default BusinessImpact;
