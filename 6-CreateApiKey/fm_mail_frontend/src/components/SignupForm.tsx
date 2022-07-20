import { FC } from 'react';
import { Navigate, Link } from 'react-router-dom';
import { HashLink } from '@xzar90/react-router-hash-link';
import { Auth } from 'aws-amplify';
import { useAtom } from 'jotai';
import stateCurrentUser from '../atom/User';

const SignupForm: FC = () => {
  // サインイン中のユーザー情報
  const [user] = useAtom(stateCurrentUser);

  // ログイン済みの場合はマイページに遷移
  if (user) return <Navigate to="/mypage" replace />;

  return (
    <div className="m-auto w-full max-w-sm rounded-md bg-white p-6 shadow-md dark:bg-gray-800">
      <h1 className="text-center text-3xl font-semibold text-gray-700 dark:text-white">
        FM Mail 新規登録
      </h1>
      <div className="-mx-2 mt-6 flex items-center">
        <button
          type="button"
          className="mx-2 flex w-full transform items-center justify-center rounded-md bg-blue-500 px-6 py-2 text-sm font-medium text-white transition-colors duration-200 hover:bg-blue-400 focus:bg-blue-400 focus:outline-none"
          // eslint-disable-next-line @typescript-eslint/no-misused-promises
          onClick={() => Auth.federatedSignIn({ customProvider: 'Google' })}
        >
          <svg className="mx-2 h-4 w-4 fill-current" viewBox="0 0 24 24">
            <path d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z" />
          </svg>
          Googleアカウントで新規登録
        </button>
      </div>

      <p className="mt-8 text-center text-xs font-light text-gray-400">
        会員登録により、
        <HashLink
          to="/terms#top"
          target="_blank"
          className="font-medium text-gray-700 hover:underline dark:text-gray-200"
        >
          利用規約
        </HashLink>
        、
        <HashLink
          to="/privacy_policy#top"
          target="_blank"
          className="font-medium text-gray-700 hover:underline dark:text-gray-200"
        >
          プライバシーポリシー
        </HashLink>
        に同意したものとみなします。登録済みの場合は
        <Link
          to="/login"
          className="font-medium text-gray-700 hover:underline dark:text-gray-200"
        >
          ログイン
        </Link>
        してください。
      </p>
    </div>
  );
};
export default SignupForm;
