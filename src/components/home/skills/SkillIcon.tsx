import { FC } from 'react';
import { cn } from '../../../lib/utils';

interface SkillIconProps {
    item: {
        title: string;
        icon: string;
    };
    i: number;
    className?: string
}

const SkillIcon: FC<SkillIconProps> = ({ item, i, className }) => {
    return (
        <div
            key={i}
            className={cn(`bg-[#251C31] size-12 rounded-full flex justify-center items-center`, className)}
        >
            <img className="w-full" src={item.icon} alt={item.title} />
        </div>
    );
};

export default SkillIcon;