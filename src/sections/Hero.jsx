
import { motion } from "framer-motion";
import Container from "../components/Container";
import Button from "../components/Button";

function Hero() {
  return (
    <section className="hero" id="home">

      <div className="hero-bg" />

      <Container>
        <div className="hero-content">

          <motion.span
            className="hero-label"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            SMART SOFTWARE SOLUTIONS
          </motion.span>

         
<motion.h1
  initial={{ opacity: 0, y: 45 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{
    duration: 1,
    delay: 0.15,
    ease: "easeOut"
  }}
>
  <span>One Smart Ecosystem.</span>
  <span>Everything Your Business Needs.</span>
</motion.h1>


          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Simplify your everyday operations with powerful
            software built to manage customers, sales, billing,
            employees, payroll and business workflows —
            all in one smart ecosystem.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <Button href="#solutions">
              Explore Our Solutions
            </Button>
          </motion.div>

        </div>
      </Container>

    </section>
  );
}

export default Hero;
