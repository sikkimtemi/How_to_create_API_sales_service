import { FC } from 'react';
import ApiKeyInfo from './ApiKeyInfo';
import type { ApiKeyItem } from './ApiKeyInfo';

const ApiKeyTable: FC = () => {
  const apiKeys: ApiKeyItem[] = [
    { Type: 'FREE', ApiKey: 'hogehogehogehogehogehogehogehoge' },
    { Type: 'PRO', ApiKey: 'fugafugafugafugafugafugafugafuga' },
  ];

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
