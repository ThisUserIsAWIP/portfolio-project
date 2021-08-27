import * as React from 'react';
import Fab from '@material-ui/core/Fab';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import * as style from 'react-bootstrap'
const Footer = () => {

    return (
        <>
        <style.Navbar fixed='bottom'className="mb-4 mr-4 justify-content-end" collapseOnSelect expand="lg" style={{ 
                backgroundColor: 'rgba(255, 255, 255, 0)',
                fontWeight: 'lighter'
            }}>
                <style.Nav>

                </style.Nav>
        <style.Nav>
        <Fab color='secondary' className=''>
        <MailOutlineIcon />
        </Fab>
        </style.Nav>
        </style.Navbar>
        </>
    )
}

export default Footer;