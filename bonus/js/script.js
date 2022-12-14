const { createApp } = Vue;

createApp({
  data() {
    return {
      activeImage: 0,
      timer: 0,
      slider: {
        slides: [
          './img/img1.jpg',
          './img/img2.jpg',
          './img/img3.jpg',
          './img/img4.jpg',
          './img/img5.jpg',
          './img/img6.jpg',
        ],
        titles: [
          'Photo by Jannis Lucas',
          'Photo by Jacob Vizek',
          'Photo by David Levêque',
          'Photo by Jannis Lucas',
          "Photo by Marvin Meyer",
          "Photo by Marvin Meyer",
        ],
        text: [
          'Bugatti at Casino de Monte-Carlo, Place du Casino, Monaco',
          'Cream Convertible Bugatti in front of Versace Store.',
          'White Bugatti Chiron in Strasbourg, France',
          'Place di Casino, Black Bugatti Chiron',
          'Mansory Bugatti, photo taken with a Sony ILCE-7M2',
          'Black Bugatti photo taken with a Sony ILCE-7M2',
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
  },
  mounted() {
    this.start();
  }
}).mount('#app')