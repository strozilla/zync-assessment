import { React, useState, createContext } from 'react'




//css
import './App.css'


export const newTagContext = createContext()

const NewTag = (props) => {
  const [input, setInput] = useState('')
  const [tags, setTags] = useState([])
  const [isKeyReleased, setIsKeyReleased] = useState(false)

  const handleChange = (e) => {
    const { value } = e.target
    setInput(value)
  }
  const handleKeyDown = (e) => {
    const { key } = e
    const editInput = input.trim()

    if ((key === ',' || key === 'Enter') && editInput.length && !tags.includes(editInput)) {
      e.preventDefault()
      setTags(prevState => [...prevState, editInput])
      setInput('')
    }

    if (key === 'Backspace' && !input.length && tags.length && isKeyReleased) {
      const tagsCopy = [...tags]
      const poppedTag = tagsCopy.pop()
      e.preventDefault()
      setTags(tagsCopy)
      setInput(poppedTag)
    }

    setIsKeyReleased(false)
  }
  const handleKeyUp = () => {
    setIsKeyReleased(true)
  }

  return (
    <div>
      <newTagContext.Provider value={tags}>
        <div className='d-flex'>
          {tags.map((tag) => <div className='tag'>{tag}</div>)}
        </div>
        <input 
          id='tagInput'
          value={input}
          placeholder='Enter a tag'
          onKeyDown={handleKeyDown}
          onKeyUp={handleKeyUp}
          onChange={handleChange}
        />
        </newTagContext.Provider>
    </div>
  )
}

export default NewTag