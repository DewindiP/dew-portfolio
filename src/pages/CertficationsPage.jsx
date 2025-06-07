import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeIn } from "../framerMotion/variants";

const certifications = [
  {
    title: "Programming Foundations: Beyond the Fundamentals",
    image:
      "/images/certificates/Programming Foundations Beyond the Fundamentals.jpeg",
    credentialUrl:
      "https://www.linkedin.com/learning/certificates/c66122169b28610aab935dccc4e77e08966b920b6037946bdd5e28787849e35f",
  },
  {
    title:
      "Career Essentials in Software Development by Microsoft and LinkedIn",
    image:
      "/images/certificates/Career Essentials in Software Development by Microsoft and LinkedIn.jpeg",
    credentialUrl:
      "https://www.linkedin.com/learning/certificates/7293ae43a8f8cccc418c623dbb80ae8a5bb915a5dbe14b75f896cde748b4510d",
  },
  {
    title: "Introduction to Career Skills in Software Development",
    image:
      "/images/certificates/Introduction to Career Skills in Software Development.jpeg",
    credentialUrl:
      "https://www.linkedin.com/learning/certificates/0d3f2dc715477dcdcb4d4838309b4407cd1ea09e81ab2d6d3278155583cc6586?trk=share_certificate",
  },
  {
    title: "Programming Foundations: Fundamentals",
    image: "/images/certificates/Programming Foundations Fundamentals.jpeg",
    credentialUrl:
      "https://www.linkedin.com/learning/certificates/f1f09f00d618480be60b4eeb914c6f7b75aaa25b2f5400f68ec0e0cd36b38813",
  },
  {
    title: "Web Design for Beginners",
    image: "/images/certificates/web design for beginners.png",
    credentialUrl:
      "https://drive.google.com/file/d/1LucLHNC-uFCJiMZHc-7_sYRdV5r_kc8s/view?usp=sharing",
  },
  {
    title: "Front-End Web Development",
    image: "/images/certificates/Front-End  web development.png",
    credentialUrl:
      "https://drive.google.com/file/d/11bOYtuLCjWlNKHt1KKpe0YXFdGTF3EJP/view?usp=sharing",
  },
  {
    title: "Angular",
    image: "/images/certificates/Angular.jpg",
    credentialUrl: "https://www.sololearn.com/certificates/CC-CYDGHUH6",
  },
  {
    title: "JavaScript Intermediate",
    image: "/images/certificates/javascript intermediate.jpg",
    credentialUrl: "https://www.sololearn.com/certificates/CC-RUG7VKIJ",
  },
  {
    title: "Web Development",
    image: "/images/certificates/web development.jpg",
    credentialUrl: "https://www.sololearn.com/certificates/CC-EYFXM0QT",
  },
  {
    title: "Introduction to CSS",
    image: "/images/certificates/Introduction to CSS.jpeg",
    credentialUrl:
      "https://www.sololearn.com/en/certificates/CC-0NFHD7VP",
  },
  {
    title: "Introduction to HTML",
    image: "./images/certificates/Introduction to HTML.jpeg",
    credentialUrl:
      "https://www.sololearn.com/en/certificates/CC-JFKKQFIQ",
  },
  {
    title: "Introduction to Python",
    image: "/images/certificates/Introduction to Python.jpeg",
    credentialUrl:
      "https://www.sololearn.com/en/certificates/CC-CKKQN5ES",
  },
  {
    title: "Introdution to Java",
    image: "/images/certificates/Introduction to Java.jpeg",
    credentialUrl:
      "https://www.sololearn.com/en/certificates/CC-Z0DIBVA2",
  },
  {
    title: " Introduction to Graphic Design; Basics of UI/UX",
    image: "/images/certificates/introduction to graphic design.png",
    credentialUrl:
      "https://certificates.simplicdn.net/share/7888463_78834731739209338406.pdf",
  },
];

function CertificationsPage() {
  return (
    <div className="min-h-screen bg-richBlackGreen text-black pt-24 px-4 sm:px-6 md:px-8">
      <Link to="/" className="text-forestGreen underline mb-4 inline-block">
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

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-6xl mx-auto">
        {certifications.map((cert, idx) => (
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
