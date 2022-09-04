import React, { FunctionComponent } from 'react';

type MetaDataProps = {
    children: React.ReactNode;
}

export const MetaData: FunctionComponent<MetaDataProps> = ({ children }) =>
    <div className="text-sm italic font-medium text-gray-800 flex flex-col justify-between my-5">
        {children}
    </div>
