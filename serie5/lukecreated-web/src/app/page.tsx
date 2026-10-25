// import { getPortfolioData } from "@/lib/db";
import ThemeToggle from "@/components/ThemeToggle"; // client component for dark mode

// export const revalidate = 60; // ISR: revalidate every 60 seconds or use on-demand revalidation

export default async function Home() {
  // const data = await getPortfolioData();
  const data = {
    profile: {
      name: "LukeCreated",
      title: "Full Stack Developer",
      summary:
        "Passionate developer with experience in building web applications using modern technologies. Skilled in React, Node.js, and database management.",
    },
    socials: [
      {
        id: "github",
        platform: "GitHub",
        url: "https://github.com/n-luke-th/",
      },
      {
        id: "linkedin",
        platform: "LinkedIn",
        url: "https://linkedin.com/in/aium-luke",
      },
      { id: "email", platform: "Email", url: "mailto:contact@lukecreated.com" },
    ],
    skills: [
      {
        category: "Frontend",
        items: ["React", "TypeScript", "Tailwind CSS"],
      },
      {
        category: "Backend",
        items: ["Node.js", "Express", "MongoDB"],
      },
    ],
    experience: [
      {
        id: 1,
        role: "Full Stack Developer",
        company: "Tech Corp",
        highlights: [
          "Developed and maintained web applications using React and Node.js",
          "Collaborated with design team to implement responsive UI components",
        ],
      },
    ],
  };

  return (
    <main className="pt-24 max-w-5xl mx-auto px-6 space-y-20 font-mono">
      {/* Navbar */}
      <header className="fixed top-0 left-0 w-full bg-white/80 dark:bg-neutral-950/80 backdrop-blur border-b border-neutral-200 dark:border-neutral-800 z-50">
        <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-lg font-semibold tracking-tight">~/kittipich</h1>
          <ThemeToggle />
        </div>
      </header>

      {/* Header Title */}
      <section>
        <h1 className="text-2xl mb-1 pb-3 text-center font-semibold">
          {data.profile.name}
        </h1>
        <h4 className="text-center text-neutral-500">{data.profile.title}</h4>
      </section>

      {/* Social & Contact */}
      <section>
        <h2 className="text-xl mb-4 border-b border-neutral-300 dark:border-neutral-700 pb-3">
          Social & Contact
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {data.socials.map((item: any) => (
            <div key={item.id}>
              <a
                className="font-semibold mb-1 underline underline-offset-1"
                href={item.url}
                target="_blank"
                rel="noreferrer"
              >
                {item.platform}
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Summary */}
      <section>
        <h2 className="text-xl mb-4 border-b border-neutral-300 dark:border-neutral-700 pb-3">
          Summary
        </h2>
        <p className="leading-relaxed text-neutral-600 dark:text-neutral-300">
          {data.profile.summary}
        </p>
      </section>

      {/* Technical Skills */}
      <section>
        <h2 className="text-xl mb-4 border-b border-neutral-300 dark:border-neutral-700 pb-3">
          Technical Skills
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {data.skills.map((group: any) => (
            <div key={group.category}>
              <h3 className="font-semibold mb-2">{group.category}</h3>
              <p className="text-sm text-neutral-500">
                {group.items.join(", ")}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section>
        <h2 className="text-xl mb-4 border-b border-neutral-300 dark:border-neutral-700 pb-3">
          Experience
        </h2>
        <div className="space-y-3">
          {data.experience.map((exp: any) => (
            <div key={exp.id}>
              <h3 className="font-semibold">
                {exp.role} - {exp.company}
              </h3>
              <ul className="list-disc ml-5 mt-2 text-sm text-neutral-500 space-y-1">
                {exp.highlights.map((h: string, idx: number) => (
                  <li key={idx}>{h}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <footer className="mt-12 py-10 text-center text-xs text-neutral-500 dark:text-neutral-600 border-t border-neutral-200 dark:border-neutral-800">
        {/* © {new Date().getFullYear()} {data.profile.name} */}
      </footer>
    </main>
  );
}
