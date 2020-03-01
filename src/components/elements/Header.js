import React from 'react'
import styled from 'styled-components'
import {Link} from '@reach/router'

import RMDBLogo from '../images/reactMovie_logo.png'
import TMDBLogo from '../images/tmdb_logo.svg'
import Rodeo from '../images/Rodeooocircle.png'
//or
// import {StyledHeader,...,...} from '../styles/StyledHeader'

const StyledHeader = styled.div`
    background: #1c1c1c;
    padding: 0 20px;
    box-sizing: border-box;

    .header-content {
        max-width: 1280px;
        max-height: 120px;
        padding: 20px 0;
        margin: 0 auto;
        box-sizing: border-box;

        @media screen and (max-width: 500px) {
            min-height: 0px;
        }
    }
`
const StyledRMDBLogo = styled.img`
    width: 250px;
    margin-top: 20px;

    @media screen and (max-width: 500px) {
        width: 150px;
        margin-top: 5px;
    }
`
const StyledTMDBLogo = styled.img`
    width: 110px;
    margin-top: -10px;
    float: right;
    @media screen and (max-width: 500px) {
        display: inline-block;
        width: 80px;
        margin-top: -12px;
    }
`
const Header = () => (
    <StyledHeader>
        <div className="header-content">
            <Link to="/">
                <StyledRMDBLogo src={RMDBLogo} alt="rmdb-logo"/>
            </Link>
            <a href="https://www.linkedin.com/in/roland-lopez-developer/">
                <StyledTMDBLogo src={Rodeo} alt="tmdb-logo"/>
            </a>
        </div>
    </StyledHeader>
)

export default Header;