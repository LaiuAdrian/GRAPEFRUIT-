
import './Header.css';
import logo from '../img/logo.png'
import serch from '../img/serch.png'
import avatar from '../img/avatar.png'
import icon2 from '../img/icon2.png'
import plus from '../img/plus.png'
import hamburgher from '../img/hamburgher.png'
import DrawerMeniu from './DrawerMeniu';
import { useState } from 'react';

const Header =()=>{
    const [open,setOpen]= useState(false)


    const openMeniu =()=>{
        setOpen(true)
    }

    const closeMeniu =()=>{
        setOpen(false)
    }

    return(
        <>
        <div className='headerMain'>
            <div className='divF'>
                <div className='divF'>
                         <img  onClick={()=>openMeniu()} className='hamburher' src={hamburgher} alt="img" />
                        <p className='Widgets'>
                            WIDGETS
                        </p>
                </div>
                <img className='logo' src={logo} alt="Logo" />
                <div className='rightH'>
                        <img className='plus'  src={plus} alt="img" />
                        <img  className='serch' src={serch} alt="img" />
                        <img   className='avatarH' src={avatar} alt="img" />
                        <img  className='fav' src={icon2} alt="img" />
               </div>
            </div>
        </div>
            {
                (window.innerWidth >1200) ?
                <DrawerMeniu className="justDesktop" closeMeniuChild={closeMeniu} statusMeniu={open} />
        
            :
            null
        }
        </>
    )
 
}
export default Header