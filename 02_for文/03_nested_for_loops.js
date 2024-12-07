// 3. ネストしたfor文（二重ループ）
// ---------------------------

// 例1: 掛け算の表を作る
console.log("2x2の掛け算表：");
for (let i = 1; i <= 2; i++) {
    for (let j = 1; j <= 2; j++) {
        console.log(`${i} x ${j} = ${i * j}`);
    }
}

// 例2: 星を使った四角形を描く
console.log("\n星の四角形：");
for (let i = 0; i < 3; i++) {
    let line = "";
    for (let j = 0; j < 3; j++) {
        line += "★ ";
    }
    console.log(line);
}

// 練習問題1：
// 3x3の掛け算表を作ってください

// 練習問題2：
// 次のような三角形を作ってください
// ★
// ★★
// ★★★

/*
// 解答例：
// 問題1
for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
        console.log(`${i} x ${j} = ${i * j}`);
    }
}

// 問題2
for (let i = 1; i <= 3; i++) {
    let line = "";
    for (let j = 1; j <= i; j++) {
        line += "★";
    }
    console.log(line);
}
*/