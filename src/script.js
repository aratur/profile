// Use intersection observer to run animation each time when
// element comes into viewport

const frontend = document.querySelector('.frontend');

const options = {
  root: null, // defaults to viewport
  rootMargin: '-15px 0px 0px 0px',
  threshold: 1.0,
};

const callback = (entries, observer) => {
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

// function for adding animate class on click
const addAnimationOnClick = (element) => {
  element.addEventListener(
    'click',
    () => {
      const { classList } = element;
      if (classList.contains('animate') === false) {
        // add animate class
        classList.add('animate');

        // after the timeout remove the class is exists
        setTimeout(() => {
          if (classList.contains('animate')) {
            classList.remove('animate');
          }
        }, 2000);
      } else {
        // if the animate class already exists do nothing
      }
    },
    false
  );
};

// handle onclick on profile photo for mobile devices
const profilePhoto = document.querySelector('#profile-svg');
addAnimationOnClick(profilePhoto);
