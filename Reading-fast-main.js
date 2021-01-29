var fa_volume_up = document.querySelector(".fa-volume-up"); //ミュート解除中のボタン
var fa_volume_mute = document.querySelector(".fa-volume-mute");　//ミュート中のボタン
var resource = document.getElementById("resource"); //入力欄の要素
var y = 0; //黒枠内におけるスクロール位置
var level = 0;　//難易度
var scroll_area = document.getElementById("scroll_area"); //黒枠内のエリア
var height = 100; //波の高さ(単位は%)
var margin_top = 0; //波の上側のマージン(画面の上端からの距離,単位は%)
var scroll_stop_boolean = false; //スクロール停止中か否か(スクロール停止中：true)
var fish_die_sound = document.getElementById("fish_die_sound"); //魚が死んだ時の効果音
var btn_sound = document.getElementById("btn_sound"); //ボタンが押された時の効果音
var sea_sound = document.getElementById("sea_sound"); //海の効果音
var botan = document.querySelectorAll(".botan"); //ボタン
var fa_undo = document.querySelector(".fa-undo"); //やり直しボタン
var fish_1_die = false; //[初期の段階で1番上にいる魚]は死んだか否か(死んだ：true)
var fish_2_die = false; //[初期の段階で上から2番目にいる魚]は死んだか否か(死んだ：true)
var fish_3_die = false; //[初期の段階で上から3番目にいる魚]は死んだか否か(死んだ：true)
var fish_4_die = false; //[初期の段階で上から4番目にいる魚]は死んだか否か(死んだ：true)
var fish_5_die = false; //[初期の段階で上から5番目にいる魚]は死んだか否か(死んだ：true)
var fish_6_die = false; //[初期の段階で上から6番目にいる魚]は死んだか否か(死んだ：true)
var fish_1_2_die = false; //[初期の段階で上から7番目にいる魚]は死んだか否か(死んだ：true)
var fish_4_2_die = false; //[初期の段階で上から8番目にいる魚]は死んだか否か(死んだ：true)
var fish_2_2_die = false; //[初期の段階で上から9番目にいる魚]は死んだか否か(死んだ：true)

// ↓ウィンドウを読み込んだ際に、音を鳴らすことはできなかった。Safariではできたが。。。
//調べたところ、ユーザーの配慮のため、数年前からそうなったということだった。
// window.onload = function(){
//   sea_sound.play();
// }

//ミュートにする
sea_sound.muted = true;
fish_die_sound.muted = true;
btn_sound.muted = true;

//ミュートに切り替えるボタンを押した時
fa_volume_up.addEventListener('click', function () {
  //ミュートにする
  sea_sound.muted = true;
  fish_die_sound.muted = true;
  btn_sound.muted = true;
  //表示の切り替え(ミュート　⇄　ミュート解除)
  $(".fa-volume-up").removeClass("active");
  $(".fa-volume-up").addClass("passive");
  $(".fa-volume-mute").removeClass("passive");
  $(".fa-volume-mute").addClass("active");
});

//ミュート解除に切り替えるボタンを押した時
fa_volume_mute.addEventListener('click', function () {
  //ミュート解除
  sea_sound.muted = false;
  fish_die_sound.muted = false;
  btn_sound.muted = false;
  //表示の切り替え(ミュート　⇄　ミュート解除)
  $(".fa-volume-up").removeClass("passive");
  $(".fa-volume-up").addClass("active");
  $(".fa-volume-mute").removeClass("active");
  $(".fa-volume-mute").addClass("passive");
  //海の音をループ再生
  sea_sound.play();
  sea_sound.loop = true;
});

//[初期の段階で1番上にいる魚]の泳ぎ
var fish_1 = gsap.timeline();
fish_1.to("#fish_1", 1, { rotationY: 180 })
  .to("#fish_1", 2, { x: window.innerWidth - 150 })
  .to("#fish_1", 1, { rotationY: 360 })
  .to("#fish_1", 2, { x: 0 });
fish_1.repeat(-1);

//[初期の段階で上から2番目にいる魚]の泳ぎ
var fish_2 = gsap.timeline();
fish_2.to("#fish_2", 1, { rotationY: 180 })
  .to("#fish_2", 2, { x: window.innerWidth - 150 })
  .to("#fish_2", 2, { rotationY: 360 })
  .to("#fish_2", 2, { x: 0 });
fish_2.repeat(-1);

//[初期の段階で上から3番目にいる魚]の泳ぎ
var fish_3 = gsap.timeline();
fish_3.to("#fish_3", 3, { rotationY: 180 })
  .to("#fish_3", 2, { x: window.innerWidth - 150 })
  .to("#fish_3", 3, { rotationY: 360 })
  .to("#fish_3", 2, { x: 0 });
fish_3.repeat(-1);

