import React from 'react';

import { ReactComponent as TwitterIcon } from './icons/twitter.svg';
import { ReactComponent as GhostIcon } from './icons/ghost.svg';

// Update IconName type to include all possible icon names
export type IconName = 'twitter' | 'ghost';

type IconProps = {
    name: IconName;
    size?: number;
    className?: string;
};

// Create a mapping of all icons
const icons: Record<IconName, React.FC<React.SVGProps<SVGSVGElement>>> = {
    twitter: TwitterIcon,
    ghost: GhostIcon,
} as const;

const Icon: React.FC<IconProps> = ({ name, size = 20, className = '' }) => {
    const SvgIcon = icons[name];

    if (!SvgIcon) {
        console.error(`Icon "${name}" not found`);
        return null;
    }

    // Возвращаем сам React-компонент svg
    return (
        <SvgIcon
            width={size}
            height={size}
            className={className}
        />
    );
};

export default Icon;
