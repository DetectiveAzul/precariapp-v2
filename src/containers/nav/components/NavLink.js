import React from 'react';
import { Link } from '@reach/router'

const NavLink = ({ path, name }) => {
    return(
        <Link to={path}>
            |{"  "}{name}{"  "}
        </Link>
    )
}

export default NavLink;