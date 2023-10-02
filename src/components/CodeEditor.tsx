import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { nordInit } from '@uiw/codemirror-theme-nord';

const theme = nordInit({
    settings: {
        selection: "#4833b0",
    }
});


export default function CodeEditor(
    {
        value,
        setValue
    } : {
        value: string,
        setValue: (value: string) => void
    }
) {
    return (
        <div className='px-4 py-4 rounded-md bg-[#2e3440]'>
            <div className=' flex flex-row items-center h-8'>
                <p className=' flex-1 font-semibold text-primary-content'>
                    Type Definitions
                </p>
            </div>
            <div className=' pb-2 '>
                <p className=' text-sm '>
                    Define desired output types using Typescript.
                </p>
            </div>
            <CodeMirror
                indentWithTab={true}
                value={value}
                height='82vh'
                theme={theme}
                extensions={[javascript({ typescript: true })]}
                onChange={(value) => setValue(value)}/>
        </div>
    )
}