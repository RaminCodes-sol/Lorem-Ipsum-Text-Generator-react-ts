
type Props = {
  paragraphs: string[],
  tag: string,
  includeHtml: string
}


const TextContainer:React.FC<Props> = ({ paragraphs, tag, includeHtml }) => {

  return (
    <section className="w-full max-w-[1200px] mx-auto mt-5">

      {
        includeHtml === 'Yes' 
          ? paragraphs?.map((paragraph, index) => (
            `<${tag}>
              ${index + 1} - ${paragraph}
              <br />
            </${tag}>`
          ))
          : paragraphs?.map((paragraph, index) => (
            <div key={index}>
              <p><span className="text-lg">{index + 1} - </span>{paragraph}</p>
              <br />
            </div>
          ))
      }

    </section>
  )
}

export default TextContainer