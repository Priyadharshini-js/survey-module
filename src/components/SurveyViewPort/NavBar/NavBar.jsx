import React from "react"
import { Images } from "../../Images/Images"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell } from '@fortawesome/free-regular-svg-icons'

const NavBar = () => {
    return (
        <>
            <section>
                <nav className="navbar fixed-top bg-body-tertiary">
                    <div className="container-fluid">
                        <a className="navbar-brand d-flex align-items-center" href="#">
                            <img src={Images.logo} alt="Logo" width="50" height="50" className="d-inline-block align-text-top" />
                            <strong>CSAT</strong> Proto
                        </a>
                        <div className="d-flex align-items-center">
                            <FontAwesomeIcon icon={faBell} />
                            <p>RM</p>
                        </div>
                    </div>
                </nav>
            </section>
        </>
    )
}
export default NavBar