import styled from "styled-components"
import { Link } from 'react-router-dom'

export const Container = styled.div`
    width: 80%;
    max-width: 1200px;
    height: 100vh;
    margin-left: auto;
    margin-right: auto;
    text-align: left;
    display: block;
`

export const List = styled.ul`
    width: 100%;
    max-width: 500px;
    padding-left: 0;
`

export const ListElement = styled.li`
    width: 100%;
    padding-top: 3px;
    padding-bottom: 3px;
    list-style: none;
    display: flex;
    justify-content: space-between;
`

export const RedirectButton = styled(Link)`
    margin-right: 9px;
    margin-top: auto;
    margin-bottom: auto;
`

export const HomeLink = styled(RedirectButton)`
    display: block;
    width: 20px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 10px;
`