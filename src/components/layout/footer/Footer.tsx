import { FC } from 'react';

const Footer: FC = () => {
    const year = new Date().getFullYear();
    return (
        <footer className='wrapper text-center'>
            <p>Copyright &copy;  {year}</p>
        </footer>
    );
};

export default Footer;