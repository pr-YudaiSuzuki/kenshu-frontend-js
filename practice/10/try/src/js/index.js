(() => {
  'use strict';

  class Slider {
    constructor(frame, frameWidth, nextBtn, prevBtn) {
      this.frame = frame;
      this.frameWidth = frameWidth;
      
      this.nextBtn = nextBtn;
      this.prevBtn = prevBtn;

      this.nextBtn.addEventListener('click', this.scrollNext);
      this.prevBtn.addEventListener('click', this.scrollPrev);

      this.init();
    }

    init() {
      this.frame.style.marginLeft = `-${this.frameWidth}px`;
      this.unshiftAndPopLastItem();
    }
    
    scrollNext = () => {
      this.frame.classList.add('is-transition');
      this.frame.style.marginLeft = `-${this.frameWidth * 2}px`;
      this.frame.addEventListener('transitionend', this.slideNext);
    }
    
    scrollPrev = () => {
      this.frame.classList.add('is-transition');
      this.frame.style.marginLeft = 0;
      this.frame.addEventListener('transitionend', this.slidePrev);
    }
    
    slideNext = () => {
      this.pushAndShiftFirstItem();
      this.resetPosition();
    }

    slidePrev = () => {
      this.unshiftAndPopLastItem();
      this.resetPosition();
    }

    pushAndShiftFirstItem() {
      this.frame.appendChild(this.frame.firstElementChild.cloneNode(true));
      this.frame.firstElementChild.remove();
    }
    
    unshiftAndPopLastItem() {
      this.frame.insertBefore(this.frame.lastElementChild.cloneNode(true), this.frame.firstElementChild);
      this.frame.lastElementChild.remove();
    }
    
    resetPosition() {
      this.frame.classList.remove('is-transition');
      this.frame.removeEventListener('transitionend', this.slideNext)
      this.frame.removeEventListener('transitionend', this.slidePrev);
      this.frame.style.marginLeft = `-${this.frameWidth}px`;
    }
  }

  new Slider(
    document.querySelector('.list'),
    document.querySelector('.container').clientWidth,
    document.querySelector('.next'),
    document.querySelector('.prev')
  );

})();