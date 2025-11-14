export default function OperationsSection() {
  const operationsTeam = [
    {
      id: 1,
      name: "Mounir Rayan",
      position: "Operations Director",
      image: "https://jets.partners/wp-content/uploads/2025/08/fuff.png",
      contacts: {
        linkedin: null,
        whatsapp: null,
        email: "mounir.rayan@jets.partners"
      }
    },
    {
      id: 2,
      name: "Rita Azerhouni",
      position: "Operations Specialist",
      image: "https://jets.partners/wp-content/uploads/2025/08/MPCL9340-scaled-e1754903890639.jpg",
      contacts: {
        linkedin: "https://www.linkedin.com/in/rita-azerhouni-3baa66204/",
        whatsapp: null,
        email: "rita.azerhouni@jets.partners"
      }
    }
  ];

  const imgWidth = 260;
  const imgHeight = 320;

  return (
    <section id="operations" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 md:grid-cols-5 gap-24 items-center">

          {/* LEFT IMAGE */}
          <div className="flex flex-col md:col-span-1" style={{ marginLeft: "3rem" }}>
            <div
              className="relative rounded-lg overflow-hidden shadow-lg group"
              style={{ width: imgWidth, height: imgHeight }}
            >
              <img
                src={operationsTeam[0].image}
                alt={operationsTeam[0].name}
                className="w-full h-full object-cover"
              />

              {/* HOVER OVERLAY */}
              <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center p-6 text-center text-white">
                <h3 className="text-xl font-semibold">{operationsTeam[0].name}</h3>
                <p className="text-blue-400 mb-3 text-lg">{operationsTeam[0].position}</p>
              </div>
            </div>
          </div>

          {/* CENTER IMAGE WITH GAP!! */}
          <div
            className="relative rounded-lg overflow-hidden shadow-lg group md:col-span-2"
            style={{
              width: imgWidth,
              height: imgHeight,
              marginLeft: "6rem"  // ← espace entre les deux images
            }}
          >
            <img
              src={operationsTeam[1].image}
              alt={operationsTeam[1].name}
              className="w-full h-full object-cover"
            />

            {/* ALWAYS SHOWN ICON BAR */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex space-x-3">
              {operationsTeam[1].contacts.linkedin && (
                <a
                  href={operationsTeam[1].contacts.linkedin}
                  target="_blank"
                  className="w-10 h-10 rounded-full bg-blue-700 flex items-center justify-center"
                >
                  LI
                </a>
              )}

              {operationsTeam[1].contacts.whatsapp && (
                <a
                  href={operationsTeam[1].contacts.whatsapp}
                  className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center"
                >
                  WA
                </a>
              )}
            </div>

            {/* HOVER */}
            <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-center items-center text-white p-6">
              <h3 className="text-2xl font-semibold">{operationsTeam[1].name}</h3>
              <p className="text-blue-400 mb-3 text-lg">{operationsTeam[1].position}</p>
            </div>
          </div>

          {/* RIGHT TEXT */}
          <div className="md:col-span-2 space-y-10 max-w-xl">
            <p className="text-blue-700 text-lg font-light uppercase tracking-wide">Meet our</p>

            {/* HUGE SPLIT TITLE */}
            <h2
              className="text-gray-900 font-light leading-none"
              style={{ fontSize: "7rem", lineHeight: "0.85" }}
            >
              OPERATI
              <br />
              ONS
            </h2>

            <p className="text-gray-700 text-lg leading-relaxed mt-6">
              Our operations team is the backbone of every mission.
              They coordinate flights, permits, crew logistics, aircraft positioning,
              and last-minute solutions with total control and precision.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
