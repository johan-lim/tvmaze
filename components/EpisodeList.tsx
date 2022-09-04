import React, { FunctionComponent } from 'react';
import { EpisodeListProps } from '../types';

export const EpisodeList: FunctionComponent<EpisodeListProps> = ({ children }) =>
    <div className="mt-10 w-full">
        <h3 className="text-2xl underline">Episodes:</h3>
        {children}
    </div>
