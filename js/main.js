window.addEventListener("resize", update);
window.addEventListener("load", () => {
    scroller = document.querySelector(".scroller");
    console.log(scroller);
    update();
});
let state;
let scroller;

function update() {
    if (state != "TABLET" && document.documentElement.clientWidth <= 768 && document.documentElement.clientWidth > 600) {
        state = "TABLET";
        scroller.init(2, 25);
    } else if (state != "DESKTOP" && document.documentElement.clientWidth > 768) {
        state = "DESKTOP";
        scroller.init(3, 30);
    } else if (state != "PHONE" && document.documentElement.clientWidth <= 600) {
        state = "PHONE";
        scroller.init(1);
    }
}