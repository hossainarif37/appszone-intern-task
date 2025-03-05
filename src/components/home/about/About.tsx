import { FC } from 'react';

const About: FC = () => {
    return (
        <section className='py-5 font-preahvihear px-5 md:px-0 mt-14 md:mt-0'>
            <div className='space-y-3'>
                <h1 className='text-2xl md:text-4xl'>I'm a Software Engineer.</h1>
                <h4 className='text-xl'>
                    Currently, I'm a Software Engineer at <a href="https://appszonebd.com/" target='_blank'><span className='text-primary'>A</span>ppsZone</a>,
                </h4>
            </div>

            <p className='mt-5 md:mt-14 leading-7 md:leading-9'>
                A self-taught UI/UX designer, functioning in the industry for 3+ years now. <br />
                I make meaningful and delightful digital products that create an equilibrium <br />
                between user needs and business goals.
            </p>
        </section>
    );
};

export default About;