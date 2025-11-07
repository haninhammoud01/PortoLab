// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import Button from '../ui/Button';
import SkillInput from './SkillInput';
import LinkInput from './LinkInput';
import AvatarUpload from './AvatarUpload';
import ProjectForm from './ProjectForm';

// Animasi untuk form
const formContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const formItem = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function ProfileEditor({ data, onUpdate }) {
  const updateField = (field, value) => onUpdate(field, value);
  const updateLinks = (platform, url) => {
    onUpdate('links', { ...data.links, [platform]: url });
  };
  const updateProject = (index, project) => {
    const newProjects = [...data.projects];
    newProjects[index] = project;
    onUpdate('projects', newProjects);
  };
  const addProject = () => {
    onUpdate('projects', [
      ...data.projects,
      {
        title: '',
        description: '',
        tech: [],
        github: '',
        demo: '',
        screenshot: '',
      },
    ]);
  };
  const removeProject = (index) => {
    if (data.projects.length > 1) {
      const newProjects = data.projects.filter((_, i) => i !== index);
      onUpdate('projects', newProjects);
    }
  };

  return (
    <motion.div
      className="bg-dark-card p-6 rounded-xl border border-gray-800 w-full max-w-md"
      variants={formContainer}
      initial="hidden"
      animate="show"
    >
      {/* Profile Section */}
      <motion.h2 className="text-lg font-bold mb-4 text-accent-pink" variants={formItem}>
        Profile
      </motion.h2>

      <motion.div variants={formItem}>
        <AvatarUpload current={data.avatar} onChange={(v) => updateField('avatar', v)} />
      </motion.div>

      <motion.input
        variants={formItem}
        value={data.name}
        onChange={(e) => updateField('name', e.target.value)}
        placeholder="Full Name"
        className="w-full bg-gray-900 border border-gray-700 rounded px-3 py-2 mt-4 focus:outline-none focus:ring-2 focus:ring-accent-pink"
      />

      <motion.textarea
        variants={formItem}
        value={data.bio}
        onChange={(e) => updateField('bio', e.target.value)}
        placeholder="Bio"
        rows="3"
        className="w-full bg-gray-900 border border-gray-700 rounded px-3 py-2 mt-4 focus:outline-none focus:ring-2 focus:ring-accent-pink"
      />

      <motion.input
        variants={formItem}
        value={data.email}
        onChange={(e) => updateField('email', e.target.value)}
        placeholder="Email"
        className="w-full bg-gray-900 border border-gray-700 rounded px-3 py-2 mt-4 focus:outline-none focus:ring-2 focus:ring-accent-pink"
      />

      {/* Education Section */}
      <motion.h2
        className="text-lg font-bold mt-6 mb-4 text-accent-pink"
        variants={formItem}
      >
        Education
      </motion.h2>

      <motion.input
        variants={formItem}
        value={data.university}
        onChange={(e) => updateField('university', e.target.value)}
        placeholder="University"
        className="w-full bg-gray-900 border border-gray-700 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-accent-pink"
      />

      <motion.input
        variants={formItem}
        value={data.major}
        onChange={(e) => updateField('major', e.target.value)}
        placeholder="Major"
        className="w-full bg-gray-900 border border-gray-700 rounded px-3 py-2 mt-2 focus:outline-none focus:ring-2 focus:ring-accent-pink"
      />

      {/* Skills Section */}
      <motion.div variants={formItem}>
        <SkillInput
          skills={data.skills}
          onChange={(skills) => updateField('skills', skills)}
        />
      </motion.div>

      {/* Social Links Section */}
      <motion.h2
        className="text-lg font-bold mt-6 mb-4 text-accent-pink"
        variants={formItem}
      >
        Social Links
      </motion.h2>

      <motion.div variants={formItem}>
        <LinkInput
          label="GitHub"
          placeholder="https://github.com/yourname"
          value={data.links.github}
          onChange={(v) => updateLinks('github', v)}
        />
      </motion.div>
      <motion.div variants={formItem}>
        <LinkInput
          label="LinkedIn"
          placeholder="https://linkedin.com/in/yourname"
          value={data.links.linkedin}
          onChange={(v) => updateLinks('linkedin', v)}
        />
      </motion.div>
      <motion.div variants={formItem}>
        <LinkInput
          label="Personal Website"
          placeholder="https://yourwebsite.com"
          value={data.links.website}
          onChange={(v) => updateLinks('website', v)}
        />
      </motion.div>
      <motion.div variants={formItem}>
        <LinkInput
          label="Instagram (optional)"
          placeholder="https://instagram.com/yourname"
          value={data.links.instagram}
          onChange={(v) => updateLinks('instagram', v)}
        />
      </motion.div>

      {/* Projects Section */}
      <motion.h2
        className="text-lg font-bold mt-6 mb-4 text-accent-pink"
        variants={formItem}
      >
        Projects
      </motion.h2>

      {data.projects.map((proj, i) => (
        <motion.div key={i} variants={formItem}>
          <ProjectForm
            index={i}
            project={proj}
            onChange={(p) => updateProject(i, p)}
            onRemove={() => removeProject(i)}
          />
        </motion.div>
      ))}

      <motion.div variants={formItem}>
        <Button variant="outline" onClick={addProject} className="mt-2 w-full">
          + Add Project
        </Button>
      </motion.div>
    </motion.div>
  );
}