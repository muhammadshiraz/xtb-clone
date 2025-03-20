// components/ui/Heading.tsx
import { HTMLAttributes, ReactNode } from 'react';

type HeadingProps = HTMLAttributes<HTMLHeadingElement> & {
  children: ReactNode;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  size?: '5xl' | '4xl' | '3xl' | '2xl' | 'xl' | '32';
  color?: string;
  spacing?: string;
};

export function Heading({
  children,
  as: Tag = 'h1',
  size = '5xl',
  color = 'text-gray-100',
  spacing = 'mb-4',
  className = '',
  ...props
}: HeadingProps) {
  const sizeClasses = {
    '5xl': 'text-5xl',
    '4xl': 'text-4xl',
    '3xl': 'text-3xl',
    '2xl': 'text-2xl',
    xl: 'text-xl',
    '32': 'text-[32px]',
  };

  return (
    <Tag className={`font-bold ${sizeClasses[size]} ${color} ${spacing} ${className}`} {...props}>
      {children}
    </Tag>
  );
}

// Default implementation
export default function DefaultHeading() {
  return <Heading>Your Heading</Heading>;
}
