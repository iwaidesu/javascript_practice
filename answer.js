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