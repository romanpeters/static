function copyToClipboard(element) {
    let copyText = document.getElementById(element);
    copyText.select();
    copyText.setSelectionRange(0, 99999); /* For mobile devices */
    document.execCommand("copy");
    window.getSelection().removeAllRanges();
}