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
        <div className={`relative flex ${isOdd ? "flex-row-reverse" : ""} gap-5 p-5 rounded-2xl`}>
            <div>
                <GlowEffectBg className={`opacity-70 ${isOdd ? "w-[600px] h-[550px] -translate-x-[670px]" : "w-[700px] h-[660px] -translate-x-36"} transform`} />
            </div>
            <div className={`flex-1 ${isOdd ? "text-right" : "text-left"} pt-5`}>
                <h6 className='text-[#9857D3] font-semibold'>Featured Project</h6>
                <h1 className='text-3xl font-semibold text-[#CCD6F6]'>{title}</h1>

                <div className={`z-10 absolute ${isOdd ? "transform -translate-x-[90px]" : ""}`}>
                    <div className={`text-left bg-[#201434]/50 w-[550px] -mr-10 mt-8 backdrop-blur-2xl py-6 px-8 pr-12 text-[#B6BDDE] font-medium rounded-2xl`}>
                        {description}
                    </div>

                    <div className={`flex ${isOdd ? "justify-end" : "justify-start"} gap-3 pt-5 ${isOdd ? "-mr-5" : "ml-5"}`}>
                        <img src={loadingIcon} width={28} alt="" />
                        <img src={loadingIcon} width={28} alt="" />
                    </div>
                </div>
            </div>

            <div className={`relative flex-1 bg-[#2B0B3A] pt-8  ${isOdd ? "pr-10" : "pl-10"}  rounded-2xl`}>
                <img src={projectImg} alt="" />
            </div>
        </div>
    );
};

export default ProjectCard;