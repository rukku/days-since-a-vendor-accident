$(document).ready(function(){

    let days = $.cookie("days");
    if (days === undefined) {
        let d = Math.floor(Math.random() * (4 - 0) + 0);
        $.cookie("days", d, {expires: 1});
        days = d
    }

    function dom (sel){
        return $('[data-hook="'+sel+'"]');
    }

    function updateUI (days) {
      dom('days-since').text(days);
      dom('days-label').text( days == 1 ? 'Day' : 'Days' );
    }

    updateUI(days);

});
