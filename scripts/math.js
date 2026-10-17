// Configuración común de KaTeX para todos los formularios.
// Los macros se definen una sola vez aquí y valen en todas las páginas.
(function () {
    var macros = {
        "\\v":    "\\mathbf{#1}",                              // vector: \v r
        "\\e":    "\\mathbf{e}_{#1}",                          // vector unitario: \e{R}
        "\\edot": "\\dot{\\mathbf{e}}_{#1}",                   // derivada de un unitario: \edot{R}
        "\\RR":   "\\mathbb{R}",
        "\\abs":  "\\left|#1\\right|",
        "\\dv":   "\\frac{\\mathrm{d}#1}{\\mathrm{d}#2}",      // \dv{y}{x}
        "\\dvv":  "\\frac{\\mathrm{d}^{2}#1}{\\mathrm{d}#2^{2}}"
    };
    var opts = { macros: macros, throwOnError: false, strict: false };

    // Ecuaciones en bloque: <div class="eq"> código TeX sin delimitadores </div>
    document.querySelectorAll('.eq').forEach(function (el) {
        try {
            katex.render(el.textContent, el, Object.assign({ displayMode: true }, opts));
        } catch (e) { el.classList.add('err'); }
    });

    // Matemática en línea dentro del texto: $...$
    renderMathInElement(document.body, Object.assign({
        ignoredClasses: ['eq'],
        delimiters: [
            { left: '\\(', right: '\\)', display: false },
            { left: '$', right: '$', display: false }
        ]
    }, opts));
})();
