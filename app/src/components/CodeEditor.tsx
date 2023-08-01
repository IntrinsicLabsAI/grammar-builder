import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { nord } from '@uiw/codemirror-theme-nord';

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
            <div className=' flex flex-row '>
                <p className=' flex-1 font-semibold text-primary-content pb-2'>
                    Type Definitions
                </p>
            </div>
            <CodeMirror
                indentWithTab={true}
                value={value}
                height='87vh'
                theme={nord}
                extensions={[javascript({ typescript: true })]}
                onChange={(value) => setValue(value)}/>
        </div>
    )
}