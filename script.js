// const P = document.getElementById('Physics');
// const C = document.getElementById('Chemistry');
// const M = document.getElementById('Mathematics');


function filter() {
    var checkboxes = document.getElementsByName("check")
    var checked = [];

    for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            checked.push(checkboxes[i].id);
        }
    }
    var cards = document.getElementsByClassName('card');
    for (var i = 0; i < cards.length; i++) {
        if (checked.length === 0) {
            cards[i].style.display = 'flex';
        }
        else {
            cards[i].style.display = 'none';
            for (var j = 0; j < checked.length; j++) {
                if (cards[i].querySelector('.sub').innerHTML === checked[j]) {
                    cards[i].style.display = 'flex';
                }
            }
        }
    }
}


ch = document.getElementsByName("check")


ch.forEach((item) => {
    item.addEventListener('input', filter)
})