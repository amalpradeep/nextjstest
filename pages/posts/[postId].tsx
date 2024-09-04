import { useRouter } from 'next/router';
import React from 'react';

const PostDetails = ({ posts, company }: any) => {
  const router = useRouter();

  const onGoBack = () => router.back();

  if (!posts) return null;

  return (
    <div className="h-screen">
      <div className="flex items-center justify-center mr-96 mt-10">
        <div className="font-bold" role="button" onClick={onGoBack}>
          <span className="text-3xl">&larr;</span> Posts
        </div>
      </div>
      {company?.name && (
        <h6 className="font-bold text-xl text-center">Company : {company?.name}</h6>
      )}
      <div className="flex items-center justify-center mt-10">
        <div className="bg-white p-8 rounded shadow-md justify-center items-center flex">
          <p>
            {posts?.id} : <span className="font-bold">{posts?.title}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PostDetails;

export const getStaticPaths = async () => {
  const res = await fetch('https://dummyjson.com/posts');
  const postsList = await res.json();

  const paths = postsList.posts.map((post: any) => ({
    params: { postId: post.id.toString() },
  }));

  return {
    paths,
    fallback: "true",
  };
};

export const getStaticProps = async (context: any) => {
  const { postId } = context.params;

  const res = await fetch(`https://dummyjson.com/posts/${postId}`);
  const companyRes = await fetch(
    'https://nextjstest-six-gamma.vercel.app/api/company',
  );

  const company = await companyRes.json();
  const posts = await res.json();

  return {
    props: {
      posts,
      company,
    },
    revalidate: 120,
  };
};
