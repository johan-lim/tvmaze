import React, { FunctionComponent } from 'react';

type MainSectionProps = {
    children: React.ReactNode | React.ReactNode[];
}

export const MainSection: FunctionComponent<MainSectionProps> = ({ children }) =>
    <main className="flex md:w-3/4 w-full flex-1 flex-col items-center justify-center sm:px-20 text-center">
        {children}
    </main>
