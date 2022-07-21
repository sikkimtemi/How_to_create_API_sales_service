import { FC } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from '@xzar90/react-router-hash-link';
import Logo from '../svg/FM_Mail_logo.svg';

const Header1: FC = () => (
  <nav className="bg-white shadow dark:bg-gray-800">
    <div className="container mx-auto px-6 py-4">
      <div className="md:flex md:items-center md:justify-between">
        <div className="flex items-center justify-between">
          <div className="text-xl font-semibold text-gray-700">
            <Link
              to="/"
              className="inline-flex transform gap-2 text-2xl font-bold text-gray-800 transition-colors duration-200 hover:text-gray-700 dark:text-white dark:hover:text-gray-300 lg:text-3xl"
            >
              <img className="h-auto w-10" src={Logo} alt="FM Mail" />
              FM Mail
            </Link>
          </div>

          <div className="flex md:hidden">
            <button
              type="button"
              className="text-gray-500 hover:text-gray-600 focus:text-gray-600 focus:outline-none dark:text-gray-200 dark:hover:text-gray-400 dark:focus:text-gray-400"
              aria-label="toggle menu"
            >
              <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
                <path
                  fillRule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className="flex-1 md:flex md:items-center md:justify-between">
          <div className="-mx-4 flex flex-col md:mx-8 md:flex-row md:items-center">
            <HashLink
              smooth
              className="mx-2 mt-2 transform rounded-md px-2 py-1 text-sm font-medium text-gray-700 transition-colors duration-200 hover:bg-gray-300 dark:text-gray-200 dark:hover:bg-gray-700 md:mt-0"
              to="/#Overview"
            >
              概要
            </HashLink>
            <HashLink
              smooth
              to="/#Feature"
              className="mx-2 mt-2 transform rounded-md px-2 py-1 text-sm font-medium text-gray-700 transition-colors duration-200 hover:bg-gray-300 dark:text-gray-200 dark:hover:bg-gray-700 md:mt-0"
            >
              特長
            </HashLink>
            <HashLink
              smooth
              to="/#Price"
              className="mx-2 mt-2 transform rounded-md px-2 py-1 text-sm font-medium text-gray-700 transition-colors duration-200 hover:bg-gray-300 dark:text-gray-200 dark:hover:bg-gray-700 md:mt-0"
            >
              料金プラン
            </HashLink>
            <HashLink
              smooth
              to="/#Contact"
              className="mx-2 mt-2 transform rounded-md px-2 py-1 text-sm font-medium text-gray-700 transition-colors duration-200 hover:bg-gray-300 dark:text-gray-200 dark:hover:bg-gray-700 md:mt-0"
            >
              お問い合わせ
            </HashLink>
          </div>
          <div className="mt-4 flex items-center md:mt-0">
            <div className="-ml-8 hidden flex-col gap-2.5 sm:flex-row sm:justify-center lg:flex lg:justify-start">
              <button
                type="button"
                className="inline-block rounded-lg px-4 py-3 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:text-indigo-500 focus-visible:ring active:text-indigo-600 md:text-base"
              >
                <Link to="/login">ログイン</Link>
              </button>
              <button
                type="button"
                className="inline-block rounded-lg bg-blue-500 px-8 py-3 text-center text-sm  text-white outline-none hover:bg-blue-600 active:bg-blue-700 md:text-base"
                // eslint-disable-next-line @typescript-eslint/no-misused-promises
              >
                <Link to="/signup">新規登録</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
);
export default Header1;
