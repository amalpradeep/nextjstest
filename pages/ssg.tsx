import Link from 'next/link';
import React from 'react';

const SSGPage = ({ postsList }: any) => {
  const { posts } = postsList;

  return (
    <div className="flex min-h-screen flex-col items-center p-24">
      <h2 className="font-bold	text-2xl">SSG Page</h2>
      {posts?.length > 0 && (
        <div className="py-2 w-1/2">
          {posts?.map((post: any) => (
            <Link
              href={`/posts/${post?.id}`}
              key={post?.id}
              className="flex hover:text-gray-600 py-2"
            >
              <h3>
                {post?.id} {post?.title}
              </h3>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default SSGPage;

export async function getStaticProps() {
  const postsRes = await fetch('https://dummyjson.com/posts');
  const postsList = await postsRes.json();

  return {
    props: {
      postsList
    },
  };
}
