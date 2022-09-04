import React, { FunctionComponent } from 'react';
import Image from 'next/image'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { Bubble, Summary } from '.';
import { ShowProps } from '../types';

export const ShowInfo: FunctionComponent<ShowProps> = ({ show, hide }) =>
    <div className="flex flex-col items-start justify-start drop-shadow-md sm:rounded-lg m-5 p-9 w-full relative bg-indigo-100">
        <button
            type="button"
            className="absolute top-3 right-3 text-gray-400 hover:text-gray-500"
            onClick={hide}
        >
            <span className="sr-only">Close</span>
            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
        </button>
        <div className="w-full flex flex-col justify-between text-left items-stretch">
            <div className="flex flex-col sm:flex-row">
                <div className="flex flex-1 flex-col justify-between">
                    <h2 className="text-2xl font-medium leading-6 text-gray-900 mb-5">{show.name}</h2>
                    {show.summary &&
                        <Summary text={show.summary} />
                    }
                    <div className="flex mt-5">
                        {show.genres?.map(genre =>
                            <Bubble>{genre}</Bubble>
                        )}
                    </div>
                    {show.availableOn &&
                        <div className="text-sm my-5 text-left font-medium text-gray-800">
                            Available on: {show.availableOn}
                        </div>
                    }
                </div>
                <div className="flex flex-1 flex-col mt-5 items-center sm:items-end">
                    {show.image &&
                        <Image
                            layout="fixed"
                            width={210}
                            height={295}
                            src={show.image?.medium}
                        />
                    }
                </div>
            </div>
        </div>
    </div >
