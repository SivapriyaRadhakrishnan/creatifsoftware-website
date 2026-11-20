
import { motion } from "framer-motion";
import "./AboutTeam.css";

const teamMembers = [
  {
    name: "Rashin Bava C R",
    role: "General Manager",
    image: "/images/team/rashin.png",
    imagePosition: "center 20%",
  },
  {
    name: "Muhammed Ameen",
    role: "Graphic Designer",
    image: "/images/team/ameen.png",
    imagePosition: "center center",
  },
  {
    name: "Thanzeeb Shah P A",
    role: "Business Development Manager",
    image: "/images/team/thanzeeb.png",
    imagePosition: "center center",
  },
  {
    name: "Sivapriya M R",
    role: "Web Developer",
    image: "/images/team/siva.png",
    imagePosition: "center 20%",
  },
  {
    name: "Ameer Beeran",
    role: "Web Developer",
    image: "/images/team/ameer.png",
    imagePosition: "center center",
  },
  {
    name: "Noble Varghese",
    role: "Visual Content Creator",
    image: "/images/team/noble.png",
    imagePosition: "center 2%",
  },
  {
    name: "Sai Krishna N",
    role: "Digital Marketing Executive",
    image: "/images/team/sai.png",
    imagePosition: "center 2%",
  },
];

function AboutTeam() {
  return (
    <section className="about-team" id="team">
      <div className="about-team-container">

        <motion.div
          className="about-team-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="about-team-label">OUR TEAM</span>

          <h2>
            The People Behind
            <br />
            <span>Creatif Digital Solutions</span>
          </h2>

          <p>
            Meet the passionate people behind our work.
            Our team brings together creativity, technical
            expertise and a shared commitment to building
            smarter software solutions.
          </p>
        </motion.div>

        <div className="about-team-grid">
          {teamMembers.map((member, index) => (
            <motion.article
              className="about-team-card"
              key={member.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.7,
                delay: index * 0.1,
              }}
              whileHover={{ y: -8 }}
            >
              <div className="team-image-wrap">
                <img
                  src={member.image}
                  alt={member.name}
                  loading="lazy"
                  style={{
                    objectPosition: member.imagePosition,
                  }}
                />
              </div>

              <div className="team-member-info">
                <h3>{member.name}</h3>
                <p>{member.role}</p>
              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
}

export default AboutTeam;
