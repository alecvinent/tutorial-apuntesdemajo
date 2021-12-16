import {useRouter} from 'next/router'
import styles from '../styles/Home.module.scss'
import {tags} from "../shared/tags";
import {CACHE_TIMEOUT} from "../shared/config";
import {NotePropTypes} from "../shared/types";
import Head from 'next/head';

export default function Details({note}) {
    const router = useRouter();
    if (router.isFallback) {
        return <div>Loading...</div>
    }

    return (
        <>
            <Head>
                <title>
                    Apuntes de {note.title}
                </title>
            </Head>
            <h2>Apuntes de {note.title}</h2>
            <p className={styles.description}>
                {note.description}
            </p>
            <iframe src={note.file + '/preview'} width="640" height="480" allow="autoplay"/>
            <p>
                <a href={note.file + '/view'} target="_blank">Download</a>
            </p>
        </>
    )
}

Details.propTypes = {
    note: NotePropTypes
};

export async function getStaticProps({params = {}}) {
    const note = tags.find(t => t.id === parseInt(params.id));

    return {
        props: {
            note,
        },
        revalidate: CACHE_TIMEOUT // 10s
    };
}

export async function getStaticPaths() {
    const paths = tags.map(tag => ({
        params: {id: tag.id.toString()},
    }));

    return {
        paths,
        fallback: false
    };
}