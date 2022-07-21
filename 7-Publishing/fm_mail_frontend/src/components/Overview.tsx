import { FC } from 'react';
import { Link } from 'react-router-dom';
import newsletter from '../svg/undraw_newsletter_re_wrob.svg';
import mailReceive from '../img/mail_receive_sample001.png';

const Overview: FC = () => (
  <>
    <section id="Overview" className="body-font bg-gray-100 text-gray-600">
      <div className="container mx-auto flex flex-col items-center px-5 py-24 md:flex-row">
        <div className="mb-16 flex flex-col items-center text-center md:mb-0 md:w-1/2 md:items-start md:pr-16 md:text-left lg:flex-grow lg:pr-24">
          <h1 className="title-font mb-4 text-3xl font-medium text-gray-900 sm:text-4xl">
            FileMaker®の標準機能だけで
            <br className="hidden lg:inline-block" />
            簡単にメール受信を実現
          </h1>
          <p className="mb-8 leading-relaxed">
            プラグインのインストールや追加マシンの準備は不要です。FileMaker®の標準機能だけでIMAP4サーバーからメールを受信して、データベースに取り込むことができます。
          </p>
          <div className="flex justify-center">
            <button
              type="button"
              className="inline-flex rounded border-0 bg-blue-500 py-3 px-6 text-lg text-white hover:bg-blue-600 focus:outline-none active:bg-blue-700"
            >
              <Link to="/signup">無料ではじめる</Link>
            </button>
          </div>
        </div>
        <div className="w-5/6 md:w-1/2 lg:w-full lg:max-w-lg">
          <img
            className="rounded object-cover object-center"
            alt="hero"
            src={newsletter}
          />
        </div>
      </div>
    </section>
    <section className="body-font text-gray-600">
      <div className="container mx-auto flex flex-col items-center px-5 py-24 md:flex-row">
        <div className="mb-10 w-5/6 md:mb-0 md:w-1/2 lg:w-full lg:max-w-lg">
          <img
            className="rounded object-cover object-center"
            alt="hero"
            src={mailReceive}
          />
        </div>
        <div className="flex flex-col items-center text-center md:w-1/2 md:items-start md:pl-16 md:text-left lg:flex-grow lg:pl-24">
          <h1 className="title-font mb-4 text-3xl font-medium text-gray-900 sm:text-4xl">
            すぐに試せる！
            <br className="hidden lg:inline-block" />
            サンプルアプリ付き
          </h1>
          <p className="mb-8 leading-relaxed">
            FileMaker®のカスタムアプリをダウンロードできます。
          </p>
          <div className="flex justify-center">
            <button
              type="button"
              className="inline-flex rounded border-0 bg-blue-500 py-3 px-6 text-lg text-white hover:bg-blue-600 focus:outline-none active:bg-blue-700"
            >
              <Link to="/signup">無料ではじめる</Link>
            </button>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default Overview;
