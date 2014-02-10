var $form = $('#formulario'),
	$titulo = $('#titulo'),
	$url = $('#url'),
	$button = $('#mostrar-form'),
	$list = $('#contenido'),
	$post = $('.item').first();

function mostrarFormulario()
{
	$form.slideToggle();
	$list.slideToggle(350);
	$('aside').slideToggle(350);
	return false;
}

function agregarPost()
{
	var url = $url.val(),
		titulo = $titulo.val(),
		$clone = $post.clone();

	$clone.find('.titulo_item a')
		.text(titulo)
		.attr('href', url);
		
	$clone.hide();

	$list.prepend($clone);
	mostrarFormulario();
	$clone.fadeIn();

	return false;	
}

//Eventos
$button.on('click', mostrarFormulario);
$form.on('submit', agregarPost);

