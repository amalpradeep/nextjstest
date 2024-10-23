import UserForm from '@/components/Form/CompanyForm';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main className={`flex flex-col items-center ${inter.className}`}>
      <h1 className="text-5xl font-extralight text-gray-600 mt-10">Welcome!</h1>
      <div className="m-2">
        <UserForm />
      </div>

      <div style={{ width: '100%', height: 6800 }}>
        <iframe
          src="https://alpha.aftontickets.com/embeded/1"
          id="aft-listing"
          scrolling="no"
          frameBorder="0"
          width="100%"
          height="100%"
          sandbox="allow-popups allow-forms allow-scripts allow-same-origin allow-downloads allow-top-navigation-by-user-activation"
          style={{
            border: 'none',
            position: 'static',
            visibility: 'visible',
            display: 'inline-block',
            width: '100%',
            padding: '0px',
            maxWidth: '100%',
            minWidth: '180px',
            marginTop: '0px',
            marginBottom: '0px',
          }}
        ></iframe>
      </div>
    </main>
  );
}
