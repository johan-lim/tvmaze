import React, { FunctionComponent } from 'react';

type BubbleProps = {
    children: React.ReactNode;
}

export const Bubble: FunctionComponent<BubbleProps> = ({ children }) =>
    <div className="flex items-center bg-indigo-200 shadow-sm rounded text-gray-900 p-2 m-2">{children}</div>
