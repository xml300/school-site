
import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import Card from '../components/Card';
import { MOCK_NEWS, MOCK_EVENTS } from '../constants';

const HomePage: React.FC = () => {
  return (
    <div className="opacity-0 animate-fadeIn">
      {/* Hero Section */}
      <section 
        className="relative h-[75vh] min-h-[500px] flex items-center justify-center text-white text-center px-4 bg-cover bg-center"
        style={{ backgroundImage: `url('https://picsum.photos/seed/school/1600/900')` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-primary-900/70 to-primary-800/20"></div>
        <div className="relative z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold font-heading drop-shadow-lg opacity-0 animate-fadeInUp" style={{ animationDelay: '200ms' }}>
            Welcome to Northwood High
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-slate-200 drop-shadow-md opacity-0 animate-fadeInUp" style={{ animationDelay: '400ms' }}>
            Excellence in Education, Commitment to Community
          </p>
          <div className="mt-8 flex justify-center gap-4 opacity-0 animate-fadeInUp" style={{ animationDelay: '600ms' }}>
            <Link to="/admissions"><Button variant="primary" size="lg">Apply Now</Button></Link>
            <Link to="/about"><Button variant="secondary" size="lg">Learn More</Button></Link>
          </div>
        </div>
      </section>

      {/* Welcome Message Section */}
      <section className="py-20 bg-slate-50 dark:bg-primary-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-heading bg-gradient-to-r from-primary-700 to-secondary-dark dark:from-white dark:to-secondary-light bg-clip-text text-transparent pb-2">
              A Tradition of Excellence
            </h2>
            <p className="mt-4 max-w-3xl mx-auto text-lg text-primary-600 dark:text-slate-300">
              At Northwood High, we are dedicated to fostering an environment where students can achieve their highest potential. Our rigorous academic programs, vibrant extracurricular activities, and supportive community empower students to become leaders, thinkers, and innovators of tomorrow.
            </p>
        </div>
      </section>

      {/* Latest News Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-center mb-12 text-primary-800 dark:text-white">Latest News</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {MOCK_NEWS.slice(0, 3).map((item, index) => (
              <div key={item.id} className="opacity-0 animate-fadeInUp" style={{ animationDelay: `${200 * index}ms`}}>
                <Card
                  imageUrl={item.imageUrl}
                  title={item.title}
                  description={item.summary}
                  footerContent={<span className="text-sm text-slate-500 dark:text-slate-400">{item.date}</span>}
                />
              </div>
            ))}
          </div>
           <div className="text-center mt-12">
            <Link to="/news"><Button variant="primary">View All News</Button></Link>
          </div>
        </div>
      </section>
      
      {/* Upcoming Events Section */}
      <section className="py-20 bg-slate-50 dark:bg-primary-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-center mb-12 text-primary-800 dark:text-white">Upcoming Events</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {MOCK_EVENTS.slice(0, 3).map((event, index) => (
              <div 
                key={event.id} 
                className="bg-white dark:bg-primary-800 rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-1.5 transition-all duration-300 flex flex-col opacity-0 animate-fadeInUp" 
                style={{ animationDelay: `${200 * index}ms`}}
              >
                <div className="bg-secondary text-white p-4 text-center font-heading">
                  <p className="text-lg font-bold">{new Date(event.date).toLocaleString('default', { month: 'long' })}</p>
                  <p className="text-4xl font-extrabold">{new Date(event.date).getDate()}</p>
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="font-bold text-xl font-heading text-primary-800 dark:text-white">{event.title}</h3>
                  <div className="text-sm text-slate-500 dark:text-slate-400 mt-2 space-y-1">
                      <p className="flex items-center gap-1.5">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" /></svg>
                          {event.time}
                      </p>
                      <p className="flex items-center gap-1.5">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" /></svg>
                          {event.location}
                      </p>
                  </div>
                  <p className="mt-4 text-primary-600 dark:text-slate-300 text-sm flex-grow">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/news"><Button variant="secondary">View Full Calendar</Button></Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
