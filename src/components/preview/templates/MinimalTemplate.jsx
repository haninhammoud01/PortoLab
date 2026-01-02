import { motion } from 'framer-motion';

// Animasi container: untuk staggered (berurutan)
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08, // lebih cepat biar terasa "rhythm"-nya
      delayChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 15 },
  show: { opacity: 1, y: 0 },
};

export default function DarkPinkTemplate({ data }) {
  return (
    <motion.div
      id="portfolio-preview"
      className="bg-white text-gray-900 p-8 w-full max-w-lg mx-auto shadow-lg rounded-xl print:p-6 print:shadow-none"
      style={{ fontFamily: 'ui monospace, monospace' }}
      variants={container}
      initial="hidden"
      animate="show"
    >
      {/* Avatar */}
      {data.avatar && (
        <motion.div className="text-center mb-4" variants={item}>
          <img
            src={data.avatar}
            alt="Avatar"
            className="w-16 h-16 rounded-full mx-auto object-cover border-2 border-accent-pink"
          />
        </motion.div>
      )}

      {/* Name & Bio */}
      <motion.header className="text-center mb-6" variants={item}>
        <h1
          className="text-2xl font-bold"
          style={{ fontFamily: "'Cinzel', serif", letterSpacing: '0.05em' }}
        >
          {data.name}
        </h1>
        <p className="mt-1 text-gray-600 italic">{data.bio}</p>
        {data.email && (
          <p className="text-gray-500 text-sm mt-1">{data.email}</p>
        )}
      </motion.header>

      {/* Education */}
      {(data.university || data.major) && (
        <motion.section className="mb-6 text-center" variants={item}>
          <p className="font-medium text-gray-800">{data.major}</p>
          <p className="text-gray-500 text-sm">{data.university}</p>
        </motion.section>
      )}

      {/* Skills */}
      {data.skills.length > 0 && (
        <motion.section className="mb-6" variants={item}>
          <h3 className="font-medium text-gray-800 mb-2">Skills</h3>
          <div className="flex flex-wrap gap-2">
            {data.skills.map((skill, i) => (
              <span
                key={i}
                className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.section>
      )}

      {/* Social Links */}
      {(data.links.github || data.links.linkedin || data.links.website || data.links.instagram) && (
        <motion.section className="mb-6" variants={item}>
          {data.links.github && (
            <p className="text-sm text-blue-600 hover:underline">
              <a href={data.links.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
            </p>
          )}
          {data.links.linkedin && (
            <p className="text-sm text-blue-600 hover:underline">
              <a href={data.links.linkedin} target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            </p>
          )}
          {data.links.website && (
            <p className="text-sm text-green-600 hover:underline">
              <a href={data.links.website} target="_blank" rel="noreferrer">
                Website
              </a>
            </p>
          )}
          {data.links.instagram && (
            <p className="text-sm text-pink-500 hover:underline">
              <a href={data.links.instagram} target="_blank" rel="noreferrer">
                Instagram
              </a>
            </p>
          )}
        </motion.section>
      )}

      {/* Projects */}
      {data.projects.length > 0 && (
        <motion.section variants={item}>
          <h2 className="text-lg font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-200">
            Projects
          </h2>
          {data.projects.map((proj, i) => (
            <div key={i} className="mb-6">
              <h3 className="font-bold text-gray-900">{proj.title}</h3>
              {proj.description && (
                <p className="text-gray-600 text-sm mt-1">{proj.description}</p>
              )}
              {proj.tech.length > 0 && (
                <div className="mt-2 flex flex-wrap gap-1">
                  {proj.tech.map((t, j) => (
                    <span key={j} className="text-xs text-accent-pink font-medium">
                      {t}
                    </span>
                  ))}
                </div>
              )}
              <div className="mt-2 space-x-3">
                {proj.github && (
                  <a
                    href={proj.github}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm text-blue-600 hover:underline"
                  >
                    GitHub
                  </a>
                )}
                {proj.demo && (
                  <a
                    href={proj.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm text-green-600 hover:underline"
                  >
                    Live Demo
                  </a>
                )}
              </div>
              {proj.screenshot && (
                <img
                  src={proj.screenshot}
                  alt="Project screenshot"
                  className="mt-3 max-w-full h-auto border rounded"
                />
              )}
            </div>
          ))}
        </motion.section>
      )}
    </motion.div>
  );
}