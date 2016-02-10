(function($){
    $.fn.viSeLi = function(options){
    var object = this;
    var id = object.attr('id');

    var defaults = {
        default_text:'Please Select'
    }
    var options = $.extend(defaults, options);
    
    this.css('position','relative');
    object.prepend('<div class="seli-link"  id="seli-link-'+id+'"></div>');    
    object.find('.seli-link').append('<span class="active_li">'+options.default_text+'</span>');
    object.find('.seli-link').append('<span class="arrow_li"></span>');
    object.children('ul').addClass('drop_list');
    var width_object = object.width();
    object.children('ul.drop_list').width(width_object - 2);
    $('.seli-link#seli-link-'+id).click(function(e){
        if(!$(this).next('.drop_list').hasClass('open')){
            if(!$(this).next('.drop_list').is(':animated')){
                var this_object = $(this).next('.drop_list');
                $(this).next('.drop_list').slideDown();
                $(this).next('.drop_list').addClass('open');
            }
        }else{
            if(!$(this).next('.drop_list').is(':animated')){
                $(this).next('.drop_list').slideUp();
                $(this).next('.drop_list').removeClass('open');
            }
        }
        e.stopPropagation();
    });
    if(object.find('.active_parent').length > 0){
        object.find('.active_li').text(object.find('.active_parent').text());
    }
    if(object.find('.active_sub1').length > 0){
        object.find('.active_li').text(object.find('.active_sub1').text());
    }
    if(object.find('.active_sub2').length > 0){
        object.find('.active_li').text(object.find('.active_sub2').text());
    }
    
    $(document).click(function(event){
           if(!$(event.target).closest('.drop_list').length) {
                if($('.drop_list').is(":visible")) {
                    $('.drop_list').slideUp();
                    $('.drop_list').removeClass('open');
                }
            }  
    });
}
})(jQuery);