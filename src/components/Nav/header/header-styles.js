import styled from 'styled-components';
import {Link} from 'react-router-dom';

/*****************FIRST HEADER STYLES*****************/
export const HeaderWrapper = styled.div`
    position: relative;
    background: #333;
    display: flex;
    padding: .5em 2em;
    width: 100vw;
`;

export const HeaderIcons = styled.div`
  padding: .5em;
  display: flex;
  justify-content: space-between;
  color: grey;
  font-size: 1.1rem;
  width: 15%;
  transition: all 20s ease;

  .icon_1:hover{
    color: #fff;
    //transform: rotate(360deg);
    cursor: pointer;
  }
  .icon_2:hover{
    color: #fff;
    cursor: pointer;
  }
  .icon_3:hover{
    color: #fff;
    cursor: pointer;
  }
  .icon_4:hover{
    color: #fff;
    cursor: pointer;
  }
`;

export const Contact = styled.div`
  border: 1px solid grey;
  border-top: none;
  border-bottom: none;
  padding: .1rem 1rem;
  margin: .3rem;
  height: 1.5rem;
  font-size: 1.1rem;
  width: 7%;
`;

export const Donations = styled.div`
border: 1px solid grey;
border-top: none;
border-left: none;
border-bottom: none;
padding: .1rem .5rem;
margin: .3rem;
height: 1.5rem;
font-size: 1.1rem;`
;

export const Title = styled.h5`
  color: whitesmoke;
  font-weight: 200;
  //font-family: 'Consolas';
  font-family: 'Poiret One', sans-serif;
  cursor: pointer;
  transition: all 250ms ease;

  &:hover{
      color: #fff;
  }
`;
/*****************END OF FIRST HEADER STYLES*****************/


/*****************SECOND HEADER STYLES*****************/
export const HeaderWrapper2 = styled.div`
    background: #333;
    position: relative;
    display: flex;
    padding: .5em 2em;
    width: 100vw;
    height: 13vh;
    background: #fff;
    border-bottom: 1px solid #999;
    display: flex;
    justify-content: space-around;
    align-items: center;
`;

export const LogoDiv = styled.div`
 width: 30%
 padding: .6em;
 display: flex;
 justify-content: space-around;
 align-items: center;
`;

export const HeaderText = styled.h4`
  font-family: 'Montserrat', sans-serif;
  font-size: 1.4rem;
  font-weight: 400;
  margin-top: 1rem;
  color: #666;
  text-transform: uppercase;
  background: linear-gradient(red, blue);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

// export const Span = styled.span`
//   font-size: 1rem;
//   color: #555;
// `;

export const Nav = styled.nav`
 display: flex;
 align-items: center;
 width: 50%;
`;

export const NavList = styled.ul`
 list-style: none;
 display: flex;
 align-items: center;
`;

export const NavListItem = styled.li`
 padding: .7rem 1.5rem;
 margin-top: 1.35rem;
`;

export const NavLink = styled(Link)`
 text-decoration: none;
 font-family: 'Poiret One', sans-serif;
 font-weight: 900;
 font-size: 1.1em;
 color: #555;
 transition: all 12s ease;

 &:hover{
    color: red;
 }
`;

/*****************END OF SECOND HEADER STYLES*****************/

/*****************THIRD HEADER STYLES*****************/
export const HeaderWrapper3 = styled.div`
  width: 100vw;
  display: flex;
  border-bottom: 2px solid #999;
  box-shadow: 2px 5px 5px #ccc;
  height: 10vh;
  background: #fff;
  justify-content: center;
  align-items: center;
`;

export const NavList_2 = styled.ul`
 list-style: none;
 display: flex;
 align-items: center;
 font-size: .9rem;
 margin: 0;
 padding: 0;
`;

export const NavListItem_2 = styled.li`
 padding: .5rem 2.5rem;
 border-left: 1px solid #999;
`;

export const NavLink_2 = styled(Link)`
 text-decoration: none !important;
 font-family: 'Poiret One', sans-serif;
 font-weight: 900;
 font-size: 1.1em;
 color: #555;
 transition: all 12s ease;

 &:hover{
  background: linear-gradient(red, blue);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
 }
`;
/*****************END OF THIRD HEADER STYLES*****************/