import Declutters from "../../../components/buttons/icons/declutterlogo";
import { Link, Outlet } from "react-router-dom";
import { Fragment } from "react"
import './navigation.styles.scss'

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