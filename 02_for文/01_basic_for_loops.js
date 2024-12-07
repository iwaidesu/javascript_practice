// 1. 基本的なfor文
// --------------

// for文の基本構造
// for (初期化; 条件; 更新) {
//     実行したい処理
// }

// 例1: 1から5まで数える
console.log("1から5まで数えます：");
for (let i = 1; i <= 5; i++) {
    console.log(i);
}

// 例2: 2ずつ増やす
console.log("\n2ずつ増やします：");
for (let i = 0; i <= 10; i += 2) {
    console.log(i);
}

// 例3: カウントダウン
console.log("\nカウントダウン：");
for (let i = 5; i > 0; i--) {
    console.log(i);
}

// 練習問題1：
// 1から10までの数字を表示してください

// 練習問題2：
// 10から1まで逆順で表示してください

// 練習問題3：
// 3の倍数を5回表示してください（3,6,9,12,15）

/*
// 解答例：
// 問題1
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// 問題2
for (let i = 10; i >= 1; i--) {
    console.log(i);
}

// 問題3
for (let i = 1; i <= 5; i++) {
    console.log(i * 3);
}
*/