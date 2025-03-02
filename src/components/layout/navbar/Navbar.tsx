import { FC, } from 'react';
import logo from "../../../assets/logo/navLogo.svg";
import { navLinks } from '../../../constants/navLinks';
import MobileNav from './MobileNav';

const Navbar: FC = () => {
    return (
        <nav className='bg-[#1A0B2E] text-white'>
            <div className='wrapper flex justify-between items-center py-6'>
                {/* Logo */}
                <div>
                    <img src={logo} alt="Nav Logo" className='w-8 md:w-12' />
                </div>

                {/* (Desktop) Nav Items */}
                <ul className='hidden md:flex gap-x-10'>
                    {navLinks.map((link, index) => (
                        <li key={index}>
                            <a href={link.href}>{link.title}</a>
                        </li>
                    ))}
                </ul>

                {/* (Mobile) Nav Items */}
                <MobileNav />
            </div>
        </nav>
    );
};

export default Navbar;