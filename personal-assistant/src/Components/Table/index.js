import React from 'react'
import { DeleteButton, List, ListHeader, ListCell } from './styles'


const Table = ({items, setItems}) => {
    return (
    <List>
        <tr><ListHeader>To-Do:</ListHeader></tr>
        {items.map(el => <tr><ListCell>{el.desc}<DeleteButton onClick= {() => setItems(items.filter(({ id }) => id !== el.id))}>Delete</DeleteButton></ListCell></tr>)}
    </List>
    )
}

export default Table

// Line 9: Maps over items array and makes a new row for each :^)