$(document).ready(function() {
    $('input#btnSubmit').click(function() {
        function alertValue() {
            alert($('input').val());
        }
        $('input').change(alertValue);
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



