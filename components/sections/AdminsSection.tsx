export default function AdminsSection() {
  const adminTeam = [
    {
      id: 1,
      name: "Salim El Bouzidi",
      position: "Account Manager",
      image: "https://jets.partners/wp-content/uploads/2025/09/MPCL9925.jpg",
      contacts: {
        linkedin: "https://www.linkedin.com/in/salim-el-bouzidi-219837206/",
        email: "salim@bgm.ma",
      },
    },
    {
      id: 2,
      name: "Mohamed Ali Ourihi",
      position: "Full Stack Developer",
      image: "https://jets.partners/wp-content/uploads/2025/10/kpdkzpd-scaled.jpg",
      contacts: {
        linkedin: "https://www.linkedin.com/in/ali-ourihi-184281270/",
        email: "mohamedali.ourihi@jets.partners",
      },
    },
    {
      id: 3,
      name: "Ismail Nouamani",
      position: "HR & Admin Director",
      image: "https://jets.partners/wp-content/uploads/2025/09/MPCL0053-3-scaled-e1759159993275-680x1024.jpg",
      contacts: {
        linkedin: "https://www.linkedin.com/in/ismail-nouamani-611a47196/",
        email: "ismail@bgm.ma",
      },
    },
  ];

  const imgWidth = 240;
  const imgHeight = 300;

  const MemberCard = ({ member, large }) => (
    <div
      className={`relative rounded-lg overflow-hidden shadow-lg group ${large ? "md:col-span-2" : ""}`}
      style={{ width: imgWidth, height: imgHeight }}
    >
      <img
        src={member.image}
        alt={member.name}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center p-6 text-center text-white">
        <h3 className={`font-semibold ${large ? "text-2xl" : "text-xl"}`}>{member.name}</h3>
        <p className="text-blue-400 mb-3 text-lg">{member.position}</p>

        <div className="flex space-x-4">
          {/* LinkedIn */}
          <a
            href={member.contacts.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full border border-white flex items-center justify-center hover:bg-white hover:text-blue-700 transition"
            aria-label="LinkedIn"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2"
              viewBox="0 0 24 24" className="w-6 h-6 text-white">
              <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.5 10.28h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.38v4.59h-3v-9h2.88v1.23h.04c.4-.76 1.37-1.56 2.82-1.56 3.02 0 3.58 1.99 3.58 4.58v4.75z"/>
            </svg>
          </a>

          {/* Email */}
          <a
            href={`mailto:${member.contacts.email}`}
            className="w-10 h-10 rounded-full border border-white flex items-center justify-center hover:bg-white hover:text-red-600 transition"
            aria-label="Email"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2"
              viewBox="0 0 24 24" className="w-6 h-6 text-white">
              <path d="M12 12.713l-11.99-7.713h23.98l-11.99 7.713zm0 2.574l-12-7.713v12.426h24v-12.426l-12 7.713z"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );

  return (
    <section id="admins" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 items-center">

          {/* Colonne gauche */}
          <div className="flex flex-col space-y-6 md:col-span-1">
            <MemberCard member={adminTeam[0]} />
            <MemberCard member={adminTeam[2]} />
          </div>

          {/* Centre */}
          <MemberCard member={adminTeam[1]} large />

          {/* Texte */}
          <div className="md:col-span-2 space-y-6 max-w-xl">
            <p className="text-blue-700 text-lg font-light uppercase tracking-wide">Meet our</p>
            <h2 className="text-6xl font-light leading-tight text-gray-900">ADMINS</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              They provide the backbone of our daily execution and the infrastructure that keeps it running.
              Our administrative team safeguards compliance, coordinates documentation and schedules,
              and maintains clear communication across departments.
              Alongside them, our full-stack developer builds and maintains the internal tools and
              client-facing systems that streamline workflows, protect data, and keep information flowing in real time.
              Together, they deliver the structure, reliability, and technology every mission depends on.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
