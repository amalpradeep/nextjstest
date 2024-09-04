import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

const ProductDetails = ({ product }: any) => {
  const router = useRouter();

  const onGoBack = () => router.back();

  if (!product) return null;

  return (
    <div className="h-screen">
      <div className="flex items-center justify-center mr-96 mt-10">
        <div className="font-bold" role="button" onClick={onGoBack}>
          <span className="text-3xl">&larr;</span> Products
        </div>
      </div>
      <div className="flex items-center justify-center mt-10">
        <div className="bg-white p-8 rounded shadow-md justify-center items-center flex">
          <Image
            height={100}
            width={100}
            src={product?.images?.[0]}
            alt={product?.title}
          />
          <p>
            Name : <span className="font-bold">{product?.title}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

export const getServerSideProps = async (context: any) => {
  const { pid } = context.params;

  const res = await fetch(`https://dummyjson.com/products/${pid}`);
  const product = await res.json();

  return {
    props: {
      product,
    },
  };
};
