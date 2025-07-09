import React from 'react'

const Header = ({ title }) => {
    return (
        <>
            <section>
                <div className='header'>
                    <h1>{title}</h1>
                </div>
            </section>
        </>
    )
}
export default Header