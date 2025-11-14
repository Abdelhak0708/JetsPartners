export default function ManagementSection() {
  const managementTeam = [
    {
      id: 1,
      name: "Yassine El Moussi",
      position: "Chief Executive Officer",
      description:
        "With over 15 years in private aviation, I lead our sales and executive teams with the same passion that sparked my career. My golden rule is to remember that operators are my key assets, and that you cannot survive in this wilderness by yourself.",
      image: "https://jets.partners/wp-content/uploads/2025/08/MPCL9327-scaled-e1754902216185.jpg",
      linkedin: "https://www.linkedin.com/in/yassine-el-moussi-51aba660/",
      email: "yassin.elmoussi@jets.partners",
      phone: "+19739328950",
    },
    {
      id: 2,
      name: "Younes Ezzaki",
      position: "Chief Marketing Officer",
      description:
        "With a sharp eye for brand strategy refined in elite HNWI circles for 15 years, I ensure every team member reflects the company’s vision, expertise, and legacy, moving in perfect harmony.",
      image: "https://jets.partners/wp-content/uploads/2025/08/MPCL9512-1-scaled-e1754902277991.jpg",
      linkedin: "https://www.linkedin.com/in/younesezzaki/",
      email: "younes.ezzaki@jets.partners",
      phone: "+14075281226",
    },
    {
      id: 3,
      name: "Frederic Perez",
      position: "Chief Operations Manager",
      description:
        "I try to let my 24-year track record speak for itself: spearheading FBO startups, driving significant revenue growth in private aviation, and consistently expanding operational capabilities through strategic partnerships and negotiation.",
      image: "https://jets.partners/wp-content/uploads/2025/08/MPCL9409-scaled-e1754903918680.jpg",
      linkedin: "https://www.linkedin.com/in/fr%C3%A9d%C3%A9ric-perez-44809229/",
      email: "frederic.perez@jets.partners",
      phone: "+14075281264",
    },
    {
      id: 4,
      name: "Frédéric Yassine",
      position: "Chief Financial Officer",
      description:
        "I combine a robust background in aviation finance with strategic thinking to optimize our operations, ensuring growth, compliance, and financial stability in every venture.",
      image: "https://jets.partners/wp-content/uploads/2025/08/MPCL9471-scaled-e1754904587665.jpg",
      linkedin: "https://www.linkedin.com/in/fr%C3%A9d%C3%A9ric-yassine-12345678/",
      email: "frederic.yassine@jets.partners",
      phone: "+14075281267",
    },
  ];

  return (
    <section id="management" className="py-20 bg-background-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left side - Content */}
          <div className="flex flex-col justify-center space-y-6">
            <p className="text-accent-blue text-lg font-light tracking-wider uppercase">
              Meet our
            </p>
            <h2 className="text-5xl md:text-6xl font-light text-primary-dark leading-tight">
              MANAGEMENT
            </h2>
            <p className="text-primary-medium text-lg leading-relaxed">
              Our management team brings together decades of operational expertise across private aviation. Each leader combines deep industry knowledge with hands-on execution.
            </p>
          </div>

          {/* Right side - Team Grid */}
          <div className="grid grid-cols-2 gap-6">
            {managementTeam.map((member) => (
              <div
                key={member.id}
                className="group relative overflow-hidden bg-primary-dark aspect-[3/4] hover:shadow-2xl transition-all duration-300 cursor-pointer"
              >
                {/* Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{
                    backgroundImage: `url('${member.image}')`,
                  }}
                />

                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-end text-white">
                  <h3 className="text-xl font-medium mb-1">{member.name}</h3>
                  <p className="text-sm text-gray-300 mb-2">{member.position}</p>
                  <p className="text-xs mb-2">{member.description}</p>
                  <div className="flex flex-col space-y-1 text-xs">
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline"
                    >
                      LinkedIn
                    </a>
                    <span>{member.email}</span>
                    <span>{member.phone}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
