import React from 'react'

type Props = {}

const HeaderComponent = (props: Props) => {
  return (
    <div>
        <header>
            <nav className='navbar navbar-dark bg-dark container-fluid'>
                <a className='navbar-brand'>Employee Management System</a>
            </nav>                
        </header>
    </div>
  )
}

export default HeaderComponent