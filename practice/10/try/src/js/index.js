(() => {
  'use strict';

  class Slider {
    constructor(frame, frameWidth, nextBtn, prevBtn) {
      this.frame = frame;
      this.frameWidth = frameWidth;
      
      this.nextBtn = nextBtn;
      this.prevBtn = prevBtn;

      this.nextBtn.addEventListener('click', this.moveNext);
      this.prevBtn.addEventListener('click', this.movePrev);

      this.init();
    }

    init() {
      this.frame.style.marginLeft = `-${this.frameWidth}px`;
      this.unshiftLastItem();
    }
    
    resetPosition = () => {
      this.frame.classList.remove('is-transition');
      this.frame.removeEventListener('transitionend', this.next)
      this.frame.removeEventListener('transitionend', this.prev);
      this.frame.style.marginLeft = `-${this.frameWidth}px`;
    }
    
    moveNext = () => {
      this.frame.classList.add('is-transition');
      this.frame.style.marginLeft = `-${this.frameWidth * 2}px`;
      this.frame.addEventListener('transitionend', this.next);
    }
    
    movePrev = () => {
      this.frame.classList.add('is-transition');
      this.frame.style.marginLeft = 0;
      this.frame.addEventListener('transitionend', this.prev);
    }

    next = () => {
      this.pushFirstItem();
      this.resetPosition();
    }

    prev = () => {
      this.unshiftLastItem();
      this.resetPosition();
    }
    
    pushFirstItem = () => {
      this.frame.appendChild(this.frame.firstElementChild.cloneNode(true));
      this.frame.firstElementChild.remove();
    }
    
    unshiftLastItem = () => {
      this.frame.insertBefore(this.frame.lastElementChild.cloneNode(true), this.frame.firstElementChild);
      this.frame.lastElementChild.remove();
    }
  }

  new Slider(
    document.querySelector('.list'),
    document.querySelector('.container').clientWidth,
    document.querySelector('.next'),
    document.querySelector('.prev')
  );

})();