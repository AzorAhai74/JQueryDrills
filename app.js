$(document).ready(function() {
    let submitBtn = $('#btnSubmit');
    let $myH2 = $("<h2></h2>");
    $(submitBtn).click(function() {
        function alertValue() {
            alert($('input').val());   
        }  
        $('input').change(alertValue);
        $('div').append($myH2);
        $myH2.append($(':input[type="text"]').val());
        event.preventDefault();
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



