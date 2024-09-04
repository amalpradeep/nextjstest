import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const SSRPage = ({ productsList }: any) => {
  const { products } = productsList;

  return (
    <div className="flex min-h-screen flex-col items-center p-24">
      <h2 className="font-bold	text-2xl">SSR Page</h2>
      {products?.length > 0 && (
        <div className="py-2 w-1/2">
          {products?.map((product: any) => (
            <Link href={`/products/${product?.id}`} key={product?.id} className="flex my-2 bg-white rounded shadow-sm">
              <Image
                src={product?.images?.[0]}
                width={40}
                height={40}
                alt={product?.title}
              />
              <h3>{product?.title}</h3>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default SSRPage;

export async function getServerSideProps() {
  const res = await fetch('https://dummyjson.com/products');

  const productsList = await res.json();

  return {
    props: {
      productsList,
    },
  };
}
