import React from 'react'

const Logo = () => {
  return (
    <div>
       <a href='http://localhost:4000' className="logo" style={{ marginLeft: '50px', marginRight: '20px' }}>
                <img src="/LOGO.ico" style={{ width: "350px", display: "flex", flexDirection: "column" }} alt="Portfolio Logo" />
        </a>
    </div>
  )
}

export default Logo
