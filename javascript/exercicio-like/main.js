var clicks = 0;
var comment = '';

function onLikeClicked() {
    clicks += 1;
    document.getElementById("clicks").innerHTML = clicks;
};

function onComment() {
    document.getElementById("comments").innerHTML = document.getElementById("textAreaComment").value;
};