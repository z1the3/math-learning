
import { Button } from "../ui/button";
import { useTextSelectionTooltip } from "./useTextSelectionTool";
import {
    ContextMenu,
    ContextMenuContent,
    ContextMenuItem,
    ContextMenuTrigger,
} from "@/components/ui/context-menu"

export default function TextSelectionTooltip() {
    const { tooltipVisible, tooltipPosition, selectionText, copySelectionToClipboard
    } = useTextSelectionTooltip()
    return (
        tooltipVisible && (
            <div className="bg-gray-700 text-white p-2 rounded w-36"
                style={{
                    position: "absolute",
                    top: tooltipPosition.y + 8,
                    left: tooltipPosition.x,
                }}>
                <Button variant="ghost" className="w-full" onClick={copySelectionToClipboard}>
                    <div className="w-full text-left">
                        复制
                    </div>
                </Button>
            </div>
        )
    );
}
