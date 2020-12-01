import React, {Component} from 'react';
import styled from "styled-components"
import tw from "twin.macro"
import {scrollToDiv} from "../lib/scroll";
import Link from 'next/link';
import Head from 'next/head';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons'

export default class Navbar extends Component {

    constructor(props){
        super(props);
        
        this.state = {
            presentMenu : false,
            isScrolling : false,
        }
        
        this.getBrowserSize = this.getBrowserSize.bind(this);
        this.userDidScroll = this.userDidScroll.bind(this);
        this.handleNavigation = this.handleNavigation.bind(this);

       
    }
    componentDidMount () {
      window.addEventListener("resize", this.getBrowserSize);
      window.addEventListener("scroll", this.userDidScroll )
    }   
    componentWillUnmount () {
      window.removeEventListener("resize", this.getBrowserSize, false);
      window.removeEventListener("scroll", this.userDidScroll, false);
    }

    showMenu() {
        this.setState( state => ({presentMenu : !state.presentMenu}));
            
    }
    getBrowserSize() {
        var w = window.outerWidth;
        if(w >= 768){

            this.setState({
                presentMenu : false
            })
        }
    }
    userDidScroll() {
      
        if(window.pageYOffset > 0 && this.props.darkMode == false){
            this.setState({
                isScrolling : true
            })
        } else {
            
            this.setState({
                isScrolling : false
            })
        }
    }

    handleNavigation(id, src){
     if(this.state.presentMenu === true) {
      this.showMenu();
     }
      scrollToDiv(id,src);
    }


    render() {
        return (
            <div>
              <Head>
              
              </Head>
                <NavBarStyle darkMode={this.props.darkMode}  isScrolling={this.state.isScrolling} presentMenu={this.state.presentMenu} >
                    <Link href="/"><h1 className="cursor-pointer">TECHW/E</h1></Link>
                    <Links presentMenu={this.state.presentMenu}>
                        <Link href={"/"} passHref><StyledLink darkMode={this.props.darkMode} presentMenu={this.state.presentMenu} >Home</StyledLink></Link>
                        <NavItem presentMenu={this.state.presentMenu} onClick={() => this.handleNavigation("learn",'/')}><StyledLink darkMode={this.props.darkMode}  presentMenu={this.state.presentMenu} >Learn</StyledLink></NavItem>
                        <NavItem presentMenu={this.state.presentMenu} onClick={() => this.handleNavigation("about",'/')}><StyledLink darkMode={this.props.darkMode}  presentMenu={this.state.presentMenu} >About</StyledLink></NavItem>
                       
                        {/* <Link href={"/"} passHref><StyledLink presentMenu={this.state.presentMenu} >About</StyledLink></Link> */}
                        {/* <a href="https://www.w3schools.com">Learn</a> */}
                        <Link href="mailto:techwithe@gmail.com" target="_blank" passHref><StyledLink darkMode={this.props.darkMode}  presentMenu={this.state.presentMenu} >Contact</StyledLink></Link>
                    </Links>
                    <MenuButton onClick={() => this.showMenu()} presentMenu={this.state.presentMenu}>
                      <FontAwesomeIcon icon={faBars} color={this.state.presentMenu || this.props.darkMode ? 'white' : 'black'} size="lg" />
                    </MenuButton>
                </NavBarStyle>
               
            </div>
        )
    }   
}



const NavBarStyle = styled.main.attrs( props => ({
    className : `flex flex-row  z-10  fixed  ${props.isScrolling ? 'transition-all duration-100 border-b border-gray-400' : 'tansition-all duration-500 border-0 border-white'} ${props.presentMenu ? 'transition-all duration-500 h-64  ' : ' transition-all duration-500 h-12 sm:h-16  lg:h-24 space-x-16 xl:space-x-32'} items-start lg:items-center  justify-between lg:justify-start pt-4 lg:pt-0 pl-8 md:pl-12 lg:pl-24 xxl:pl-56  pr-8 w-screen `
  }))`
    background-color : ${props => props.presentMenu || props.darkMode ? '#101010' : 'white' };
    & {
        h1 {
            ${props => props.presentMenu || props.darkMode ?  tw`text-base sm:text-2xl italic font-semibold mb-0 text-white  ` : tw`text-base mb-0 sm:text-2xl italic font-bold text-black ` }
        }

    }
  `

const StyledLink = styled.a.attrs((props) => ({
    className : `${props.presentMenu || props.darkMode ?   'text-white hover:text-white hover:text-opacity-75'  : 'text-gray-700 focus:text-black' }  text-base font-light`
}))`
    
`

  const NavItem = styled.button.attrs((props) => ({
    className : `${props.presentMenu ? 'text-white' : 'text-white-700' } text-base focus:outline-none text-left`
  }))`
   
  `
  
  const Links = styled.main.attrs(props => ({
    className: ` ${props.presentMenu ? 'visible absolute space-y-4 mt-16 ml-4 flex flex-col text-white ' : 'hidden  flex-row space-x-16 font-normal text-gray-700'}  lg:flex xl:flex`
  }))`
    & {
      a {
        ${tw`text-base  text-left `}
      }
    }
  `
  const MenuButton = styled.button.attrs({
    className: 'flex flex-row items-center visibile lg:hidden '
  })`
    & {
      button {
        ${tw`flex flex-col items-center outline-none focus:outline-none`}
      }
      ion-icon {
        ${props => props.presentMenu? tw` text-white text-2xl sm:text-3xl ` : tw`text-black text-2xl sm:text-3xl`}
      }
    }
  `

