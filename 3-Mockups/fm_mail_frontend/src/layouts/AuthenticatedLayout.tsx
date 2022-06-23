import { FC, ReactNode } from 'react';
import Header2 from '../components/Header2';
import Footer from '../components/Footer';

type Props = { children: ReactNode };

const AuthenticatedLayout: FC<Props> = ({ children }) => (
  <>
    <header>
      <Header2 />
    </header>
    <main>
      <div className="flex justify-center text-center">
        <div
          className="relative rounded border border-red-400 bg-red-100 px-4 py-3 text-red-700"
          role="alert"
        >
          本システムは開発中です。ご利用いただけません。
        </div>
      </div>
      {children}
    </main>
    <footer>
      <Footer />
    </footer>
  </>
);

export default AuthenticatedLayout;
