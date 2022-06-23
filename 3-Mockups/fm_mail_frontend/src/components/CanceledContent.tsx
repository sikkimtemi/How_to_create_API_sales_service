import { FC } from 'react';
import Image from '../svg/undraw_cancel_re_pkdm.svg';

export type CanceledProps = {
  message: string;
};

const ThanksContent: FC<CanceledProps> = ({ message }) => (
  <section className="bg-white py-6 sm:py-8 lg:py-12">
    <div className="mx-auto max-w-screen-md px-4 md:px-8">
      <h1 className="mb-8 text-4xl font-bold">
        {message}キャンセルされました。
      </h1>
      <div className="w-5/6 md:w-1/2 lg:w-full lg:max-w-lg">
        <img
          className="rounded object-cover object-center"
          src={Image}
          alt="キャンセルされました。"
        />
      </div>
    </div>
  </section>
);
export default ThanksContent;
