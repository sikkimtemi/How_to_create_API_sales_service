import { FC } from 'react';
import { Link } from 'react-router-dom';

const Price: FC = () => (
  <section id="Price" className="body-font overflow-hidden text-gray-600">
    <div className="container mx-auto px-5 py-24">
      <div className="mb-20 flex w-full flex-col text-center">
        <h1 className="title-font mb-2 text-3xl font-medium text-gray-900 sm:text-4xl">
          料金プラン
        </h1>
      </div>
      <div className="-m-4 flex flex-wrap justify-center">
        <div className="w-full bg-white p-4 md:w-1/2 xl:w-1/4">
          <div className="relative flex h-full flex-col overflow-hidden rounded-lg border-2 border-gray-300 p-6">
            <h1 className="title-font mb-1 text-sm font-medium tracking-widest">
              FREE
            </h1>
            <h2 className="mb-4 border-b border-gray-200 pb-4 text-5xl leading-none text-gray-900">
              <span>0</span>
              <span className="ml-1 text-lg font-normal text-gray-500">円</span>
            </h2>
            <p className="mb-2 flex items-center text-gray-600">
              <span className="mr-2 inline-flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full bg-green-500 text-white">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  className="h-3 w-3"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 6L9 17l-5-5" />
                </svg>
              </span>
              IMAP4メール受信
            </p>
            <p className="mb-2 flex items-center text-gray-600">
              <span className="mr-2 inline-flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full bg-green-500 text-white">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  className="h-3 w-3"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 6L9 17l-5-5" />
                </svg>
              </span>
              添付ファイル取得
            </p>
            <p className="mb-6 flex items-center text-gray-600">
              <span className="mr-2 inline-flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full bg-green-500 text-white">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  className="h-3 w-3"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 6L9 17l-5-5" />
                </svg>
              </span>
              月100回までのAPIアクセス
            </p>
          </div>
        </div>
        <div className="w-full p-4 md:w-1/2 xl:w-1/4">
          <div className="relative flex h-full flex-col overflow-hidden rounded-lg border-2 border-yellow-500 p-6">
            <span className="absolute right-0 top-0 rounded-bl bg-yellow-500 px-3 py-1 text-xs tracking-widest text-white">
              オススメ
            </span>
            <h1 className="title-font mb-1 text-sm font-medium tracking-widest">
              PRO
            </h1>
            <h2 className="mb-4 border-b border-gray-200 pb-4 text-5xl leading-none text-gray-900">
              <span>980</span>
              <span className="ml-1 text-lg font-normal text-gray-500">
                円（月額）
              </span>
            </h2>
            <p className="mb-2 flex items-center text-gray-600">
              <span className="mr-2 inline-flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full bg-green-500 text-white">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  className="h-3 w-3"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 6L9 17l-5-5" />
                </svg>
              </span>
              IMAP4メール受信
            </p>
            <p className="mb-2 flex items-center text-gray-600">
              <span className="mr-2 inline-flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full bg-green-500 text-white">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  className="h-3 w-3"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 6L9 17l-5-5" />
                </svg>
              </span>
              添付ファイル取得
            </p>
            <p className="mb-2 flex items-center text-gray-600">
              <span className="mr-2 inline-flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full bg-green-500 text-white">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  className="h-3 w-3"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 6L9 17l-5-5" />
                </svg>
              </span>
              月100,000回までのAPIアクセス
            </p>
          </div>
        </div>
      </div>
      <div className="mt-20 flex justify-center">
        <button
          type="button"
          className="inline-flex rounded border-0 bg-blue-500 py-3 px-6 text-lg text-white hover:bg-blue-600 focus:outline-none active:bg-blue-700"
        >
          <Link to="/signup">無料ではじめる</Link>
        </button>
      </div>
    </div>
  </section>
);
export default Price;
