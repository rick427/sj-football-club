import React from 'react';
import {HeaderWrapper, HeaderWrapper2, HeaderIcons, Contact,   
    Donations, Title, LogoDiv, Nav, NavList, NavListItem,
    NavLink, HeaderText,HeaderWrapper3, NavList_2, NavLink_2, NavListItem_2,
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
                            <NavLink to="/News">News</NavLink>
                        </NavListItem>
                        <NavListItem>
                            <NavLink to="/Results">Results</NavLink>
                        </NavListItem>
                        <NavListItem>
                            <NavLink to="/Tables">Tables</NavLink>
                        </NavListItem>
                        <NavListItem>
                            <NavLink href="#">About</NavLink>
                        </NavListItem>
                    </NavList>
                </Nav>
            </HeaderWrapper2>
            {/* End of Second Header */}

            {/* Third Header */}
              <HeaderWrapper3>
                 <NavList_2>
                    <NavListItem_2>
                        <NavLink_2 to="/liga">LIGA BBVA</NavLink_2>
                    </NavListItem_2>
                    <NavListItem_2>
                        <NavLink_2 to="/liga">UEFA</NavLink_2>
                    </NavListItem_2>
                    <NavListItem_2>
                        <NavLink_2 to="/liga">EPL</NavLink_2>
                    </NavListItem_2>
                    <NavListItem_2>
                        <NavLink_2 to="/liga">SUPER CUP</NavLink_2>
                    </NavListItem_2>
                    <NavListItem_2>
                        <NavLink_2 to="/liga">WORLD CUP</NavLink_2>
                    </NavListItem_2>
                    <NavListItem_2>
                        <Search 
                           placeholder="Search" 
                           style={{width: 300}} 
                           onSearch={value => console.log(value)}
                        />
                    </NavListItem_2>

                 </NavList_2>
              </HeaderWrapper3>
            {/* End of Third Nav */}
        </header>
    )
}

export default Header;
