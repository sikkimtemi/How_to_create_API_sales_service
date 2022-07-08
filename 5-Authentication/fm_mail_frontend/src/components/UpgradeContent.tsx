import { FC } from 'react';

const UpgradeContent: FC = () => (
  <section className="bg-white py-6 sm:py-8 lg:py-12">
    <div className="mx-auto max-w-screen-md px-4 md:px-8">
      <h1 className="mb-8 text-4xl font-bold">アップグレード</h1>
      <p className="mb-4">
        アップグレードすると月間APIアクセス数が100,000回に拡大されます。
      </p>
      <p>PROプランに切り替えますか？</p>
      <div className="xl:w-1/1 w-full p-4 md:w-1/2">
        <div className="relative flex h-full flex-col overflow-hidden rounded-lg border-2 border-yellow-500 p-6">
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
          <div className="mt-2 w-5/6 md:w-1/2 lg:w-full lg:max-w-lg">
            <button
              type="button"
              className="inline-flex rounded border-0 bg-blue-500 py-3 px-6 text-lg text-white hover:bg-blue-600 focus:outline-none active:bg-blue-700"
            >
              PROプランに切り替え
            </button>
            <p className="text-sm text-gray-500">
              ※Stripe（決済サイト）に移動します。
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);
export default UpgradeContent;
