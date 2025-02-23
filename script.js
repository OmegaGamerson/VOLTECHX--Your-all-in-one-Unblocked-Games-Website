document.addEventListener("DOMContentLoaded", function () {
    const typingText = document.getElementById("typing-text");
    const words = ["Voltech", "Unblocked Games", "Fun Times"];
    let wordIndex = 0;
    let letterIndex = 0;

    function type() {
        if (letterIndex < words[wordIndex].length) {
            typingText.innerHTML += words[wordIndex].charAt(letterIndex);
            letterIndex++;
            setTimeout(type, 200);
        } else {
            setTimeout(erase, 2000);
        }
    }

    function erase() {
        if (letterIndex > 0) {
            typingText.innerHTML = words[wordIndex].substring(0, letterIndex - 1);
            letterIndex--;
            setTimeout(erase, 100);
        } else {
            wordIndex = (wordIndex + 1) % words.length;
            setTimeout(type, 200);
        }
    }

    type();

    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        burger.classList.toggle('toggle');
    });

    const proxyForm = document.getElementById('proxy-form');
    proxyForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const proxyAddress = document.getElementById('proxy-address').value;
        if (proxyAddress) {
            window.location.href = `/ultraviolet.html#${btoa(proxyAddress)}`;
        } else {
            document.getElementById('proxy-error').textContent = 'Please enter a valid URL.';
        }
    });
});