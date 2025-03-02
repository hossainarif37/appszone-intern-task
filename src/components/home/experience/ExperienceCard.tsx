import { FC } from 'react';

interface ExperienceCardProps {
    experienceImg: string;
    title: string;
    description: string;
    buttonContent: { title: string; link: string };
    cardBgColor: string;
}

const ExperienceCard: FC<ExperienceCardProps> = ({ experienceImg, title, description, buttonContent }) => {
    return (
        <div className='z-10 flex gap-5 bg-gradient-to-r from-[#130428] to-[#30115B] rounded-xl p-8 border-t-4 border-[#4F228D]'>
            <div className='w-[115px]'>
                <img src={experienceImg} alt="Experience" className="w-full" />
            </div>

            <div className='flex flex-col gap-1 pt-3'>
                <h1 className='text-2xl font-bold'>{title}</h1>
                <p className='text-[8px] w-[230px]'>{description}</p>
                <a className='bg-[#2C1250] uppercase text-[8px] w-28 flex justify-center items-center border border-[#693B93] rounded-lg py-2' href={buttonContent.link}>
                    {buttonContent.title}
                </a>
            </div>
        </div>
    );
};

export default ExperienceCard;