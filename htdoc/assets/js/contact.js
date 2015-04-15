// push data to form

var targetFormField = jQuery("#mailto");
var targetInfoElement = jQuery("#targetMailInfo");

jQuery('[fillform]').each(function () {
    var el = jQuery(this);

    el.click(function (e) {
        e.preventDefault();

        var injectName = el.data('name');
        var injectSubject = el.data('subject');
        var injectEmail = el.data('email');

        targetFormField.attr('value', injectEmail);
        targetInfoElement.text(injectEmail);

        var scrollTo = jQuery('#formSection').position().top - 100;

        jQuery('body').animate({scrollTop:scrollTo}, '500', 'swing', function() {
            console.log('Fill form with: ' + injectName, injectEmail, injectSubject);
        });
    });
});
