import React, { useState, useEffect } from "react";
import { hideSiderTooltip } from "./utils";
import { useToast } from "@/hooks/use-toast";
/*
 * 复制选择内容到剪贴版
 */
const copySelectionToClipboard = (selection: string, toast: any) => {
  return () => {
    if (selection) {
      navigator.clipboard
        .writeText(selection)
        .then(() => {
          toast({
            title: "复制成功",
          });
        })
        .catch(() => {
          toast({
            title: "复制失败",
          });
        });
    }
  };
};
export const useTextSelectionTooltip = () => {
  const [selection, setSelection] = useState("");
  const [tooltipVisible, setTooltipVisible] = useState(false);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });

  const { toast } = useToast();

  useEffect(() => {
    const handleMouseUp = () => {
      const selectedText = window.getSelection()?.toString();
      if (selectedText) {
        const rect = window
          .getSelection()
          ?.getRangeAt(0)
          ?.getBoundingClientRect();
        setTooltipPosition({
          x: rect?.left || 0 + window.scrollX,
          y: rect?.bottom || 0 + window.scrollY,
        });
        setSelection(selectedText);
        setTooltipVisible(true);
        hideSiderTooltip();
      } else {
        setTooltipVisible(false);
      }
    };

    document.addEventListener("mouseup", handleMouseUp);
    return () => {
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  return {
    selectionText: selection,
    tooltipVisible,
    tooltipPosition,
    copySelectionToClipboard: copySelectionToClipboard(selection, toast),
  };
};
