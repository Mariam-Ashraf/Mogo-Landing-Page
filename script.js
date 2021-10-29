function changeToLTR() {
    document.getElementsByTagName("html")[0].classList.remove('direction-rtl');
    document.getElementsByTagName("html")[0].classList.add('direction-ltr')
}

function changeToRTL() {
    document.getElementsByTagName("html")[0].classList.remove('direction-ltr');
    document.getElementsByTagName("html")[0].classList.add('direction-rtl')
}