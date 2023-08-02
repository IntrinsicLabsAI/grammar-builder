import ts from "typescript";
import { useState } from "react";

import { compile, serializeGrammar } from "@intrinsicai/gbnfgen";

import CodeEditor from "./components/CodeEditor";
import GrammarViewer from "./components/GrammarViewer";

import build from "./assets/build.png";
import WelcomeDialog from "./components/WelcomeDialog";

export default function App() {
  const [code, setCode] = useState("");
  const [grammar, setGrammar] = useState("");
  const [WelcomeDialogOpen, setWelcomeDialogOpen] = useState(true);

  const generateGrammar = (code: string) => {
    try {
      const srcFile = ts.createSourceFile("source.ts", code, ts.ScriptTarget.ESNext);
      const ifaces: Array<string> = [];
      srcFile
        .forEachChild(child => {
          if (ts.isInterfaceDeclaration(child)) {
            ifaces.push(child.name.getText(srcFile));
          }
        });
      // NOTE: we assume that the first interface declared is meant to be the root. We should consider instead
      // having a select dropdown populated using the values from the ifaces list above.
      const grammar = compile(code, ifaces[0]);
      setGrammar(serializeGrammar(grammar));
    } catch (e) {
      setGrammar(`${e}`);
    }
  };

  function menuBar() {
    return (
      <div className="navbar bg-neutral text-neutral-content">
        <div className="flex-1 flex-row gap-3 pl-4">
          <img src={build} alt="Logo" className=" h-6 w-6 object-contain cursor-pointer" />
          <p className="normal-case text-lg font-semibold cursor-pointer">Grammar Builder</p>
        </div>
        <div className="flex-none mr-2">
          <button
            onClick={() => generateGrammar(code)}
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
      <WelcomeDialog open={WelcomeDialogOpen} setOpen={setWelcomeDialogOpen} />
      <div className=" justify-center flex flex-col md:flex-row my-5 gap-5 px-5">
        <div className=" w-8/10 md:w-[700px] ">
          <CodeEditor value={code} setValue={setCode} />
        </div>
        <div className=" w-8/10 md:w-[700px] ">
          <GrammarViewer value={grammar} />
        </div>
      </div>
    </div>
  );
}
