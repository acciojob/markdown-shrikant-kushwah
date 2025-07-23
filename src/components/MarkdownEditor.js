import React, { useEffect, useState } from 'react'
import ReactMarkdown from "react-markdown"

const MarkdownEditor = () => {

  const [markdown, setMarkdown] = useState("")
  const [preview, setPreview] = useState("")

  useEffect(() => {
    const timeout = setTimeout(() => {
      setPreview(markdown)
    }, 100)
    return () => clearTimeout(timeout)

  }, [markdown])


  return (
    <div className='main-container'>
      <textarea
        className='textarea'
        placeholder='Write your markdown here...'
        onChange={(e) => setMarkdown(e.target.value)}
        value={markdown}
      />
      <div className='preview'>
        <ReactMarkdown>{preview}</ReactMarkdown>
      </div>
    </div>
  )
}

export default MarkdownEditor
