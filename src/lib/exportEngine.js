import html2pdf from 'html2pdf.js';

export const exportToPdf = (elementId, filename = 'portfolio.pdf') => {
  const element = document.getElementById(elementId);
  if (!element) return;

  const opt = {
    margin: 12,
    filename: filename,
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: {
      scale: 2,
      useCORS: true,
      backgroundColor: '#ffffff',
    },
    jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
  };

  html2pdf().from(element).set(opt).save();
};