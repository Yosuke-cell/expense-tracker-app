# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
   npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.


---

## Shared Variable Naming Convention

This section defines the shared variable names that both team members should use in this project.  
Using the same names will help us avoid confusion when working on the input page, main page, and analytics/graph page.

| Variable Name | Meaning |
|---|---|
| `transactions` | The full list of transactions |
| `transaction` | A single transaction |
| `transactionId` | The unique ID of one transaction |
| `transactionType` | The transaction type: `'expense'` or `'income'` |
| `amount` | The amount converted to a number |
| `amountInput` | The amount value received as a string from `TextInput` |
| `categoryId` | The category ID |
| `memo` | A short note or description |
| `date` | The transaction date, for example: `'2026-05-04'` |
| `createdAt` | The time when the transaction was created |
| `updatedAt` | The time when the transaction was last updated |

Example transaction object:

~~~ts
const transaction = {
  id: '1714770000000',
  transactionType: 'expense',
  amount: 12000,
  categoryId: 'food',
  memo: 'Lunch',
  date: '2026-05-04',
  createdAt: '2026-05-04T18:30:00.000Z',
  updatedAt: '2026-05-04T18:30:00.000Z',
};
~~~

---

## 共有変数名ルール

このセクションでは、このプロジェクトでチームメンバーが共通で使う変数名を定義します。  
同じ変数名を使うことで、入力ページ、メインページ、分析・グラフページを作るときの混乱を防ぎます。

| 変数名 | 意味 |
|---|---|
| `transactions` | すべての取引リスト |
| `transaction` | 1件の取引 |
| `transactionId` | 1件の取引の一意なID |
| `transactionType` | 取引タイプ：`'expense'` または `'income'` |
| `amount` | 数値に変換された金額 |
| `amountInput` | `TextInput` から受け取った文字列の金額 |
| `categoryId` | カテゴリーID |
| `memo` | メモ、または短い説明 |
| `date` | 取引日。例：`'2026-05-04'` |
| `createdAt` | 取引が作成された日時 |
| `updatedAt` | 取引が最後に更新された日時 |

取引オブジェクトの例：

~~~ts
const transaction = {
  id: '1714770000000',
  transactionType: 'expense',
  amount: 12000,
  categoryId: 'food',
  memo: 'Lunch',
  date: '2026-05-04',
  createdAt: '2026-05-04T18:30:00.000Z',
  updatedAt: '2026-05-04T18:30:00.000Z',
};
~~~

---

## 공통 변수명 규칙

이 섹션은 이 프로젝트에서 팀원들이 공통으로 사용할 변수명을 정의합니다.  
같은 변수명을 사용하면 입력 페이지, 메인 페이지, 분석/그래프 페이지를 만들 때 혼란을 줄일 수 있습니다.

| 변수명 | 의미 |
|---|---|
| `transactions` | 전체 거래 목록 |
| `transaction` | 거래 하나 |
| `transactionId` | 거래 하나의 고유 ID |
| `transactionType` | 거래 타입: `'expense'` 또는 `'income'` |
| `amount` | 숫자로 변환된 금액 |
| `amountInput` | `TextInput`에서 받은 문자열 금액 |
| `categoryId` | 카테고리 ID |
| `memo` | 메모 또는 간단한 설명 |
| `date` | 거래 날짜. 예: `'2026-05-04'` |
| `createdAt` | 거래가 생성된 시간 |
| `updatedAt` | 거래가 마지막으로 수정된 시간 |

거래 객체 예시:

~~~ts
const transaction = {
  id: '1714770000000',
  transactionType: 'expense',
  amount: 12000,
  categoryId: 'food',
  memo: 'Lunch',
  date: '2026-05-04',
  createdAt: '2026-05-04T18:30:00.000Z',
  updatedAt: '2026-05-04T18:30:00.000Z',
};
~~~