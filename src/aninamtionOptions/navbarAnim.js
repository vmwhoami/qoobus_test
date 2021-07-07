const LogoAnimation = {
  nonrotated: { scale: 2, y: -15 },
  rotated: { rotateY: 180, scale: 2, y: -15 },
  logged: {
    rotateY: 0,
    scale: 2,
    y: -15,
    transition: {
      delay: 1,
      yoyo: Infinity,
      duration: 5,
    },
  },
  nonLogged: {
    rotateY: 0,
    scale: 2,
    y: -15,
  },
};

const LogOutBtnAnimation = {
  hover: {
    scale: 1.05,
    textShadow: '0px 0px 8px rgb(255,255,255)',
    boxShadow: '0px 0px 8px rgb(255,255,255)',
    transition: {
      yoyo: Infinity,
      duration: 0.2,
    },
  },
};

export { LogoAnimation, LogOutBtnAnimation };
