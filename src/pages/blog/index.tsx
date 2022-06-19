import Footer from '@components/Footer';
import NavigationBar from '@components/NavigationBar';
import {
    AllPostsQuery,
    AllPostsDocument,
    PostEntity,
} from '@generated/graphql';
import client from '@lib/apollo';
import { GetServerSideProps, NextPage } from 'next';
import { NextSeo } from 'next-seo';
import BlogPostListItem from '@components/BlogPostListItem';

interface Props {
    posts: PostEntity[];
}

const BlogHomePage: NextPage<Props> = (props) => {
    const { posts } = props;

    return (
        <>
            <NextSeo title="Blog" />
            <NavigationBar />
            <main className="mx-auto min-h-screen max-w-3xl">
                <ul>
                    {posts.map((post) => (
                        <BlogPostListItem key={post.id} post={post} />
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
