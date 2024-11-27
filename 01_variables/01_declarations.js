// 変数宣言の基本
// このファイルでは、JavaScriptの変数宣言の違いを学びます

// 練習1: var, let, constの違いを理解しよう
// ----------------------------------------

// var: 再宣言と再代入が可能（非推奨）
var message = "こんにちは";
console.log(message); // "こんにちは"
var message = "さようなら"; // 再宣言可能
console.log(message); // "さようなら"

// let: 再代入のみ可能、再宣言は不可
let name = "田中";
console.log(name); // "田中"
name = "鈴木"; // 再代入可能
console.log(name); // "鈴木"
// let name = "佐藤"; // エラー: 再宣言不可

// const: 再代入も再宣言も不可
const age = 25;
console.log(age); // 25
// age = 30; // エラー: 再代入不可

// 練習問題1: 変数の宣言と代入
// --------------------------
// 1. 自分の名前をletで宣言し、後から別の名前に変更してください
// 2. 誕生日をconstで宣言してください
// 3. 以下のコードを実行して、エラーが出る理由を考えてください
/*
const greeting = "おはよう";
greeting = "こんばんは";
*/

// 練習問題2: スコープの理解
// -----------------------
{
    let localName = "ローカルスコープの変数";
    console.log(localName); // アクセス可能
}
// console.log(localName); // エラー: スコープ外

// 解答例とコメント
// ---------------
/*
// 練習問題1の解答例：
let myName = "太郎";
console.log(myName);
myName = "次郎";
console.log(myName);

const birthday = "2000-01-01";
console.log(birthday);

// エラーが出る理由：
// constで宣言された変数は再代入できないため、
// 2行目の代入操作でエラーになります。
*/

// 重要なポイント：
// 1. 現代のJavaScriptではvarの使用は避け、letとconstを使用します
// 2. 値が変更されない変数はconstで宣言します（バグ防止になります）
// 3. letは値の変更が必要な場合のみ使用します

// チャレンジ課題：
// -------------
// 1. constで配列を宣言し、配列の要素を変更してみてください
// 2. letとconstを使って、自己紹介の文章を作成してください