// プリミティブ型の基本
// このファイルでは、JavaScriptの基本的なデータ型を学びます

// 1. 文字列（String）
// -----------------
let firstName = "太郎";
let lastName = '山田';
console.log(typeof firstName); // "string"

// 2. 数値（Number）
// --------------
let age = 25;
let height = 170.5;
console.log(typeof age); // "number"

// 特殊な数値
console.log(Infinity); // 無限大
console.log(-Infinity); // 負の無限大
console.log(NaN); // Not a Number（数値ではない）

// 3. 真偽値（Boolean）
// -----------------
let isStudent = true;
let isWorking = false;
console.log(typeof isStudent); // "boolean"

// 4. undefined
// ----------
let something;
console.log(something); // undefined
console.log(typeof something); // "undefined"

// 5. null
// ------
let nothing = null;
console.log(nothing); // null
console.log(typeof nothing); // "object"（JavaScriptの仕様バグ）

// 練習問題1: データ型の理解
// -----------------------
// 1. 自分の名前（文字列）、年齢（数値）、学生かどうか（真偽値）を宣言してください
// 2. それぞれのtypeofを使って型を確認してください

// 練習問題2: 数値の計算
// ------------------
// 1. 半径が5の円の面積を計算してください（円周率は Math.PI を使用）
// 2. 計算結果が数値型であることを確認してください

// 練習問題3: 文字列と数値の変換
// -------------------------
// 1. "42"という文字列を数値に変換してください
// 2. 100という数値を文字列に変換してください

// 解答例
// -----
/*
// 練習問題1の解答：
let myName = "山田太郎";
let myAge = 20;
let amIStudent = true;

console.log(typeof myName);    // "string"
console.log(typeof myAge);     // "number"
console.log(typeof amIStudent); // "boolean"

// 練習問題2の解答：
let radius = 5;
let area = Math.PI * radius * radius;
console.log(area);
console.log(typeof area); // "number"

// 練習問題3の解答：
let stringNumber = "42";
let convertedToNumber = Number(stringNumber);
console.log(convertedToNumber, typeof convertedToNumber);

let numberValue = 100;
let convertedToString = String(numberValue);
console.log(convertedToString, typeof convertedToString);
*/

// 重要なポイント：
// 1. JavaScriptには7つのプリミティブ型があります
// 2. typeofを使うと変数の型を確認できます
// 3. 文字列と数値は相互に変換可能です

// チャレンジ課題：
// -------------
// 1. 数値を文字列に変換する異なる方法を3つ試してください
// 2. 文字列を数値に変換する異なる方法を3つ試してください
// 3. NaNになるケースを3つ作ってください