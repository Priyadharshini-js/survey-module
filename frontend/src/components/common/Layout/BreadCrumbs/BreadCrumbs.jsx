import React from 'react'

const BreadCrumbs = () => {
    return (
        <>
            <section>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="#">Accounts</a></li>
                        <li className="breadcrumb-item"><a href="#">Cisco</a></li>
                        <li className="breadcrumb-item active" aria-current="page">VA Launchpad</li>
                    </ol>
                </nav>
            </section>
        </>
    )
}
export default BreadCrumbs