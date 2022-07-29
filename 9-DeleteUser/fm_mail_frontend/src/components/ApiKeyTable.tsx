import { useEffect, useState, FC } from 'react';
import { useAtom } from 'jotai';
import ky from 'ky';
import stateCurrentUser from '../atom/User';
import Spinner from './Spinner';
import ApiKeyInfo from './ApiKeyInfo';
import type { ApiKeyItem } from './ApiKeyInfo';

type Result = { Items: ApiKeyItem[] };
type Resp = { result: Result };

const ApiKeyTable: FC = () => {
  // サインイン中のユーザー情報
  const [user] = useAtom(stateCurrentUser);

  // 読込中フラグ
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // APIキー
  const [apiKeys, setApiKeys] = useState<ApiKeyItem[] | null>(null);

  // DynamoDBアクセス用URL
  const url = `${import.meta.env.VITE_DYNAMODB_BASE_URL}/apikey`;

  // DynamoDBからAPIキーを取得する
  useEffect(() => {
    // awaitを扱うため、いったん非同期関数を作ってから呼び出している
    const getApiKeys = async () => {
      try {
        if (user) {
          // Lambda経由でDynamoDBにアクセスする
          const res: Resp = await ky
            .get(url, {
              headers: {
                Authorization: `Bearer ${user.signInUserSession.idToken.jwtToken}`,
              },
            })
            .json();
          if (res.result.Items) setApiKeys(res.result.Items);
        }
      } catch (e) {
        // APIキー取得に失敗したらnullをセット
        setApiKeys(null);
      }
    };

    // Promiseを無視して呼び出すことを明示するためvoidを付けている
    void getApiKeys();
  }, [url, user]);

  // APIキーを取得できたらローディング表示をやめる
  useEffect(() => {
    if (apiKeys) setIsLoading(false);
  }, [apiKeys]);

  // ローディング表示
  if (isLoading) {
    return <Spinner />;
  }

  return (
    <table className="mb-8 rounded-lg bg-white p-4 shadow">
      <thead>
        <tr>
          <th className="dark:border-dark-5 whitespace-nowrap border-b-2 p-4 font-normal text-gray-900">
            No.
          </th>
          <th className="dark:border-dark-5 whitespace-nowrap border-b-2 p-4 font-normal text-gray-900">
            プラン種別
          </th>
          <th className="dark:border-dark-5 whitespace-nowrap border-b-2 p-4 font-normal text-gray-900">
            APIキー
          </th>
          <th className="dark:border-dark-5 whitespace-nowrap border-b-2 p-4 font-normal text-gray-900">
            コピー
          </th>
        </tr>
      </thead>
      <tbody>
        {apiKeys &&
          apiKeys.map((item: ApiKeyItem, index: number) => (
            <ApiKeyInfo item={item} index={index} key={item.ApiKey} />
          ))}
      </tbody>
    </table>
  );
};
export default ApiKeyTable;
