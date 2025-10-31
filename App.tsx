import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './src/components/Header';
import Footer from './src/components/Footer';
import HomePage from './src/pages/HomePage';
import AboutPage from './src/pages/AboutPage';
import AcademicsPage from './src/pages/AcademicsPage';
import AdmissionsPage from './src/pages/AdmissionsPage';
import StudentLifePage from './src/pages/StudentLifePage';
import NewsPage from './src/pages/NewsPage';
import StaffDirectoryPage from './src/pages/StaffDirectoryPage';
import NotFoundPage from './src/pages/NotFoundPage';
import ScrollToTop from './src/components/ScrollToTop';
import BackToTopButton from './src/components/BackToTopButton';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow pt-20">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/academics" element={<AcademicsPage />} />
            <Route path="/admissions" element={<AdmissionsPage />} />
            <Route path="/student-life" element={<StudentLifePage />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/staff" element={<StaffDirectoryPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
        <BackToTopButton />
      </div>
    </BrowserRouter>
  );
}

export default App;