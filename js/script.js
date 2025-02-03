// ハンバーガーメニュー,ドロワーメニューのアニメーション
$(function () {
  $(".js-hamburger, .js-drawer").click(function () {
    $(".js-hamburger").toggleClass("is-active");
    $(".js-drawer").fadeToggle();
  });

  // メニュー内のリンクをクリックしたらドロワーを閉じる
  $(".js-drawer a").click(function () {
    $(".js-hamburger").removeClass("is-active");
    $(".js-drawer").fadeOut();
  });
});


// ヘッダースクロール
$(function () {
  // ヘッダーの高さ取得
  const header = $(".js-header");
  const headerHeight = header.height();
  const mainViewHeight = $(".js-main-view").height(); // メインビューの高さ取得

  // スムーズスクロール
  $('a[href^="#"]').click(function () {
    const speed = 600;
    let href = $(this).attr("href");
    let target = $(href == "#" || href == "" ? "html" : href);
    let position = target.offset().top - headerHeight;
    $("body,html").animate({ scrollTop: position }, speed, "swing");
    return false;
  });

  // スクロールイベントでヘッダーの背景色を変更
  $(window).on("scroll", function () {
    if ($(window).scrollTop() > mainViewHeight) {
      header.addClass("is-scrolled");
    } else {
      header.removeClass("is-scrolled");
    }
  });
});


// スライダー（swiper使用）
const swiper = new Swiper(".swiper", {
  loop: true,
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 5000,
    disableOnInteraction: false, // ユーザー操作後も自動再生を停止しない
  },
  speed: 2000,
});


$(function () {
  const pageTop = $(".js-page-top");
  pageTop.hide();
  $(window).scroll(function () {
    if ($(this).scrollTop() > 20) {
      pageTop.fadeIn();
    } else {
      pageTop.fadeOut();
    }
  });
  pageTop.click(function () {
    $("body, html").animate(
      {
        scrollTop: 0,
      },
      300
    );
    return false;
  });
});

