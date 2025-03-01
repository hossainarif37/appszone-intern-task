import { FC } from 'react';
import Footer from './components/layout/footer/Footer';
import Navbar from './components/layout/navbar/Navbar';

const App: FC = () => {
  return (
    <div className='min-h-screen'>
      <div className='w-full'>
        <Navbar />
        <main className='max-w-5xl mx-auto'>
          Main Content
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;