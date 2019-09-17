import React from 'react';
import {HeaderWrapper, HeaderWrapper2, HeaderIcons, Contact,   
    Donations, Title, LogoDiv, Nav, NavList, NavListItem,
    NavLink, HeaderText,HeaderWrapper3, NavList2, NavLink2, NavListItem2,
} from './header-styles';
import {Icon, Input} from 'antd';
import Logo from '../../../utils/Logo';
const {Search} = Input

const Header = () => {
    return (
        <header>
            {/* First Header */}
            <HeaderWrapper>
              <HeaderIcons>
                 <Icon className="icon_1" type="facebook"/>
                 <Icon className="icon_2" type="twitter"/>
                 <Icon className="icon_3" type="youtube"/>
                 <Icon className="icon_4" type="instagram"/>
              </HeaderIcons>

              <Contact>
                  <Title>Contacts</Title>
              </Contact>

              <Donations>
                  <Title>Donations</Title>
              </Donations>
            </HeaderWrapper>
            {/* End of first header */}

            {/* Second Header */}
            <HeaderWrapper2>
                <LogoDiv>
                  <Logo link={true} linkTo="/"/>
                  <HeaderText>SJ Football club</HeaderText>
                </LogoDiv>

                <Nav>
                    <NavList>
                        <NavListItem>
                            <NavLink to="/">Home</NavLink>
                        </NavListItem>
                        <NavListItem>
                            <NavLink to="/news">News</NavLink>
                        </NavListItem>
                        <NavListItem>
                            <NavLink to="/results">Results</NavLink>
                        </NavListItem>
                        <NavListItem>
                            <NavLink to="/tables">Tables</NavLink>
                        </NavListItem>
                        <NavListItem>
                            <NavLink to="/about">About</NavLink>
                        </NavListItem>
                    </NavList>
                </Nav>
            </HeaderWrapper2>
            {/* End of Second Header */}

            {/* Third Header */}
              <HeaderWrapper3>
                 <NavList2>
                    <NavListItem2>
                        <NavLink2 to="/apl">APL</NavLink2>
                    </NavListItem2>
                    <NavListItem2>
                        <NavLink2 to="/uefa">UEFA</NavLink2>
                    </NavListItem2>
                    <NavListItem2>
                        <NavLink2 to="/elc">ELC</NavLink2>
                    </NavListItem2>
                    {/* <NavListItem2>
                        <NavLink2 to="/super_cup">SUPER CUP</NavLink2>
                    </NavListItem2>
                    <NavListItem2>
                        <NavLink2 to="/world_cup">WORLD CUP</NavLink2>
                    </NavListItem2> */}
                    <NavListItem2>
                        <Search 
                           placeholder="Search" 
                           style={{width: 300, marginTop: '-1.5rem'}} 
                           onSearch={value => console.log(value)}
                        />
                    </NavListItem2>

                 </NavList2>
              </HeaderWrapper3>
            {/* End of Third Nav */}
        </header>
    )
}

export default Header;
