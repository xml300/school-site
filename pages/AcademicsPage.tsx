import React, { useState } from 'react';
import { MOCK_PROGRAMS } from '../constants';

const AcademicsPage: React.FC = () => {

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-slate-50 dark:bg-primary-900 py-12 opacity-0 animate-fadeIn">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-16 opacity-0 animate-fadeInUp">
          <h1 className="text-4xl font-extrabold font-heading text-primary-800 dark:text-white">Academics at Northwood</h1>
          <p className="mt-4 text-lg text-primary-600 dark:text-slate-300 max-w-3xl mx-auto">
            A curriculum designed to challenge, inspire, and prepare students for the future.
          </p>
        </div>

        {/* Curriculum Overview */}
        <section aria-labelledby="curriculum-philosophy-heading" className="bg-white dark:bg-primary-800 p-8 rounded-lg shadow-lg mb-12 opacity-0 animate-fadeInUp" style={{ animationDelay: '200ms' }}>
            <h2 id="curriculum-philosophy-heading" className="text-3xl font-bold font-heading text-secondary-dark dark:text-secondary-light">Curriculum Philosophy</h2>
            <p className="mt-4 text-primary-700 dark:text-slate-300 leading-relaxed">
                Our academic program is built on a foundation of rigorous core subjects, enriched by a wide array of elective courses and advanced placement opportunities. We believe in a holistic approach to education that balances academic achievement with personal growth, critical thinking, and creativity. Our goal is to equip students with the knowledge and skills necessary to succeed in college and their future careers.
            </p>
        </section>

        {/* Academic Pathways */}
        <section className="opacity-0 animate-fadeInUp" style={{ animationDelay: '400ms' }} aria-labelledby="academic-pathways-heading">
          <h2 id="academic-pathways-heading" className="text-3xl font-bold font-heading text-center mb-8 text-primary-800 dark:text-white">Academic Pathways</h2>
          <div className="max-w-4xl mx-auto rounded-lg overflow-hidden shadow-md">
            {MOCK_PROGRAMS.map((program, index) => (
              <div key={program.name} className="border-b border-slate-200 dark:border-primary-700 last:border-b-0">
                <h3 className="text-lg font-semibold">
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full flex justify-between items-center py-5 px-6 text-left text-primary-700 dark:text-slate-200 bg-white dark:bg-primary-800 hover:bg-slate-50 dark:hover:bg-primary-700/50 transition-colors focus-visible-ring"
                    aria-expanded={openIndex === index}
                    aria-controls={`accordion-panel-${index}`}
                    id={`accordion-header-${index}`}
                  >
                    <span>{program.name}</span>
                    <svg
                      className={`w-6 h-6 transform transition-transform duration-300 text-secondary-dark ${openIndex === index ? 'rotate-180' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </button>
                </h3>
                <div 
                    id={`accordion-panel-${index}`}
                    role="region"
                    aria-labelledby={`accordion-header-${index}`}
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndex === index ? 'max-h-[500px]' : 'max-h-0'}`}
                >
                    <div className="p-6 bg-slate-50 dark:bg-primary-800/50">
                        <p className="text-primary-600 dark:text-slate-300">{program.description}</p>
                        <h4 className="font-bold mt-4 mb-2 text-primary-700 dark:text-slate-200">Key Courses:</h4>
                        <ul className="list-disc list-inside space-y-1 text-primary-600 dark:text-slate-300 marker:text-secondary">
                            {program.courses.map(course => <li key={course}>{course}</li>)}
                        </ul>
                    </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default AcademicsPage;