// Efeito de escrita no texto
document.addEventListener('DOMContentLoaded', function() {
    const phraseElement = document.getElementById('phrase');
    const aboutMeTextElement = document.getElementById('about-me-text');

    const phraseText = phraseElement.textContent;
    const aboutMeText = aboutMeTextElement.textContent;

    phraseElement.textContent = '';
    aboutMeTextElement.textContent = '';

    typeWriter(phraseElement, phraseText, 0, 15);
    setTimeout(() => {
        typeWriter(aboutMeTextElement, aboutMeText, 0, 12);
    }, phraseText.length * 15 + 100);

    function typeWriter(element, text, i, speed) {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(() => {
                typeWriter(element, text, i, speed);
            }, speed);
        }
    }
});
