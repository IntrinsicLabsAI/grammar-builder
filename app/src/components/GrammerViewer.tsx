import CodeMirror from '@uiw/react-codemirror';
import { nord } from '@uiw/codemirror-theme-nord';

export default function GrammerViewer(
    {
        value
    } : {
        value: string
    }
) {
    return (
        <div className='px-4 py-4 rounded-md bg-[#2e3440]'>
            <CodeMirror
                value={value}
                height='87vh'
                theme={nord}
                editable={false}
            />
        </div>
    )
}