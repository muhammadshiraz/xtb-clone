import { ReactNode } from 'react';
import Image, { ImageProps } from 'next/image';

type IconTextProps = {
  text: string | ReactNode;
  icon?: ReactNode | string;
  iconPosition?: 'left' | 'right';
  className?: string;
  iconClassName?: string;
  imageProps?: Omit<ImageProps, 'src'> & { alt: string };
};

export function IconText({
  text,
  icon,
  iconPosition = 'left',
  className = '',
  iconClassName = '',
  imageProps,
  ...props
}: IconTextProps) {
  const renderIcon = () => {
    if (!icon) return null;

    if (typeof icon === 'string') {
      return (
        <div className={`shrink-0 ${iconClassName}`}>
          <Image src={icon} alt={imageProps?.alt || 'icon'} {...imageProps} />
        </div>
      );
    }

    return <span className={`shrink-0 ${iconClassName}`}>{icon}</span>;
  };

  return (
    <div
      className={`flex items-center justify-center gap-2 border-solid border border-xtb-blue rounded-3xl bg-white py-[6px] px-[10px] w-max ${className}`}
      {...props}
    >
      {icon && iconPosition === 'left' && renderIcon()}
      <span className="text-gray-60 text-sm font-normal">{text}</span>
      {icon && iconPosition === 'right' && renderIcon()}
    </div>
  );
}
