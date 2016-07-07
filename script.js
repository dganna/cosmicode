$(document).ready(function() {
    $('#fullpage').fullpage({
        //sectionsColor: ['#7E71B1', '#FF4248', '#FCFF4A', '#78B831', '#000000', '#ffd618' ],
        sectionsColor: ['#7E71B1', '#FD696D', '#FCFF4A', '#78B831', '#000000', '#ffd618' ],
        //sectionsColor: ['#0c1a3e', '#F8F3EA', '#a5c1e8', '#0c1a3e', '#000000', '#ffd618' ],
        css3: true
    });

    $('.sec__big_rocket__men1').click(function() {
        $('.sec__panel').hide();
        $('.sec__big_rocket__men__wrap__men1 .sec__panel').show();
    });
    $('.sec__big_rocket__men2').click(function() {
        $('.sec__panel').hide();
        $('.sec__big_rocket__men__wrap__men2 .sec__panel').show();
    });
    $('.sec__big_rocket__men3').click(function() {
        $('.sec__panel').hide();
        $('.sec__big_rocket__men__wrap__men3 .sec__panel').show();
    });
    $('.sec__big_rocket__men4').click(function() {
        $('.sec__panel').hide();
        $('.sec__big_rocket__men__wrap__men4 .sec__panel').show();
    });
    $('.sec__big_rocket__men5').click(function() {
        $('.sec__panel').hide();
        $('.sec__big_rocket__men__wrap__men5 .sec__panel').show();
    });
    $('.sec__big_rocket__men6').click(function() {
        $('.sec__panel').hide();
        $('.sec__big_rocket__men__wrap__men6 .sec__panel').show();
    });
    $('.sec__panel__close').click(function (e) {
        $('.sec__panel').hide();
    });

});
