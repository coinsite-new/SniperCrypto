import { ReactComponent as TwitterIcon } from '../components/icons/twitter.svg';

export type IconName = 'twitter';

const iconMap = {
    twitter: TwitterIcon,
} as const;

export const getIcon = (name: IconName) => {
    const icon = iconMap[name];
    if (!icon) {
        console.error(`Icon "${name}" not found`);
        return null;
    }
    return icon;
};

export type IconProps = {
    name: IconName;
    size?: number;
    className?: string;
}; 