//[初期の段階で上から4番目にいる魚]の泳ぎ
var fish_4 = gsap.timeline();
fish_4.to("#fish_4", 1, { rotationY: 180 })
  .to("#fish_4", 1, { x: window.innerWidth - 150 })
  .to("#fish_4", 1, { rotationY: 360 })
  .to("#fish_4", 1, { x: 0 });
fish_4.repeat(-1);

//[初期の段階で上から5番目にいる魚]の泳ぎ
var fish_5 = gsap.timeline();
fish_5.to("#fish_5", 1, { rotationY: 180 })
  .to("#fish_5", 5, { x: window.innerWidth - 150 })
  .to("#fish_5", 3, { rotationY: 360 })
  .to("#fish_5", 2, { x: 0 });
fish_5.repeat(-1);

//[初期の段階で上から6番目にいる魚]の泳ぎ
var fish_6 = gsap.timeline();
fish_6.to("#fish_6", 1, { rotationY: 180 })
  .to("#fish_6", 3, { x: window.innerWidth - 150 })
  .to("#fish_6", 2, { rotationY: 360 })
  .to("#fish_6", 2, { x: 0 });
fish_6.repeat(-1);

//[初期の段階で上から7番目にいる魚]の泳ぎ
var fish_1_2 = gsap.timeline();
fish_1_2.to("#fish_1_2", 1, { rotationY: 180 })
  .to("#fish_1_2", 1, { x: window.innerWidth - 150 })
  .to("#fish_1_2", 1, { rotationY: 360 })
  .to("#fish_1_2", 2, { x: 0 });
fish_1_2.repeat(-1);

//[初期の段階で上から8番目にいる魚]の泳ぎ
var fish_4_2 = gsap.timeline();
fish_4_2.to("#fish_4_2", 1, { rotationY: 180 })
  .to("#fish_4_2", 1, { x: window.innerWidth - 150 })
  .to("#fish_4_2", 1, { rotationY: 360 })
  .to("#fish_4_2", 6, { x: 0 });
fish_4_2.repeat(-1);

//[初期の段階で上から9番目にいる魚]の泳ぎ
var fish_2_2 = gsap.timeline();
fish_2_2.to("#fish_2_2", 1, { rotationY: 180 })
  .to("#fish_2_2", 3, { x: window.innerWidth - 150 })
  .to("#fish_2_2", 1, { rotationY: 360 })
  .to("#fish_2_2", 2, { x: 0 });
fish_2_2.repeat(-1);

// スクロール開始ボタンを押した時
botan[0].addEventListener('click', function () {
  btn_sound.currentTime = 0;
  btn_sound.play();
})

// スクロール停止ボタンを押した時
botan[1].addEventListener('click', function () {
  btn_sound.currentTime = 0;
  btn_sound.play();
})

// 決定ボタンを押した時
botan[2].addEventListener('click', function () {
  btn_sound.currentTime = 0;
  btn_sound.play();
})

//やり直しボタンを押した時
fa_undo.addEventListener('click', function () {
  location.reload();
})

/**
 * 決定ボタンを押した際に発火する関数
 */
function kettei() {
  //ミュートにする
  sea_sound.muted = true;
  //入力されたテキストを読む文章に設定
  document.getElementById("text").innerText = resource.value;
  //表示の切り替え(レベル選択・文章入力画面　⇄　文章を読む画面)
  $("#prepare").removeClass("active");
  $("#prepare").addClass("passive");
  $("#play").removeClass("passive");
  $("#play").addClass("active");
  //表示の切り替え(一時停止ボタンの表示)
  $(".fa-undo").removeClass("passive");
  $(".fa-undo").addClass("active");
  //選択されたレベルを取得
  var levels = document.getElementsByName("level");
  for (var i = 0; i < 6; i++) {
    if (levels[i].checked) {
      level = levels[i].value;
    }
  }
}

/**
 * スクロール開始ボタンを押した際に発火する関数
 */
function scrollPage() {
  //表示の切り替え(「※スクロール開始ボタンを...」⇄ 「※スクロール停止ボタンを...」)
  $("#before").removeClass("active");
  $("#before").addClass("passive");
  $("#after").removeClass("passive");
  $("#after").addClass("active");
  //スクロール停止中であれば
  if (scroll_stop_boolean == true) {
    //スクロールを停止し、排水を止める
    clearTimeout(scrollSTOP);
    clearTimeout(Reducing);
  }
  //自動スクロール
  scroll_area.scrollTo(0, y++);
  scroll = setTimeout("scrollPage()", level);
}

/**
 * 排水して魚が死ぬ関数
 */
