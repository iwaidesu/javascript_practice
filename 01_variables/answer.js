// 練習問題1: 変数の宣言と代入
// --------------------------
// 1. 自分の名前をletで宣言し、後から別の名前に変更してください
// 2. 誕生日をconstで宣言してください
// 3. 以下のコードを実行して、エラーが出る理由を考えてください
/*
const greeting = "おはよう";
greeting = "こんばんは";
*/

let myName = "iwata"
myName = "tastuya"
console.log(myName)
const mybithday = "1999-10-08";
console.log(mybithday)

// チャレンジ課題：
// -------------
// 1. constで配列を宣言し、配列の要素を変更してみてください
// 2. letとconstを使って、自己紹介の文章を作成してください

const sports =["soccer","baseball","vollyball"]
console.log(sports)
sports[2]="tennis"
console.log(sports)

const myname ="高田純次"
let favoritewoman="黒木メイサ"
console.log(`私の名前は${myname}です。`);
console.log(`好きな女性のタイプは${favoritewoman}です。`)
console.log("キツネ顔で顔に特徴がある方がいいですね。")
console.log("完璧すぎる人は好きじゃないかもしれません。")

///02ここから
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

let myname_2="松本人志";
let myAge = 25;
let amIStudent = true;
console.log(typeof myname_2);
console.log(typeof myAge);
console.log(typeof amIStudent);

let radius=5;
let area = radius*radius*Math.PI;
console.log(typeof area);

let stringNumber ="42";
let convertedToNumber = Number(stringNumber);
console.log(convertedToNumber, typeof convertedToNumber);
let numberValue = 100;
let convertedToString =String(numberValue)
console.log(convertedToString, typeof convertedToString);

// 練習問題1: 配列の操作
// -------------------
// 1. 自分の好きな食べ物を3つ含む配列を作成してください
// 2. 配列の2番目の要素を別の食べ物に変更してください
// 3. 配列の長さを表示してください

// 練習問題2: オブジェクトの操作
// --------------------------
// 1. 自分自身を表すオブジェクトを作成してください（名前、年齢、趣味を含める）
// 2. オブジェクトに新しいプロパティ（好きな色）を追加してください
// 3. 年齢のプロパティを1つ増やしてください

// 練習問題3: 参照の理解
// ------------------
// 1. 配列をコピーする方法を3つ試してください（slice, spread演算子, Array.from）
// 2. オブジェクトをコピーする方法を2つ試してください（Object.assign, spread演算子）

let myfavoritefoods = ["rice","misosoup","chikin"];
myfavoritefoods [2] = "beef";
console.log(myfavoritefoods,length);

let me = {name:"高田純次", age:25, hobby:"サッカー"}
me.favoritecolor="black";
console.log(me)
me.age+= 1;

let number=[1,2,3,4,5];
let number2 = number.slice();
let number3 = [...number;
let copy4 = Array.from(number);