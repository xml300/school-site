
import React from 'react';
import Card from '../components/Card';
import { MOCK_NEWS, MOCK_EVENTS } from '../constants';

const FeaturedArticle = MOCK_NEWS[0];
const otherArticles = MOCK_NEWS.slice(1);

const NewsPage: React.FC = () => {
  return (
    <div className="py-12 bg-slate-50 dark:bg-primary-900 opacity-0 animate-fadeIn">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 opacity-0 animate-fadeInUp">
          <h1 className="text-4xl font-extrabold font-heading text-primary-800 dark:text-white">News & Events</h1>
          <p className="mt-4 text-lg text-primary-600 dark:text-slate-300 max-w-3xl mx-auto">
            Stay up-to-date with the latest happenings and announcements from Northwood High School.
          </p>
        </div>

        {/* Featured News Section */}
        <section className="mb-20 opacity-0 animate-fadeInUp" style={{animationDelay: '200ms'}}>
            <h2 className="text-3xl font-bold font-heading mb-8 text-primary-800 dark:text-white">Featured Story</h2>
            <div className="group grid md:grid-cols-2 gap-8 items-center bg-white dark:bg-primary-800 p-6 rounded-lg shadow-lg">
                <div className="overflow-hidden rounded-md">
                    <img src={FeaturedArticle.imageUrl} alt={FeaturedArticle.title} className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105" />
                </div>
                <div>
                    <span className="text-sm text-secondary-dark dark:text-secondary-light font-semibold">{FeaturedArticle.date}</span>
                    <h3 className="mt-2 text-2xl font-bold font-heading text-primary-800 dark:text-white">{FeaturedArticle.title}</h3>
                    <p className="mt-4 text-primary-600 dark:text-slate-300">{FeaturedArticle.summary}</p>
                </div>
            </div>
        </section>

        {/* More News Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold font-heading mb-8 text-primary-800 dark:text-white">More News</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherArticles.map((item, index) => (
              <div key={item.id} className="opacity-0 animate-fadeInUp" style={{ animationDelay: `${400 + 150 * index}ms`}}>
                <Card
                  imageUrl={item.imageUrl}
                  title={item.title}
                  description={item.summary}
                  footerContent={<span className="text-sm text-slate-500 dark:text-slate-400">{item.date}</span>}
                />
              </div>
            ))}
             <div className="opacity-0 animate-fadeInUp" style={{ animationDelay: '850ms'}}>
                <Card
                    key={4}
                    imageUrl="https://picsum.photos/seed/debate/400/300"
                    title="Debate Team Excels at Regional Tournament"
                    description="The Northwood Debate Team took home several awards at the regional tournament this past weekend."
                    footerContent={<span className="text-sm text-slate-500 dark:text-slate-400">October 12, 2023</span>}
                />
             </div>
             <div className="opacity-0 animate-fadeInUp" style={{ animationDelay: '1000ms'}}>
                <Card
                    key={5}
                    imageUrl="https://picsum.photos/seed/community/400/300"
                    title="Annual Community Service Day a Great Success"
                    description="Over 500 students and staff participated in our annual day of service, volunteering at various local organizations."
                    footerContent={<span className="text-sm text-slate-500 dark:text-slate-400">October 5, 2023</span>}
                />
            </div>
          </div>
        </section>

        {/* Events Section */}
        <section className="opacity-0 animate-fadeInUp" style={{animationDelay: '1200ms'}}>
          <h2 className="text-3xl font-bold font-heading mb-8 text-primary-800 dark:text-white">Upcoming Events</h2>
          <div className="bg-white dark:bg-primary-800 rounded-lg shadow-lg overflow-hidden">
            <ul className="divide-y divide-slate-200 dark:divide-primary-700">
              {MOCK_EVENTS.map(event => (
                <li key={event.id} className="p-6 hover:bg-slate-50 dark:hover:bg-primary-700/50 transition-colors duration-200">
                  <div className="flex flex-col sm:flex-row justify-between">
                    <div>
                      <h3 className="font-bold text-xl text-primary-800 dark:text-white">{event.title}</h3>
                      <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">{event.time} &bull; {event.location}</p>
                      <p className="mt-2 text-primary-600 dark:text-slate-300 max-w-2xl">{event.description}</p>
                    </div>
                    <div className="flex-shrink-0 mt-4 sm:mt-0 sm:ml-6 text-left sm:text-right">
                      <p className="text-lg font-bold text-secondary-dark dark:text-secondary-light">{event.date}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default NewsPage;
