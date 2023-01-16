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

// function for adding animate class on click
const addAnimationEventHandler = (target) => {
  return (event) => {
    const { classList } = target;
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
  };
};

const addAnimationOnClick = (eventsList, element) => {
  eventsList.forEach((eventName) =>
    element.addEventListener(
      eventName,
      addAnimationEventHandler(element),
      false
    )
  );
};

// handle onclick on profile photo for mobile devices
addAnimationOnClick(['mouseover', 'touchstart'], profilePhoto);
