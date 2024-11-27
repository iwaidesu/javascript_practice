// 参照型の基本
// このファイルでは、配列とオブジェクトの基本を学びます

// 1. 配列（Array）
// --------------
let fruits = ["りんご", "バナナ", "オレンジ"];
console.log(typeof fruits); // "object"
console.log(Array.isArray(fruits)); // true

// 配列の要素へのアクセス
console.log(fruits[0]); // "りんご"
console.log(fruits[1]); // "バナナ"
console.log(fruits.length); // 3

// 配列の要素の変更
fruits[1] = "ぶどう";
console.log(fruits); // ["りんご", "ぶどう", "オレンジ"]

// 2. オブジェクト（Object）
// ----------------------
let person = {
    name: "山田太郎",
    age: 25,
    isStudent: false
};

// オブジェクトのプロパティへのアクセス
console.log(person.name); // "山田太郎"
console.log(person["age"]); // 25

// プロパティの変更
person.age = 26;
person["isStudent"] = true;

// 3. 参照型の特徴
// -------------
// 配列のコピー（浅いコピー）
let array1 = [1, 2, 3];
let array2 = array1;
array2[0] = 100;
console.log(array1); // [100, 2, 3]
console.log(array2); // [100, 2, 3]

// オブジェクトのコピー（浅いコピー）
let obj1 = { x: 1, y: 2 };
let obj2 = obj1;
obj2.x = 100;
console.log(obj1); // { x: 100, y: 2 }
console.log(obj2); // { x: 100, y: 2 }

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

// 解答例
/*
// 練習問題1の解答：
let favoriteFoods = ["ラーメン", "カレー", "寿司"];
favoriteFoods[1] = "うどん";
console.log(favoriteFoods.length);

// 練習問題2の解答：
let me = {
    name: "山田太郎",
    age: 20,
    hobbies: ["読書", "映画鑑賞"]
};
me.favoriteColor = "青";
me.age += 1;

// 練習問題3の解答：
// 配列のコピー
let original = [1, 2, 3];
let copy1 = original.slice();
let copy2 = [...original];
let copy3 = Array.from(original);

// オブジェクトのコピー
let originalObj = { a: 1, b: 2 };
let copyObj1 = Object.assign({}, originalObj);
let copyObj2 = { ...originalObj };
*/

// 重要なポイント：
// 1. 配列とオブジェクトは参照型のため、代入時は参照がコピーされます
// 2. 参照型の比較は、参照が同じかどうかを比較します
// 3. 配列とオブジェクトの深いコピーには特別な処理が必要です

// チャレンジ課題：
// -------------
// 1. ネストした配列を作成し、深いコピーを行ってください
// 2. ネストしたオブジェクトを作成し、深いコピーを行ってください
// 3. 配列の中にオブジェクトがある構造を作成し、操作してください