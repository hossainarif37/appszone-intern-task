import { FC } from 'react';
import loadingIcon from "../../../assets/icons/loading.png"
import GlowEffectBg from '../../GlowEffectBg';

interface ProjectCardProps {
    title: string;
    description: string;
    projectImg: string;
    isOdd: boolean;
}

const ProjectCard: FC<ProjectCardProps> = ({ title, description, projectImg, isOdd }) => {
    return (
        <div className={`relative flex gap-5 p-5 rounded-2xl`}>
            <div className='hidden md:block'>
                <GlowEffectBg className={`opacity-70 ${isOdd ? "w-[600px] h-[550px] -translate-x-[670px]" : "w-[700px] h-[660px] -translate-x-36"} transform`} />
            </div>

            <div className={`flex-1 ${isOdd ? "md:text-right" : "md:text-left"} pt-5`}>
                <div className='transform md:translate-y-24 mb-10 md:mb-0'>
                    <h6 className='text-[#9857D3] font-semibold'>Featured Project</h6>
                    <h1 className='text-3xl font-semibold text-[#CCD6F6]'>{title}</h1>
                </div>

                <div className={`flex ${isOdd ? "flex-col-reverse md:flex-row-reverse" : "flex-col-reverse md:flex-row"}`}>
                    <div className={`z-10 transform md:translate-y-28`}>
                        <div className={`text-left bg-[#201434]/50 md:w-[637px]  mt-8 backdrop-blur-2xl py-6 px-8 text-[#B6BDDE] font-medium rounded-2xl ${isOdd ? "md:-ml-24" : ""}`}>
                            {description}
                        </div>

                        <div className={`flex ${isOdd ? "justify-end" : "justify-end md:justify-start"} gap-3 pt-5`}>
                            <img src={loadingIcon} width={28} alt="" />
                            <img src={loadingIcon} width={28} alt="" />
                        </div>
                    </div>
                    <div className={`relative flex-1 w-full md:w-[582px] h-[341px] bg-[#2B0B3A] pt-8  ${isOdd ? "pr-10 " : "pl-10 md:-ml-24"}  rounded-2xl`}>
                        <img src={projectImg} alt="" className='h-full' />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ProjectCard;