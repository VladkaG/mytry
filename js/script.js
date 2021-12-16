$(window).resize(function(event){
   adaptive_function();
});
function adaptive_header(w,h) {
   var headerMenu = $('.header-menu');
   var headerLang = $('.heder-top-lang');
if(w<767){
   if(!headerLang.hasClass('done')){
      headerLang.addClass('done').appendTo(headerMenu);
   }
}else{
   if(headerLang.hasClass('done')){
      headerLang.removeClass('done').prependTo($('.header-top'));
   }
}

if(w<767){
   if(!$('.header-bottom__menu').hasClass('done')){
      $('.header-bottom__menu').addClass('done').appendTo(headerMenu);
   }
}else{
  $.each($('.header-bottom__menu'), function(index,val){
     if($(this).hasClass('header-bottom__menu--right')){
      if($(this).hasClass('done')){
         $(this).removeClass('done').prependTo($('.header-bottom__column').eq(2));
      }
     }else{
      if($(this).hasClass('done')){
      $(this).removeClass('done').prependTo($('.header-bottom__column').eq(0));
   }
}
  });
}
}
function adaptive_function() {
   var w = $(window).outerWidth();
   var h = $(window).outerHeight();
   adaptive_header(w,h);
}
adaptive_function();

$('.header-menu__icon').click(function(event){
   $(this).toggleClass('active');
   $('.header-menu').toggleClass('active');
   if($(this).hasClass('active')){
      $('body').data('scroll', $(window).scrollTop());
   }
   $('body').toggleClass('lock');
   if(!$(this).hasClass('active')){
      $('body,html').scrollTop(parseInt($('body').data('scroll')));
   }
});




/*var latlng = new google.maps.LatLng(55.75,37.61);

var settings = {
    zoom: 10,
    center: latlng,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
};

// подключение карты
var map = new google.maps.Map(document.getElementById("map"), settings);

// добавление маркера
var coords = new google.maps.LatLng(-34.397, 150.644);
var marker = new google.maps.Marker({
    position: latlng, 
    map: map, 
    title:"Google Maps"
});

// Добавление сообщение маркера
var infowindow = new google.maps.InfoWindow({
    content:"html-контент",
});

// Открыть сообщение при нажатии на маркер
google.maps.event.addListener(marker, "click", function(){
    infowindow.open(map, marker);
});
*/


/*function map(n){
   google.maps.Map.prototype.setCenterWithOffset=function(latlng, offsetX, offsetY){
      var map = this;
      var ov = new google.maps.OverlayView();
      ov.onAdd = function() {
         var proj = this.getProjection();
         var aPoint = proj.fromLatLngToContainerPixel(latlng);
         aPoint.x = aPoint.x+offsetX;
         aPoint.y = aPoint.y+offsetY;
         map.panTo(proj.fromContainerPixelToLatLng(aPoint));
         //map.setCenter(proj.fromContainerPixlToLatLng(aPoint));
      }
      ov.draw = function() {};
      ov.setMap(this);
   };
   var markers = new Array();
   var infowindow = new google.maps.InfoWindow({
      //pixelOffset: new google.maps.Size(-230,250)
   });
   var locations = [
      [new google.maps.LatLng(53.819055,27.8813694)]
   ]
   var options = {
      zoom: 10,
      panControl:false,
      mapTypeControl:false,
      center: locations[0][0],
      scrollwheel:false,
      mapTypeId: google.maps.MapTypeId.ROADMAP
   };
   var map = new google.maps.Map(document.getElementById('map'), options);
   var icon={
      url:'img/icons/map.svg',
      scaledSize: new google.maps.Size(18,20),
      anchor: new google.maps.Point(9,10)
   }
   for (var i = 0; i < locations.length; i++){
      var marker = new google.maps.Marker({
         //icon:icon,
         position: locations[i][0],
         map: map,
      });
      markers.push(marker);
   }
}
if($("#map").length>0){
   map();
}*/