import { useState, FC } from 'react';

export type ApiKeyItem = {
  Type: string;
  ApiKey: string;
};

type Props = {
  index: number;
  item: ApiKeyItem;
};

const ApiKeyInfo: FC<Props> = ({ index, item }) => {
  // コピー済みツールチップの表示制御用
  const [isCopied, setIsCopied] = useState<boolean>(false);

  // 引数をクリップボードにコピーする
  const copyTextToClipboard = (text: string) => {
    void navigator.clipboard.writeText(text);
    // 2秒間ツールチップを表示する
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <tr className="text-gray-700">
      <td className="dark:border-dark-5 border-b-2 p-4">{index + 1}</td>
      <td className="dark:border-dark-5 border-b-2 p-4">{item.Type}</td>
      <td className="dark:border-dark-5 border-b-2 p-4">{item.ApiKey}</td>
      <td className="dark:border-dark-5 border-b-2 p-4">
        <button
          className="hover:opacity-75"
          data-tooltip-target="tooltip-default"
          type="button"
          onClick={() => copyTextToClipboard(item.ApiKey)}
        >
          <div className="group relative flex flex-col items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#000000"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
            </svg>
            <div
              className={`absolute bottom-0 mb-6 flex flex-col items-center ${
                isCopied ? '' : 'hidden'
              }`}
            >
              <span className="whitespace-no-wrap relative z-10 bg-gray-600 p-2 text-xs leading-none text-white shadow-lg">
                coppied
              </span>
              <div className="-mt-2 h-3 w-3 rotate-45 bg-gray-600" />
            </div>
          </div>
        </button>
      </td>
    </tr>
  );
};
export default ApiKeyInfo;
