import Footer from '@components/Footer';
import NavigationBar from '@components/NavigationBar';
import {
    Post,
    AllPostsQuery,
    AllPostsDocument,
    PostEntity,
} from '@generated/graphql';
import client from '@lib/apollo';
import { GetServerSideProps, NextPage } from 'next';
import { NextSeo } from 'next-seo';
import Image from 'next/image';
import { format } from 'date-fns';
import Link from 'next/link';

interface Props {
    posts: PostEntity[];
}

const BlogHomePage: NextPage<Props> = (props) => {
    const { posts } = props;

    return (
        <>
            <NextSeo title="Blog" />
            <NavigationBar />
            <main className="z-0 mx-auto min-h-screen max-w-2xl">
                <ul>
                    {posts.map((post) => (
                        <li key={post.id}>
                            <Link href={'/blog/' + post.attributes?.slug}>
                                <a className="z-0 m-4 flex flex-col gap-5 rounded-lg p-2 transition hover:bg-gray-200 hover:shadow-md md:flex-row">
                                    <Image
                                        className="overflow-hidden rounded-lg shadow-md"
                                        objectFit="cover"
                                        src={
                                            process.env.NEXT_PUBLIC_ASSETS_URL +
                                            post.attributes?.hero?.data
                                                ?.attributes?.url!
                                        }
                                        height={300}
                                        width={500}
                                        alt={'Blog Post Image'}
                                        blurDataURL={
                                            post.attributes?.hero?.data
                                                ?.attributes?.placeholder!
                                        }
                                        placeholder="blur"
                                    />

                                    <div className="flex w-full flex-col gap-2">
                                        <h2 className="text-2xl font-black">
                                            {post.attributes?.title}
                                        </h2>
                                        <p className="text-sm text-gray-500">
                                            {format(
                                                new Date(
                                                    post.attributes?.publishedAt
                                                ),
                                                'dd.mm.yyyy'
                                            )}
                                        </p>
                                    </div>
                                </a>
                            </Link>
                        </li>
                    ))}
                </ul>
            </main>
            <Footer />
        </>
    );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const { data } = await client.query<AllPostsQuery>({
        query: AllPostsDocument,
    });

    return {
        props: {
            posts: data.posts?.data,
        },
    };
};
export default BlogHomePage;
