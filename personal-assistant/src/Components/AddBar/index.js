import { nanoid } from 'nanoid'
import React, { useState } from 'react'
import { Bar, SubmitButton } from './styles'

// items is everything in the array
// setItems changes what's in items
// todo is what's in the bar
// e references the Bar element, set the value of todo to what's in the element after.

const AddBar = ({placeholder, items, setItems}) => {
    const [todo, setTodo] = useState({desc:'', id:''})
    console.log(items)
    return (
        <>
            <Bar placeholder={placeholder} value={todo.desc} onChange={(e) => setTodo({desc: e.target.value})}></Bar>
            <SubmitButton onClick= {() => setItems(items.concat([{...todo, id: nanoid()}]))}>Submit</SubmitButton>
        </>
    )
}

export default AddBar