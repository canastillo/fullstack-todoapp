import styled from 'styled-components'
import { RedirectButton } from '../components/layout'

const OutterContainer = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`

const InnerContainer = styled.div`
    height: 100px;
    width: 50%;
    max-width: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    @media (min-width: 500px) {
        flex-direction: row;
        justify-content: space-around;
    }
`

const HomeOptions = styled(RedirectButton)`
    margin-right: 0;
    height: 33px;
    width: 100px;
    border-radius: 5px;
    background-color: #ccc;
    color: black;
    text-decoration: none;
    text-align: center;
`

const Home = () => {
    return (
        <OutterContainer>
            <InnerContainer>
                <HomeOptions to="/folders">
                    <span style={{display: "inline-block", marginTop: "4px", fontSize: "18px"}}>Folders</span>
                </HomeOptions>
                <HomeOptions to="/todos">
                    <span style={{display: "inline-block", marginTop: "4px", fontSize: "18px"}}>All ToDos</span>
                </HomeOptions>
            </InnerContainer>
        </OutterContainer>
    )
}

export default Home