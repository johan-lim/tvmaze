import type { NextPage } from 'next';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { useRouter } from 'next/router'
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { ParsedUrlQuery } from 'querystring';
import { Bubble, Button, Header, MainSection } from '../../components';
import { EpisodeResponse } from '../../types';

interface IParams extends ParsedUrlQuery {
    id: string
}

const EpisodePage: NextPage = ({ data: episode }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
    const router = useRouter();
    return (
        <div className="flex min-h-screen flex-col items-center justify-center py-5">
            <Head>
                <title>TV episode search</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="lg:absolute lg:top-5 lg:left-5 flex flex-col w-4/5 lg:w-1/5 sm:items-center md:items-start z-20 bg-white">
                <Button onClick={() => router.back()} type="secondary">Go back...</Button>
            </div>
            <MainSection>
                {episode.image &&
                    <div className="w-1/2 mb-10">
                        <Image
                            layout="responsive"
                            width={500}
                            height={280}
                            src={episode.image?.original}
                        />
                    </div>
                }
                <Header>
                    {episode.name}
                </Header>

                <p className="mt-5 text-2xl mb-7" dangerouslySetInnerHTML={{ __html: episode.summary }} />
                <p className="mt-3 text-2xl mb-7">
                    <Bubble>S {episode.season} E {episode.number}</Bubble>
                </p>
                <div>First shown: {episode.airdate}</div>

            </MainSection>
        </div >
    );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const { id } = context.params as IParams;
    const res = await fetch(`https://api.tvmaze.com/episodes/${id}`);
    const data: EpisodeResponse = await res.json();

    if (!data) {
        return {
            notFound: true,
        }
    }

    return {
        props: {
            data
        }
    }
}

export default EpisodePage;
