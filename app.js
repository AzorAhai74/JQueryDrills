$(document).ready(function() {
    $('input#btnSubmit').click(function() {
        function alertValue() {
            alert($('input').val());
        }
        $('input').change(alertValue);
        alertValue();
        });
});



