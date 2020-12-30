
$(".faq").hover(function(){
  if(!($("h2",this).hasClass("bolded"))){
      $("h2",this).toggleClass("hover");
  }
});

$(".faq").click(function(){
  $("h3", this).slideToggle();
  $("h2",this).toggleClass("bolded");
  $("h2",this).toggleClass("hover");
  $("img", this).toggleClass("rotate");
});
