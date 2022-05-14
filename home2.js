

var searchtype = document.getElementById("textsearch");
var cards = document.getElementsByClassName("card")
// console.log(cards)


function searchbyprice() {
    var txtsearch = document.getElementById("textsearch").value;
    document.cookie = `${txtsearch}`


    var t = txtsearch.match(/\b[^\d\W]+\b/g);
    var n = txtsearch.match(/^[0-9]+$/)
    if (t != null || n != null) {

        for (var i = 0; i < cards.length; i++) {
            if (cards[i].children[2].textContent.toUpperCase() == txtsearch.toUpperCase() || cards[i].children[1].textContent.toUpperCase() == txtsearch.toUpperCase() || cards[i].children[3].textContent == txtsearch) {

                cards[i].style.display = "block"
            } else {
                cards[i].style.display = "none"

            }


            if (txtsearch == "all") {
                cards[i].style.display = "block"
            }

        }

        searchtype.style.border = "3px black solid"
    } else {
        searchtype.style.border = "3px red solid"
    }
}