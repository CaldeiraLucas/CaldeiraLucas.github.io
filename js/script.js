$(function() {
    $('body').removeClass('fade-out');
	$('#perfil').hide();
	$('#skills').hide();
	$('#projects').hide();
	$('#future').hide();

////////////////////////////////

    $('#title .perfil').click(function() {
		$('body').addClass('fade-out');
		setTimeout(function(){$('#title').hide()},1100);
		setTimeout(function(){$('#perfil').show()},1100);
		setTimeout(function(){$('body').removeClass('fade-out')},1200);
    });
	
	$('#title .skills').click(function() {
		$('body').addClass('fade-out');
		setTimeout(function(){$('#title').hide()},1100);
		setTimeout(function(){$('#skills').show()},1100);
		setTimeout(function(){$('body').removeClass('fade-out')},1200);
    });
	
	$('#title .projects').click(function() {
		$('body').addClass('fade-out');
		setTimeout(function(){$('#title').hide()},1100);
		setTimeout(function(){$('#projects').show()},1100);
		setTimeout(function(){$('body').removeClass('fade-out')},1200);
    });
	
	$('#title .future').click(function() {
		$('body').addClass('fade-out');
		setTimeout(function(){$('#title').hide()},1100);
		setTimeout(function(){$('#future').show()},1100);
		setTimeout(function(){$('body').removeClass('fade-out')},1200);
    });	

/////////////////////////////////

	$('.back').click(function() {
		$('body').addClass('fade-out');
		setTimeout(function(){
		$('#perfil').hide();
		$('#skills').hide();
		$('#projects').hide();
		$('#future').hide()},1100);
		setTimeout(function(){$('#title').show()},1100);
		setTimeout(function(){$('body').removeClass('fade-out')},1200);
    });	


//////////////////////////////////
	
});