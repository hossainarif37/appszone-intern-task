import { FC } from 'react';
import instagram from "../../../assets/icons/instagram.png";
import website from "../../../assets/icons/website.png";
import google from "../../../assets/icons/google.png";

const Footer: FC = () => {
    return (
        <footer className='wrapper font-preahvihear px-5 md:px-0'>
            <h2 className='text-2xl'>Contact</h2>

            {/* Description */}
            <p className='pt-10 md:pt-16 py-6 font-light text-sm leading-7'>
                I'm currently looking to join a cross-functional team that values improving people's lives <br />
                through accessible design. or have a project in mind? Let's connect.
            </p>

            {/* Email address */}
            <p className='pb-7 text-sm'>ibrhaimmemon930@gmail.com</p>

            {/* Social media icons for additional contact options */}
            <div className='flex gap-5'>
                <img width={16} height={16} src={instagram} alt="Instagram icon" />
                <img width={16} height={16} src={website} alt="Website icon" />
                <img width={16} height={16} src={google} alt="Google icon" />
            </div>
        </footer>
    );
};

export default Footer;
