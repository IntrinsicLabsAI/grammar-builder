import { useState } from "react";
// import { compile } from "@intrinsicai/gbnfgen";
import CodeEditor from "./components/CodeEditor";
import GrammerViewer from "./components/GrammerViewer";

import build from "./assets/build.png";

export default function App() {
  const [code, setCode] = useState("");
  const [grammer, setGrammer] = useState("");

  const generateGrammer = (code: string) => {
    setGrammer(code);
  };

  function menuBar() {
    return (
      <div className="navbar bg-neutral text-neutral-content">
        <div className="flex-1 flex-row gap-3 pl-4 cursor-pointer">
          <img src={build} alt="Logo" className=" h-6 w-6 object-contain" />
          <p className="normal-case text-lg font-semibold">Grammar Builder</p>
        </div>
        <div className="flex-none mr-2">
          <button
            onClick={() => generateGrammer(code)}
            className="btn btn-sm btn-outline btn-info"
          >
            Generate
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="h-full w-full">
      {menuBar()}
      <div className=" justify-center flex flex-col md:flex-row my-5 gap-5 px-5">
        <div className=" w-[700px] ">
          <CodeEditor value={code} setValue={setCode} />
        </div>
        <div className=" w-[700px] ">
          <GrammerViewer value={grammer} />
        </div>
      </div>
    </div>
  );
}
