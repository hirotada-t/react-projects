export const getAllPokemon = (url) => {
  // fetch→then→then の処理が終了するまで待つ（非同期処理）
  // resolve→成功したときの処理
  // reject→失敗したときの処理
  // Promiseを使う場合はasync-awaitが必要
  return new Promise((resoleve, reject) => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => resoleve(data));
  });
};

export const getPokemon = (url) => {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => resolve(data));
  });
};