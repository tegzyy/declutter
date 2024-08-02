import HomePage from "./components/routes/home/homePage"
import { Routes, Route } from "react-router-dom"
import LogIn from "./components/authentication flow/loginPage.component"
import NewUser from "./components/authentication flow/newUser/newUser.component"
import SignUp from "./components/authentication flow/signUp/signUp"
import Navigation from "./components/routes/home/navigation/navigationPage.component"
import PasswordReset from "./components/authentication flow/passwordReset/passwordResetPage"

function App(){
    return(
        <Routes>
        <Route path="/" element={<Navigation/>} >
        <Route index element={<HomePage/>} />
        <Route path="/sign-in" element={<LogIn/>}/>
        <Route path="/new-user" element={<NewUser/>}/>
        <Route path="/sign-up" element={<SignUp/>} />
        <Route path="/password-reset" element={<PasswordReset/>} />
        </Route>
   </Routes>
    )
}

export default App