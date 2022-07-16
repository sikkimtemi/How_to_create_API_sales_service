import { FC, ReactNode, useEffect, useState } from 'react';
import { Auth } from 'aws-amplify';
import { useAtom } from 'jotai';
import { Navigate } from 'react-router-dom';
import Header2 from '../components/Header2';
import Footer from '../components/Footer';
import Spinner from '../components/Spinner';
import stateCurrentUser from '../atom/User';
import type { CognitoUser } from '../atom/User';

type Props = { children: ReactNode };

const AuthenticatedLayout: FC<Props> = ({ children }) => {
  // サインイン中のユーザー情報
  const [user, setUser] = useAtom(stateCurrentUser);

  // 読込中フラグ
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // 要ログインフラグ
  const [loginRequired, setLoginRequired] = useState<boolean>(false);

  // サインイン済みかどうかチェックする
  useEffect(() => {
    // awaitを扱うため、いったん非同期関数を作ってから呼び出している
    const checkSignIn = async () => {
      try {
        // サインイン済みのユーザー情報を取得する
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        const currentUser: CognitoUser = await Auth.currentAuthenticatedUser();
        // ユーザー情報をJotaiで管理（これをトリガーにもう一つのEffect Hookが動く）
        setUser(currentUser);
      } catch (e) {
        // 認証に失敗したらサインアウトしてからログイン画面に遷移させる
        await Auth.signOut();
        setLoginRequired(true);
      }
    };

    // Promiseを無視して呼び出すことを明示するためvoidを付けている
    void checkSignIn();
  }, [setUser]);

  // サインイン済みチェックが終わったらローディング表示をやめる
  useEffect(() => {
    if (user || loginRequired) setIsLoading(false);
  }, [user, loginRequired]);

  // ローディング表示
  if (isLoading) {
    return (
      <main>
        <Spinner />
      </main>
    );
  }

  // 要ログインの場合はログイン画面に遷移
  if (loginRequired) {
    return <Navigate to="/login" replace />;
  }

  return (
    <>
      <header>
        <Header2 />
      </header>
      <main>
        <div className="flex justify-center text-center">
          <div
            className="relative rounded border border-red-400 bg-red-100 px-4 py-3 text-red-700"
            role="alert"
          >
            本システムは開発中です。ご利用いただけません。
          </div>
        </div>
        {children}
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default AuthenticatedLayout;
