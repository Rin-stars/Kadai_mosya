$(function(){ //jQueryは、index.htmlの読み込みが終わって初めて実行される。

  // hemlファイルを分割して管理。
  $.ajaxSetup({cache:false});
  $("#header").load("/include/header.html", hamburger_slidedown); // Ajax load関数のコールバック関数にローカル関数hamburger_slidedownを使用。
  $("#tophead").load("/include/tophead.html");
  $("#footer").load("/include/footer.html");

  function hamburger_slidedown(){

    $('.p-hamburger').click(function() {
    $(this).toggleClass('is-open');
    $('.navigation').slideToggle(200); //slideToggle実行すると、.navigationにdisplay:noneが残り続ける。よって1201pc以上のウィンドウ幅に変更したときドロワーメニューが非表示となる。解決策として、下方にウィンドウ幅を変更時の処理を追加。
    });

  };



  // ウィンドウ幅を変更時の処理。(1)ハンバーガーメニューのクラス削除。(2)ドロワーメニュー表示判定。
  $(window).resize(function(event){

    $('.p-hamburger').removeClass('is-open'); // (1)ハンバーガーメニューのクラス削除。

    if(window.matchMedia('(min-width:1201px)').matches){  // (2)ドロワーメニュー表示判定。

      console.log("If") ;

      $(".navigation").css( 'display' , 'flex' );
      //document.getElementById("navigation").style.display = "flex" ; //classを使用する為未使用。

    } else {
      
      console.log("else") ;

      $(".navigation").css( 'display' , 'none' );

    }
  
  });




  // 背景画像tophead_bg2のスクロールスピードを調整する。
  $(window).scroll(function(){

    var yLine = $(this).scrollTop();
    var bgPosition = yLine / 5;

    $('#Tophead_bg2').css('background-position', 'center +'+ bgPosition + 'px');    

  });


});



/* .p-hamburgerがまだ認識されていない状態でも実行できる、ON記述方法。
    $.ajaxSetup({cache:false});
      $("#header").load("/include/header.html");
      $("#tophead").load("/include/tophead.html");
      $("#footer").load("/include/footer.html");

    $('body').on('click', '.p-hamburger', function() {        //.p-hamburger クリックすると発動
      $(this).toggleClass('is-open');                         //this(.p-hamburger)にis-openクラス付与
      $('.navigation').slideToggle('is-open');                //.navigationにis-openクラス付与 --> スライドで表示させる
    });

*/
/*　ハンバーガーメニューにクラスを取り外しするためのクリック動作。index.htmlの.p-hamburger定義後に<script>によるAjaxのload関数定義が必要。　
  　$('.p-hamburger').click(function() {
      $(this).toggleClass('is-open');
      $('.navigation').slideToggle('is-open');
    });
*/

/* ajaxの.load関数は非同期処理。ただ終了時に実行するコールバック関数を取るので、第二引数に処理を記述し実行可能。 
  $.ajaxSetup({cache:false});
  $("#header").load("/include/header.html", function(){
      $('.p-hamburger').click(function() {
      $(this).toggleClass('is-open');
      $('.navigation').slideToggle(200);
      });
  });
  $("#tophead").load("/include/tophead.html");
  $("#footer").load("/include/footer.html");
*/
