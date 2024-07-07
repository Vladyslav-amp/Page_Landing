$(document).ready(function () {
  $('#phone').inputmask({
    mask: '+38(099)-999-99-99',
    placeholder: '+38 (___) ___-__-__',
    showMaskOnHover: false,
    showMaskOnFocus: true,
    clearMaskOnLostFocus: true,
    greedy: false
  });

  $('#phoneForm').submit(function (event) {
    event.preventDefault();

    //Get client name for thx page
    var name = $('#name').val();
    //thx page
    $('#thxPage .thx-content__text').html(`Дякуємо, <span style="color: red;">${name}</span>! Наша команда дуже вдячна вам за зворотній звʼязок та оцінку нашої роботи!`);

    $('#overlay').fadeIn();
    $('#thxPage').fadeIn();

    //Clear data after button submit
    $('#name').val('');
    $('#phone').val('');
  });

  //Close button
  $('#closeBtn').click(function () {
    $('#overlay').fadeOut();
    $('#thxPage').fadeOut();
  });

  //Main button
  $('#mainBtn').click(function () {
    window.location.href = "index.html";
  });
});
