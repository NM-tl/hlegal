document.addEventListener("DOMContentLoaded", () => {
    const posts = document.querySelectorAll(".post");
    const btnNews = document.getElementById("news");
    const btnArticles = document.getElementById("articles");  

    function shuffle(array) {
        return [...array].sort(() => Math.random() - 0.5);
    }

    function updatePostOrder(btn) {
        if (!btn.classList.contains("bg-white")) {
            shuffle(posts).forEach((post, index) => post.style.order = index + 1);
        }
    }

    function toggleActive(btn) {
        btnNews.classList.toggle("bg-white", btn === btnNews);
        btnArticles.classList.toggle("bg-white", btn === btnArticles);
        btnNews.classList.toggle("bg-transparent", btn !== btnNews);
        btnArticles.classList.toggle("bg-transparent", btn !== btnArticles);
    }

    btnNews.addEventListener("click", () => {
        updatePostOrder(btnNews);
        toggleActive(btnNews);
    });

    btnArticles.addEventListener("click", () => {
        updatePostOrder(btnArticles);
        toggleActive(btnArticles);
    });
});
