
function url() {
  fbq("track", "Purchase");
  fbq("track", "SubmitApplication");
  location.href = "https://chat.whatsapp.com/DEwTmeThw93BqGjowUxCfE";
}
AOS.init();
$(document).ready(function () {
  const FunVisible = () => {
    if (window.pageYOffset > 250) {
      $("header").addClass("is-sticky");
    } else {
      $("header").removeClass("is-sticky");
    }
  };
  window.addEventListener("scroll", FunVisible);
  const swiper = new Swiper('#swiper1', {
    loop: true,
    centeredSlides: true,
    grabCursor: true,
    breakpoints: {
      100: {
        slidesPerView: 0.4 ,
        spaceBetween: 5,
        centeredSlides: false,
      },
      400: {
        slidesPerView: 0.7 ,
        spaceBetween: 5,
        centeredSlides: false,
      },
      530: {
        slidesPerView: 1,
        spaceBetween: 5,
      },
      690: {
        slidesPerView: 1.2,
        spaceBetween: 5,
      },
      790: {
        slidesPerView: 1.8,
        spaceBetween: 5,
      },
      890: {
        slidesPerView: 2,
        spaceBetween: 5,
      },
      990: {
        slidesPerView: 2.3,
        spaceBetween: 5,
      },
    },
    autoplay: {
      delay: 2000,
    }

  });



  $("blockquote p strong").closest('blockquote').addClass("relative");



  const header = ` 

      
      
      `;
  // $("#header").html(header);

  const content_right = `           `;
  $("#content_right").html(content_right);

  const footer = `
        
    
    `;

  // $("#footer").html(footer);  
  const backtotop = `<button class="Btn-backtotop1 ">
          <svg  class="Btn cursor-pointer-backtotop1arrow h-7 w-7" viewBox="0 0 512 512">
            <path
              d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"
            ></path>
          </svg>
          <p class="Btn-backtotop1text">Back to Top</p>
  </button>`;
  $("#backtotop").html(backtotop);
  var btn = $(".Btn-backtotop1");
  $(window).scroll(function () {
    if ($(window).scrollTop() > 250) {
      btn.addClass("show");
    } else {
      btn.removeClass("show");
    }
  });
  btn.on("click", function (e) {
    e.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, "600");
  });



  // $('.header2  ul.items-center > li').each(function() {
  //   a = $(this).find(".tittle_navbar").text();

  //   if(active == a){

  //     $(this).addClass('B');
  //   }
  // });

  // $("#content_right .link").each(function(){
  //   c = $(this).find("#menu_link").text();
  //   if(active == c){
  //     $(this).find("#menu_link").addClass("text-gray-900");

  //   }


  // });


  $("#menu-icon").on("click", function () {

    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
      $('#mobile').addClass("hidden");
    }
    else {
      $(this).addClass("active");
      $('#mobile').removeClass("hidden");
    }
  });


  $(document).on("click", function (event) {
    if (!$(event.target).closest("#mobile").length && !$(event.target).closest("#menu-icon").length) {
      $('#mobile').addClass("hidden");
      $('#menu-icon').removeClass("active");
    }
  });




  var bitcoin_Rate;
  update();
  update_date_time();

  function update() {
    $.ajax({
      type: "get",
      url: "https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC,ETH,LTC,XRP,DASH,XMR,XEM,BCH&tsyms=USD",
      dataType: "json",
      success: function (response) {
        bitcoin_Rate = (response.RAW.BTC.USD.PRICE).toFixed(2);
        $('.bitcoin').text(bitcoin_Rate);
        update_list_calculate(bitcoin_Rate);

        console.log(response)
        $('#hight24h').text(response.DISPLAY.BTC.USD.HIGH24HOUR);
        $('#VOLUME24HOUR').text(response.DISPLAY.BTC.USD.VOLUME24HOUR);
        $('#MKTCAP').text(response.DISPLAY.BTC.USD.MKTCAP);
        $('.CIRCULATINGSUPPLYMKTCAP').text(response.DISPLAY.BTC.USD.CIRCULATINGSUPPLYMKTCAP);
        $('.CHANGEPCTDAY').text(response.DISPLAY.BTC.USD.CHANGEPCTDAY);
        $('.CHANGEPCT24HOUR').text(response.DISPLAY.BTC.USD.CHANGEPCT24HOUR);
        $('.CIRCULATINGSUPPLY').text(response.DISPLAY.BTC.USD.CIRCULATINGSUPPLY);
      }
    });
  }
  setInterval(update, 1000);

  function update_date_time(){
    var currentDateTime = new Date();
    var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    var month = monthNames[currentDateTime.getMonth()];
    var day = currentDateTime.getDate();
    var year = currentDateTime.getFullYear();

    var formattedDate = month + " " + day + ", " + year;
    var formattedTime = currentDateTime.toLocaleTimeString(); // Get the time

    $('.time').text(formattedDate + ' ' + ' ' + ' ' + formattedTime);

  }

