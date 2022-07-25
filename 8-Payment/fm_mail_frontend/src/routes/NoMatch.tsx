import { FC } from 'react';
import { Link } from 'react-router-dom';
import NotFound from '../svg/undraw_page_not_found_re_e9o6.svg';

// 404ページ
const NoMatch: FC = () => (
  <main>
    <section className="bg-white py-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-lg px-4 md:px-8">
        <div className="grid gap-8 sm:grid-cols-2">
          <div className="flex flex-col items-center justify-center sm:items-start md:py-24 lg:py-32">
            <p className="mb-4 text-sm font-semibold uppercase text-indigo-500 md:text-base">
              Error 404
            </p>
            <h1 className="mb-2 text-center text-2xl font-bold text-gray-800 sm:text-left md:text-3xl">
              ページが見つかりません
            </h1>
            <Link
              to="/"
              className="inline-block rounded-lg bg-gray-200 px-8 py-3 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base"
            >
              トップページに戻る
            </Link>
          </div>
          <div className="relative h-80 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-auto">
            <img
              src={NotFound}
              alt="404"
              className="absolute inset-0 h-full w-full object-cover object-center"
            />
          </div>
        </div>
      </div>
    </section>
  </main>
);

export default NoMatch;
