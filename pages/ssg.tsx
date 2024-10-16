import Head from 'next/head';
import Link from 'next/link';
import React from 'react';

const SSGPage = ({ postsList }: any) => {
  const { posts } = postsList;

  return (
    <>
         <Head>
        <title>Home Page - My Website</title>
        <meta name="description" content="This is the home page of my Next.js website." />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Home Page - My Website" />
        <meta property="og:description" content="Welcome to the home page of my website." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="hhttps://nextjstest-six-gamma.vercel.app" />
        <meta property="og:image" content="hhttps://nextjstest-six-gamma.vercel.app/images/og.jpeg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Home Page - My Website" />
        <meta name="twitter:description" content="Welcome to the home page of my website." />
        <meta name="twitter:image" content="hhttps://nextjstest-six-gamma.vercel.app/images/og.jpeg" />
        <meta name="twitter:site" content="@mytwitterhandle" />

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="UTF-8" />
      </Head>

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
    </>
  );
};

export default SSGPage;

export async function getStaticProps() {
  const postsRes = await fetch('https://dummyjson.com/posts');
  const postsList = await postsRes.json();

  return {
    props: {
      postsList,
    },
  };
}
