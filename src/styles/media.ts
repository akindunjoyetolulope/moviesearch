// NOTE: this design is desktop first, hence: max-width
const mq = (bp: number) => `@media (max-width: ${bp}px)`;

const media = {
  smallMobile: mq(320), // iphone 5/SE 😂
  mobile: mq(480), // mobile
  tablet: mq(768), // tablets
  smallDesktop: mq(1024), // tablets landscape, small desktops
};

export default media;
