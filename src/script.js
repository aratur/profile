// Use intersection observer to run animation each time when
// element comes into viewport

const frontend = document.querySelector('.frontend');
const profilePhoto = document.querySelector('#profile-svg');

const options = {
  root: null, // defaults to viewport
  rootMargin: '-15px 0px 0px 0px',
  threshold: 1.0,
};

const callback = (entries) => {
  entries.forEach((entry) => {
    const { target, isIntersecting } = entry;
    const { classList } = target;

    if (isIntersecting) {
      if (!classList.contains('animate')) {
        classList.add('animate');
      } else {
        console.warn('Element already contains "animate" class.');
      }
    } else {
      classList.remove('animate');
    }
  });
};

let observer = new IntersectionObserver(callback, options);

observer.observe(frontend);
