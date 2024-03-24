export const PreventScroll = () => {
  const currentScrollY = window.scrollY;
  document.body.style.position = "fixed";
  document.body.style.width = "100%";
  document.body.style.top = `-${currentScrollY}px`;
  document.body.style.overflowY = "scroll";
  document.documentElement.style.scrollBehavior = "auto";
  return currentScrollY;
};

export const AllowScroll = (prevScrollY: number) => {
  document.body.style.position = "";
  document.body.style.width = "";
  document.body.style.top = "";
  document.body.style.overflowY = "";
  window.scrollTo(0, prevScrollY);
};
