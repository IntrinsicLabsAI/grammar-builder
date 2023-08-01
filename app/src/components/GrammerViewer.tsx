import CodeMirror from '@uiw/react-codemirror';
import { nord } from '@uiw/codemirror-theme-nord';
import { CloudArrowDownIcon } from '@heroicons/react/24/outline';

export default function GrammerViewer(
    {
        value
    } : {
        value: string
    }
) {
    return (
        <div className='px-4 py-4 rounded-md bg-[#2e3440]'>
            <div className=' flex flex-row items-start'>
                <p className=' flex-1 font-semibold text-primary-content pb-2'>
                    Generated Grammer
                </p>
                <CloudArrowDownIcon className=' cursor-pointer h-6 w-6 text-primary-content '/>
            </div>
            <CodeMirror
                value={value}
                height='87vh'
                theme={nord}
                editable={false}
            />
        </div>
    )
}