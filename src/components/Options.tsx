import { CopyToClipboard } from 'react-copy-to-clipboard'



type Props = {
    inputValue: number,
    setInputValue: React.Dispatch<React.SetStateAction<number>>,
    tag: string,
    setTag: React.Dispatch<React.SetStateAction<string>>,
    includeHtml: string,
    setIncludeHtml: React.Dispatch<React.SetStateAction<string>>,
    paragraphs: string[]
}



const Options:React.FC<Props> = (props) => {
  const { inputValue, setInputValue, tag, setTag, includeHtml, setIncludeHtml, paragraphs } = props

  return (
    <section className="p-4 bg-blue-400 w-full max-w-[1200px] flex flex-col items-end gap-4 sm:flex-row sm:justify-between">

        <div className="w-full max-w-[500px] flex flex-col gap-2 sm:flex-row sm:justify-between">

            {/*-------Paragraph-Input-------*/}
            <div className="flex flex-col text-black">
                <span className="mb-1">Paragraphs:</span>
                <input type='number' min='1' placeholder='paragraph number' value={inputValue} onChange={e => setInputValue(Number(e.target.value))} className="border-none outline-none p-2"/>
            </div>

            {/*-------Tags-Input-------*/}
            <div className="flex flex-col text-black">
                <span className="mb-1">Tags:</span>
                <select  defaultValue={tag} onChange={e => setTag(e.target.value)} className="border-none outline-none p-2">
                    <option value="p">&lt;p&gt;</option>
                    <option value="h1">&lt;h1&gt;</option>
                    <option value="h2">&lt;h2&gt;</option>
                    <option value="h3">&lt;h3&gt;</option>
                    <option value="h4">&lt;h4&gt;</option>
                    <option value="h5">&lt;h5&gt;</option>
                    <option value="h6">&lt;h6&gt;</option>
                    <option value="span">&lt;span&gt;</option>
                </select>
            </div>

            {/*-------IncludeHTML-Input-------*/}
            <div className="flex flex-col text-black">
                <span className="mb-1">Include HTML:</span>
                <select defaultValue={includeHtml} onChange={e => setIncludeHtml(e.target.value)} className="border-none outline-none p-2">
                    <option value='Yes'>Yes</option>
                    <option value='No'>No</option>
                </select>
            </div>
        </div>

       
        {/*-------CopyToClipboard-Button-------*/}
        <div>
            <CopyToClipboard text={paragraphs.map(paragraph => includeHtml === 'Yes' ? `<${tag}>${paragraph}</${tag}>` : paragraph).join('\n')}>
                <button className="bg-blue-700 text-sm w-[150px] px-2 py-3 rounded transition-colors hover:bg-blue-800">Copy to clipboard</button>
            </CopyToClipboard>
        </div>
        
    </section>
  )
}

export default Options