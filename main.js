
function start() {
    document.getElementById("showText").textContent = `Let's Play!`;
}

function nice() {
    document.getElementById("showText").textContent = `Nice, keep going!!!`;
}

function meh() {
    document.getElementById("showText").textContent = `That's all you can do?`;
}

function letsgo() {
    document.getElementById("showText").textContent = `Oh Snap! Still Going`;
}

function almost() {
    document.getElementById("showText").textContent = `Hit 50 and you'll see`;
}

function soclose() {
    document.getElementById("showText").textContent = `C'mon, Almost there!`;
}

function yay() {
    document.body.style.background = " url('') ";
    document.getElementById("page").style.background = "url('https://www.todayifoundout.com/wp-content/uploads/2017/11/rick-astley.png')";
    document.getElementById("showText").textContent = `Thanks for playing`;

    // document.getElementById("video").style.display = "block";

    toggleVideo();

}

function textChange() {
    if (value > 5, value < 10) {
        nice();
    } else if (value <= 5) {
        start();
    } else if (value >= 10, value < 20) {
        meh();
    } else if (value >= 20, value < 30) {
        letsgo();
    } else if (value >= 30, value < 40) {
        almost();
    } else if (value >= 40, value < 50) {
        soclose();
    } else if (value >= 50) {
        yay();
    }
}

function incrementNum() {
    value = parseInt(document.getElementById("num").value, 10)
    value++;
    textChange();
    document.getElementById("num").value = value;;
}

function decrementNum() {
    value = parseInt(document.getElementById(`num`).value, 10)
    value--;
    textChange();
    document.getElementById("num").value = value;;
}

function reset() {
    value = parseInt(document.getElementById(`num`).value, 10)
    value = 0;
    textChange();
    document.getElementById("num").value = value;
    document.getElementById("page").style.background = "#473e47 url('') no-repeat ";
    document.getElementById("showText").textContent = `Let's Go`
    // document.getElementById("video").style.display = "none"
    toggleVideo('hide');
}

// Video Play/Pause Toggle
function toggleVideo(state) {
    // if state == 'hide', hide. Else: show video
    var div = document.getElementById("video");
    var iframe = div.getElementsByTagName("iframe")[0].contentWindow;
    div.style.display = state == 'hide' ? 'none' : '';
    func = state == 'hide' ? 'pauseVideo' : 'playVideo';
    iframe.postMessage('{"event":"command","func":"' + func + '","args":""}', '*');
}
