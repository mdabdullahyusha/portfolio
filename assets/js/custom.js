$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 2000,
    nav: false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 5,
      },
    },
  });
  $navOffset = $("#nav-part").offset().top;

  // navOffset ends
  $top_offset = 300;
  $(".top_to").click(function () {
    $("html,body").animate(
      {
        scrollTop: 0,
      },
      800
    );
  });
  $(window).scroll(function () {
    $scrolling = $(this).scrollTop();

    if ($scrolling > $navOffset) {
      $("#nav-part").addClass("navfixed");
    } else {
      $("#nav-part").removeClass("navfixed");
    }
    // navOffset ends
    if ($scrolling > $top_offset) {
      $(".top_to").fadeIn();
    } else {
      $(".top_to").fadeOut();
    }
  });
  $(".venobox").venobox();

  $("a[href^='#']").click(function (e) {
    e.preventDefault();

    var position = $($(this).attr("href")).offset().top;

    $("body, html").animate(
      {
        scrollTop: position,
      } /* speed */
    );
  });
  (() => {
    // Specify the deadline date
    const deadlineDate = new Date("February 28, 2024 23:59:59").getTime();

    // Cache all countdown boxes into consts
    const countdownDays = document.querySelector(".countdown__days .number");
    const countdownHours = document.querySelector(".countdown__hours .number");
    const countdownMinutes = document.querySelector(
      ".countdown__minutes .number"
    );
    const countdownSeconds = document.querySelector(
      ".countdown__seconds .number"
    );

    // Update the count down every 1 second (1000 milliseconds)
    setInterval(() => {
      // Get current date and time
      const currentDate = new Date().getTime();

      // Calculate the distance between current date and time and the deadline date and time
      const distance = deadlineDate - currentDate;

      // Calculations the data for remaining days, hours, minutes and seconds
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Insert the result data into individual countdown boxes
      countdownDays.innerHTML = days;
      countdownHours.innerHTML = hours;
      countdownMinutes.innerHTML = minutes;
      countdownSeconds.innerHTML = seconds;
    }, 1000);
  })();
  // Perticals
  var count_particles, stats, update;
  stats = new Stats();
  stats.setMode(0);
  stats.domElement.style.position = "absolute";
  stats.domElement.style.left = "0px";
  stats.domElement.style.top = "0px";
  document.body.appendChild(stats.domElement);
  count_particles = document.querySelector(".js-count-particles");
  update = function () {
    stats.begin();
    stats.end();
    if (
      window.pJSDom[0].pJS.particles &&
      window.pJSDom[0].pJS.particles.array
    ) {
      count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
    }
    requestAnimationFrame(update);
  };
  requestAnimationFrame(update);
});
