import React from 'react';
import Button from '../components/Button';
import { formatCurrencyNGN, formatDateLong, formatShortDate } from '../utils/format';

const steps = [
    { number: 1, title: "Online Inquiry / In Person", description: "Start by filling out our online inquiry form to receive more information about King David School and be added to our mailing list for important updates." },
    { number: 2, title: "Admission Exam", description: "We strongly encourage all prospective families to visit our campus. Attend one of our Open House events or schedule a personal tour to see our community in action." },
    { number: 3, title: "Submit Application", description: "Complete and submit the official online application, including student essays, parent statements, academic transcripts, and teacher recommendations." },
    { number: 4, title: "Admissions Interview", description: "Once your application is submitted, we will contact you to schedule a friendly interview with the student and parents to get to know you better." },
    { number: 5, title: "Admissions Decisions", description: "Decision notifications will be sent out via email on the date specified below. We look forward to welcoming our new students!" },
];

// Typical Nigerian school admissions timeline (example)
const dates = [
    { date: new Date(new Date().getFullYear(), 7, 1), event: "Application Opens" }, // Sep 1
    { date: new Date(new Date().getFullYear(), 9, 15), event: "Open House / Entrance Exam" }, // Oct 15
    { date: new Date(new Date().getFullYear(), 11, 31), event: "Application Deadline" }, // Dec 31
    { date: new Date(new Date().getFullYear() + 1, 0, 31), event: "Scholarship Application Deadline" }, // Jan 31 next year
    { date: new Date(new Date().getFullYear() + 1, 1, 28), event: "Admissions Decisions Released" }, // Feb 28 next year
];

const estimatedFees = {
    registration: 20000,
    tuitionPerTerm: 150000,
    uniformKit: 25000,
    examFees: 5000,
};

const AdmissionsPage: React.FC = () => {
    return (
        <div className="py-12 pt-36 bg-white dark:bg-primary-900 opacity-0 animate-fadeIn">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16 opacity-0 animate-fadeInUp">
                    <h1 className="text-4xl font-extrabold font-heading text-primary-800 dark:text-white">Admissions</h1>
                    <p className="mt-4 text-lg text-primary-600 dark:text-slate-300 max-w-3xl mx-auto">
                        Begin your journey to becoming a King David School student. We are excited to get to know you.
                    </p>
                </div>

                {/* Application Process */}
                <div className="mb-20">
                    <h2 className="text-3xl font-bold font-heading text-center mb-12 text-primary-800 dark:text-white">How to Apply</h2>
                    <div className="relative max-w-3xl mx-auto">
                        <div className="absolute left-6 md:left-1/2 w-1 h-full bg-gradient-to-b from-secondary to-accent rounded-full transform -translate-x-1/2"></div>
                        {steps.map((step, index) => (
                            <div key={step.number} className="relative mb-12 flex items-center w-full opacity-0 animate-fadeInUp" style={{ animationDelay: `${200 * index}ms`}}>
                                {/* Bubble */}
                                <div className={`z-10 w-12 h-12 rounded-full bg-secondary-dark text-white flex items-center justify-center font-bold text-xl ring-8 ring-white dark:ring-primary-900 absolute left-0 md:relative ${
                                  index % 2 === 0 
                                    ? 'md:order-first md:mr-auto md:ml-[-24px]' // Left side on desktop
                                    : 'md:order-last md:ml-auto md:mr-[-24px]' // Right side on desktop
                                }`}>
                                    {step.number}
                                </div>
                                {/* Content */}
                                <div className={`w-full md:w-[calc(50%-48px)] bg-slate-50 dark:bg-primary-800 p-6 rounded-lg shadow-md ${
                                  index % 2 === 0
                                    ? 'ml-20 md:ml-auto' // Content on the right
                                    : 'ml-20 md:ml-0' // Content on the left
                                }`}>
                                    <h3 className="font-bold text-xl font-heading text-primary-800 dark:text-white">{step.title}</h3>
                                    <p className="mt-2 text-primary-600 dark:text-slate-300">{step.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA */}
                <div className="text-center opacity-0 animate-fadeInUp" style={{ animationDelay: '1400ms' }}>
                    <h2 className="text-2xl font-bold font-heading text-primary-800 dark:text-white">Ready to Apply?</h2>
                    <p className="mt-2 text-primary-600 dark:text-slate-300">Our online application portal is now open.</p>
                    <Button variant="primary" size="lg" className="mt-6">Start Your Application</Button>
                </div>
            </div>
        </div>
    );
};

export default AdmissionsPage;
