import { Link } from 'react-router-dom';
import { useState, FC } from 'react';
import { Auth } from 'aws-amplify';
import { useAtom } from 'jotai';
import Avatar from 'boring-avatars';
import Logo from '../svg/FM_Mail_logo.svg';
import stateCurrentUser from '../atom/User';
import OutsideClickHandler from './OutsideClickHandler';

const Header2: FC = () => {
  // 通知プルダウンの制御用
  const [isNoticeOpen, setIsNoticeOpen] = useState(false);

  // ユーザーメニュープルダウンの制御用
  const [isUserOpen, setIsUserOpen] = useState(false);

  // サインイン中のユーザー情報
  const [user] = useAtom(stateCurrentUser);
  const userName = user?.username;

  // 通知アイコンをクリックしたときの処理
  const handleNoticeClick = () => {
    setIsNoticeOpen((t) => !t);
    setIsUserOpen(false);
  };

  // ユーザーアイコンをクリックしたときの処理
  const handleUserClick = () => {
    setIsNoticeOpen(false);
    setIsUserOpen((t) => !t);
  };

  // コンポーネントの外側をクリックしたときの処理
  const handleOutsideClick = () => {
    setIsNoticeOpen(false);
    setIsUserOpen(false);
  };

  return (
    <nav className="bg-white shadow dark:bg-gray-800">
      <div className="container mx-auto px-6 py-4">
        <div className="md:flex md:items-center md:justify-between">
          <div className="flex items-center justify-between">
            <div className="text-xl font-semibold text-gray-700">
              <Link
                to="/mypage"
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
              <Link
                to="/mypage"
                className="mx-2 mt-2 transform rounded-md px-2 py-1 text-sm font-medium text-gray-700 transition-colors duration-200 hover:bg-gray-300 dark:text-gray-200 dark:hover:bg-gray-700 md:mt-0"
              >
                マイページ
              </Link>
              <Link
                to="/api_key"
                className="mx-2 mt-2 transform rounded-md px-2 py-1 text-sm font-medium text-gray-700 transition-colors duration-200 hover:bg-gray-300 dark:text-gray-200 dark:hover:bg-gray-700 md:mt-0"
              >
                APIキーの確認
              </Link>
              <Link
                to="/upgrade"
                className="mx-2 mt-2 transform rounded-md px-2 py-1 text-sm font-medium text-gray-700 transition-colors duration-200 hover:bg-gray-300 dark:text-gray-200 dark:hover:bg-gray-700 md:mt-0"
              >
                アップグレード
              </Link>
            </div>

            <OutsideClickHandler onClickOutside={() => handleOutsideClick()}>
              <div className="relative mt-4 flex md:mt-0">
                <div className="relative inline-block">
                  <button
                    id="isNoticeOpenButton"
                    type="button"
                    className="mx-4 hidden h-full transform text-gray-600 transition-colors duration-200 hover:text-gray-700 focus:text-gray-700 focus:outline-none dark:text-gray-200 dark:hover:text-gray-400 dark:focus:text-gray-400 md:block"
                    aria-label="show notifications"
                    onClick={() => handleNoticeClick()}
                  >
                    <svg
                      className="h-6 w-6"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15 17H20L18.5951 15.5951C18.2141 15.2141 18 14.6973 18 14.1585V11C18 8.38757 16.3304 6.16509 14 5.34142V5C14 3.89543 13.1046 3 12 3C10.8954 3 10 3.89543 10 5V5.34142C7.66962 6.16509 6 8.38757 6 11V14.1585C6 14.6973 5.78595 15.2141 5.40493 15.5951L4 17H9M15 17V18C15 19.6569 13.6569 21 12 21C10.3431 21 9 19.6569 9 18V17M15 17H9"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                  <div
                    className={`absolute right-0 mt-2 w-60 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 dark:bg-gray-800 ${
                      isNoticeOpen ? '' : 'hidden'
                    }`}
                  >
                    <ul
                      className="divide-y divide-gray-100 py-1"
                      aria-labelledby="isNoticeOpenButton"
                    >
                      <li>
                        <Link
                          to="/welcome"
                          className="block w-full py-2 px-4 text-left text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          【お知らせ】ご登録ありがとうございます
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="relative inline-block">
                  <button
                    id="isUserOpenButton"
                    type="button"
                    className="flex items-center focus:outline-none"
                    aria-label="toggle profile dropdown"
                    onClick={() => handleUserClick()}
                  >
                    <div className="h-8 w-8 overflow-hidden rounded-full border-2 border-gray-400">
                      <Avatar
                        size={28}
                        name={userName}
                        variant="beam"
                        colors={[
                          '#FFBD87',
                          '#FFD791',
                          '#F7E8A6',
                          '#D9E8AE',
                          '#BFE3C0',
                        ]}
                      />
                    </div>
                    <h3 className="mx-2 text-sm font-medium text-gray-700 dark:text-gray-200 md:hidden">
                      ユーザーメニュー
                    </h3>
                  </button>
                  <div
                    className={`absolute right-0 mt-2 w-40 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 dark:bg-gray-800 ${
                      isUserOpen ? '' : 'hidden'
                    }`}
                  >
                    <ul className="py-1" aria-labelledby="dropdownButton">
                      <li>
                        <Link
                          to="/userinfo"
                          className="block w-full py-2 px-4 text-left text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          ユーザー情報
                        </Link>
                      </li>
                      <li>
                        <button
                          type="button"
                          className="block w-full py-2 px-4 text-left text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                          // eslint-disable-next-line @typescript-eslint/no-misused-promises
                          onClick={() => Auth.signOut()}
                        >
                          ログアウト
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </OutsideClickHandler>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Header2;