function Reducing_water() {
  //排水
  margin_top = margin_top + 1;
  height = 100 - margin_top;
  $("svg").css("margin-top", margin_top + "%");
  $("svg").css("height", height + "%");

  //波の上側マージンが90%なら
  if (margin_top > 90) {
    //[初期の段階で上から9番目にいる魚]が死ぬ
    var fish_2_2 = gsap.timeline();
    fish_2_2.to("#fish_2_2", 1, {
      autoAlpha: 0, rotationX: 90, onUpdate: function () {
        if (fish_2_2_die == false) {
          fish_die_sound.currentTime = 0;
          fish_die_sound.play();
        }
        fish_2_2_die = true;
      }
    })
  }
  //波の上側マージンが80%なら
  if (margin_top > 80) {
    //[初期の段階で上から8番目にいる魚]が死ぬ
    var fish_4_2 = gsap.timeline();
    fish_4_2.to("#fish_4_2", 1, {
      autoAlpha: 0, rotationX: 90, onUpdate: function () {
        if (fish_4_2_die == false) {
          fish_die_sound.currentTime = 0;
          fish_die_sound.play();
        }
        fish_4_2_die = true;
      }
    })
  }
  //波の上側マージンが70%なら
  if (margin_top > 70) {
    //[初期の段階で上から7番目にいる魚]が死ぬ
    var fish_1_2 = gsap.timeline();
    fish_1_2.to("#fish_1_2", 1, {
      autoAlpha: 0, rotationX: 90, onUpdate: function () {
        if (fish_1_2_die == false) {
          fish_die_sound.currentTime = 0;
          fish_die_sound.play();
        }
        fish_1_2_die = true;
      }
    })
  }
  //波の上側マージンが60%なら
  if (margin_top > 60) {
    //[初期の段階で上から6番目にいる魚]が死ぬ
    var fish_6 = gsap.timeline();
    fish_6.to("#fish_6", 1, {
      autoAlpha: 0, rotationX: 90, onUpdate: function () {
        if (fish_6_die == false) {
          fish_die_sound.currentTime = 0;
          fish_die_sound.play();
        }
        fish_6_die = true;
      }
    })
  }
  //波の上側マージンが50%なら
  if (margin_top > 50) {
    //[初期の段階で上から5番目にいる魚]が死ぬ
    var fish_5 = gsap.timeline();
    fish_5.to("#fish_5", 1, {
      autoAlpha: 0, rotationX: 90, onUpdate: function () {
        if (fish_5_die == false) {
          fish_die_sound.currentTime = 0;
          fish_die_sound.play();
        }
        fish_5_die = true;
      }
    })
  }
  //波の上側マージンが40%なら
  if (margin_top > 40) {
    //[初期の段階で上から4番目にいる魚]が死ぬ
    var fish_4 = gsap.timeline();
    fish_4.to("#fish_4", 1, {
      autoAlpha: 0, rotationX: 90, onUpdate: function () {
        if (fish_4_die == false) {
          fish_die_sound.currentTime = 0;
          fish_die_sound.play();
        }
        fish_4_die = true;
      }
    })
  }
  //波の上側マージンが30%なら
  if (margin_top > 30) {
    //[初期の段階で上から3番目にいる魚]が死ぬ
    var fish_3 = gsap.timeline();
    fish_3.to("#fish_3", 1, {
      autoAlpha: 0, rotationX: 90, onUpdate: function () {
        if (fish_3_die == false) {
          fish_die_sound.currentTime = 0;
          fish_die_sound.play();
        }
        fish_3_die = true;
      }
    })
  }
  //波の上側マージンが20%なら
  if (margin_top > 20) {
    //[初期の段階で上から2番目にいる魚]が死ぬ
    var fish_2 = gsap.timeline();
    fish_2.to("#fish_2", 1, {
      autoAlpha: 0, rotationX: 90, onUpdate: function () {
        if (fish_2_die == false) {
          fish_die_sound.currentTime = 0;
          fish_die_sound.play();
        }
        fish_2_die = true;
      }
    })
  }
  //波の上側マージンが10%なら
  if (margin_top > 10) {
    //[初期の段階で一番上にいる魚]が死ぬ
    var fish_1 = gsap.timeline();
    fish_1.to("#fish_1", 1, {
      autoAlpha: 0, rotationX: 90, onUpdate: function () {
        if (fish_1_die == false) {
          fish_die_sound.play();
        }
        fish_1_die = true;
      }
    })
  }
  //排水
  Reducing = setTimeout("Reducing_water()", resource.value.length);
}

/**
 * スクロール停止ボタンを押した際に発火する関数
 */
function scrollSTOP() {
  //自動スクロールを停止
  clearTimeout(scroll);
  //スクロール停止中に設定
  scroll_stop_boolean = true;
  //排水
  Reducing = setTimeout("Reducing_water()", resource.value.length);
}

//波の表現
$('#wave').wavify({
  height: 0,
  bones: 80,
  amplitude: 3,
  color: '#0bd',
  speed: .25,
  phase: -90,
});
