function message(){
    alert("旅行を楽しみましょう！");
}

function today(){

    const place=["東京","京都","大阪","富士山"];

    let n=Math.floor(Math.random()*place.length);

    alert("今日のおすすめは「"+place[n]+"」です！");
}
