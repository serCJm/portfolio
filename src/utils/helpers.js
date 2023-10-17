export const elScrollInView = function elScrollInView(
  el,
  changeStateFn,
  state
) {
  let top = el.offsetTop;
  let height = el.offsetHeight;
  let bottom = top + height;
  let isWindowAfterElTop = top < window.pageYOffset + window.innerHeight;
  let isWindowBeforeElBottom = bottom > window.pageYOffset;
  if (isWindowAfterElTop && isWindowBeforeElBottom) {
    changeStateFn(state);
  }
};
