import { FC } from 'react';
import { cn } from '../lib/utils';

interface GlowEffectBgProps {
    className?: string;
}

const GlowEffectBg: FC<GlowEffectBgProps> = ({ className }) => {
    return (
        <div
            className={cn('w-[580px] h-[580px] rounded-full bg-[radial-gradient(circle,rgba(117,60,171,0.9)_0%,rgba(42,18,80,1)_48%,rgba(30,12,59,1)_59%,rgba(25,10,51,1)_63%,rgba(25,10,50,0.05)_70%)] transform -translate-x-1/2 -translate-y-1/2 absolute top-1/2 left-1/2', className)}
        />
    );
};

export default GlowEffectBg;