import { useState, useEffect } from "react"
import Options from "./components/Options"
import TextContainer from "./components/TextContainer"
import axios from "axios"



const App = () => {
  const [inputValue, setInputValue] = useState(1)
  const [tag, setTag] = useState('p')
  const [includeHtml, setIncludeHtml ] = useState('Yes')
  const [paragraphs, setParagraphs] = useState([] as string[])


  useEffect(() => {
    const url = `https://baconipsum.com/api/?type=all-meat&paras=${inputValue}&start-with-lorem=1`

    axios.get<Array<string>>(url).then(({data}) => setParagraphs(data))
    
  }, [inputValue])



  return (
   <main className="flex items-center flex-col px-7 py-4">
      <h1 className="text-3xl my-4">Lorem Ipsum Text Generator</h1>

      <Options 
        inputValue={inputValue} 
        setInputValue={setInputValue}
        tag={tag}
        setTag={setTag}
        includeHtml={includeHtml}
        setIncludeHtml={setIncludeHtml}
        paragraphs={paragraphs}
      />

      <TextContainer 
        paragraphs={paragraphs}
        tag={tag}
        includeHtml={includeHtml}
      />
   </main>
  )
}

export default App
