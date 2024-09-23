import "./App.css";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "./components/ui/tooltip";
import TextSelectionTooltip from "./components/TextSelectionTooltip/TextSelectionTooltip";
import useOpenSider from "./hooks/useOpenSider";
import { Toaster } from "@/components/ui/toaster"
function App() {
  const [isPanelOpen, setIsPanelOpen] = useState(true);
  const [ebooks, setEbooks] = useState([]);

  const siderRef = useRef(null);
  const { handleClick } = useOpenSider(siderRef);


  return (
    <div className="flex h-screen" ref={siderRef}>
      <Toaster />
      {/* 框选文本后展示tooltip */}
      <TextSelectionTooltip />
      {/* Left Sidebar */}
      <div className="w-1/4 bg-gray-100 p-4">
        <h2 className="text-lg font-bold mb-4">图书馆</h2>
        {ebooks.length > 0 ? <div></div> : <div>还没有书籍哦</div>}
      </div>

      {/* Middle Content */}
      <div
        className={`transition-transform duration-300 ${isPanelOpen ? "flex-1" : "w-full"
          } bg-white p-4`}
      >
        <div className="flex">
          <h1 className="text-lg font-bold mb-4 mr-8">阅读</h1>
          <Button onClick={() => setIsPanelOpen(!isPanelOpen)} className="h-7">
            {isPanelOpen ? "关闭帮助" : "打开帮助"}
          </Button>
        </div>

        <div className="border p-4 h-full">Ebook content goes here...</div>
      </div>

      {/* Right Sidebar */}
      <div
        className={`w-1/4 bg-gray-200 p-4 transition-transform duration-300 ${isPanelOpen ? "translate-x-0" : `translate-x-full w-0`
          }`}
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold">帮助</h2>
        </div>
        <Button className="mb-4">上传PDF</Button>
        <div>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger className="mb-4 px-4 py-2 bg-black text-white rounded " onClick={handleClick}>
                Sider
              </TooltipTrigger>
              <TooltipContent>仅支持浏览器已安装Sider插件</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>
    </div>
  );
}

export default App;
