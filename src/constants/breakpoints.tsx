export const calculateDevice = (d: number) => {
  switch (true) {
    case d >= 1024:
      return 'desktop';
    case d < 1024:
      return 'mobile';
    default:
      return null;
  }
};

export default {
  iphone5: 320,
  iphone: 375,
  iPhonePlus: 414,
  ipadPortrait: 768,
  ipadPro: 834,
  ipadLandscape: 1024,
  desktop: 1280,
  desktopXL: 1440
};
