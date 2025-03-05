import { FC } from 'react';
import experience1 from "../../../assets/experience/experience1.png";
import experience2 from "../../../assets/experience/experience2.png";
import experience3 from "../../../assets/experience/experience3.png";
import experience4 from "../../../assets/experience/experience4.png";
import ExperienceCard from './ExperienceCard';
import GlowEffectBg from '../../GlowEffectBg';

const Experience: FC = () => {
    const experience = [
        {
            id: 1,
            experienceImg: experience1,
            title: "CIB on the Mobile",
            description: "Take your client onboard seamlessly by our amazing tool of digital onboard process.",
            buttonContent: {
                title: "Learn More",
                link: "#"
            },
            cardBgColor: ""
        },
        {
            id: 2,
            experienceImg: experience2,
            title: "CIB on the Mobile",
            description: "Take your client onboard seamlessly by our amazing tool of digital onboard process.",
            buttonContent: {
                title: "Learn More",
                link: "#"
            },
            cardBgColor: ""
        },
        {
            id: 3,
            experienceImg: experience3,
            title: "CIB on the Mobile",
            description: "Take your client onboard seamlessly by our amazing tool of digital onboard process.",
            buttonContent: {
                title: "Learn More",
                link: "#"
            },
            cardBgColor: ""
        },
        {
            id: 4,
            experienceImg: experience4,
            title: "CIB on the Mobile",
            description: "Take your client onboard seamlessly by our amazing tool of digital onboard process.",
            buttonContent: {
                title: "Learn More",
                link: "#"
            },
            cardBgColor: ""
        },
    ];

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