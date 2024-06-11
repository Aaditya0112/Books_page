// const P = document.getElementById('Physics');
// const C = document.getElementById('Chemistry');
// const M = document.getElementById('Mathematics');

document.querySelectorAll(".card").forEach((item) => {
    item.addEventListener('click', () => {
        item.setAttribute("style", "box-shadow : 1px 1px 10px 1px black");
    }
    )
})
