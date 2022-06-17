import { FC, ReactNode } from 'react';
import Header1 from '../components/Header1';
import Footer from '../components/Footer';

type Props = { children: ReactNode };

const PublicLayout: FC<Props> = ({ children }) => (
  <>
    <header>
      <Header1 />
    </header>
    <main>
      <div className="flex justify-center text-center">
        <div
          className="rounded border border-red-400 bg-red-100 px-4 py-3 text-red-700"
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

export default PublicLayout;
