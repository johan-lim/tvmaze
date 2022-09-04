import React from 'react';

export type ShowResponse = {
    webChannel: {
        country: string;
        name: string;
    };
    genres: string[];
    name: string;
    image: Image;
    summary: string;
    _embedded: {
        episodes: Episode[];
    };
}

export type EpisodeResponse = {
    id: number;
    name: string;
    summary: string;
    number: number;
    season: number;
    airdate: string;
    image: Image;
}

type Image = {
    medium: string;
    original: string;
}

export type Episode = {
    id: number;
    name: string;
    summary: string;
    number: number;
    season: number;
    airdate: string;
    image: Image;
}

type Show = {
    availableOn: string;
    name: string;
    summary?: string;
    image?: Image;
    genres?: string[];
}

export type EpisodeListProps = {
    children: React.ReactNode;
}

export type EpisodeProps = {
    episode: Episode;
}

export type ShowProps = {
    show: Show;
    hide: () => void;
}