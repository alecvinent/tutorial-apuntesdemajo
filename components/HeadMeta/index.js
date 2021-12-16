import {NextSeo} from 'next-seo';


const HeadMeta = ({title = 'Home', description = 'A short description goes here.'}) => {
    return (
        <>
            <NextSeo
                title={title + ' | Next.JS'}
                description={description}
                canonical="https://www.canonical.ie/"
                additionalLinkTags={[
                    {
                        rel: 'icon',
                        href: '/icons/favicon.ico',
                    },
                    {
                        rel: 'apple-touch-icon',
                        href: '/icons/apple-touch-icon-76x76.png', // generated with https://iconifier.net/
                        sizes: '76x76'
                    },
                    {
                        rel: 'manifest',
                        href: '/manifest.json'
                    }
                ]}
                additionalMetaTags={[{
                    property: 'theme-color',
                    content: '#319197'
                }, {
                    property: 'keywords',
                    content: 'apuntes, desarrollo de software, majo, alec vinent'
                }, {
                    property: 'twitter:card',
                    content: title,
                }, {
                    property: 'twitter:image',
                    content: './images/logo_apuntes.png',
                }, {
                    property: 'og:url',
                    content: '/',
                }, {
                    property: 'og:type',
                    content: 'article',
                }, {
                    property: 'og:image',
                    content: './images/logo_apuntes.png',
                }]}
            />
        </>
    );
};
export default HeadMeta;