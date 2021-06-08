//slide-wrap
var slideWrapper = document.getElementById('slider-wrap');
//current slideIndexition
var slideIndex = 0;
//items
var slides = document.querySelectorAll('#slider-wrap ul li');
//number of slides
var totalSlides = slides.length;
//get the slide width
var sliderWidth = slideWrapper.clientWidth;
//set width of items
slides.forEach(function (element) {
    element.style.width = sliderWidth + 'px';
})
//set width to be 'x' times the number of slides
var slider = document.querySelector('#slider-wrap ul#slider');
slider.style.width = sliderWidth * totalSlides + 'px';

// next, prev
var nextBtn = document.getElementById('next');
var prevBtn = document.getElementById('previous');
nextBtn.addEventListener('click', function () {
    plusSlides(1);
});
prevBtn.addEventListener('click', function () {
    plusSlides(-1);
});

// hover
slideWrapper.addEventListener('mouseover', function () {
    this.classList.add('active');
    // clearInterval(autoSlider);
});
slideWrapper.addEventListener('mouseleave', function () {
    this.classList.remove('active');
    // autoSlider = setInterval(function () {
    //     plusSlides(1);
    // }, 3000);
});


function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlides(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    slideIndex = n;
    if (slideIndex == -1) {
        slideIndex = totalSlides - 1;
    } else if (slideIndex === totalSlides) {
        slideIndex = 0;
    }

    slider.style.left = -(sliderWidth * slideIndex) + 'px';
}

document.getElementById("move__1").addEventListener('click', function () {

    showSlides(1)
});
document.getElementById("move__2").addEventListener('click', function () {
    showSlides(2)

});
document.getElementById("move__3").addEventListener('click', function () {
    showSlides(3)

});

var spec = document.getElementsByClassName("dog__species");
var d_t = document.getElementsByClassName("d_t");


spec[0].addEventListener("click", function () {
    if (d_t[0].style.display == "") {
        d_t[0].style.display = "table";
        d_t[1].style.display = "";
        d_t[2].style.display = "";
        spec[0].className += "act"
        spec[1].className = "dog__species "
        spec[2].className = "dog__species "
    } else if (d_t[0].style.display == "table") {
        d_t[0].style.display = "none";
        d_t[0].style.display = "";
        spec[0].className = "dog__species "
    }
})

spec[1].addEventListener("click", function () {
    if (d_t[1].style.display == "") {
        d_t[1].style.display = "table";
        d_t[0].style.display = "";
        d_t[2].style.display = "";
        spec[1].className += "act"
        spec[0].className = "dog__species "
        spec[2].className = "dog__species "
    } else if (d_t[1].style.display == "table") {
        d_t[1].style.display = "none";
        d_t[1].style.display = "";
        spec[1].className = "dog__species "
    }
})

spec[2].addEventListener("click", function () {
    if (d_t[2].style.display == "") {
        d_t[2].style.display = "table";
        d_t[0].style.display = "";
        d_t[1].style.display = "";
        spec[2].className += "act"
        spec[0].className = "dog__species "
        spec[1].className = "dog__species "
    } else if (d_t[2].style.display == "table") {
        d_t[2].style.display = "none";
        d_t[2].style.display = "";
        spec[2].className = "dog__species "
    }
})


var s = document.querySelectorAll(".small")
var small = document.getElementsByClassName("small");
var ismall = document.getElementsByClassName("info__small");


for (var i = 0; i < s.length; i++) {
    (function (idx) {
        s[idx].onclick = function () {
            if (ismall[idx].style.display == "none") {
                for (var i = 0; i < small.length; i++) {
                    ismall[i].style.display = "none"
                    imiddle[i].style.display = "none"
                    ibig[i].style.display = "none"
                }
                ismall[idx].style.display = "block";
            } else {
                for (var i = 0; i < small.length; i++) {
                    ismall[i].style.display = "none"
                }
            }
        }
    })(i);
}


var m = document.querySelectorAll(".middle")
var middle = document.getElementsByClassName("middle");
var imiddle = document.getElementsByClassName("info__middle");


for (var i = 0; i < m.length; i++) {
    (function (idx) {
        m[idx].onclick = function () {
            if (imiddle[idx].style.display == "none") {
                for (var i = 0; i < middle.length; i++) {
                    ismall[i].style.display = "none"
                    imiddle[i].style.display = "none"
                    ibig[i].style.display = "none"
                }
                imiddle[idx].style.display = "block";
            } else {
                for (var i = 0; i < middle.length; i++) {
                    imiddle[i].style.display = "none"
                }
            }
        }
    })(i);
}


var b = document.querySelectorAll(".big")
var big = document.getElementsByClassName("big");
var ibig = document.getElementsByClassName("info__big");


for (var i = 0; i < b.length; i++) {
    (function (idx) {
        b[idx].onclick = function () {
            if (ibig[idx].style.display == "none") {
                for (var i = 0; i < big.length; i++) {
                    ismall[i].style.display = "none"
                    imiddle[i].style.display = "none"
                    ibig[i].style.display = "none"
                }
                ibig[idx].style.display = "block";
            } else {
                for (var i = 0; i < big.length; i++) {
                    ibig[i].style.display = "none"
                }
            }
        }
    })(i);
}


var map = document.querySelectorAll(".land");
var map_txt = document.getElementsByClassName("map__txt");

for (var i = 0; i < map.length; i++) {
    (function (idx) {
       map[idx].onclick = function () {
            if (map_txt[idx].style.display == "none") {
                for (var i = 0; i < map_txt.length; i++) {
                    map_txt[i].style.display = "none"
                }
                map_txt[idx].style.display = "block";
            } else {
                for (var i = 0; i < map_txt.length; i++) {
                    map_txt[i].style.display = "none"
                }
            }
        }
    })(i);
}


// for (var i = 0; i < map.length; i++) {
//     (function (idx) {
//         b[idx].onclick = function () {
//             console.log(idx);
//         if (map_txt[idx].style.display == "none") {
//             for (var i = 0; i < map_txt.length; i++) {
//                 map_txt[i].style.display = "none"
//             }
//             map_txt[idx].style.display = "block";
//         } else {
//             for (var i = 0; i < map_txt.length; i++) {
//                 map_txt[i].style.display = "none"
//             }
//         }
//     }
//     })(i);
// }
