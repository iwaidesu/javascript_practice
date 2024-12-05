// 元のデータ（2次元配列）
const classroom = [
    ['田中', '山田', '佐藤'],
    ['鈴木', '高橋', '伊藤'],
    ['渡辺', '小林', '加藤']
];

// forEach方式
classroom.forEach((row, i) => {
    // rowは各行の配列（例：['田中', '山田', '佐藤']）
    // iは行番号（0, 1, 2）
    
    row.forEach((student, j) => {
        // studentは生徒の名前（例：'田中'）
        // jは列番号（0, 1, 2）
        console.log(`${i+1}列${j+1}番目の生徒: ${student}`);
    });
});

// for...of方式
for (const row of classroom) {
    // rowは各行の配列（例：['田中', '山田', '佐藤']）
    
    for (const student of row) {
        // studentは生徒の名前（例：'田中'）
        console.log(student);
    }
}

// 通常のforループ
for (let i = 0; i < classroom.length; i++) {
    for (let j = 0; j < classroom[i].length; j++) {
        console.log(`${i+1}列${j+1}番目の生徒: ${classroom[i][j]}`);
    }
}

const classroom = [
    ['田中', '山田', '佐藤'],
    ['鈴木', '高橋', '伊藤'],
    ['渡辺', '小林', '加藤']
];

// 動きを詳しく表示
classroom.forEach((row, i) => {
    console.log(`--- ${i+1}列目の処理開始 ---`);
    console.log(`rowの中身: [${row}]`);
    
    row.forEach((student, j) => {
        console.log(`処理中: i=${i}, j=${j}`);
        console.log(`→ ${i+1}列${j+1}番目の生徒: ${student}`);
    });
    console.log('この列の処理完了\n');
});

