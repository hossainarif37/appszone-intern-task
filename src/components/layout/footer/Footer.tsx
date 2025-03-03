import { FC } from 'react';
import instagram from "../../../assets/icons/instagram.png"
import website from "../../../assets/icons/website.png"
import google from "../../../assets/icons/google.png"


const Footer: FC = () => {
    return (
        <footer className='wrapper'>
            <h2 className='text-2xl'>Contact</h2>
            <p className='pt-16 py-6'>
                I'm currently looking to join a cross-functional team that values improving people's lives <br /> through accessible design. or have a project in mind? Let's connect.
            </p>

            <p className='pb-7'>ibrhaimmemon930@gmail.com</p>

            <div className='flex gap-5'>
                <img width={16} height={16} src={instagram} alt="" />
                <img width={16} height={16} src={website} alt="" />
                <img width={16} height={16} src={google} alt="" />
            </div>
        </footer>
    );
};

export default Footer;