const accordionBtns = document.getElementsByClassName("accordion-btn");
const accordionLists = document.getElementsByClassName("accordion-list");

const check = (param) => {
    return param;
};


for (let [i, btn] of Object.entries(accordionBtns)) {
    btn.addEventListener('click', () => {
        accordionLists[i].classList.add('active');
        if (accordionLists[i].style.maxHeight) {
            accordionLists[i].style.maxHeight = null
        } else {
            accordionLists[i].style.maxHeight = accordionLists[i].scrollHeight + 'px';
        }
    })
}