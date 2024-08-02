import Declutters from "../../../buttons/icons/declutterlogo";
import { Link, Outlet } from "react-router-dom";
import { Fragment } from "react"

function Navigation(){
    return(
        <Fragment>
        <div className="navigation">
        <Link to='/'>
        <Declutters/>
        </Link> 
        </div> <Outlet/> </Fragment>
    )
}

export default Navigation