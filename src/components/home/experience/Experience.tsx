import { FC } from 'react';
import experience1 from "../../../assets/experience/experience1.png";
import experience2 from "../../../assets/experience/experience2.png";
import experience3 from "../../../assets/experience/experience3.png";
import experience4 from "../../../assets/experience/experience4.png";
import ExperienceCard from './ExperienceCard';

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
        <section className='relative py-32'>
            <h1 className='text-4xl'>Work Experience</h1>



            <div className='z-10 grid grid-cols-1 md:grid-cols-2 gap-5 mt-14'>
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

            <div className="w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(117,60,171,0.9)_0%,rgba(42,18,80,1)_48%,rgba(30,12,59,1)_59%,rgba(25,10,51,1)_63%,rgba(25,10,50,0.05)_70%)] transform -translate-x-1/2 -translate-y-1/2 absolute top-1/2 left-1/2"></div>
        </section>
    );
};

export default Experience;