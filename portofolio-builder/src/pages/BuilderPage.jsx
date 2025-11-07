// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { usePortfolioState } from '../hooks/usePortfolioState';
import ProfileEditor from '../components/editor/ProfileEditor';
import PortfolioPreview from '../components/preview/PortfolioPreview';
import Button from '../components/ui/Button';
import ThemeSwitcher from '../components/ui/ThemeSwitcher';
import { exportToPdf } from '../lib/exportEngine';

// Animasi halaman utama 
const pageContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // jeda 0.15 detik
      delayChildren: 0.2,    // mulai setelah 0.2 detik
    },
  },
};

const pageItem = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function BuilderPage() {
  const { data, updateField, clearData } = usePortfolioState();

  return (
    <motion.div
      className="min-h-screen py-12 px-4"
      variants={pageContainer}
      initial="hidden"
      animate="show"
    >
      <div className="max-w-5xl mx-auto text-center">
        {/* Judul Utama */}
        <motion.h1
          className="text-2xl font-bold mb-2 text-accent-pink"
          variants={pageItem}
        >
          PORTFOLIO BUILDER
        </motion.h1>

        {/* Subjudul */}
        <motion.p
          className="text-text-secondary mb-6"
          variants={pageItem}
        >
          Professional Portfolio Builder • Export to PDF
        </motion.p>

        <motion.div
          className="flex flex-col lg:flex-row gap-10 justify-center items-start"
          variants={pageItem} // seluruh konten utama muncul bersama sebagai satu blok
        >
          {/* Kolom Kiri: Form */}
          <div className="flex flex-col items-center lg:items-start">
            <ProfileEditor data={data} onUpdate={updateField} />
            <ThemeSwitcher 
              current={data.template} 
              onChange={(t) => updateField('template', t)} 
            />
            <Button 
              variant="text" 
              onClick={clearData} 
              className="mt-4"
            >
              Clear All Data
            </Button>
          </div>

          {/* Kolom Kanan: Preview + PDF */}
          <div className="flex flex-col items-center">
            <PortfolioPreview data={data} />
            <Button 
              onClick={() => exportToPdf(
                'portfolio-preview', 
                `portfolio-${data.name || 'me'}.pdf`
              )} 
              className="mt-6"
            >
              📥 Export as PDF
            </Button>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}