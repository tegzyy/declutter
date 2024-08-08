import { Routes, Route } from "react-router-dom"
import LogIn from "./components/authentication flow/loginPage.component"
import NewUser from "./components/authentication flow/newUser/newUser.component"
import PasswordReset from "./components/authentication flow/passwordReset/passwordResetPage"
import SignUp from "./pages/authentication/signUp/signUp"
import HomePage from "./routes/home/homePage"
import Navigation from "./routes/home/navigation/navigationPage.component"
import VerifyEmail from "./components/authentication flow/verifyEmail/verifyEmail.component"

function App(){
    return(
        <Routes>
        <Route path="/" element={<Navigation/>} >
        <Route index element={<HomePage/>} />
        <Route path="/sign-in" element={<LogIn/>}/>
        <Route path="/new-user" element={<NewUser/>}/>
        <Route path="/sign-up" element={<SignUp/>} />
        <Route path="/password-reset" element={<PasswordReset/>} />
        <Route path="/verify" element={<VerifyEmail/>} />
        </Route>
   </Routes>
    )
}

export default App