import { Link } from 'react-router-dom';

function CertificationsPage() {
  const certifications = [
    {
      title: 'Meta Front-End Developer Certificate',
      provider: 'Coursera',
      year: '2024',
    },
    {
      title: 'JavaScript Algorithms and Data Structures',
      provider: 'freeCodeCamp',
      year: '2023',
    },
    {
      title: 'UI/UX Design Fundamentals',
      provider: 'Google UX Design',
      year: '2023',
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <Link to="/" className="text-green-400 underline mb-4 inline-block">&larr; Back to Home</Link>

      <h1 className="text-3xl font-bold mb-6 text-yellow-300">My Certifications</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {certifications.map((cert, index) => (
          <div key={index} className="bg-gray-900 rounded-lg p-4 border border-green-500 shadow-lg">
            <h2 className="text-xl font-semibold text-green-300">{cert.title}</h2>
            <p className="text-gray-300">Issued by: {cert.provider}</p>
            <p className="text-gray-400 text-sm">Year: {cert.year}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CertificationsPage;
