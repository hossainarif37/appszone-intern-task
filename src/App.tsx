import { FC } from 'react';
import Footer from './components/layout/footer/Footer';
import Navbar from './components/layout/navbar/Navbar';
import Hero from './components/home/hero/Hero';
import About from './components/home/about/About';
import Experience from './components/home/experience/Experience';

const App: FC = () => {
  return (
    <div className='min-h-screen bg-[#11071F] text-white'>
      <div className='w-full'>
        <Navbar />
        <main className='wrapper min-h-svh'>
          <Hero />
          <About />
          <Experience />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;