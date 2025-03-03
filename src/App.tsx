import { FC } from 'react';
import Footer from './components/layout/footer/Footer';
import Navbar from './components/layout/navbar/Navbar';
import Hero from './components/home/hero/Hero';
import About from './components/home/about/About';
import Experience from './components/home/experience/Experience';
import Projects from './components/home/projects/Projects';

const App: FC = () => {
  return (
    <div className='min-h-screen pb-20 bg-[#11071F] text-white'>
      <div className='w-full'>
        <Navbar />
        <main className='wrapper min-h-svh'>
          <Hero />
          <About />
          <Experience />
          <Projects />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;