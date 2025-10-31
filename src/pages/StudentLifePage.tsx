
import React from 'react';
import Card from '../components/Card';
import { MOCK_CLUBS } from '../constants';

const StudentLifePage: React.FC = () => {
    return (
        <div className="py-12 pt-36 bg-white dark:bg-primary-900 opacity-0 animate-fadeIn">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16 opacity-0 animate-fadeInUp">
                    <h1 className="text-4xl font-extrabold font-heading text-primary-800 dark:text-white">Student Life</h1>
                    <p className="mt-4 text-lg text-primary-600 dark:text-slate-300 max-w-3xl mx-auto">
                        Learning at King David School extends far beyond the classroom. Discover a vibrant community with opportunities for every interest, rooted in Nigerian culture and values.
                    </p>
                </div>

                {/* Athletics Section */}
                <div className="grid md:grid-cols-2 gap-12 items-center mb-20 opacity-0 animate-fadeInUp" style={{animationDelay: '200ms'}}>
                     <div className="md:order-last">
                        <h2 className="text-3xl font-bold font-heading text-secondary-dark dark:text-secondary-light">Athletics</h2>
                        <p className="mt-4 text-primary-600 dark:text-slate-300 leading-relaxed">
                            Our athletics program is built on the principles of teamwork, sportsmanship, and personal excellence. We offer a wide range of sports popular in Nigeria and internationally, providing opportunities for students of all skill levels to participate and compete.
                        </p>
                        <ul className="mt-4 list-disc list-inside space-y-1 text-primary-600 dark:text-slate-300 marker:text-secondary">
                            <li><span className="font-semibold">Popular Sports:</span> Football (Soccer), Basketball, Track & Field, Volleyball</li>
                            <li><span className="font-semibold">Other Activities:</span> Swimming, Table Tennis, Chess</li>
                        </ul>
                    </div>
                    <div className="rounded-lg overflow-hidden shadow-2xl">
                        <img src="/SCHOOL%20ACTIVITIES/EXCURSION.jpg" alt="Students playing sports" className="w-full h-full object-cover" />
                    </div>
                </div>

                {/* Clubs & Organizations Section */}
                <div className="opacity-0 animate-fadeInUp" style={{animationDelay: '400ms'}}>
                    <h2 className="text-3xl font-bold font-heading text-center mb-12 text-primary-800 dark:text-white">Clubs & Organizations</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {MOCK_CLUBS.map((club, index) => (
                             <div key={club.id} className="opacity-0 animate-fadeInUp" style={{ animationDelay: `${500 + 100 * index}ms`}}>
                                <Card
                                    title={club.name}
                                    description={club.description}
                                    imageUrl={club.image}
                                />
                             </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StudentLifePage;
