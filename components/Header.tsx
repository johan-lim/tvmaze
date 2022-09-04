import React, { FunctionComponent } from 'react';

type HeaderProps = {
    children: React.ReactNode;
    as?: string;
}

export const Header: FunctionComponent<HeaderProps> = ({ children, as = 'h1' }) => {
    if (as === 'h1') return (<h1 className="text-6xl font-bold">
        {children}
    </h1>)
    if (as === 'h3') return (<h3 className="text-lg font-medium leading-6 text-gray-900">
        {children}
    </h3>)
    return null;
}


