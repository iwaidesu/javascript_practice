// 型変換の基本
// このファイルでは、JavaScriptの型変換について学びます

// 1. 暗黙的な型変換
// ---------------

// 文字列と数値の加算
console.log("5" + 3);     // "53" (数値が文字列に変換される)
console.log("5" - 3);     // 2 (文字列が数値に変換される)
console.log("5" * 3);     // 15 (文字列が数値に変換される)

// 真偽値との演算
console.log(true + 1);    // 2 (trueは1に変換される)
console.log(false + 1);   // 1 (falseは0に変換される)

// 2. 明示的な型変換
// ---------------

// 文字列への変換
console.log(String(123));        // "123"
console.log(String(true));       // "true"
console.log(String(null));       // "null"
console.log(String(undefined));  // "undefined"

// 数値への変換
console.log(Number("123"));      // 123
console.log(Number("12.3"));     // 12.3
console.log(Number(""));         // 0
console.log(Number(true));       // 1
console.log(Number(false));      // 0
console.log(Number(null));       // 0
console.log(Number(undefined));  // NaN

// 真偽値への変換
console.log(Boolean(1));         // true
console.log(Boolean(0));         // false
console.log(Boolean(""));        // false
console.log(Boolean("hello"));   // true
console.log(Boolean(null));      // false
console.log(Boolean(undefined)); // false

// 練習問題1: 暗黙的な型変換
// -----------------------
// 1. "123" + 456 の結果を予想し、実際に確認してください
// 2. "10" - "5" の結果を予想し、実際に確認してください
// 3. true + true の結果を予想し、実際に確認してください

// 練習問題2: 明示的な型変換
// -----------------------
// 1. 文字列 "3.14" を数値に変換してください
// 2. 数値 123 を文字列に変換してください
// 3. 空文字列 "" を真偽値に変換してください

// 練習問題3: 型変換の応用
// --------------------
// 1. ユーザーの入力値（文字列）を数値に変換する関数を作成してください
// 2. 数値を真偽値に変換する関数を作成してください（0はfalse、それ以外はtrue）

// 解答例
/*
// 練習問題1の解答：
console.log("123" + 456);  // "123456"
console.log("10" - "5");   // 5
console.log(true + true);  // 2

// 練習問題2の解答：
let numPi = Number("3.14");
console.log(numPi, typeof numPi);

let strNum = String(123);
console.log(strNum, typeof strNum);

let boolEmpty = Boolean("");
console.log(boolEmpty, typeof boolEmpty);

// 練習問題3の解答：
function convertToNumber(strInput) {
    let num = Number(strInput);
    return isNaN(num) ? 0 : num;
}

function convertToBoolean(number) {
    return number !== 0;
}
*/

// 重要なポイント：
// 1. JavaScriptは必要に応じて自動的に型変換を行います
// 2. 明示的な型変換の方が意図を明確にできます
// 3. NaNは数値型の特殊な値で、不正な数値変換の結果となります

// チャレンジ課題：
// -------------
// 1. parseIntとparseFloatの違いを調べて使ってみてください
// 2. 様々な値をNumberとparseIntで変換し、結果を比較してください
// 3. オブジェクトや配列の型変換を試してみてください