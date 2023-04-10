//コマンドで月を取得する
const args = process.argv.slice(2)
const year = new Date().getFullYear();
const option = args.indexOf('-m');

// カレンダーを生成する処理
function generateCalendar(year, month) {
    // 月の初日を取得
    const date = new Date(year, month -1, 1);
    // 月の最初の曜日を取得
    const firstDay = date.getDay();
    // 月の最終日を取得
    const lastDate = new Date(year, month, 0).getDate();
    // 月の週数を計算
    const weeks = Math.ceil((lastDate + firstDay) / 7);
    //カレンダーの見出し（年月と曜日）
    let calendar = `   ${year}年 ${month}月\n日 月 火 水 木 金 土\n`;

    //カレンダーの日付を生成
    let dateCount = 1;
    for (let week = 0; week < weeks; week++){
        for (let day = 0; day < 7; day++){
            if((week === 0 && day < firstDay) || dateCount > lastDate) {
                calendar += '   ';
            } else {
                calendar += `${dateCount.toString().padStart(2, ' ')} `;
                dateCount++;
            }
        }
        calendar += '\n'
    }
    return calendar;
}
// オプション-mが渡されていればその値を、なければ現在の月でカレンダーを生成。13以上の数値であればエラーメッセージを返す。
if(option !== -1){
    month = args[option + 1]
    if(month > 12){
        console.log('error! invalid value!!')
        return;
    }
    console.log(generateCalendar(year, month))
}
else{
    month = new Date().getMonth() + 1
    console.log(generateCalendar(year, month))
}

