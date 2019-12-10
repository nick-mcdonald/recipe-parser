function parse_dom() {
    console.log('Tab script:');
    console.log(document.body);
    return document.body.innerHTML;
}

function get_page_content() {
    chrome.tabs.executeScript({
        code: '(' + parse_dom + ')();' //argument here is a string but function.toString() returns function's code
    }, (results) => {
        //Here we have just the innerHTML and not DOM structure
        console.log('Popup script:')
        console.log(results[0]);
    });
}

chrome.commands.onCommand.addListener(function(command) {
    if (command == 'parse-recipe-page') {
        get_page_content();
        alert('Parse page for recipe');
    }
});