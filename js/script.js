$(document).ready(function () {
    let currentSlideIndex = 0;
    $('#vegas-container').vegas({
        slides: [
            {src: 'img/sliderContent1.jpg'},
            {src: 'img/sliderContent2.jpg'},
            {src: 'img/sliderContent3.jpg'}
        ],
        delay: 10000
    });
    $('#firstSlide,#secondSlide,#thirdSlide').hide();
    $('#vegas-container').on('vegaswalk', function (event, index) {
        currentSlideIndex = index;
        if (currentSlideIndex === 0) {
            setTimeout(function () {
                $('#firstSlide').fadeIn();
            }, 500);
            setTimeout(function () {
                $('#firstSlide').fadeOut();
            }, 9500)
        } else if (currentSlideIndex === 1) {
            setTimeout(function () {
                $('#secondSlide').fadeIn();
            }, 500);
            setTimeout(function () {
                $('#secondSlide').fadeOut();
            }, 9500)
        } else if (currentSlideIndex === 2) {
            setTimeout(function () {
                $('#thirdSlide').fadeIn();
            }, 500);
            setTimeout(function () {
                $('#thirdSlide').fadeOut();
            }, 9500)
        }
    });
});

const listItems = document.querySelectorAll('.search-list-items');
listItems.forEach((item) => {
    item.addEventListener('click', (e) => {
        const text = e.target.parentElement.innerText;
        item.parentElement.parentElement.previousElementSibling.innerHTML = text + "<i class=\"fa-solid fa-caret-down\"></i>"
    })
});

document.addEventListener("DOMContentLoaded", function () {
    let range1 = document.getElementById('range1');
    let range2 = document.getElementById('range2');

    range1.addEventListener('input', function () {
        this.value = Math.min(this.value, range2.value - 1);
        let value = (100 / (parseInt(this.max) - parseInt(this.min))) * parseInt(this.value) - (100 / (parseInt(this.max) - parseInt(this.min))) * parseInt(this.min);
        let children = this.parentNode.childNodes[1].childNodes;
        children[1].style.width = value + '%';
        children[5].style.left = value + '%';
        children[7].style.left = value + '%';
        children[11].style.left = value + '%';
        if (this.value < 1000) {
            children[11].childNodes[1].innerHTML = this.value + "0 SqFt";
        } else if (this.value < 100) {
            children[11].childNodes[1].innerHTML = this.value + " SqFt";
        } else {
            children[11].childNodes[1].innerHTML = this.value + "SqFt";
        }
    });

    range2.addEventListener('input', function () {
        this.value = Math.max(this.value, range1.value - (-1));
        let value = (100 / (parseInt(this.max) - parseInt(this.min))) * parseInt(this.value) - (100 / (parseInt(this.max) - parseInt(this.min))) * parseInt(this.min);
        let children = this.parentNode.childNodes[1].childNodes;
        children[3].style.width = (100 - value) + '%';
        children[5].style.right = (100 - value) + '%';
        children[9].style.left = value + '%';
        children[13].style.left = value + '%';
        children[13].childNodes[1].innerHTML = this.value + "00 SqFt";
    });
});


document.addEventListener("DOMContentLoaded", function () {
    var range3 = document.getElementById('range3');
    var range4 = document.getElementById('range4');

    range3.addEventListener('input', function () {
        this.value = Math.min(this.value, range4.value - 1);
        var value = (100 / (parseInt(this.max) - parseInt(this.min))) * parseInt(this.value) - (100 / (parseInt(this.max) - parseInt(this.min))) * parseInt(this.min);
        var children = this.parentNode.childNodes[1].childNodes;
        children[1].style.width = value + '%';
        children[5].style.left = value + '%';
        children[7].style.left = value + '%';
        children[11].style.left = value + '%';

        if (this.value < 10) {
            children[11].childNodes[1].innerHTML = this.value + "0,000 $";
            if (this.value < 1) {
                children[11].childNodes[1].innerHTML = this.value + "$";
            }
        } else {
            children[11].childNodes[1].innerHTML = this.value + "0,000 $";
        }

    });

    range4.addEventListener('input', function () {
        this.value = Math.max(this.value, range3.value - (-1));
        let value = (100 / (parseInt(this.max) - parseInt(this.min))) * parseInt(this.value) - (100 / (parseInt(this.max) - parseInt(this.min))) * parseInt(this.min);
        let children = this.parentNode.childNodes[1].childNodes;
        children[3].style.width = (100 - value) + '%';
        children[5].style.right = (100 - value) + '%';
        children[9].style.left = value + '%';
        children[13].style.left = value + '%';
    });
});
const icons=document.querySelectorAll('.custom-icon');
const diamondShapes=document.querySelectorAll('.diamond');
diamondShapes.forEach(item => {
    item.addEventListener("mouseover", function () {
        item.firstChild.nextSibling.classList.add('hover-animation')
    })
    item.addEventListener('mouseleave',function (){
        item.firstChild.nextSibling.classList.remove('hover-animation')
    })
});




    var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
    el: ".swiper-pagination",
    clickable: true,
},
    navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
},
});

