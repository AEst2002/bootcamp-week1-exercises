import React from 'react'
import { Bar } from './styles'

const SearchBar = ({placeholder, items, setItems}) => {
    return (
        <>
            <Bar placeholder={placeholder} value={items.desc} onChange={(e) => setItems(items.filter(({ desc }) => desc.includes(e.target.value)))}></Bar>
        </>
    )
}
export default SearchBar