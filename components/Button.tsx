import React, { FunctionComponent } from 'react';
import classnames from 'classnames';

type ButtonProps = {
    children: React.ReactNode;
    onClick?: (e: any) => void;
    type?: 'primary' | 'secondary';
}

export const Button: FunctionComponent<ButtonProps> = ({ children, onClick, type = 'primary' }) =>
    <button
        onClick={onClick}
        className={
            classnames(
                'inline-flex',
                'justify-center',
                'w-full',
                'rounded-md',
                'border',
                'border-transparent',
                'py-2',
                'px-4',
                'text-sm',
                'font-medium',
                'text-white',
                'shadow-sm',
                'focus:outline-none',
                'focus:ring-2',
                'focus:ring-offset-2',
                {
                    'bg-indigo-600': type === 'primary',
                    'hover:bg-indigo-700': type === 'primary',
                    'focus:ring-indigo-500': type === 'primary',
                    'text-white': type === 'primary',
                    'text-black': type === 'secondary',
                    'border-black': type === 'secondary',

                }
            )
        }>
        {children}
    </button >