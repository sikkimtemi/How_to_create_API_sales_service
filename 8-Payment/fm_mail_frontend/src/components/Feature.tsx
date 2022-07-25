import { FC } from 'react';

const Feature: FC = () => (
  <section id="Feature" className="body-font bg-gray-100 text-gray-600">
    <div className="container mx-auto px-5 py-24">
      <h1 className="title-font mb-20 text-center text-2xl font-medium text-gray-900 sm:text-3xl">
        FM Mailの特長
      </h1>
      <div className="-mx-4 -mb-10 -mt-4 flex flex-wrap space-y-6 sm:-m-4 md:space-y-0">
        <div className="mb-4 flex p-4 md:w-1/3">
          <div className="mb-4 inline-flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-500">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16 4H18V6H20V8H18V10H16V8H14V6H16V4Z"
                fill="currentColor"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 12V6H4V20H18V12H12ZM6 8H10V12H6V8ZM10 14V18H6V14H10ZM16 14V18H12V14H16Z"
                fill="currentColor"
              />
            </svg>
          </div>
          <div className="flex-grow pl-6">
            <h2 className="title-font mb-2 text-lg font-medium text-gray-900">
              プラグイン不要
            </h2>
            <p className="text-base leading-relaxed">
              Filemaker®の標準機能（「URLから挿入」スクリプトステップ）だけでメールを受信することができます。
            </p>
          </div>
        </div>
        <div className="flex p-4 md:w-1/3">
          <div className="mb-4 inline-flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-500">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M7 8V13C7 15.7614 9.23858 18 12 18C14.7614 18 17 15.7614 17 13V8H7ZM5 4H19V13C19 16.866 15.866 20 12 20C8.13401 20 5 16.866 5 13V4Z"
                fill="currentColor"
              />
            </svg>
          </div>
          <div className="flex-grow pl-6">
            <h2 className="title-font mb-2 text-lg font-medium text-gray-900">
              セキュリティ
            </h2>
            <p className="text-base leading-relaxed">
              通信はTLS/SSLで暗号化されるので傍受される心配はありません。
            </p>
          </div>
        </div>
        <div className="flex p-4 md:w-1/3">
          <div className="mb-4 inline-flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-500">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M7 18H17V16H7V18Z" fill="currentColor" />
              <path d="M17 14H7V12H17V14Z" fill="currentColor" />
              <path d="M7 10H11V8H7V10Z" fill="currentColor" />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M6 2C4.34315 2 3 3.34315 3 5V19C3 20.6569 4.34315 22 6 22H18C19.6569 22 21 20.6569 21 19V9C21 5.13401 17.866 2 14 2H6ZM6 4H13V9H19V19C19 19.5523 18.5523 20 18 20H6C5.44772 20 5 19.5523 5 19V5C5 4.44772 5.44772 4 6 4ZM15 4.10002C16.6113 4.4271 17.9413 5.52906 18.584 7H15V4.10002Z"
                fill="currentColor"
              />
            </svg>
          </div>
          <div className="flex-grow pl-6">
            <h2 className="title-font mb-2 text-lg font-medium text-gray-900">
              添付ファイル対応
            </h2>
            <p className="text-base leading-relaxed">
              添付ファイルはオブジェクトフィールドに格納されます。複数ファイルに対応しています。
            </p>
          </div>
        </div>
      </div>
      <div className="-mx-4 -mb-10 -mt-4 flex flex-wrap space-y-6 sm:-m-4 md:space-y-0">
        <div className="flex p-4 md:w-1/3">
          <div className="mb-4 inline-flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-500">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 12C6 15.3137 8.68629 18 12 18C14.6124 18 16.8349 16.3304 17.6586 14H12V10H21.8047V14H21.8C20.8734 18.5645 16.8379 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C15.445 2 18.4831 3.742 20.2815 6.39318L17.0039 8.68815C15.9296 7.06812 14.0895 6 12 6C8.68629 6 6 8.68629 6 12Z"
                fill="currentColor"
              />
            </svg>
          </div>
          <div className="flex-grow pl-6">
            <h2 className="title-font mb-2 text-lg font-medium text-gray-900">
              Gmail対応
            </h2>
            <p className="text-base leading-relaxed">
              一般的なIMAP4サーバーはもちろん、Gmailにも対応しています。
            </p>
          </div>
        </div>
        <div className="flex p-4 md:w-1/3">
          <div className="mb-4 inline-flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-500">
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="h-6 w-6"
              viewBox="0 0 24 24"
            >
              <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          </div>
          <div className="flex-grow pl-6">
            <h2 className="title-font mb-2 text-lg font-medium text-gray-900">
              カンタン登録
            </h2>
            <p className="text-base leading-relaxed">
              Googleアカウントがあればすぐにご登録いただけます。
            </p>
          </div>
        </div>
        <div className="flex p-4 md:w-1/3">
          <div className="mb-4 inline-flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-500">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11 5C11 4.44772 11.4477 4 12 4C12.5523 4 13 4.44772 13 5V12.1578L16.2428 8.91501L17.657 10.3292L12.0001 15.9861L6.34326 10.3292L7.75748 8.91501L11 12.1575V5Z"
                fill="currentColor"
              />
              <path
                d="M4 14H6V18H18V14H20V18C20 19.1046 19.1046 20 18 20H6C4.89543 20 4 19.1046 4 18V14Z"
                fill="currentColor"
              />
            </svg>
          </div>
          <div className="flex-grow pl-6">
            <h2 className="title-font mb-2 text-lg font-medium text-gray-900">
              すぐに試せる
            </h2>
            <p className="text-base leading-relaxed">
              サンプルアプリをダウンロードしてAPIキーを入力すれば、すぐにFM
              Mailの機能をお試しいただけます。
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Feature;
