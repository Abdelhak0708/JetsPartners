export default function MarketingSection() {
  const marketingTeam = [
    {
      id: 1,
      name: "Fadwa Hamdaoui",
      position: "Digital Marketing Manager",
      image: "https://jets.partners/wp-content/uploads/2025/08/MPCL9457-scaled-e1754903971227.jpg",
      contacts: {
        linkedin: "https://www.linkedin.com/in/fadwa-hamdaoui/",
        email: "fadwa.hamdaoui@jets.partners"
      }
    },
    {
      id: 2,
      name: "Mehdi Maarak",
      position: "Social Media Manager",
      image: "https://jets.partners/wp-content/uploads/2025/08/MPCL9499-scaled-e1754903989764.jpg",
      contacts: {
        linkedin: "https://www.linkedin.com/in/mehdi-maarak-b34465158/",
        email: "mehdi.maarak@jets.partners"
      }
    },
    {
      id: 3,
      name: "Nouhaila Islah",
      position: "Creative Director",
      image: "https://jets.partners/wp-content/uploads/2025/08/nouhialad-e1754904014231.png",
      contacts: {
        linkedin: "https://www.linkedin.com/in/nouhaila-islah-5389b9210/",
        email: "nouhaila.islah@jets.partners"
      }
    },
    {
      id: 4,
      name: "Lina Ibrahimi",
      position: "Social Media Manager",
      image: "https://jets.partners/wp-content/uploads/2025/09/right-one.jpg",
      contacts: {
        linkedin: "https://www.linkedin.com/in/lina-ibrahimi-b6b810198/",
        email: "lina@jets.partners"
      }
    }
  ];

  const imgWidth = 260;
  const imgHeight = 330;

  return (
    <section id="marketing" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex gap-24 items-start">

          {/* TEXTE à gauche */}
          <div className="max-w-xl flex-shrink-0">
            <p className="text-blue-700 text-lg font-light uppercase mb-2">Meet our</p>

            <h2
              className="text-gray-900 font-light"
              style={{ fontSize: "7rem", lineHeight: "0.8" }}
            >
              MARKETI<br />NG
            </h2>

            <p className="text-gray-700 text-lg mt-8 leading-relaxed max-w-md">
              Our marketing team drives visibility, positioning, and lead generation across all service lines.
              They understand the nuances of the private aviation market and build strategies that speak to the
              right audience, in the right place, at the right moment.
            </p>
          </div>

          {/* GRILLE IMAGES 2x2 à droite */}
          <div
            className="grid grid-cols-2 gap-x-14 gap-y-10"
            style={{ width: imgWidth * 2 + 56 }}
          >
            {marketingTeam.map((member) => (
              <ImageCard key={member.id} member={member} imgWidth={imgWidth} imgHeight={imgHeight} />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

function ImageCard({ member, imgWidth, imgHeight }) {
  return (
    <div
      className="relative rounded-lg overflow-hidden shadow-lg group"
      style={{ width: imgWidth, height: imgHeight }}
    >
      <img src={member.image} className="w-full h-full object-cover" alt={member.name} />

      {/* Overlay qui apparaît au hover */}
      <div
        className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100
        flex flex-col justify-center items-center transition duration-300 text-white p-4 space-y-3"
      >
        <h3 className="text-xl font-semibold">{member.name}</h3>
        <p className="text-blue-400 text-lg">{member.position}</p>

        {/* Icônes LinkedIn et Email */}
        <div className="flex space-x-6 mt-2">
          {member.contacts.linkedin && (
            <a
              href={member.contacts.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-blue-400 transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 24h5v-14H0v14zM7.5 10h4.7v1.8h.1c.7-1.3 2.4-2.7 4.9-2.7 5.2 0 6.2 3.4 6.2 7.9V24h-5v-7.4c0-1.7 0-3.9-2.4-3.9-2.4 0-2.8 1.9-2.8 3.8V24h-5v-14z" />
              </svg>
            </a>
          )}

          {member.contacts.email && (
            <a
              href={`mailto:${member.contacts.email}`}
              aria-label="Email"
              className="hover:text-blue-400 transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m0 8V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2h14a2 2 0 002-2z" />
              </svg>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
