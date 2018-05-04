$(() => {
  $("#generate-random-quote").on("click", function(e) {
    $.ajax({
      url: "https://talaikis.com/api/quotes/random/",
      success: data => {
        tweet = data;
        $(".quote").html('<em>"' + data.quote + '"</em>');
        $(".quote-author").html("- " + data.author);
      },
      cache: false
    });
  });

  $(".tweet").on("click", function() {
    $(this).attr(
      "href",
      "https://twitter.com/intent/tweet?text=" + tweet.quote
    );
  });

  $("#generate-random-quote").click(function() {
    // restart animation
    var me = this;
    this.style.webkitAnimation = "none";
    setTimeout(() => (me.style.webkitAnimation = ""), 10);
    setTimeout(() => me.blur(), 1000);
  });
});
