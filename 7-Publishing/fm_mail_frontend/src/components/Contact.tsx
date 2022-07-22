/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { FC } from 'react';
import { HashLink } from '@xzar90/react-router-hash-link';

const Contact: FC = () => (
  <section id="Contact" className="bg-gray-100 py-6 sm:py-8 lg:py-12">
    <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
      <div className="mb-10 md:mb-16">
        <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
          お問い合わせ
        </h2>
      </div>
      <form
        className="mx-auto grid max-w-screen-md gap-4"
        name="contact"
        method="POST"
        data-netlify="true"
        action="/dummy_thanks.html"
      >
        <div className="sm:col-span-2">
          <label htmlFor="name" className="text-sm text-gray-800 sm:text-base">
            お名前<span className="required-dot text-red-500">*</span>
            <input
              name="name"
              type="text"
              className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
            />
          </label>
        </div>
        <div className="sm:col-span-2">
          <label
            htmlFor="company"
            className="text-sm text-gray-800 sm:text-base"
          >
            会社名
            <input
              name="company"
              type="text"
              className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
            />
          </label>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="email" className="text-sm text-gray-800 sm:text-base">
            メールアドレス<span className="required-dot text-red-500">*</span>
            <input
              name="email"
              type="email"
              className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
            />
          </label>
        </div>
        <div className="sm:col-span-2">
          <label
            htmlFor="message"
            className="text-sm text-gray-800 sm:text-base"
          >
            お問い合わせ内容
            <span className="required-dot text-red-500">*</span>
            <textarea
              name="message"
              className="h-64 w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
            />
          </label>
        </div>
        <input type="hidden" name="form-name" value="contact" />
        <div className="flex items-center justify-between sm:col-span-2">
          <button
            type="submit"
            className="inline-flex rounded border-0 bg-blue-500 py-3 px-6 text-lg text-white hover:bg-blue-600 focus:outline-none active:bg-blue-700"
          >
            送信
          </button>
        </div>
        <p className="text-xs text-gray-400">
          送信完了をもって
          <HashLink
            to="/privacy_policy#top"
            className="underline transition duration-100 hover:text-indigo-500 active:text-indigo-600"
          >
            プライバシーポリシー
          </HashLink>
          に同意したものとみなします。
        </p>
      </form>
    </div>
  </section>
);
export default Contact;
