const cosfigureRaport = {
  hidden: { opacity: 0, y: -200 },
  display: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', delay: 1 },
  },
};
const installsAnimation = {
  init: { opacity: 0, x: 1000 },
  animated: {
    opacity: 1,
    x: 0,
    transition: { type: 'spring', delay: 1 },
  },
};

export { cosfigureRaport, installsAnimation };
