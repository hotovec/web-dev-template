// push data to form

var targetFormField = $("#mailto");
var targetInfoElement = $("#targetMailInfo");

$('[fillform]').each(function () {
    var el = $(this);

    el.click(function (e) {
        e.preventDefault();

        var injectName = el.data('name');
        var injectSubject = el.data('subject');
        var injectEmail = el.data('email');

        targetFormField.attr('value', injectEmail);
        targetInfoElement.text(injectEmail);

        var scrollTo = $('#formSection').position().top - 100;

        $('body').animate({scrollTop:scrollTo}, '500', 'swing', function() {
            console.log('Fill form with: ' + injectName, injectEmail, injectSubject);
        });
    });
});
