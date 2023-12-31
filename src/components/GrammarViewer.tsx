import CodeMirror from '@uiw/react-codemirror';
import { nord } from '@uiw/codemirror-theme-nord';
import { CloudArrowDownIcon, ClipboardIcon } from '@heroicons/react/24/outline';

export default function GrammarViewer(
    {
        value
    } : {
        value: string
    }
) {
    const generateFile = () => {
        const file = new File([value], 'grammar.gbnf', {
            type: 'text/plain',
        })

        const link = document.createElement('a')
        const url = URL.createObjectURL(file)
        link.href = url
        link.download = file.name
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
        window.URL.revokeObjectURL(url)
    }

    return (
        <div className='px-4 py-4 rounded-md bg-[#2e3440]'>
            <div className=' flex flex-row items-center h-8'>
                <p className=' flex-1 font-semibold text-primary-content'>
                    Generated Grammar
                </p>
                <div className='flex flex-row gap-2'>
                    <button className=' p-1 hover:bg-accent/80 rounded-md' 
                            onClick={() => navigator.clipboard.writeText(value)}>
                        <ClipboardIcon className=' cursor-pointer h-6 w-6 text-primary-content '/>
                    </button>
                    <button className=' p-1 hover:bg-accent/80 rounded-md'
                            onClick={() => generateFile()}>
                        <CloudArrowDownIcon className=' cursor-pointer h-6 w-6 text-primary-content '/>
                    </button>
                </div>
            </div>
            <div className=' pb-2 '>
                <p className=' text-sm '>
                    This grammar can be used during LLMs generation.
                </p>
            </div>
            <CodeMirror
                value={value}
                height='82vh'
                theme={nord}
                editable={false}
            />
        </div>
    )
}