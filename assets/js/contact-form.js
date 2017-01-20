var $contactForm = $('#contact-form');
$contactForm.submit(function(e) {
	e.preventDefault();
	$.ajax({
		url: '//formspree.io/ryanfiller89@gmail.com',
		method: 'POST',
		data: $(this).serialize(),
		dataType: 'json',
		beforeSend: function() {
            $contactForm.css("display", "none");
			$contactForm.find('.contact__message--sending').css("display", "block");
		},
		success: function(data) {
			$contactForm.parent().find('.contact__message--sent').css("display", "block");
		},
		error: function(err) {
			$contactForm.parent().find('.contact__message--error').css("display", "block");
		}
	});
});