function update_list_calculate(btc_rate){

  $('#usd_to_btc1').text((0.5 * btc_rate).toFixed(2));
  $('#usd_to_btc2').text((5 * btc_rate).toFixed(2));
  $('#usd_to_btc3').text((10 * btc_rate).toFixed(2));
  $('#usd_to_btc4').text((50 * btc_rate).toFixed(2));
  $('#usd_to_btc5').text((100 * btc_rate).toFixed(2));
  $('#usd_to_btc6').text((500 * btc_rate).toFixed(2));
  $('#usd_to_btc7').text((1000 * btc_rate).toFixed(2));

  $('#btc1_to_usd').text((0.5 / btc_rate).toFixed(7));
  $('#btc2_to_usd').text((5 / btc_rate).toFixed(7));
  $('#btc3_to_usd').text((10 / btc_rate).toFixed(7));
  $('#btc4_to_usd').text((50 / btc_rate).toFixed(7));
  $('#btc5_to_usd').text((100 / btc_rate).toFixed(7));
  $('#btc6_to_usd').text((500 / btc_rate).toFixed(7));
  $('#btc7_to_usd').text((1000 / btc_rate).toFixed(7));
  $('.btc8_to_usd').text((1 / btc_rate).toFixed(7));




}




  $('#refresh').on('click', function () {
    update_date_time();
    update();
  });

  $('#input1').on("keyup", function () {
    calculate_Bitcoin();
  })
  $('#input2').on("keyup", function () {
    calculate_Bitcoin2();
  })

  $('#change_icon').on("click", function () {
    if ($('#icon_cryto1').hasClass("default")) {
      $('#icon_cryto1').removeClass("default");

      $('#icon_cryto1').html(` <img class="  max-w-[3rem] " src="./assets/images/60bf8a90db892b0006d73786_BTC.png" alt="">
                      <div>
                        <div class="font-semibold text-slate-800 text-3xl">BTC</div>
                        <div class=" text-slate-500 text-xl">Bitcoin</div>
                      </div>`);


      $('#icon_cryto2').html(`<img class="  max-w-[3rem] rounded-full " src="./assets/images/USD.png" alt="">
                      <div class="font-semibold text-slate-800 text-3xl">USD</div>`);
      calculate_Bitcoin();
    }
    else {
      $('#icon_cryto1').addClass("default");
      $('#icon_cryto1').html(`<img class="  max-w-[3rem] rounded-full " src="./assets/images/USD.png" alt="">
                      <div class="font-semibold text-slate-800 text-3xl">USD</div>`);

      $('#icon_cryto2').html(`<img class="  max-w-[3rem] " src="./assets/images/60bf8a90db892b0006d73786_BTC.png" alt="">
                      <div>
                        <div class="font-semibold text-slate-800 text-3xl">BTC</div>
                        <div class=" text-slate-500 text-xl">Bitcoin</div>
                      </div>`);
      calculate_Bitcoin();
    };
  })

  function calculate_Bitcoin() {
    if ($('#icon_cryto1').hasClass("default")) {

      total1 = parseFloat($('#input1').val());
      total1_float = total1.toFixed(2);

      Amount = total1_float / bitcoin_Rate;

      $('#input2').val(Amount.toFixed(7));

    }
    else {

      total1 = parseFloat($('#input1').val());
      total1_float = total1.toFixed(7);

      Amount = total1_float * bitcoin_Rate;

      $('#input2').val(Amount.toFixed(2));

    }
  }
  function calculate_Bitcoin2() {
    if ($('#icon_cryto1').hasClass("default")) {

      total1 = parseFloat($('#input2').val());
      total1_float = total1.toFixed(2);
      Amount = total1_float * bitcoin_Rate;

      $('#input1').val(Amount.toFixed(2));

    }
    else {

      total1 = parseFloat($('#input2').val());
      total1_float = total1.toFixed(7);

      Amount = total1_float / bitcoin_Rate;

      $('#input1').val(Amount.toFixed(7));

    }
  }

  // calculate_Bitcoin();


  // $.ajax({
  //   type: "get",
  //   url: "https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC,ETH,LTC,XRP,DASH,XMR,XEM,BCH&tsyms=USD",
  //   dataType: "json",
  //   success: function (response) {
  //     console.log(response.RAW.BTC.USD.PRICE);
  //   }
  // });



  $('#showloading').delay(500).queue(function (next) {
    $(this).addClass('hidden');
    next();
  });


});

