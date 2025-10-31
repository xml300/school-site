import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', size = 'md', className = '', ...props }) => {
  const baseStyles = 'font-bold rounded-md transition-all duration-300 ease-in-out transform hover:-translate-y-px shadow-md hover:shadow-lg focus-visible-ring';

  const variantStyles = {
    primary: 'bg-gradient-to-r from-secondary to-sky-600 hover:from-secondary-light hover:to-secondary text-white hover:shadow-secondary/30',
    secondary: 'bg-gradient-to-r from-amber-600 to-amber-700 hover:from-accent hover:to-amber-600 text-white hover:shadow-accent/30',
  };

  const sizeStyles = {
    sm: 'py-2 px-3 text-sm',
    md: 'py-2.5 px-5 text-base',
    lg: 'py-3 px-8 text-lg',
  };

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;