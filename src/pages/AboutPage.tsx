import { MOCK_STAFF } from '../constants';

const AboutPage: React.FC = () => {
  return (
    <div className="bg-white dark:bg-primary-900 py-12 pt-36 opacity-0 animate-fadeIn">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16 opacity-0 animate-fadeInUp">
            <h1 className="text-4xl font-extrabold font-heading text-primary-800 dark:text-white">About Us</h1>
        </div>

        {/* Mission and Vision */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-24 opacity-0 animate-fadeInUp" style={{ animationDelay: '200ms' }}>
            <div>
                <h2 className="text-3xl font-bold font-heading text-secondary-dark dark:text-secondary-light">Our Mission</h2>
                <ul className='list-disc ml-8'>
                  <li className="mt-2 text-primary-600 dark:text-slate-300 leading-relaxed">We commit to quality education and professional standard in our provision</li>
                  <li className="mt-2 text-primary-600 dark:text-slate-300 leading-relaxed">To always go for gold in achievement</li>
                  <li className="mt-2 text-primary-600 dark:text-slate-300 leading-relaxed">We utilize the best and most effective ways in our pursuit of innovation and continuous improvement</li>
                  <li className="mt-2 text-primary-600 dark:text-slate-300 leading-relaxed">We depend on loyal, hardworking personnel, who are competent, highly motivated with great commitment</li>
                  <li className="mt-2 text-primary-600 dark:text-slate-300 leading-relaxed">We rely on good judgement, cross cultural, industry specifics and standards.</li>
                </ul>
                <h2 className="text-3xl font-bold font-heading text-secondary-dark dark:text-secondary-light mt-8">Our Vision</h2>
                <p className="mt-4 text-primary-600 dark:text-slate-300 leading-relaxed">
                  To develop the child through balanced, holistic, all round learning and skills that will set a higher standard.
                </p>
            </div>
      <div className="rounded-lg overflow-hidden shadow-2xl transform md:hover:scale-105 transition-transform duration-500">
        <img src="/school.png" alt="Students collaborating in a classroom" className="w-full h-full object-cover"/>
      </div>
        </div>

        {/* Our History */}
        <section className="mb-24 text-center opacity-0 animate-fadeInUp" style={{ animationDelay: '400ms' }} aria-labelledby="history-heading">
            <h2 id="history-heading" className="text-3xl font-bold font-heading text-primary-800 dark:text-white">Our History</h2>
            <p className="mt-4 text-primary-600 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed">
                Founded in 1958, King David School has been a cornerstone of the community in Nigeria for over six decades. From our humble beginnings in a single building, we have grown into a sprawling campus with state-of-the-art facilities, always staying true to our founding principle: to provide the highest quality education to every student who walks through our doors, preparing them for success in Nigeria and globally.
            </p>
        </section>
        
        {/* Leadership Section */}
        <section className="opacity-0 animate-fadeInUp" style={{ animationDelay: '600ms' }} aria-labelledby="leadership-heading">
          <h2 id="leadership-heading" className="text-3xl font-bold font-heading text-center mb-12 text-primary-800 dark:text-white">Our Leadership</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {MOCK_STAFF.slice(0, 3).map((person) => (
              <div key={person.name} className="text-center group">
                <div className="relative inline-block">
                    <img className="mx-auto h-40 w-40 rounded-full object-cover shadow-lg transform group-hover:scale-110 transition-transform duration-300" src={person.imageUrl} alt={`Photo of ${person.name}, ${person.title}`} />
                    <div className="absolute inset-0 rounded-full ring-4 ring-secondary-light/0 group-hover:ring-secondary-light/50 transition-all duration-300" aria-hidden="true"></div>
                </div>
                <h3 className="mt-6 text-xl font-medium text-primary-800 dark:text-white">{person.name}</h3>
                <p className="text-secondary-dark dark:text-secondary-light">{person.title}</p>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
};

export default AboutPage;
