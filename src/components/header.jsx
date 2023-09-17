import "./style.css"

export const Header=()=>{
    return <div>
        <div className="header-top-bar flex">
            <div className="left-part-logo flex">
               <img src="https://www.babylonhealth.com/_next/image?url=https%3A%2F%2Fassets-us-01.kc-usercontent.com%3A443%2F4375e5c0-87b8-0077-7797-0e040a2a0a8d%2Fe8fd6fd9-2003-429c-814f-c26c08bba5f7%2Fbabylon-logo-with-text.png&w=640&q=75" alt=""/>
               <div className="align-center flex">
                <p>Doctors</p>
                </div>
            </div>

            <div className="right-part-info flex">
            <div className="align-center flex">
                <p>&#128276;</p></div>
               <img src="https://cdn-icons-png.flaticon.com/512/6996/6996000.png" alt="" />
               <img src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
            </div>
        </div>

        <div className="header-bottom-bar flex">
         <div className="name-left-info  flex">
            <div className="flex align-center">
                <h4>Adarsh Kalla</h4>
            </div>
            <div className="age-left-info flex align-center">
                <p>Coperate</p>
                <p>Age 27</p>
                <p> &#x1F6C8;</p>
            </div>
         </div>
         <div className="monitor-right-info flex align-center"> 
            <p>	&#128343; Patient Timeline</p>
            <p> &#10084; Monitor</p>
            <p> ⚑ Alerts</p>
         </div>
        </div>
    </div>
}