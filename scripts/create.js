function display_error(message) {
    $('#error-message').text(message);
    $('#error-ribbon').css('opacity', '100%');
}

function validate(category, wordstring) {
    if (category.length < 1) {
        return 'Please enter a category name.';
    }
    if (wordstring.length < 1) {
        return 'Please enter category words.';
    }

    let individual_words = wordstring.split(',');
    individual_words = individual_words.map(str => str.trim());

    if (individual_words.length != 4) {
        return 'Please enter four words seperated by commas.';
    }

    return 'good';
}

$('#create-submit').click(function() {
    $('#error-ribbon').css('opacity', '0%');

    let puzzle = {};

    for (let i = 1; i < 5; i++) {
        let category_name = $(`#category${i}`).val();
        let words = $(`#words${i}`).val();

        let status = validate(category_name, words);

        if (status != 'good') {
            display_error(`Category ${i}: ${status}`);
            return;
        }

        let individual_words = words.split(',');
        individual_words = individual_words.map(str => str.trim());
        puzzle[category_name] = individual_words;
    }

    let puzzle_code = btoa(JSON.stringify(puzzle));
    
    console.log(puzzle_code);

    $('#puzzle-code').val(puzzle_code);
    $('#done-popup').css('display', 'flex');
})

$('#popup-close').click(function() {
    console.log('haiiiiiii :3');
    $('#done-popup').css('display', 'none');
})

$('#popup-close2').click(function() {
    console.log('haiiiiiii :3');
    $('#done-popup').css('display', 'none');
})

$('#code-copy').click(function() {
    navigator.clipboard.writeText($('#puzzle-code').val());
    $('#code-copy').html('Copied!');
    setTimeout(function() {
        $('#code-copy').html('Copy');    
    }, 2000)
})