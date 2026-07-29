function message(){

alert(
"旅行を楽しむポイント\n\n" +
"・歩きやすい靴を準備しましょう。\n" +
"・モバイルバッテリーを持参しましょう。\n" +
"・天気予報を確認しましょう。\n" +
"・交通系ICカードがあると便利です。"
);

}

function today(){

const place = [

"東京",

"京都",

"大阪",

"富士山"

];

const comment = [

"最新のショッピングを楽しもう！",

"歴史ある寺院を巡ろう！",

"食べ歩きを満喫しよう！",

"絶景の写真を撮ろう！"

];

let number = Math.floor(Math.random()*4);

alert(

"今日のおすすめは\n\n"

+ place[number]

+ "\n\n"

+ comment[number]

);

}