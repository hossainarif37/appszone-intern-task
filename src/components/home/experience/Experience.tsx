import { FC } from 'react';

import ExperienceCard from './ExperienceCard';
import GlowEffectBg from '../../GlowEffectBg';
import { experience } from '../../../constants/experienceData';

const Experience: FC = () => {

    return (
        <section className='relative py-20 md:py-32 overflow-hidden'>
            <h1 className='text-4xl font-preahvihear text-center md:text-start'>Work Experience</h1>

            <div className='z-10 grid grid-cols-1 md:grid-cols-2 gap-5 mt-14 px-5 md:px-0'>
                {experience.map((item) => (
                    <ExperienceCard
                        key={item.id}
                        experienceImg={item.experienceImg}
                        title={item.title}
                        description={item.description}
                        buttonContent={item.buttonContent}
                        cardBgColor={item.cardBgColor}
                    />
                ))}
            </div>

            <GlowEffectBg />
        </section>
    );
};

export default Experience;