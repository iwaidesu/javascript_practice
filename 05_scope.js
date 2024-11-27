// スコープの基本
// このファイルでは、変数のスコープについて学びます

// 1. グローバルスコープ
// ------------------
let globalVar = "グローバル変数";

function testScope() {
    console.log(globalVar); // グローバル変数にアクセス可能
}

testScope();

// 2. 関数スコープ
// -------------
function functionScope() {
    let functionVar = "関数スコープの変数";
    console.log(functionVar); // アクセス可能
}

functionScope();
// console.log(functionVar); // エラー: functionVarは関数の外では参照できない

// 3. ブロックスコープ
// ----------------
{
    let blockVar = "ブロックスコープの変数";
    const constVar = "定数";
    console.log(blockVar); // アクセス可能
}
// console.log(blockVar); // エラー: blockVarはブロックの外では参照できない

// 4. レキシカルスコープ
// ------------------
function outer() {
    let outerVar = "外部関数の変数";
    
    function inner() {
        let innerVar = "内部関数の変数";
        console.log(outerVar); // 外部関数の変数にアクセス可能
    }
    
    inner();
    // console.log(innerVar); // エラー: innerVarにはアクセスできない
}

// 5. 巻き上げ（Hoisting）
// --------------------
console.log(hoistedVar); // undefined
var hoistedVar = "巻き上げられた変数";

// letとconstは巻き上げが発生しない
// console.log(notHoisted); // エラー: 参照エラー
let notHoisted = "巻き上げられない変数";

// 練習問題1: スコープの理解
// -----------------------
// 1. グローバル変数、関数内変数、ブロック内変数を作成し、それぞれにアクセスしてください
// 2. 同じ名前の変数を異なるスコープで宣言し、どの値が参照されるか確認してください

// 練習問題2: クロージャ
// ------------------
// 1. カウンターを作成する関数を作成してください（クロージャを使用）
// 2. プライベート変数を持つオブジェクトを作成してください

// 練習問題3: 巻き上げ
// ----------------
// 1. 関数宣言と関数式の巻き上げの違いを確認してください
// 2. varとletの巻き上げの違いを確認してください

// 解答例
/*
// 練習問題1の解答：
let globalVariable = "グローバル";

function scopeTest() {
    let functionVariable = "関数スコープ";
    {
        let blockVariable = "ブロックスコープ";
        console.log(globalVariable);  // アクセス可能
        console.log(functionVariable); // アクセス可能
        console.log(blockVariable);   // アクセス可能
    }
    // console.log(blockVariable); // エラー
}

// 練習問題2の解答：
function createCounter() {
    let count = 0;
    return {
        increment: function() {
            return ++count;
        },
        getCount: function() {
            return count;
        }
    };
}

const counter = createCounter();
console.log(counter.increment()); // 1
console.log(counter.increment()); // 2

// 練習問題3の解答：
// 関数宣言の巻き上げ
hoistedFunction(); // 動作する
function hoistedFunction() {
    console.log("巻き上げられた関数");
}

// 関数式の巻き上げ
// notHoistedFunction(); // エラー
const notHoistedFunction = function() {
    console.log("巻き上げられない関数");
};
*/

// 重要なポイント：
// 1. letとconstはブロックスコープを持ちます
// 2. varは関数スコープを持ち、巻き上げが発生します
// 3. クロージャはプライベート変数を実現する方法の1つです

// チャレンジ課題：
// -------------
// 1. モジュールパターンを実装してみてください
// 2. 即時実行関数式（IIFE）を使ってプライベートスコープを作成してください
// 3. クロージャを使って状態を保持する関数を作成してください