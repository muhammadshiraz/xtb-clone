import { ReactNode } from 'react';
import Image, { ImageProps } from 'next/image';

type IconTextProps = {
  text: string | ReactNode;
  icon?: ReactNode | string;
  iconPosition?: 'left' | 'right';
  className?: string;
  iconClassName?: string;
  imageProps?: Omit<ImageProps, 'src'> & { alt: string };
  bgClassName?: string;
  borderClassName?: string;
  textClassName?: string;
};

export function IconText({
  text,
  icon,
  iconPosition = 'left',
  className = '',
  iconClassName = '',
  imageProps,
  bgClassName = 'bg-white',
  borderClassName = 'border border-xtb-blue',
  textClassName = 'text-gray-60',
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
      className={`flex items-center justify-center gap-2 border-solid rounded-3xl py-[6px] px-[10px] min-h-[33.6px] w-max ${bgClassName} ${borderClassName} ${className}`}
      {...props}
    >
      {icon && iconPosition === 'left' && renderIcon()}
      <span className={`${textClassName} text-sm font-normal leading-none tracking-[.15px]`}>{text}</span>
      {icon && iconPosition === 'right' && renderIcon()}
    </div>
  );
}
