window.addEventListener('scroll', setScrollVar);
window.addEventListener('resize', setScrollVar);

const $ui1 = document.getElementById('ui1');
const $ui2 = document.getElementById('ui2');
const $ui3 = document.getElementById('ui3');
const $ui4 = document.getElementById('ui4');

function setScrollVar() {
  const htmlElement = document.documentElement;
  const percentOfScreenHeightScrolled =
    htmlElement.scrollTop / htmlElement.clientHeight;
  console.log(Math.min(percentOfScreenHeightScrolled * 100, 100));
  htmlElement.style.setProperty(
    '--scroll',
    Math.min(percentOfScreenHeightScrolled * 100, 100)
  );

  $ui1.style.transform = `translateY(${Math.min(
    percentOfScreenHeightScrolled * 100,
    100
  )}px)`;
  $ui2.style.transform = `translateX(${Math.min(
    percentOfScreenHeightScrolled * 300,
    100
  )}px)`;

  $ui3.style.transform = `translateY(${Math.min(
    percentOfScreenHeightScrolled * -200,
    100
  )}px)`;

  // $ui3.style.transform = `translateY(${Math.min(
  //   percentOfScreenHeightScrolled * -200,
  //   100
  // )}px)`;

  $ui4.style.transform = `translateY(${Math.min(
    percentOfScreenHeightScrolled * -800,
    100
  )}px)`;
}

setScrollVar();

const observer = new IntersectionObserver((entries) => {
  for (let i = entries.length - 1; i >= 0; i--) {
    const entry = entries[i];
    if (entry.isIntersecting) {
      document.querySelectorAll('[data-img]').forEach((img) => {
        img.classList.remove('show');
      });
      const img = document.querySelector(entry.target.dataset.imgToShow);
      img?.classList.add('show');
      break;
    }
  }
});

document.querySelectorAll('[data-img-to-show]').forEach((section) => {
  observer.observe(section);
});
