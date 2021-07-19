/* NAVBAR */
document.querySelector('.menu').addEventListener('click', () => {
        document.querySelectorAll('.target').forEach((item) => {
            item.classList.toggle('change');
        })
    })
    /* END OF NAVBAR */

/*  SECTION 1 : Landing Page  */
const icons = document.querySelectorAll('.section1 .icons i');
let i = 1;
console.log(icons.length);

setInterval(() => {
    i++;
    const icon = document.querySelector('.section1 .icons i.change');

    icon.classList.remove('change');

    if (i > icons.length) {
        icons[0].classList.add('change');
        i = 1;
    } else {
        icon.nextElementSibling.classList.add('change');
    }

}, 4000)

/* END OF SECTION 1 : Landing Page  */

/*  SECTION 2 : 3D CARD Page  */
/* END OF SECTION 2 : 3D CARD Page  */

/*  SECTION 3 : GALLERY  */
/* END OF SECTION 3 : GALLERY */

/* SECTION 4 : FOOTER */
/* END OF SECTION 4 : FOOTER */