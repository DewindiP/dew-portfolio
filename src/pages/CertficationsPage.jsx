import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeIn } from "../framerMotion/variants";
import HeroGradient from "../components/heroSection/HeroGradient";
import React, { useState } from "react";

const certifications = [
  {
    title: "Responsive Web Design",
    image:
      "/images/certificates/www.freecodecamp.org_certification_dewp_responsive-web-design(iPad Pro).png",
    credentialUrl:
      "https://www.freecodecamp.org/certification/dewp/responsive-web-design",
    category: "Web Development",
  },
  {
    title: "From Relational Model (SQL) to MongoDB's Document Model",
    image:
      "/images/certificates/from-relational-model-sql-to-mongodb-s-document-mod.png",
    credentialUrl:
      "https://ti-user-certificates.s3.amazonaws.com/...",
    category: "Database Skills",
  },
  {
    title: "Programming Foundations: Beyond the Fundamentals",
    image:
      "/images/certificates/Programming Foundations Beyond the Fundamentals.jpeg",
    credentialUrl:
      "https://www.linkedin.com/learning/certificates/...",
    category: "Programming",
  },
  {
    title: "Career Essentials in Software Development by Microsoft and LinkedIn",
    image:
      "/images/certificates/Career Essentials in Software Development by Microsoft and LinkedIn.jpeg",
    credentialUrl:
      "https://www.linkedin.com/learning/certificates/...",
    category: "Programming",
  },
  {
    title: "Introduction to Career Skills in Software Development",
    image:
      "/images/certificates/Introduction to Career Skills in Software Development.jpeg",
    credentialUrl:
      "https://www.linkedin.com/learning/certificates/...",
    category: "Programming",
  },
  {
    title: "Programming Foundations: Fundamentals",
    image: "/images/certificates/Programming Foundations Fundamentals.jpeg",
    credentialUrl:
      "https://www.linkedin.com/learning/certificates/...",
    category: "Programming",
  },
  {
    title: "Web Design for Beginners",
    image: "/images/certificates/web design for beginners.png",
    credentialUrl:
      "https://drive.google.com/file/d/...",
    category: "Web Development",
  },
  {
    title: "Front-end for Beginners",
    image: "/images/certificates/Front-end for Beginners.jpg",
    credentialUrl:
      "https://www.sololearn.com/certificates/...",
    category: "Web Development",
  },
  {
    title: "Front-End Web Development",
    image: "/images/certificates/Front-End  web development.png",
    credentialUrl:
      "https://drive.google.com/file/d/...",
    category: "Web Development",
  },
  {
    title: "Coding Foundations",
    image: "/images/certificates/Coding Foundations.jpg",
    credentialUrl:
      "https://www.sololearn.com/certificates/...",
    category: "Programming",
  },
  {
    title: "Angular",
    image: "/images/certificates/Angular.jpg",
    credentialUrl: "https://www.sololearn.com/certificates/...",
    category: "Web Development",
  },
  {
    title: "Introduction to JavaScript",
    image: "/images/certificates/Introduction to JavaScript.jpg",
    credentialUrl: "https://www.sololearn.com/certificates/...",
    category: "Web Development",
  },
  {
    title: "JavaScript Intermediate",
    image: "/images/certificates/javascript intermediate.jpg",
    credentialUrl: "https://www.sololearn.com/certificates/...",
    category: "Web Development",
  },
  {
    title: "Web Development",
    image: "/images/certificates/web development.jpg",
    credentialUrl: "https://www.sololearn.com/certificates/...",
    category: "Web Development",
  },
  {
    title: "Introduction to CSS",
    image: "/images/certificates/Introduction to CSS.jpeg",
    credentialUrl:
      "https://www.sololearn.com/en/certificates/...",
    category: "Web Development",
  },
  {
    title: "Introduction to HTML",
    image: "./images/certificates/Introduction to HTML.jpeg",
    credentialUrl:
      "https://www.sololearn.com/en/certificates/...",
    category: "Web Development",
  },
  {
    title: "Introduction to Python",
    image: "/images/certificates/Introduction to Python.jpeg",
    credentialUrl:
      "https://www.sololearn.com/en/certificates/...",
    category: "Programming",
  },
  {
    title: "Introduction to Java",
    image: "/images/certificates/Introduction to Java.jpeg",
    credentialUrl:
      "https://www.sololearn.com/en/certificates/...",
    category: "Programming",
  },
  {
    title: "SEO with AI",
    image: "/images/certificates/SEO with AI.png",
    credentialUrl:
      "https://www.sololearn.com/certificates/...",
    category: "AI Skills",
  },
  {
    title: "Brainstorm with AI",
    image: "/images/certificates/Brainstorm with AI.jpg",
    credentialUrl:
      "https://www.sololearn.com/certificates/...",
    category: "AI Skills",
  },
  {
    title: "Prompt Engineering",
    image: "/images/certificates/Prompt Engineering.jpg",
    credentialUrl:
      "https://www.sololearn.com/certificates/...",
    category: "AI Skills",
  },
  {
    title: "Introduction to Graphic Design; Basics of UI/UX",
    image: "/images/certificates/introduction to graphic design.png",
    credentialUrl:
      "https://certificates.simplicdn.net/share/...",
    category: "UI/UX Design",
  },
];

function CertificationsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    "Web Development",
    "Database Skills",
    "Programming",
    "AI Skills",
    "UI/UX Design",
  ];

  const filteredCertifications =
    selectedCategory === "All"
      ? certifications
      : certifications.filter((cert) => cert.category === selectedCategory);

  return (
    <div className="min-h-screen text-black pt-24 px-4 sm:px-6 md:px-8">
      <HeroGradient />
      <Link to="/" className=" underline mb-4 inline-block">
        &larr;
      </Link>
      <motion.h1
        variants={fadeIn("up", 0.4)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="text-3xl font-bold mb-6 text-mutedGold"
      >
        My Certifications
      </motion.h1>

      {/* Filter Buttons */}
      <div className="flex gap-4 mb-6">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-lg border ${
              selectedCategory === category
                ? "bg-richMetallicGold text-ivory"
                : "bg-ivory text-richMetallicGold hover:bg-deepForestGreen hover:text-ivory"
            } transition`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Filtered Certifications */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-6xl mx-auto">
        {filteredCertifications.map((cert, idx) => (
          <motion.div
            key={idx}
            variants={fadeIn("up", idx * 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.2 }}
            className="relative rounded-xl overflow-hidden border border-richMetallicGold shadow-lg bg-ivory group"
          >
            <img
              src={cert.image}
              alt={cert.title}
              className="w-full h-40 xs:h-48 sm:h-56 md:h-64 object-contain bg-ivory transition-transform duration-300 group-hover:scale-105"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-deepForestGreen bg-opacity-80 flex flex-col items-center justify-center opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300 p-2">
              <div className="text-base xs:text-lg sm:text-xl font-bold text-center text-richMetallicGold px-2 sm:px-4 mb-3 sm:mb-4">
                {cert.title}
              </div>
              <a
                href={cert.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-lg bg-mutedGold text-ivory font-bold text-base sm:text-lg shadow hover:bg-mutedGold transition"
              >
                View
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default CertificationsPage;