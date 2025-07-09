import React from 'react'
import {
    CDBSidebar,
    CDBSidebarContent,
    CDBSidebarFooter,
    CDBSidebarHeader,
    CDBSidebarMenu,
    CDBSidebarMenuItem,
} from 'cdbreact'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCompass, faStar, faFolder } from '@fortawesome/free-regular-svg-icons'
import { faGear } from '@fortawesome/free-solid-svg-icons'



const SideBar = () => {
    return (
        <>
            <aside>
                <section>
                    <div className='side-bar'>
                        <CDBSidebar>
                            <CDBSidebarHeader className='side-bar-header' prefix={<i className="fa fa-bars fa-large"></i>}>
                            </CDBSidebarHeader>

                            <CDBSidebarContent className="sidebar-content p-0">
                                <CDBSidebarMenu>
                                    <NavLink to="/" >
                                        <CDBSidebarMenuItem icon='compass'>
                                            Dashboard
                                        </CDBSidebarMenuItem>
                                    </NavLink>
                                    <NavLink to="/accounts" >
                                        <CDBSidebarMenuItem icon='folder'>
                                            Accounts
                                        </CDBSidebarMenuItem>
                                    </NavLink>
                                    <NavLink to="/surveys" >
                                        <CDBSidebarMenuItem icon='star'>
                                            Surveys
                                        </CDBSidebarMenuItem>
                                    </NavLink>
                                    <NavLink to="/settings" >
                                        <CDBSidebarMenuItem icon='cog'>
                                            settings
                                        </CDBSidebarMenuItem>
                                    </NavLink>
                                </CDBSidebarMenu>
                            </CDBSidebarContent>

                            <CDBSidebarFooter>
                                <div className='copyright text-center p-3'>
                                    <span> @2025 Copyright</span>
                                </div>
                            </CDBSidebarFooter>
                        </CDBSidebar>
                    </div>
                </section>
            </aside>
        </>
    )
}
export default SideBar