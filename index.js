$(document).ready(function () {
  $('#generate-random-quote').on('click', function (e) {
    $.ajax({
      url: "https://talaikis.com/api/quotes/random/",
      success: function (data) {
        tweet = data;
        $('.quote').html('<em>"' + data.quote + '"</em>');
        $('.quote-author').html("- " + data.author);
      },
      cache: false
    });
  });

  $('.tweet').on('click', function () {
    $(this).attr("href", 'https://twitter.com/intent/tweet?text=' + tweet.quote);
  });
});