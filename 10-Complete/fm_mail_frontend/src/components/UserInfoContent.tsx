import { FC, useState } from 'react';
import { useAtom } from 'jotai';
import Modal from 'react-modal';
import ky from 'ky';
import { Auth } from 'aws-amplify';
import stateUserAttribute from '../atom/UserAttribute';
import Image from '../svg/undraw_browsing_re_eycn.svg';
import Spacer from './Spacer';
import openBillingPortal from '../function/StripeUtil';
import stateCurrentUser from '../atom/User';
import Spinner from './Spinner';

const UserInfoContent: FC = () => {
  const [user] = useAtom(stateCurrentUser);

  // ユーザー属性からemailと現在のプランを取り出す
  const [userAttribute] = useAtom(stateUserAttribute);
  const email = userAttribute?.email;
  const planType = userAttribute?.planType;

  // モーダルの表示制御用
  const [isOpen, setIsOpen] = useState<boolean>(false);

  // ローディング表示制御用
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // モーダルの表示スタイル（画面中央に表示）
  const customStyle = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

  // アカウントの削除処理
  const deleteUser = async () => {
    const url = `${import.meta.env.VITE_DELETE_USER_BASE_URL}/delete-user`;
    try {
      if (user) {
        // ローディング表示開始
        setIsLoading(true);

        // ユーザー削除処理を呼び出す
        await ky
          .get(url, {
            headers: {
              Authorization: `Bearer ${user.signInUserSession.idToken.jwtToken}`,
            },
          })
          .json();

        // サインアウトする
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        Auth.signOut();
      }
    } catch (e) {
      setIsLoading(false);
      alert('エラーが発生しました。');
    }
  };

  if (isLoading) {
    return (
      <>
        <Spacer size={100} />
        <Spinner />
        <Spacer size={100} />
      </>
    );
  }

  return (
    <section className="bg-white py-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-md px-4 md:px-8">
        <h1 className="mb-8 text-4xl font-bold">ユーザー情報</h1>
        <p className="mb-4">ご利用中のプランは{planType}プランです。</p>
        <p className="mb-4">メールアドレスは {email} です。</p>
        <div className="w-5/6 md:w-1/2 lg:w-full lg:max-w-lg">
          <img
            className="rounded object-cover object-center"
            src={Image}
            alt="ユーザー情報"
          />
        </div>
        <Spacer size={50} />
        <hr />
        <Spacer size={50} />
        <h2 className="mb-8 text-2xl font-bold text-red-500">
          アカウントの削除
        </h2>
        PROプランをご契約の場合は、事前にカスタマーポータルでサブスクリプションを解約してください。
        <br />
        アカウントを削除すると同じIDによるアカウント新規登録はできなくなります。
        <div className="mt-5 flex items-center justify-between sm:col-span-2">
          <button
            type="button"
            className={`inline-flex rounded border-0 bg-blue-500 py-3 px-6 text-lg text-white hover:bg-blue-600 focus:outline-none active:bg-blue-700 ${
              planType === 'PRO' ? '' : 'hidden'
            }`}
            // eslint-disable-next-line @typescript-eslint/no-misused-promises
            onClick={() => openBillingPortal(user)}
          >
            カスタマーポータル
          </button>
          <button
            type="button"
            className={`inline-flex rounded border-0 bg-red-400 py-3 px-6 text-lg text-white hover:bg-red-500 focus:outline-none active:bg-red-600 ${
              planType === 'FREE' ? '' : 'hidden'
            }`}
            onClick={() => setIsOpen(true)}
          >
            アカウント削除
          </button>
        </div>
      </div>

      <Modal
        isOpen={isOpen}
        style={customStyle}
        onRequestClose={() => setIsOpen(false)}
        ariaHideApp={false}
      >
        <button
          type="button"
          className="absolute top-3 right-2.5 ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-800 dark:hover:text-white"
          onClick={() => setIsOpen(false)}
        >
          <svg
            className="h-5 w-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <div className="p-6 text-center">
          <h3 className="mb-5 mt-5 text-lg font-normal text-gray-500 dark:text-gray-400">
            本当にアカウントを削除してもよろしいですか？
          </h3>
          <button
            data-modal-toggle="popup-modal"
            type="button"
            className="m-5 inline-flex rounded border-0 bg-red-400 py-3 px-6 text-lg text-white hover:bg-red-500 focus:outline-none active:bg-red-600"
            // eslint-disable-next-line @typescript-eslint/no-misused-promises
            onClick={() => deleteUser()}
          >
            アカウント削除
          </button>
          <button
            data-modal-toggle="popup-modal"
            type="button"
            className="m-5 inline-flex rounded border border-gray-200 bg-white py-3 px-6 text-lg text-gray-500 hover:bg-gray-200 focus:outline-none active:bg-gray-300 "
            onClick={() => setIsOpen(false)}
          >
            キャンセル
          </button>
        </div>
      </Modal>
    </section>
  );
};
export default UserInfoContent;
