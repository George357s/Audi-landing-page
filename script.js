/* Menu */
const menu = document.querySelector('.menu');
const menuBtn = document.querySelector('.menu-btn');

menuBtn.addEventListener('click', () => {
   menu.classList.toggle('menu-open');
});

/* Stats counter */
const stats = document.querySelector('.stats');
const counters = document.querySelectorAll(".counter");
let bol = false;
/* Gets stats section offset from top of the page and adds the stats element height */
const sectionOffset = stats.offsetTop + stats.offsetHeight;
/* Starts the counter when the page is scrolled to the stats section */
window.addEventListener("scroll", () => {
   /* Get page offset from top and adds the screen height */
   const pageOffset = window.innerHeight + pageYOffset;
   /* runs teh updateCount function if the page is scrolled past the stats section, will only run once */
   if (pageOffset > sectionOffset && bol === false) {
      /* Selects all counters */
      counters.forEach((counter) => {
         function updateCount() {
            /* sets variables and overwrites them every time with the + shorthand */
            const target = +counter.getAttribute('data-target');
            const speed = +counter.getAttribute('data-speed');
            const count = +counter.innerText;

            /* checks if the target is reached then increments */
            if (count < target) {
               counter.innerText = count + 1;
               /* calls function every ms */
               setTimeout(updateCount, speed);
               /* when the target is reached */
            } else {
               /* stops counting */
               counter.innerText = target;
            }
         }
         updateCount();
         /* stops the update function by breaking of the the conditions to keep it from running everytime you scroll past the section */
         bol = true;
      });
   }
});
