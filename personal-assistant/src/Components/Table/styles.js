import styled from 'styled-components'


export const List = styled.table`
    width: 95%;
    margin-left: auto;
    margin-right: auto;
`

export const ListHeader = styled.th`
    background-color: #004459;
    color: white;
    padding: 10px;
    text-align: center;
    width: 100%;
`

export const ListCell = styled.td`
    padding: 10px;
    text-align: left;
    border-bottom: 1px solid #ddd;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

export const DeleteButton = styled.button`
    background-color: red;
    color: white;
    border: darkred;
    border-radius: 5px;
    padding: 5px;
`