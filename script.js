function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    document.querySelector('header').classList.toggle('dark-mode');
    document.querySelector('footer').classList.toggle('dark-mode');
    document.querySelector('.toggle').classList.toggle('dark-mode');

    var button = document.getElementById('toggle');
    if (button.innerText === "🌝") {
        button.innerText = "🌚";
    } else {
        button.innerText = "🌝";
    }
}