import { FC } from 'react';
import ReactMarkdown from 'react-markdown';

const body = `
# 特定商取引法に基づく表記

## 販売価格について

販売価格は表示された金額（表示価格/消費税込）といたします。

## 代金(対価)の支払時期と方法

商品注文時点でお支払いが確定いたします。

クレジットカード決済がご利用いただけます。

## 役務の提供時期

お申込みから１営業日以内といたします。

## 返品について

商品の性質上、返品には応じられません。

## 解約について

解約申し込みを行った日を持って、解約となります。日割り計算は行っておりません。

## 事業者の名称

〇〇株式会社

## 住所

〒000-0000 〇〇県〇〇市〇〇町０番地 〇〇ビル１Ｆ

## 電話番号

0000000000

## 運営責任者

○○ ○○
`;

const TokusyouhouContent: FC = () => (
  <section className="bg-white py-6 sm:py-8 lg:py-12">
    <div className="prose mx-auto max-w-screen-md justify-center px-4 md:px-8">
      <ReactMarkdown>{body}</ReactMarkdown>
    </div>
  </section>
);
export default TokusyouhouContent;
