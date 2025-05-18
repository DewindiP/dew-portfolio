import { Link } from 'react-router-dom';

const certifications = [
  {
    title: 'Angular',
    image: '/certificates/html.png', 
    credentialUrl: 'https://www.sololearn.com/certificates/CC-CYDGHUH6',
  },
  {
    title: 'JavaScript Intermediate',
    image: '/certificates/css.png',
    credentialUrl: 'https://www.sololearn.com/certificates/CC-RUG7VKIJ',
  },
  {
    title: 'Web Development',
    image: '/certificates/angular.png',
    credentialUrl: 'https://www.sololearn.com/certificates/CC-EYFXM0QT',
  },
   {
    title: 'Front-End Web Development',
    image: '/certificates/angular.png',
    credentialUrl: 'https://www.sololearn.com/certificates/CC-EYFXM0QT',
  },
   {
    title: 'Introduction to CSS',
    image: './certificates/Introduction to CSS.jpeg',
    credentialUrl: 'https://api2.sololearn.com/v2/certificates/CC-0NFHD7VP/image/png?t=638580267024966890',
  },
   {
    title: 'Introduction to HTML',
    image: '/certificates/angular.png',
    credentialUrl: 'https://api2.sololearn.com/v2/certificates/CC-JFKKQFIQ/image/png?t=638417169423801710',
  },
  {
    title: 'Introduction to Python',
    image: '/certificates/angular.png',
    credentialUrl: 'https://api2.sololearn.com/v2/certificates/CC-CKKQN5ES/image/png?t=638405600767807670',
  },
  {
    title: 'Introdution to Java',
    image: '/certificates/angular.png',
    credentialUrl: 'https://api2.sololearn.com/v2/certificates/CC-Z0DIBVA2/image/png?t=638423196350450530',
  },
  {
    title: 'Web Design for Beginners',
    image: '/certificates/angular.png',
    credentialUrl: 'https://api2.sololearn.com/v2/certificates/CC-JFKKQFIQ/image/png?t=638417169423801710',
  },
  {
    title: 'Programming Foundations: Beyond the Fundamentals',
    image: '/certificates/angular.png',
    credentialUrl: 'https://www.linkedin.com/learning/certificates/c66122169b28610aab935dccc4e77e08966b920b6037946bdd5e28787849e35f',
  },
  {
    title: 'Career Essentials in Software Development by Microsoft and LinkedIn',
    image: '/certificates/angular.png',
    credentialUrl: 'https://www.linkedin.com/learning/certificates/7293ae43a8f8cccc418c623dbb80ae8a5bb915a5dbe14b75f896cde748b4510d',
  },
   {
    title: 'Introduction to Career Skills in Software Development',
    image: '/certificates/angular.png',
    credentialUrl: 'https://www.linkedin.com/learning/certificates/0d3f2dc715477dcdcb4d4838309b4407cd1ea09e81ab2d6d3278155583cc6586?trk=share_certificate',
  },
   {
    title: 'Programming Foundations: Fundamentals',
    image: '/certificates/angular.png',
    credentialUrl: 'https://www.linkedin.com/learning/certificates/f1f09f00d618480be60b4eeb914c6f7b75aaa25b2f5400f68ec0e0cd36b38813',
  },
   {
    title: ' Introduction to Graphic Design; Basics of UI/UX',
    image: '/certificates/angular.png',
    credentialUrl: 'https://certificates.simplicdn.net/share/7888463_78834731739209338406.pdf',
  },
  // Add more certificates as needed
];

function CertificationsPage() {
  return (
    <div className="min-h-screen bg-richBlackGreen text-black p-6">
      <Link to="/" className="text-green-700 underline mb-4 inline-block">&larr; Back to Home</Link>
      <h1 className="text-3xl font-bold mb-6 text-yellow-900">My Certifications</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {certifications.map((cert, idx) => (
          <div
            key={idx}
            className="relative rounded-xl overflow-hidden border border-yellow-300 shadow-lg bg-white group"
          >
            <img
              src={cert.image}
              alt={cert.title}
              className="w-full h-64 object-contain bg-white transition-transform duration-300 group-hover:scale-105"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-yellow-100 bg-opacity-80 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="text-xl font-bold text-center text-gray-800 px-4 mb-4">
                {cert.title}
              </div>
              <a
                href={cert.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-2 rounded-lg bg-yellow-300 text-brown-900 font-bold text-lg shadow hover:bg-yellow-400 transition"
              >
                View
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CertificationsPage;