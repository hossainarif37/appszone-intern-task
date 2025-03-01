import { Icon } from '@iconify/react/dist/iconify.js';
import { FC, useState } from 'react';
import { navLinks } from '../../../constants/navLinks';
import useOutsideClick from '../../../hooks/useOutsideClick';

const MobileNav: FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const ref = useOutsideClick(() => setIsOpen(false), isOpen);

    return (
        <div className='relative md:hidden' ref={ref}>
            <button
                onClick={() => setIsOpen(!isOpen)}
            >
                {
                    isOpen
                        ? <Icon icon="material-symbols:close-rounded" width={32} height={32} />
                        : <Icon icon="material-symbols:menu-rounded" width={32} height={32} />
                }
            </button>

            <ul className={`z-50 bg-[#1A0B2E]/90 backdrop-blur-2xl absolute origin-top duration-200 ${isOpen ? "scale-y-100" : "scale-y-0"} top-14 right-0 w-48 p-5 flex flex-col gap-5 font-semibold text-primary`}>
                {navLinks.map((link, index) => (
                    <li key={index}>
                        <a href={link.href}>{link.title}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MobileNav;