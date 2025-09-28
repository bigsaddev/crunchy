import katex from 'katex';

export function parseToLatex(str) {
    let latex = str;
    
    //Text enclosed in ""
    latex = latex.replace(/"(.*?)"/gi, "\\text{$1}");

    // Exponents - simple cases - x^2, x^3, x^n, x squared, x cubed
    latex = latex.replace(/(\w+)\^(\d+)/g, "$1^{$2}");
    latex = latex.replace(/(\w+)\s*squared/gi, "$1^{2}");
    latex = latex.replace(/(\w+)\s*cubed/gi, "$1^{3}");
    
    // Fractions - simple cases - a/b, (a+b)/(c+d), x/y^2
    latex = latex.replace(/(\([^()]+\)|[a-zA-Z0-9]+)\/(\([^()]+\)|[a-zA-Z0-9^{}]+)/g, "\\frac{$1}{$2}");
    
    // Basic functions - sqrt()
    latex = latex.replace(/sqrt\[(.*?)\]/gi, "\\sqrt{$1}");
    
    // Operators - self explanatory
    latex = latex.replace(/\bplus\b/gi, "+");
    latex = latex.replace(/\bminus\b/gi, "-");
    latex = latex.replace(/\bequals\b/gi, "=");
    latex = latex.replace(/\btimes\b/gi, "\\cdot ");
    latex = latex.replace(/\*/g, "\\cdot ");
    latex = latex.replace(/:/g, "\\div ");
    
    // Constants
    latex = latex.replace(/\bpi\b/gi, "\\pi ");
    latex = latex.replace(/\btau\b/gi, "\\tau ");
    
    return latex;
}

export function renderLatex(str, displayMode = true) {
    const lines = str.split("\n").map(parseToLatex);
    const latexStr = lines.join("\\\\");
    return katex.renderToString(latexStr, { throwOnError: false, displayMode });
}