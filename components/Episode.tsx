import React, { FunctionComponent } from 'react';
import Image from 'next/image'
import Link from 'next/link'
import { Button, Summary, Header, MetaData } from '.';
import { EpisodeProps } from '../types';

export const Episode: FunctionComponent<EpisodeProps> = ({ episode }) =>
    <div className="flex flex-col items-start justify-start bg-gray-100 shadow sm:rounded-lg my-5 p-5 w-full">
        <div className="w-full flex flex-row justify-between">
            <div className="sm:w-full md:w-2/3 text-left">
                <Header as="h3">{episode.name}</Header>
                <MetaData>
                    <div>S{episode.season}&nbsp;E{episode.number}</div>
                    <div>First shown: {episode.airdate}</div>
                </MetaData>
            </div>
            {episode.image &&
                <Image
                    layout="fixed"
                    width={140}
                    height={80}
                    src={episode.image?.medium}
                />

            }
        </div>
        <Summary text={episode.summary} />
        <div className="flex w-full justify-center">
            <div className="flex flex-col my-2 w-full sm:w-1/3 items-center mt-5">
                <Link href={`/episode/${episode.id}`}>
                    <Button type="secondary">Go to episode</Button>
                </Link>
            </div>
        </div>
    </div >
