
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

import {
    Phone,
    Mail,
    MapPin,
    Send,
    Plus,
    Minus,
    Clock,
} from "lucide-react";

import {
    FaInstagram,
    FaFacebookF,
    FaLinkedinIn,
} from "react-icons/fa";

import "./Contact.css";

// FAQ DATA
const faqs = [
    {
        question: "What services does Creatif provide?",
        answer:
            "We provide custom software development, CRM, ERP, business automation, website development and AI-powered solutions.",
    },
    {
        question: "Can you develop software based on my business needs?",
        answer:
            "Yes. We develop customized software solutions based on your business requirements and workflow.",
    },
    {
        question: "How long does it take to complete a project?",
        answer:
            "The timeline depends on the project requirements, features and complexity. We discuss the estimated timeline before starting.",
    },
    {
        question: "Do you provide website and application development?",
        answer:
            "Yes. We develop responsive websites and web applications for different business requirements.",
    },
    {
        question: "Do you provide support after project completion?",
        answer:
            "Yes. We provide maintenance and technical support based on the agreed service plan.",
    },
    {
        question: "How can I get started with Creatif?",
        answer:
            "You can contact our team through the contact form, phone or email. We will discuss your requirements and guide you through the next steps.",
    },
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

// SCROLL ANIMATION SETTINGS
const revealProps = {
    initial: "hidden",
    whileInView: "visible",
    viewport: {
        once: true,
        amount: 0.2,
    },
};

function Contact() {
    const [isSending, setIsSending] = useState(false);
    const [submitMessage, setSubmitMessage] = useState("");
    const [submitSuccess, setSubmitSuccess] = useState(false);

    const [activeFaq, setActiveFaq] = useState(0);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
    });

    // HANDLE FORM INPUTS
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    // HANDLE EMAIL SUBMISSION
    const handleSubmit = async (e) => {
        e.preventDefault();

        setIsSending(true);
        setSubmitMessage("");

        try {
            await emailjs.send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                {
                    name: formData.name,
                    email: formData.email,
                    phone: formData.phone,
                    subject: formData.subject,
                    message: formData.message,
                },
                {
                    publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
                }
            );

            setSubmitSuccess(true);
            setSubmitMessage(
                "Thank you! Your message has been sent successfully."
            );

            setFormData({
                name: "",
                email: "",
                phone: "",
                subject: "",
                message: "",
            });

        } catch (error) {
            console.error("EmailJS error:", error);

            setSubmitSuccess(false);
            setSubmitMessage(
                "Unable to send your message. Please try again."
            );

        } finally {
            setIsSending(false);
        }
    };

    return (
        <main className="contact-page">

            {/* CONTACT HERO */}
            <section className="contact-hero">

                <motion.div
                    className="contact-hero-content"
                    initial={{
                        opacity: 0,
                        y: 40,
                    }}
                    animate={{
                        opacity: 1,
                        y: 0,
                    }}
                    transition={{
                        duration: 0.9,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                >
                    <motion.span
                        className="contact-tag"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.7 }}
                    >
                        GET IN TOUCH
                    </motion.span>

                    <motion.h1
                        initial={{ opacity: 0, y: 25 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.35, duration: 0.8 }}
                    >
                        Let's Talk About
                        <span> Your Project.</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                    >
                        Have an idea or need a digital solution for your business?
                        Let's discuss how we can help you grow.
                    </motion.p>
                </motion.div>

            </section>

            {/* CONTACT SECTION */}
            <section className="contact-section">

                <div className="contact-container">

                    {/* LEFT CONTACT DETAILS */}
                    <motion.div
                        className="contact-info"
                        variants={revealLeft}
                        {...revealProps}
                    >

                        <span className="section-label">
                            CONTACT INFORMATION
                        </span>

                        <h2>
                            Let's Start a
                            <span> Conversation</span>
                        </h2>

                        <p className="contact-info-description">
                            Have questions or want to discuss your next project?
                            Our team is ready to help you find the right solution.
                        </p>

                        {/* CONTACT DETAILS */}
                        <motion.div
                            className="contact-info-list"
                            variants={staggerContainer}
                        >

                            <motion.div
                                className="contact-info-item"
                                variants={revealChild}
                            >
                                <div className="contact-icon">
                                    <Phone />
                                </div>

                                <div>
                                    <h4>Phone Number</h4>
                                    <p>+9072272293</p>
                                </div>
                            </motion.div>

                            <motion.div
                                className="contact-info-item"
                                variants={revealChild}
                            >
                                <div className="contact-icon">
                                    <Mail />
                                </div>

                                <div>
                                    <h4>Email Address</h4>
                                    <p>creatifdigitalsolution@gmail.com</p>
                                </div>
                            </motion.div>

                            <motion.div
                                className="contact-info-item"
                                variants={revealChild}
                            >
                                <div className="contact-icon">
                                    <MapPin />
                                </div>

                                <div>
                                    <h4>Our Location</h4>
                                    <p>
                                        First Floor, CIASL Business Centre,
                                        CIAL Aero Park
                                    </p>
                                </div>
                            </motion.div>

                            <motion.div
                                className="contact-info-item"
                                variants={revealChild}
                            >
                                <div className="contact-icon">
                                    <Clock />
                                </div>

                                <div>
                                    <h4>Working Hours</h4>
                                    <p>Monday - Saturday</p>
                                </div>
                            </motion.div>

                        </motion.div>

                        {/* SOCIAL LINKS */}
                        <motion.div
                            className="contact-social"
                            variants={revealChild}
                        >
                            <h4>Follow Us</h4>

                            <div className="contact-social-links">

                                <a
                                    href="https://www.instagram.com/creatif.software.solutions/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Instagram"
                                >
                                    <FaInstagram />
                                </a>

                                <a
                                    href="https://www.facebook.com/creatifbusinesssolutions"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Facebook"
                                >
                                    <FaFacebookF />
                                </a>

                                <a
                                    href="https://www.linkedin.com/in/creatif-group-of-companies-967ab73bb/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="LinkedIn"
                                >
                                    <FaLinkedinIn />
                                </a>

                            </div>
                        </motion.div>

                    </motion.div>

                    {/* RIGHT CONTACT FORM */}
                    <motion.div
                        className="contact-form-wrapper"
                        variants={revealRight}
                        {...revealProps}
                    >

                        <div className="contact-form-heading">

                            <span className="section-label">
                                SEND US A MESSAGE
                            </span>

                            <h2>Tell Us About Your Project</h2>

                            <p>
                                Fill in the details below and our team will get
                                in touch with you.
                            </p>

                        </div>

                        {/* CONTACT FORM */}
                        <form
                            className="contact-form"
                            onSubmit={handleSubmit}
                        >

                            {/* NAME AND EMAIL */}
                            <div className="form-row">

                                <div className="form-group">
                                    <label htmlFor="contact-name">
                                        Full Name
                                    </label>

                                    <input
                                        type="text"
                                        id="contact-name"
                                        name="name"
                                        placeholder="Enter your name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="contact-email">
                                        Email Address
                                    </label>

                                    <input
                                        type="email"
                                        id="contact-email"
                                        name="email"
                                        placeholder="Enter your email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                            </div>

                            {/* PHONE AND SUBJECT */}
                            <div className="form-row">

                                <div className="form-group">
                                    <label htmlFor="contact-phone">
                                        Phone Number
                                    </label>

                                    <input
                                        type="tel"
                                        id="contact-phone"
                                        name="phone"
                                        placeholder="Enter your phone number"
                                        value={formData.phone}
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="contact-subject">
                                        Subject
                                    </label>

                                    <input
                                        type="text"
                                        id="contact-subject"
                                        name="subject"
                                        placeholder="Enter subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                            </div>

                            {/* MESSAGE */}
                            <div className="form-group">

                                <label htmlFor="contact-message">
                                    Your Message
                                </label>

                                <textarea
                                    id="contact-message"
                                    name="message"
                                    rows="6"
                                    placeholder="Tell us about your project..."
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                />

                            </div>

                            {/* SUBMIT BUTTON */}
                            <motion.button
                                type="submit"
                                className="contact-submit-btn"
                                disabled={isSending}
                                whileHover={!isSending ? { scale: 1.03 } : {}}
                                whileTap={!isSending ? { scale: 0.97 } : {}}
                            >
                                {isSending ? "Sending..." : "Send Message"}

                                {!isSending && <Send size={18} />}
                            </motion.button>

                            {/* SUCCESS / ERROR MESSAGE */}
                            {submitMessage && (
                                <p
                                    className={`contact-submit-message ${
                                        submitSuccess ? "success" : "error"
                                    }`}
                                    role="status"
                                >
                                    {submitMessage}
                                </p>
                            )}

                        </form>

                    </motion.div>

                </div>

            </section>

            {/* FAQ SECTION */}
            <section className="contact-faq-section">

                <div className="contact-faq-container">

                    {/* FAQ HEADING */}
                    <motion.div
                        className="contact-faq-heading"
                        variants={revealUp}
                        {...revealProps}
                    >

                        <span className="section-label">
                            HAVE QUESTIONS?
                        </span>

                        <h2>
                            Frequently Asked
                            <span> Questions</span>
                        </h2>

                        <p>
                            Find answers to some of the most common questions
                            about our services and solutions.
                        </p>

                    </motion.div>

                    {/* FAQ LIST */}
                    <motion.div
                        className="contact-faq-list"
                        variants={staggerContainer}
                        {...revealProps}
                    >

                        {faqs.map((faq, index) => (

                            <motion.div
                                className={`contact-faq-item ${
                                    activeFaq === index ? "active" : ""
                                }`}
                                key={index}
                                variants={revealChild}
                            >

                                <button
                                    type="button"
                                    className="contact-faq-question"
                                    onClick={() =>
                                        setActiveFaq(
                                            activeFaq === index ? -1 : index
                                        )
                                    }
                                    aria-expanded={activeFaq === index}
                                >

                                    <span>{faq.question}</span>

                                    {activeFaq === index ? (
                                        <Minus size={20} />
                                    ) : (
                                        <Plus size={20} />
                                    )}

                                </button>

                                {activeFaq === index && (
                                    <div className="contact-faq-answer">
                                        <p>{faq.answer}</p>
                                    </div>
                                )}

                            </motion.div>

                        ))}

                    </motion.div>

                </div>

            </section>

        </main>
    );
}

export default Contact;
