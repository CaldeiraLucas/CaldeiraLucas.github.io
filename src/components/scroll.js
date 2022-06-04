export default function (icon1) {

    // let icon1: any = document.getElementsByTagName("I");
    let altura= document.getElementsByClassName("item")[0].clientHeight;
    let i = 0;

    window.addEventListener("wheel", iconBehavior);
    window.addEventListener("keydown", iconBehavior);

    function iconBehavior(event) {
        if (
            event.deltaY > 0 ||
            event.key == "ArrowDown" ||
            event.key == "PageDown"
        ) {
            if (i < icon1.length - 1) {
                icon1[i].classList.toggle("active");
                icon1[i + 1].classList.toggle("active");

                ++i;
                document
                    .getElementById("content")
                    .scrollTo({ top: altura * i, behavior: "smooth" });
            } else if (i >= icon1.length - 1) {
                i = 0;
                icon1[i].classList.toggle("active");
                icon1[icon1.length - 1].classList.toggle("active");
                document
                    .getElementById("content")
                    .scrollTo({ top: 0, behavior: "smooth" });
            }
        }

        if (event.deltaY < 0 || event.key == "ArrowUp" || event.key == "PageUp") {
            if (i <= 0) {
                icon1[i].classList.toggle("active");
                icon1[icon1.length - 1].classList.toggle("active");
                document.getElementById("content").scrollTo({
                    top: document.getElementsByClassName("item")[0].clientHeight * 3,
                    behavior: "smooth",
                });
                i = icon1.length - 1;
            } else if (i > 0) {
                icon1[i].classList.toggle("active");
                icon1[i - 1].classList.toggle("active");
                --i;
                document.getElementById("content").scrollTo({
                    top: altura * i,
                    behavior: "smooth",
                });
            }
        }
        console.log(i);
    }

}