import React from "react"
import { Images } from "../../Images/Images"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell } from '@fortawesome/free-regular-svg-icons'

const NavBar = () => {
    return (
        <>
            <section>
                <nav className="navbar fixed-top bg-white p-0">
                    <div className="container-fluid">
                        <a className="navbar-brand d-flex align-items-center p-0 m-0" href="#">
                            <img src={Images.logo} alt="Logo" width="50" height="50" className="d-inline-block align-text-top" />
                            <strong>CSAT </strong> Proto
                        </a>
                        <div className="d-flex align-items-center gap-15">
                            <FontAwesomeIcon className="font-icon" icon={faBell} />
                            <p className="user-name">RM</p>
                        </div>
                    </div>
                </nav>
            </section>
        </>
    )
}
export default NavBar