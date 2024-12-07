// 2. 配列とfor文
// ------------

// 配列の各要素にアクセス
let fruits = ["りんご", "バナナ", "オレンジ", "ぶどう"];

console.log("果物リスト：");
for (let i = 0; i < fruits.length; i++) {
    console.log(`${i + 1}番目の果物: ${fruits[i]}`);
}

// for...of を使う方法（より簡単）
console.log("\nfor...ofで表示：");
for (let fruit of fruits) {
    console.log(fruit);
}

// 練習問題1：
// 次の数字の配列の合計を計算してください
let numbers = [1, 3, 5, 7, 9];

// 練習問題2：
// 次の配列から偶数だけを表示してください
let mixedNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// 練習問題3：
// 文字列の配列の中から、3文字以上の単語だけを表示してください
let words = ["cat", "dog", "elephant", "bird", "hippopotamus"];

/*
// 解答例：
// 問題1
let sum = 0;
for (let num of numbers) {
    sum += num;
}
console.log("合計:", sum);

// 問題2
for (let num of mixedNumbers) {
    if (num % 2 === 0) {
        console.log(num);
    }
}

// 問題3
for (let word of words) {
    if (word.length >= 3) {
        console.log(word);
    }
}
*/