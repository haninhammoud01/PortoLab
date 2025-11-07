import { useState, useEffect } from 'react';

const STORAGE_KEY = 'portobuild-portfolio-data';

export const usePortfolioState = () => {
  // State awal lengkap
  const initialData = {
    // Profile
    name: 'Hanin Hammoud',
    bio: 'Quietly building thoughtful software, one line at a time.',
    email: 'haninhammoud@example.com',
    avatar: '',

    // Education
    university: 'Universitas Trunojoyo Madura',
    major: 'Informatic Engineering',

    // Skills
    skills: [''],

    // Social Links
    links: {
      github: '',
      linkedin: '',
      website: '',
      instagram: '',
    },

    // Projects
    projects: [
      {
        title: 'Portfolio Builder',
        description: 'Client-side portfolio generator with PDF export',
        tech: ['React', 'Tailwind', 'HTML5', 'CSS3', 'JavaScript', 'PHP', 'Git', 'GitHub'],
        github: 'https://github.com/...',
        demo: '',
        screenshot: '',
      }
    ],

    template: 'dark-pink',
  };

  const [data, setData] = useState(initialData);

  // Load dari localStorage saat mount
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        // Pastikan struktur sesuai (hindari crash jika data lama tidak lengkap)
        setData(prev => ({ ...prev, ...parsed }));
      } catch {
        console.warn('Failed to parse saved portfolio data');
      }
    }
  }, []);

  // Simpan ke localStorage saat data berubah
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  }, [data]);

  const updateField = (field, value) => {
    setData(prev => ({ ...prev, [field]: value }));
  };

  const clearData = () => {
    localStorage.removeItem(STORAGE_KEY);
    // Reset ke struktur lengkap (tapi kosongkan field)
    setData({
      name: '',
      bio: '',
      email: '',
      avatar: '',
      university: '',
      major: '',
      skills: [],
      links: {
        github: '',
        linkedin: '',
        website: '',
        instagram: '',
      },
      projects: [
        {
          title: '',
          description: '',
          tech: [],
          github: '',
          demo: '',
          screenshot: '',
        }
      ],
      template: 'dark-pink',
    });
  };

  return { data, updateField, clearData };
};