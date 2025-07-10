import React, { useState } from 'react'
import {
    CDBSidebar,
    CDBSidebarContent,
    CDBSidebarFooter,
    CDBSidebarHeader,
    CDBSidebarMenu,
    CDBSidebarMenuItem,
} from 'cdbreact'
import { NavLink } from 'react-router-dom'

const SideBar = () => {
    const [collapsed, setCollapsed] = useState(false);

    const date = new Date().getFullYear();


    return (
        <aside>
            <section>
                <div className='side-bar'>
                    <CDBSidebar
                        collapsed={collapsed}
                    >

                        <CDBSidebarHeader className='side-bar-header'
                            prefix={<i
                                className="fa fa-bars fa-large"
                                onClick={() => setCollapsed(!collapsed)}
                            />
                            }>
                        </CDBSidebarHeader>

                        <CDBSidebarContent className="sidebar-content p-0">
                            <CDBSidebarMenu>
                                <NavLink to="#" >
                                    <CDBSidebarMenuItem icon='compass'>
                                        Dashboard
                                    </CDBSidebarMenuItem>
                                </NavLink>
                                <NavLink className="sidebar-items" to="/accounts" >
                                    <CDBSidebarMenuItem icon='folder'>
                                        Accounts
                                    </CDBSidebarMenuItem>
                                </NavLink>
                                <NavLink to="#" >
                                    <CDBSidebarMenuItem icon='star'>
                                        Surveys
                                    </CDBSidebarMenuItem>
                                </NavLink>
                                <NavLink to="#" >
                                    <CDBSidebarMenuItem icon='cog'>
                                        settings
                                    </CDBSidebarMenuItem>
                                </NavLink>
                            </CDBSidebarMenu>
                        </CDBSidebarContent>


                        <CDBSidebarFooter>
                            <div className='sidebar-btn-wrapper copyright text-center p-3'>
                                {!collapsed && `@${date} Copyright`}
                            </div>
                        </CDBSidebarFooter>
                    </CDBSidebar>
                </div>
            </section>
        </aside>
    );
};

export default SideBar
