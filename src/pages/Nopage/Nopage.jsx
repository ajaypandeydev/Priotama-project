import React from 'react'
import noPage from '../../../public/assets/noPage.png';

function Nopage() {
  return (
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', background: '#EEEDEB', width: '100vw', height: '100vh'}}>
        <img src={noPage} alt="no page error 404" 
          style={{
            width: '500px', 
            height: '500px', 
            }}/>
    </div>
  )
}

export default Nopage