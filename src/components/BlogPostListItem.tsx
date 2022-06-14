import { format } from 'date-fns';
import Link from 'next/link';
import Image from 'next/image';
import { PostEntity } from '@generated/graphql';
import React from 'react';

interface Props {
    post: PostEntity;
}

const BlogPostListItem: React.FC<Props> = (props) => {
    const { post } = props;

    return (
        <li>
            <Link href={'/blog/' + post.attributes?.slug}>
                <a className="z-0 m-4 flex flex-col gap-5 rounded-lg p-2 transition hover:bg-gray-200 hover:shadow-md md:flex-row">
                    <div className="overflow-hidden rounded-lg shadow-md relative h-40 w-full md:w-2/3">
                        <Image
                            layout="fill"
                            objectFit="cover"
                            src={
                                process.env.NEXT_PUBLIC_ASSETS_URL +
                                post.attributes?.hero?.data?.attributes?.url!
                            }
                            alt={'Blog Post Image'}
                            blurDataURL={
                                post.attributes?.hero?.data?.attributes
                                    ?.placeholder!
                            }
                            placeholder="blur"
                        />
                    </div>

                    <div className="flex w-full flex-col gap-2">
                        <h2 className="text-2xl font-black">
                            {post.attributes?.title}
                        </h2>
                        <p className="text-sm text-gray-500">
                            {format(
                                new Date(post.attributes?.publishedAt),
                                'DD.MM.YYYY'
                            )}
                        </p>
                    </div>
                </a>
            </Link>
        </li>
    );
};

export default BlogPostListItem;
