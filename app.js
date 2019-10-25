$(document).ready(function() {
    let submitBtn = $('#btnSubmit');
    let $myH2 = $("<h2></h2>");
    $(submitBtn).click(function() {
        function alertValue() {
            alert($('input').val());//inputs the text in the form field when the submit button is clicked//  
        }  
        $('input').change(alertValue);
        $('div').append($myH2);//creates a header when the submit button is clicked//
        $myH2.append($(':input[type="text"]').val());//inouts the text from the form field when the submit button is clicked//
        event.preventDefault();
        //below when the mouse hovers over the text, the background color changes to red and the border radius increases to 10px//
        $('h2').on('mouseover', function() {
            $(this).css({
                'background-color': 'red',
                'border-radius': '10px'
            });
        })
        alertValue();
        });
    $(':input[type="submit"]').prop('disabled', true);
        $('input[type="text"]').keyup(function() {
            if($(this).val() != '') {
                $(':input[type="submit"]').prop('disabled', false);
            }
        });
    $('form').after('<div></div>');
});



