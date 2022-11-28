const { createApp } = Vue;

createApp({
  data() {
    return {
      activeImage: 0,
      timer: 0,
      slider: {
        slides: [
          '/bonus-v2/img/profile-picture.jpg',
          '/bonus-v2/img/profile-picture-1.jpg',
          '/bonus-v2/img/profile-picture-2.jpg',
          '/bonus-v2/img/profile-picture-3.jpg',
          '/bonus-v2/img/profile-picture-4.jpg',
          '/bonus-v2/img/profile-picture-5.jpg',
        ],
        titles: [
          'Olivia M. Smith',
          'Janeth R. Carter',
          'Frieda G. Oconnell',
          'Miguel K. Bridge',
          "Walter A. Hoyt",
          "Richard S. Mayes",
        ],
        text: [
          'Full Stack Developer',
          'Front End Developer',
          'Marketing Advisor',
          'CEO & Founder',
          'Social Media Manager',
          'Senior Engineer',
        ]
      }
    }
  },
  methods: {
    nextImage() {
      this.activeImage++;
      if (this.activeImage >= this.slider.slides.length) {
        this.activeImage = 0;
      }
    },
    prevImage() {
      this.activeImage--;
      if (this.activeImage < 0) {
        this.activeImage = this.slider.slides.length - 1;
      }
    },
    activeThumb(index) {
      this.activeImage = index;
    },
    start() {
      this.timer = setInterval(() => {
        this.nextImage();
      }, 3000);
    },
    pause() {
      clearInterval(this.timer);
    },
    randomNum(min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min);
    },
  },
  created() {
    this.start();
  }
}).mount('#app')