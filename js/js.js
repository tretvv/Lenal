
$(function() {
    $('.modalbox').click(function(e) {
         e.preventDefault();
    });

    $('#message').click(function() {
         $(".envelope").hide();
         $("#envelope").show();
    });

    $('#callBack').click(function() {
        $(".envelope").hide();
        $("#envelope1").show();
    });

    var placeholders = {
        sender_name : '* Ваше Имя',
        sender_email : '* Ваш Email',
        sender_text : 'Пожалуйста, введите своё сообщение здесь ..',
        callback_name: '* Ваше Имя',
        callback_telno: '* Ваш телефон',
        text_search: 'Найти...'
    };

    $('#sender_name, #sender_email, #sender_text, #callback_name, #callback_telno, #text_search').click(function() {
        var id = $(this).attr('id');
        if($(this).val() == placeholders[id]) {
            $(this).val('');
        } else {
            $(this).select();
        }
    });

    $('#a_search').click(function(e){
        e.preventDefault();
        $('#search-form').submit();
    });

    $(document).on('mouseenter', '.card', function(e){
        $(this).addClass('box_shadow').find('div.productBoxHidden').show();
    });

    $(document).on('mouseleave', '.card', function(e){
        $(this).removeClass('box_shadow').find('div.productBoxHidden').hide();
    });

    $(document).on('mouseenter', '.card', function(e){
        $(this).find('.productBox').addClass('border_bottom_none');
    });
    $(document).on('mouseleave', '.card', function(e){
        $(this).find('.productBox').removeClass('border_bottom_none');
    });

    $('#footerNav li').click(function(e){
        e.preventDefault();
        $('#footerNav li').removeClass('active');
        $(this).addClass('active');
        $('#footer_text div').removeClass('active');
        $('#' + $(this).attr('id') + '_text').addClass('active');
    });


    $('.tabs_li a').mouseenter(function(e){
        e.preventDefault();
        $('.tabs_li a').removeClass('active_tabs');
        $(this).addClass('active_tabs');
        $('#tabs_all div').removeClass('active_tabs_text');
        $('#' + $(this).attr('id') + '_text').addClass('active_tabs_text');
    });

    $('.tabs_content').mouseleave(function(e){
        $('.tabs_li a').removeClass('active_tabs');
        $('.tabs_content').removeClass('active_tabs_text');
    });

    $('#cart_basket_a').mouseenter(function(e){
        e.preventDefault();
        $('#basket_open').css('display', 'block');
    });

    $('#basket_open').mouseleave(function(e){
        e.preventDefault();
        $('#basket_open').css('display', 'none');
    });

    $('.privat').mouseenter(function(e){
        e.preventDefault();
        $('#footer_private_open').css('display', 'block');
    });
    $('#footer_private_open').mouseleave(function(e){
        e.preventDefault();
        $('#footer_private_open').css('display', 'none');
    });

});

