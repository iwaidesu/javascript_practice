// 4. 応用的なfor文の使い方
// ---------------------

// break: ループを途中で抜ける
console.log("breakの例：");
for (let i = 1; i <= 10; i++) {
    if (i === 5) break;
    console.log(i);
}

// continue: 現在のループをスキップ
console.log("\ncontinueの例：");
for (let i = 1; i <= 5; i++) {
    if (i === 3) continue;
    console.log(i);
}

// forEach メソッド
console.log("\nforEachの例：");
let numbers = [1, 2, 3, 4, 5];
numbers.forEach(function(num, index) {
    console.log(`位置${index}: ${num}`);
});

// 練習問題1：
// 1から10までの数字で、最初に見つかった3の倍数で終了するプログラムを書いてください

// 練習問題2：
// 1から10までの数字で、偶数だけを表示するプログラムをcontinueを使って書いてください

// 練習問題3：
// 次の配列の各要素を2倍にしてforEachで表示してください
let nums = [2, 4, 6, 8, 10];

/*
// 解答例：
// 問題1
for (let i = 1; i <= 10; i++) {
    if (i % 3 === 0) {
        console.log(i);
        break;
    }
    console.log(i);
}

// 問題2
for (let i = 1; i <= 10; i++) {
    if (i % 2 !== 0) continue;
    console.log(i);
}

// 問題3
nums.forEach(function(num) {
    console.log(num * 2);
});
*/