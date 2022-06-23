import { FC } from 'react';
import Image from '../svg/undraw_balloons_re_8ymj.svg';

export type ThanksProps = {
  message: string;
};

const ThanksContent: FC<ThanksProps> = ({ message }) => (
  <section className="bg-white py-6 sm:py-8 lg:py-12">
    <div className="mx-auto max-w-screen-md px-4 md:px-8">
      <h1 className="mb-8 text-4xl font-bold">
        {message}ありがとうございます！
      </h1>
      <div className="w-5/6 md:w-1/2 lg:w-full lg:max-w-lg">
        <img
          className="rounded object-cover object-center"
          src={Image}
          alt="ありがとうございます!"
        />
      </div>
    </div>
  </section>
);
export default ThanksContent;
