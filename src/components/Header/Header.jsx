import React from 'react'

const Header = ({ title }) => {
  return (
    <>
      <header>
        <div className="container">
          <div className="brand">
            <h1 className="h1">
              { title }
              <sub>Challenge</sub>
            </h1>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header