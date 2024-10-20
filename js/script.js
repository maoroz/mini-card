$(document).ready(function () {
    $('.card__button').on('click', function () {
        $(this).toggleClass('card__button--active');
    });
});