import { FC } from 'react';
import PublicLayout from './layouts/PublicLayout';
import Overview from './components/Overview';
import Feature from './components/Feature';
import Price from './components/Price';
import Contact from './components/Contact';

// ランディングページ
const App: FC = () => (
  <PublicLayout>
    <Overview />
    <Feature />
    <Price />
    <Contact />
  </PublicLayout>
);

export default App;
