function fluffy() {
  $('.icons').animate({marginTop: '-=12px'}, 800).animate({marginTop: '+=12px'}, 800);
  setTimeout('fluffy()', 1600);
}

fluffy();
