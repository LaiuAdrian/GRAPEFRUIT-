
import './DrawerMeniu.css';
import ToggleSwitch from './ToggleSwitch';
import AvatarM  from '../img/avatarM.png'
import avatar1  from '../img/avatar1.png'
import avatar2  from '../img/avatar2.png'
import i1  from '../img/i1.png'
import i2  from '../img/i2.png'
import i3  from '../img/i3.png'
import i4  from '../img/i4.png'
import off  from '../img/off.png'
import right  from '../img/right.png'

const DrawerMeniu =(props)=>{
    // console.log(props)
    return(
        <>
    <div id="myNav" 
    style={props.statusMeniu !== false ? {width:'42%'} : {width:0} } 
    className="overlay">
        {/* <button onClick={props.closeMeniuChild} className="closebtn">&times;</button> */}

        <div className='div3Img'>
                <img  className='avatar1' src={avatar1} alt="img" />
                <img  className='avatarM' src={AvatarM} alt="img" />
                <img  className='avatar2' src={avatar2} alt="img" />
        </div>
        <div className='formDiv'>
        <form>
            <div className="form_input">
                    <img className='iconSMall' src={i1} alt="img" />
                    <input
                    type="text"
                    name="name" 
                    onChange={0} 
                    require
                    placeholder='Laiu Adrian'
                    />
            </div>
            <div className="form_input">
                    <img className='iconSMall' src={i2} alt="img" />
                    <input
                    type="text"
                    name="name" 
                    onChange={0} 
                    require
                    placeholder='Developer'
                    />
            </div>
            <div className="form_input">
                    <img className='iconSMall' src={i3} alt="img" />
                    <input
                    type="text"
                    name="name" 
                    onChange={0} 
                    require
                    placeholder='adrian.laiu@yahoo.com'
                    />
            </div>
            <div className="form_input">
                    <img className='iconSMall' src={i4} alt="img" />
                    <input
                    type="password"
                    name="name" 
                    onChange={0} 
                    require
                    placeholder='.......'
                    />
            </div>
            <div>
            <div className='daysToggle'>
                    <p className ="EmailN">
                        EMAIL NOTIFICATION
                    </p>
                  
                </div>
                <div className='daysToggle'>
                    <p>
                        Monday
                    </p>
                    <ToggleSwitch label="Notifications1" />
                </div>
                <div className='daysToggle'>
                    <p>
                        Monday
                    </p>
                    <ToggleSwitch label="Notifications2" />
                </div>
                <div className='daysToggle'>
                    <p>
                        Monday
                    </p>
                    <ToggleSwitch label="Notifications3" />
                </div>
                <div className='daysToggle'>
                    <p>
                        Monday
                    </p>
                    <ToggleSwitch label="Notifications4" />
                </div>
                <div className='daysToggle'>
                    <p>
                        Monday
                    </p>
                    <ToggleSwitch label="Notifications5" />
                </div>         
            </div>
        </form>
        </div>
        <div className='downSection'>
        <img  className="icon20"  src={right} alt="img" />
        <p className='savP'>
            SAVING...
        </p>
        <img  onClick={props.closeMeniuChild}
        src={off}  className="icon20" alt="img" />
        </div>
    </div>
        </>
    )
}
export default DrawerMeniu;