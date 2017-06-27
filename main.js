// ----jQuery---
$(document).ready(function(){
    
    // A button that adds a contact card

    // $('#add_user').click(function() {
    $('#form1').submit(function(e) {
        e.preventDefault;
        console.log('hello');
        // stores data into variable
        var first_name = $('#first').val();
        var last_name = $('#last').val();
        var description = $('#description').val();
        
        // action
        $('#storage').append('<div class="user_info"><h1>'+first_name+' '+last_name+'</h1><p class="click_me">Click for description!</p><p class=\'back_info\'>'+description+'</p></div>');
        $('#first').val("");
        $('#last').val("");
        $('#description').val("");
        return false;
    });
    // });

    // when you click on card, description shows
    $(document).on('click','.user_info',function() {

        $(this).children('p.back_info').slideToggle();
        $(this).children('h1,p.click_me').slideToggle();
    });

});