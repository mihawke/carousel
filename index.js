const container = document.querySelector(".container")
const dotContainer = document.querySelector(".dot-container")

const slideContainer = document.querySelector(".slide-container")
const slides = document.querySelectorAll(".slide")
slides.forEach((item, index) => {
    const dot = document.createElement('span')
    dot.className = 'dot'
    dot.setAttribute('id', index)
    dotContainer.appendChild(dot)
})
const dots = document.querySelectorAll(".dot")
dots.forEach(dot => {
    dot.addEventListener('click', () => {
        currentIndex = parseInt(dot.getAttribute('id'))
        loadSlide(currentIndex);
    });
});

const nextBtn = document.getElementById('next')
const prevBtn = document.getElementById('prev')
slideContainer.innerHTML = ''
let currentIndex = 0;
const totalSLides = slides.length
loadSlide(currentIndex)


nextBtn.addEventListener('click', () => {
    if (currentIndex < (totalSLides - 1)) {
        currentIndex = currentIndex + 1;
        loadSlide(currentIndex);
    }
    else {
        currentIndex = 0;
        loadSlide(currentIndex);
    }
})

prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex = currentIndex - 1;
        loadSlide(currentIndex);
    }
    else {
        currentIndex = totalSLides - 1;
        loadSlide(currentIndex);
    }
})

function loadSlide(imgIndex) {
    slides.forEach((item, index) => {
        if (index == imgIndex) {
            slideContainer.innerHTML = ''
            slideContainer.appendChild(item)
        }
    })
    dots.forEach(dot => dot.classList.remove('active'));
    dots[imgIndex].classList.add('active');
}

function startAutoSlide() {
    autoSlideInterval = setInterval(() => {
        nextBtn.click();
    }, 5000); // Change slide every 5 seconds
}
startAutoSlide();