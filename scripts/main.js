// Cambio de idioma ES/EN: recuerda la elección y, si no hay, usa el idioma del navegador.
(function () {
    var root = document.documentElement;
    var KEY = 'lang';
    var titles = {
        es: 'Luigi Alexander Loayza-Montesinos · Matemática y física matemática',
        en: 'Luigi Alexander Loayza-Montesinos · Mathematics and mathematical physics'
    };

    function setLang(l) {
        root.setAttribute('data-lang', l);
        root.lang = l;
        document.title = root.getAttribute('data-title-' + l) || titles[l];
        try { localStorage.setItem(KEY, l); } catch (e) {}
        var b = document.getElementById('lang');
        if (b) b.setAttribute('aria-label', l === 'es' ? 'Cambiar a inglés' : 'Switch to Spanish');
    }

    var saved = null;
    try { saved = localStorage.getItem(KEY); } catch (e) {}
    var fromUrl = new URLSearchParams(location.search).get('lang'); // p. ej. index.html?lang=en
    var initial = fromUrl || saved || ((navigator.language || 'es').toLowerCase().indexOf('es') === 0 ? 'es' : 'en');
    setLang(initial === 'en' ? 'en' : 'es');

    document.addEventListener('DOMContentLoaded', function () {
        var b = document.getElementById('lang');
        setLang(root.getAttribute('data-lang'));
        if (b) b.addEventListener('click', function () {
            setLang(root.getAttribute('data-lang') === 'es' ? 'en' : 'es');
        });
    });
})();
