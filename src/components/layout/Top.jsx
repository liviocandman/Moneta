import * as MdIcons from 'react-icons/md'

const Top = () => {
  return (
 
      <div className="top">
        
        <MdIcons.MdMenu id="menu-btn" />
        
        <div className="theme-toggler">
          <MdIcons.MdLightMode className='dlMode-icons active'/>
          <MdIcons.MdDarkMode className='dlMode-icons'/>
        </div>
        <div className="profile">
          <div className="info">
            <p>Hi, <b>John</b></p> 
          </div>
            <div className="profile-photo">
              <img src={"/src/assets/musk.png"} />
            </div>
          </div>
      </div>
  
  )
}

export default Top