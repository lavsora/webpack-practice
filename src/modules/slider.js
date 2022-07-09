const slider = () => {
    const sliderBlock = document.querySelector('.portfolio-content');
    const dotsList = document.querySelector('.portfolio-dots');
    const slides = document.querySelectorAll('.portfolio-item');

    const timeInterval = 2000;
    const dots = [];
    
    let currentSlide = 0;
    let interval;

    const createDots = () => {
        for (let i = 0; i < slides.length; i++) {
            const li = document.createElement('li');

            li.classList.add('dot');

            dots.push(li);
            dots[0].classList.add('dot-active')

            dotsList.append(li);
        }
    }

    createDots();

    const prevSlide = (elems, index, strClass) => {
        elems[index].classList.remove(strClass);
    }

    const nextSlide = (elems, index, strClass) => {
        elems[index].classList.add(strClass);
    }

    const autoSlide = () => {
        prevSlide(slides, currentSlide, 'portfolio-item-active');
        prevSlide(dots, currentSlide, 'dot-active');

        currentSlide++

        if (currentSlide >= slides.length) {
            currentSlide = 0;
        }

        nextSlide(slides, currentSlide, 'portfolio-item-active');
        nextSlide(dots, currentSlide, 'dot-active');
    }

    const startSlide = (timer) => {
        interval = setInterval(autoSlide, timer)
    }

    const stopSlide = () => {
        clearInterval(interval);
    }

    sliderBlock.addEventListener('click', (e) => {
        e.preventDefault();

        if (!e.target.matches('.dot, .portfolio-btn')) {
            return
        }

        prevSlide(slides, currentSlide, 'portfolio-item-active');
        prevSlide(dots, currentSlide, 'dot-active');

        if (e.target.matches('#arrow-right')) {
            currentSlide++
        } else if (e.target.matches('#arrow-left')) {
            currentSlide--
        } else if (e.target.classList.contains('dot')) {
            dots.forEach((dot, index) => {
                if (e.target === dot) {
                    currentSlide = index;
                }
            })
        }

        if (currentSlide >= slides.length) {
            currentSlide = 0;
        }

        if (currentSlide < 0) {
            currentSlide = slides.length - 1;
        }

        nextSlide(slides, currentSlide, 'portfolio-item-active');
        nextSlide(dots, currentSlide, 'dot-active');
    })

    sliderBlock.addEventListener('mouseenter', (e) => {
        if (e.target.matches('.dot, .portfolio-btn')) {
            stopSlide();
        }
    }, true)

    sliderBlock.addEventListener('mouseleave', (e) => {
        if (e.target.matches('.dot, .portfolio-btn')) {
            startSlide(timeInterval);
        }
    }, true)

    startSlide(timeInterval);
}

export default slider;