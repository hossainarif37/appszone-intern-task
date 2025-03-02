import { FC } from 'react';
import appsZone from "../../../assets/icons/appsZone.png"

const About: FC = () => {
    return (
        <section className='py-5'>
            <div className='space-y-2'>
                <h1 className='text-6xl'>I'm a Software Engineer.</h1>
                <h4 className='text-xl flex'>
                    <span>Currently, I'm a Software Engineer at</span>
                    <a
                        href="https://appszonebd.com/"
                        target="_blank"
                        className='flex'
                    >
                        <img
                            src={appsZone}
                            alt=""
                            width={30}
                            height={20}
                            className='ml-1'
                        />

                        <span className='text-gray-300 font-medium'>ppsZone</span>
                    </a>
                </h4>
            </div>

            <p className='mt-14 text-xl'>
                A self-taught UI/UX designer, functioning in the industry for 3+ years now. <br />
                I make meaningful and delightful digital products that create an equilibrium <br />
                between user needs and business goals.
            </p>
        </section>
    );
};

export default About;