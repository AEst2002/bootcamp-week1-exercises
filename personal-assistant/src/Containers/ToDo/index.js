import React, { useState } from 'react'
import SearchBar from '../../Components/SearchBar'
import AddBar from '../../Components/AddBar'
import Table from '../../Components/Table'
import Title from '../../Components/Title'
import Nav from '../../Components/Nav'
import { Page } from './styles'

const ToDo = () => {
    const [items, setItems] = useState([])
    return(
        <Page>
            <Nav></Nav>
            <Title text='Your To-Dos!'></Title>
            <AddBar placeholder="Add Item" items={items} setItems={setItems}></AddBar>
                <SearchBar placeholder="Type here to filter" items={items} setItems={setItems}></SearchBar>
                <Table items={items} setItems={setItems}></Table>
        </Page>
    )
}

export default ToDo