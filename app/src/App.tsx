import CodeEditor from "./components/CodeEditor";
import { useState } from "react";
import GrammerViewer from "./components/GrammerViewer";

export default function App() {
  const [code, setCode] = useState("");
  const [grammer, setGrammer] = useState("");

  function menuBar() {
    return (
      <div className="navbar bg-neutral text-neutral-content">
        <div className="flex-1 pl-4">
          <p className="normal-case text-lg font-semibold">Grammar Builder</p>
        </div>
        <div className="flex-none mr-2">
          <button 
            onClick={() => setGrammer(code)}
            className="btn btn-sm btn-outline btn-info">
              Generate
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="h-full w-full">
      {menuBar()}
      <div className=" flex flex-row gap-5 mt-5 px-5 w-full">
        <div className=" w-1/2 h-full">
          <CodeEditor value={code} setValue={setCode} />
        </div>
        <div className=" w-1/2 h-full">
          <GrammerViewer value={grammer} />
        </div>
      </div>
    </div>
  );
}
