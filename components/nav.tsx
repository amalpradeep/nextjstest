import Link from 'next/link';
import React from 'react';

const TopNav = () => {
  return (
    <div className="flex w-full justify-center bg-white shadow-sm">
      <nav className="flex divide-x-2 gap-6 p-2">
        <Link className="px-2 hover:text-gray-600" href="/">
          Home
        </Link>
        <Link className="px-2 hover:text-gray-600" href="/static">
          Static
        </Link>
        <Link className="px-2 hover:text-gray-600" href="/static-ajax">
          Static-Ajax
        </Link>
        <Link className="px-2 hover:text-gray-600" href="/ssg">
          Ssg
        </Link>
        <Link
          prefetch={false}
          className="px-2 hover:text-gray-600"
          href="/ssg-ajax"
        >
          Ssg-Ajax
        </Link>
        <Link className="px-2 hover:text-gray-600" href="/ssr">
          Ssr
        </Link>
        <Link className="px-2 hover:text-gray-600" href="/ssr-ajax">
          Ssr-Ajax
        </Link>
      </nav>
    </div>
  );
};

export default TopNav;
