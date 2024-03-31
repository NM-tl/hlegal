document.addEventListener("DOMContentLoaded", () => {
    const smoothScroll = (targetId) => {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.getBoundingClientRect().top + window.scrollY,
                behavior: "smooth"
            });
        }
    };

    document.querySelector(".exploreBtn").addEventListener("click", (event) => {
        event.preventDefault();        
        smoothScroll("#explore");
    });
});
