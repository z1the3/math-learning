/*
 * 隐藏 sider 的框选快捷指令
 */
export const hideSiderTooltip = () => {
  const shadowHost = document.querySelector("chatgpt-sidebar");
  const shadowRoot = shadowHost?.shadowRoot;
  const elementToHide = shadowRoot?.querySelector(
    ".quick-action-container"
  ) as HTMLElement;
  if (elementToHide && elementToHide) {
    elementToHide.style.display = "none";
  }
};
