# 1004
## React hooks
- useEffect・・・画面が読み込まれた時に実行される処理内容
## 非同期処理
- fetch→then→then の処理が終了するまで待つ（非同期処理）
- resolve→成功したときの処理
- reject→失敗したときの処理
- Promiseを使う場合はasync-awaitが必要
- APIで外部からデータを取得する場合（＝通信を行う場合）
const hogehoge = async () => {
  await fugafuga = () => {
    new Promise((resoleve, reject) => {
      fetch(url)
        .then((res) => res.json())
        .then((data) => resoleve(data));
    });
  };
};

## useStateとローディング
- useState・・・コンポーネントの状態を保持or変更
例1）const [loading, setLoading] = useState(true);
例2）const [値, 関数] = useState(初期値)
- ロードの状態を保持→必要に応じてture/falseで状態を変更する
- ローディングしているかどうか
- 関数で実行して状態を更新する
- 更新した内容を値に保持する
- useStateの引数に初期値（＝最初の状態）を設定する

## Promise.all(配列)
- 配列内にあるすべてのfetchが完了するまで待つ
- async-awaitが必要

# 1005
## (CSS)グリッドデザイン
(3分割の場合)
- display:grid; /* グリッドデザインの指定 */
- grid-template-columns: 1fr 1fr 1fr; /* カラム幅の割合 */
- place-items:center; /* カラムの中央揃え */
- gap:20px; /* カラムの間隔 */

## Reactのテンプレ呼び出しコマンド
- rfce
- import/function/exportを作成