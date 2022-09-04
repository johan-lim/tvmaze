import React, { FunctionComponent } from 'react';

type SummaryProps = {
    text: string;
}

export const Summary: FunctionComponent<SummaryProps> = ({ text }) =>
    <div className="text-sm text-left font-medium text-gray-500" dangerouslySetInnerHTML={{ __html: text }} />
