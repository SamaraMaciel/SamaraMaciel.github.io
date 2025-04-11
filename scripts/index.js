$(document).ready(function () {
    $("#btn-mode").on("click", function () {
        var body = $('body');
        var html = $('html');
        body.toggleClass('light-mode');
        html.toggleClass('light-mode');
    })
});
