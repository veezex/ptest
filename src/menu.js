document.querySelector(".menu-trigger").addEventListener("click", () => {
    const menu = document.querySelector("nav.header");

    if (menu.classList.contains("opened")) {
        menu.classList.remove("opened");
    } else {
        menu.classList.add("opened");
    }
});
