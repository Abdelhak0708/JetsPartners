export default function SalesSection() {
  const salesTeam = [
    {
      id: 5,
      name: "Samy Yemmas",
      position: "Account Manager",
      image: "https://jets.partners/wp-content/uploads/2025/08/MPCL9375-scaled-e1754903997969.jpg",
      contacts: {
        linkedin: "https://www.linkedin.com/in/samy-yemmas-184358211/",
        whatsapp: "https://wa.me/1234567890", // Remplace par le vrai numéro
      },
    },
    {
      id: 7,
      name: "Meriem Aboulouafa",
      position: "Account Manager",
      image: "https://jets.partners/wp-content/uploads/2025/08/MPCL9578.jpg",
      contacts: {
        linkedin: "https://www.linkedin.com/in/m-aboulouafa/",
        whatsapp: "https://wa.me/1234567890",
      },
    },
    {
      id: 6,
      name: "Youssef Fazazi",
      position: "Account Manager",
      image: "https://jets.partners/wp-content/uploads/2025/08/MPCL9983-1-scaled-e1754904042722.jpg",
      contacts: {
        linkedin: "https://www.linkedin.com/in/youssef-fazazi-idrissi-14184b236/",
        whatsapp: "https://wa.me/1234567890",
      },
    },
  ];

  const imgWidth = 240;
  const imgHeight = 300;

  return (
    <section id="sales" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 items-center">
          {/* Colonne gauche */}
          <div className="flex flex-col space-y-6 md:col-span-1" style={{ marginLeft: '1.5rem' }}>
            {[salesTeam[0], salesTeam[2]].map((member) => (
              <div
                key={member.id}
                className="relative rounded-lg overflow-hidden shadow-lg group"
                style={{ width: imgWidth, height: imgHeight }}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center p-6 text-center text-white">
                  <h3 className="text-xl font-semibold">{member.name}</h3>
                  <p className="text-blue-400 mb-3 text-lg">{member.position}</p>
                  <div className="flex space-x-4">
                    <a
                      href={member.contacts.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-blue-700 flex items-center justify-center hover:bg-blue-800 transition"
                      aria-label="LinkedIn"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6 text-white">
                        <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.5 10.28h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.38v4.59h-3v-9h2.88v1.23h.04c.4-.76 1.37-1.56 2.82-1.56 3.02 0 3.58 1.99 3.58 4.58v4.75z"/>
                      </svg>
                    </a>
                    <a
                      href={member.contacts.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center hover:bg-green-600 transition"
                      aria-label="WhatsApp"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6 text-white">
                        <path d="M20.52 3.48a11.87 11.87 0 0 0-16.7 16.7l-1.9 5.49 5.55-1.83a11.87 11.87 0 0 0 13.05-20.36zm-8.52 17.52c-3.24 0-6.13-1.7-7.77-4.28l-.56-.96-3.27 1.08 1.1-3.38-.58-.97a9.938 9.938 0 1 1 11.08 8.51zM17.65 14.85c-.29-.15-1.7-.84-1.96-.94s-.45-.15-.64.15-.74.94-.91 1.14-.33.22-.62.07c-.29-.15-1.22-.45-2.33-1.44-.86-.77-1.44-1.72-1.61-2-.17-.29-.02-.44.13-.59.13-.14.29-.33.44-.49.15-.15.2-.26.29-.43.09-.17.05-.31-.02-.43-.07-.12-.64-1.55-.88-2.13-.23-.56-.47-.48-.64-.49-.17 0-.37-.02-.57-.02s-.43.06-.66.31c-.23.24-.89.87-.89 2.12s.91 2.46 1.04 2.63c.13.17 1.8 2.75 4.36 3.86.61.26 1.09.41 1.46.53.61.19 1.16.16 1.6.1.49-.06 1.7-.69 1.94-1.36.24-.67.24-1.25.17-1.36-.07-.11-.26-.17-.55-.32z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Centre image */}
          <div className="relative rounded-lg overflow-hidden shadow-lg group md:col-span-2" style={{ width: imgWidth, height: imgHeight, marginLeft: '2rem' }}>
            <img
              src={salesTeam[1].image}
              alt={salesTeam[1].name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center p-6 text-center text-white">
              <h3 className="text-2xl font-semibold">{salesTeam[1].name}</h3>
              <p className="text-blue-400 mb-3 text-lg">{salesTeam[1].position}</p>
              <div className="flex space-x-4">
                <a
                  href={salesTeam[1].contacts.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-blue-700 flex items-center justify-center hover:bg-blue-800 transition"
                  aria-label="LinkedIn"
                >
                  {/* LinkedIn SVG identique */}
                </a>
                <a
                  href={salesTeam[1].contacts.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center hover:bg-green-600 transition"
                  aria-label="WhatsApp"
                >
                  {/* WhatsApp SVG identique */}
                </a>
              </div>
            </div>
          </div>

          {/* Texte côté droit */}
          <div className="md:col-span-2 space-y-6 max-w-xl">
            <p className="text-blue-700 text-lg font-light uppercase tracking-wide">Meet our</p>
            <h2 className="text-5xl font-light leading-tight text-gray-900">SALES</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              Our sales team handles requests with speed, accuracy, and full market visibility.
              From sourcing to negotiation, they operate with discretion and control,
              managing complex acquisitions and placements across private, corporate, and government clients.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
