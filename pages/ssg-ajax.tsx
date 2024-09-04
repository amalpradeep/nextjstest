import axios from 'axios';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const SSGAjaxPage = ({ postsList }: any) => {
  const { posts } = postsList;

  const [user, setUser] = useState<any>({});

  const getCustomersData = () => {
    axios
      .get('https://dummyjson.com/users')
      .then((data) => setUser(data?.data?.users?.[0]))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getCustomersData();
  }, []);

  return (
    <div className="flex min-h-screen flex-col items-center p-24">
      <h2 className="font-bold	text-2xl">SSG Ajax Page</h2>
      <h2 className="font-bold	text-xl">
        Hi {user?.firstName && user?.firstName}
      </h2>
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

export default SSGAjaxPage;

export async function getStaticProps() {
  const res = await fetch('https://dummyjson.com/posts');

  const postsList = await res.json();

  return {
    props: {
      postsList,
    },
  };
}
