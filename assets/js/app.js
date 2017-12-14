$(function(){
   setTimeout(function() {
      $('#splash').fadeOut(500);
   }, 2000);
});

$("#demo").intlTelInput();

$('#send').click(function() {
  if ($('.phone').val().length != 10 || isNaN($('.phone').val())) {
  $('.phone').css('border-color','#FF0000');
   alert('El número de teléfono debe tener al menos 10 digitos.');
     return false;
   }else {
    	
        }
    });