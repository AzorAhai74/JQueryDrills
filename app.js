$(document).ready(function() {
    let submitBtn = $('#btnSubmit');
    let $myH2 = $("<h2></h2>");
    let $myList = $("<li></li>");
    $(submitBtn).click(function() {
        function alertValue() {
            alert($('input').val());//inputs the text in the form field when the submit button is clicked//  
        }  
        $('input').change(alertValue);
        $('div').append($myH2);//creates a header when the submit button is clicked//
        $myH2.append($(':input[type="text"]').val());//inputs the text from the form field when the submit button is clicked//
        event.preventDefault();
        //below when the mouse hovers over the text, the background color changes to red and the border radius increases to 10px//
        $('h2').on('mouseover', function() {
            $(this).css({
                'background-color': 'red',
                'border-radius': '10px'
            });
        })
        alertValue();
        $('ul').append($myList);
        $myList.append($(':input[type="text"]').val());
        let myColors = ['#323643', '#97FF73', '#FF6513'];
        function clickList() {
            $('li').each(function() {
                var randomize = Math.floor(Math.random() * myColors.length);
                $(this).css('background-color', myColors[randomize]);
            });
        }
        clickList();
        });
    $(':input[type="submit"]').prop('disabled', true);
        $('input[type="text"]').keyup(function() {
            if($(this).val() != '') {
                $(':input[type="submit"]').prop('disabled', false);
            }
        });
    $('form').after('<div></div>');
    $('body').append("<ul id='newList'></ul");
});



