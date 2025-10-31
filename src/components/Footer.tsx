import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary-800 dark:bg-primary-950 text-slate-300">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <img src="/logo.png" alt="King David School Logo" className="h-16 w-16 object-contain mb-4 rounded-full" />
            <h3 className="text-lg font-heading font-semibold text-white tracking-wider uppercase">King David School</h3>
            <p className="mt-4 text-sm italic text-slate-400">"Building Character, Confidence and Lifelong Learners"</p>
            <p className="mt-4 text-sm">Alasco Avenue, 14 Abiodun Odukoya St, <br/>Obafemi Owode, Mowe,<br/> Ogun, Nigeria</p>
          </div>
          <div>
            <h3 className="text-sm font-heading font-semibold text-white tracking-wider uppercase">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              <li><Link to="/about" className="text-sm hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/admissions" className="text-sm hover:text-white transition-colors">Admissions</Link></li>
              <li><Link to="/news" className="text-sm hover:text-white transition-colors">News & Events</Link></li>
              <li><Link to="/student-life" className="text-sm hover:text-white transition-colors">Student Life</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-heading font-semibold text-white tracking-wider uppercase">Resources</h3>
            <ul className="mt-4 space-y-2">
              <li><Link to="/staff" className="text-sm hover:text-white transition-colors">Staff Directory</Link></li>
            </ul>
          </div>
          <div>
            <h3 className='text-sm font-heading font-semibold text-white tracking-wider uppercase'>Contact Us</h3>
            <div className='mt-4 space-y-2'>
            <p className="mt-2 text-sm">Phone: +234 903 000 1077</p>
            <p className="mt-1 text-sm">Email: kingdavidschool@gmail.com</p>
            <p className="mt-1 text-sm">Email: kingdavidschool@yahoo.com</p>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-primary-700 dark:border-primary-800 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm text-slate-400">&copy; {new Date().getFullYear()} King David School. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            {/* Social media icons */}
            <a href="#" className="text-slate-400 hover:text-white"><span className="sr-only">Facebook</span><svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg></a>
            <a href="#" className="text-slate-400 hover:text-white"><span className="sr-only">Twitter</span><svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.71v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg></a>
            <a href="#" className="text-slate-400 hover:text-white"><span className="sr-only">Instagram</span><svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.024.06 1.378.06 3.808s-.012 2.784-.06 3.808c-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.024.048-1.378.06-3.808.06s-2.784-.013-3.808-.06c-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.048-1.024-.06-1.378-.06-3.808s.012-2.784.06-3.808c.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 016.345 2.525c.636-.247 1.363-.416 2.427-.465C9.795 2.013 10.148 2 12.315 2zm-1.161 1.545c-1.049.045-1.68.21-2.227.427A3.397 3.397 0 006.16 5.22a3.397 3.397 0 00-1.242 2.684c-.217.547-.382 1.178-.427 2.227-.045 1.025-.058 1.35-.058 3.808s.013 2.783.058 3.808c.045 1.049.21 1.68.427 2.227a3.397 3.397 0 001.242 2.684 3.397 3.397 0 002.684 1.242c.547.217 1.178.382 2.227.427 1.025.045 1.35.058 3.808.058s2.783-.013 3.808-.058c1.049-.045 1.68-.21 2.227-.427a3.397 3.397 0 002.684-1.242 3.397 3.397 0 001.242-2.684c.217-.547.382-1.178.427-2.227.045-1.025.058-1.35.058-3.808s-.013-2.783-.058-3.808c-.045-1.049-.21-1.68-.427-2.227a3.397 3.397 0 00-1.242-2.684 3.397 3.397 0 00-2.684-1.242c-.547-.217-1.178-.382-2.227-.427C15.546 3.558 15.214 3.545 12.315 3.545zm-1.082 2.913a6.002 6.002 0 00-6.002 6.002 6.002 6.002 0 006.002 6.002 6.002 6.002 0 006.002-6.002A6.002 6.002 0 0011.233 6.458zM8.31 12.55a4.192 4.192 0 014.192-4.192 4.192 4.192 0 014.192 4.192 4.192 4.192 0 01-4.192 4.192A4.192 4.192 0 018.31 12.55zm6.556-6.402a1.25 1.25 0 100-2.5 1.25 1.25 0 000 2.5z" clipRule="evenodd" /></svg></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;