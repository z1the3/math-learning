function dispatchKeyDown(dom: any) {
  const event = new KeyboardEvent("keydown", {
    key: "p", // 按键的值
    code: "KeyP", // 按键的代码
    keyCode: 80, // 按键的键码
    charCode: 0,
    shiftKey: false, // 是否按下 Shift 键
    ctrlKey: true, // 是否按下 Ctrl 键
    metaKey: true, // 是否按下 Meta 键 (Command 键在 Mac 上)
    altKey: false, // 是否按下 Alt 键
    bubbles: true, // 事件是否冒泡
    cancelable: true, // 事件是否可以取消
  });
  dom.dispatchEvent(event);
}
const useOpenSider = (ref: React.MutableRefObject<any>) => {
  return {
    handleClick: () => dispatchKeyDown(ref.current),
  };
};

export default useOpenSider;
