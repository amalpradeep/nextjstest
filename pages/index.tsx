import UserForm from '@/components/Form/CompanyForm';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center p-24 ${inter.className}`}
    >
      <h1 className="text-5xl font-extralight text-gray-600 mt-10">Welcome!</h1>
      <div className="mt-2">
        <UserForm />
      </div>
    </main>
  );
}
