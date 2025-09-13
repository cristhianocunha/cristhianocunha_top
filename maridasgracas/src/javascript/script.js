var swiper = new Swiper(".swiper", {
    loop: true,
    grabCursor: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true
    },
    breakpoints: {
        640: {
            slidesPerView: 1,
            spaceBetween: 18
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 18
        },
        1188: {
            slidesPerView: 3,
            spaceBetween: 24
        }
    }
});
$(document).ready(function() {
    $('#form').on('submit', function(e) {
        e.preventDefault(); // Impede o envio padrão do formulário

        $.ajax({
            url: 'back_end/formulario.php', // Substitua pelo caminho do seu arquivo PHP
            type: 'POST',
            data: $(this).serialize(), // Serializa os dados do formulário
            success: function(response) {
                $('.error-message').html('<div class="alert alert-success">' + response + '</div>');
            },
            error: function() {
                $('.error-message').html('<div class="alert alert-danger">Ocorreu um erro ao enviar os dados.</div>');
            }
        });
    });
});