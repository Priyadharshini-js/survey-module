import React, { useState, useEffect } from 'react'
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
    const [isInitialRender, setIsInitialRender] = useState(true);
    const date = new Date().getFullYear();


    useEffect(() => {
        setIsInitialRender(false);
    }, []);

    const toggleSidebar = () => {
        setCollapsed(!collapsed);
        window.dispatchEvent(new CustomEvent('sidebar-toggle', {
            detail: { collapsed: !collapsed }
        }));
    };


    return (

        <div className={`side-bar ${collapsed ? 'collapsed' : ''} ${isInitialRender ? 'initial-render' : ''}`}>
            <CDBSidebar
                collapsed={collapsed}
                style={{ height: '100%', overflow: 'hidden' }}
            >
                <CDBSidebarHeader className='side-bar-header'
                    prefix={<i
                        className="fa fa-bars fa-large"
                        onClick={toggleSidebar}
                    />
                    }>
                    <div className="logo-container">
                        {!collapsed && "Survey App"}
                    </div>
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

    );
};

export default SideBar
