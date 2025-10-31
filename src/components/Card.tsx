
import React from 'react';

interface CardProps {
  imageUrl?: string;
  title: string;
  description: string;
  footerContent?: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ imageUrl, title, description, footerContent, className = '' }) => {
  return (
    <div className={`group bg-white dark:bg-primary-800 rounded-lg shadow-lg hover:shadow-xl dark:hover:shadow-secondary/20 overflow-hidden transform hover:-translate-y-1.5 transition-all duration-300 flex flex-col min-h-[400px] ${className}`}>
      {imageUrl && (
        <div className="h-48 w-full overflow-hidden">
            <img className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105" src={imageUrl} alt={title} />
        </div>
      )}
      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-xl font-heading font-bold text-primary-800 dark:text-white group-hover:text-secondary-dark dark:group-hover:text-secondary-light transition-colors">{title}</h3>
        <p className="mt-2 text-primary-600 dark:text-slate-300 text-base flex-grow">{description}</p>
        {footerContent && (
            <div className="mt-4 pt-4 border-t border-slate-200 dark:border-primary-700">
                {footerContent}
            </div>
        )}
      </div>
    </div>
  );
};

export default Card;
