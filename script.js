// prettier-ignore
document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("dark-mode-toggle");
    toggleButton.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");

        document.querySelectorAll("blog-post").forEach(post => {
    post.classList.toggle(dark-mode);
        })
    });
});
