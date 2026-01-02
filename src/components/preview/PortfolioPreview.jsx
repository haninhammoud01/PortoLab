// src/components/preview/PortfolioPreview.jsx
import DarkPinkTemplate from './templates/DarkPinkTemplate';
import MinimalTemplate from './templates/MinimalTemplate';
import AcademicTemplate from './templates/AcademicTemplate';

export default function PortfolioPreview({ data }) {
  // Pilih template berdasarkan data.template
  const getTemplateComponent = () => {
    switch (data.template) {
      case 'minimal':
        return <MinimalTemplate data={data} />;
      case 'academic':
        return <AcademicTemplate data={data} />;
      case 'dark-pink':
      default:
        return <DarkPinkTemplate data={data} />;
    }
  };

  return <div>{getTemplateComponent()}</div>;
}