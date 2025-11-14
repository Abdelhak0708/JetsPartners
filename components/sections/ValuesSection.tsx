import { UsersRound, Crosshair, Eye } from "lucide-react";

export default function ValuesSection() {
  const values = [
    {
      id: 1,
      icon: UsersRound,
      title: "Advisory",
      description:
        "We operate with a mission-first mindset. Every recommendation we make is based on the client's mission.",
    },
    {
      id: 2,
      icon: Crosshair,
      title: "Precision",
      description:
        "From permits to dispatch, we manage each step with accuracy, clarity, and full control especially under pressure.",
    },
    {
      id: 3,
      icon: Eye,
      title: "Transparency",
      description:
        "We prioritize clear communication, honest pricing, and operational accountability across every mission.",
    },
  ];

  return (
    <section id="values" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* --- TITRE DÉCALÉ À DROITE --- */}
        <div className="mb-20 md:pl-40">
          <p className="text-accent-blue text-base md:text-lg font-light tracking-widest uppercase mb-3">
            What sets us apart
          </p>

          <h2 className="text-6xl md:text-7xl font-light text-primary-dark tracking-tight leading-tight max-w-4xl">
            OUR VALUES
          </h2>
        </div>

        {/* --- VALEURS --- */}
        <div className="grid md:grid-cols-3 gap-16">
          {values.map((value) => (
            <div
              key={value.id}
              className="flex flex-col items-center text-center space-y-6 
              group transition-transform duration-300 hover:-translate-y-2"
            >
              <div
                className="w-24 h-24 rounded-full bg-white shadow-md 
                flex items-center justify-center 
                border border-accent-blue/20 
                group-hover:shadow-xl group-hover:bg-accent-blue/10
                transition-all duration-300"
              >
                <value.icon className="w-12 h-12 text-accent-blue" strokeWidth={1.3} />
              </div>

              <h3 className="text-2xl font-light text-primary-dark tracking-wide">
                {value.title}
              </h3>

              <p className="text-primary-medium leading-relaxed max-w-xs">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
