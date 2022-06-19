import BlogPostAutor from '@components/BlogPostAutor';
import type { GetServerSideProps, NextPage } from 'next';
import { PostBySlugQuery, PostBySlugDocument, Post } from '@generated/graphql';
import client from '@lib/apollo';
import { NextSeo } from 'next-seo';
import NavigationBar from '@components/NavigationBar';
import Footer from '@components/Footer';
import ReactMarkdown from 'react-markdown';
import Image from 'next/image';
import { NormalComponents } from 'react-markdown/lib/complex-types';
import { SpecialComponents } from 'react-markdown/lib/ast-to-react';

interface Props {
    post: Post;
}

const PostPage: NextPage<Props> = (props) => {
    const { post } = props;

    return (
        <>
            <NextSeo title={'Blog - ' + post.title} />
            <NavigationBar />
            <main className="mx-auto flex flex-col justify-center items-center max-w-5xl p-5 gap-10">
                <div className="prose xl:prose-xl">
                    <h1>{post.title}</h1>
                </div>
                <BlogPostAutor date={post.publishedAt} />
                <div className="relative w-full aspect-video rounded-lg overflow-hidden">
                    <Image
                        src={
                            process.env.NEXT_PUBLIC_ASSETS_URL +
                            post.hero?.data?.attributes?.url!
                        }
                        blurDataURL={post.hero?.data?.attributes?.placeholder!}
                        alt={post.title}
                        placeholder="blur"
                        layout="fill"
                    />
                </div>
                <ReactMarkdown
                    components={mdComponents}
                    className="prose xl:prose-xl"
                >
                    {post.content}
                </ReactMarkdown>
            </main>
            <Footer />
        </>
    );
};

const mdComponents: Partial<
    Omit<NormalComponents, keyof SpecialComponents> & SpecialComponents
> = {
    img: ({ src, alt }) => (
        // eslint-disable-next-line @next/next/no-img-element
        <img alt={alt} src={process.env.NEXT_PUBLIC_ASSETS_URL! + src} />
    ),
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
    if (!params) {
        return {
            redirect: {
                permanent: false,
                destination: '/404',
            },
            props: {},
        };
    }

    try {
        const { slug } = params;

        const { data } = await client.query<PostBySlugQuery>({
            query: PostBySlugDocument,
            variables: {
                slug,
            },
        });

        return {
            props: {
                post: data.posts?.data[0].attributes,
            },
        };
    } catch (error) {
        return {
            redirect: {
                permanent: false,
                destination: '/404',
            },
            props: {},
        };
    }
};

export default PostPage;
