import { useState } from "react"
import AuthManager from "../../modules/AuthManager";


const AuthMethods = () => {

    const [loggedIn, setIsLoggedIn] = useState(false)
    const isAuthenticated = () =>
        loggedIn || sessionStorage.getItem("user-token") !== null

    const register = registrationInfo => {
        return AuthManager.registerUser(registrationInfo)
            .then(parsedResponse => {
                if ("token" in parsedResponse) {
                    sessionStorage.setItem("user-token", parsedResponse.token)
                    setIsLoggedIn(true)
                }
            })
    }
    const createEmployee = registrationInfo => {
        return AuthManager.registerUser(registrationInfo)
    }

    const login = credentials => {
        return AuthManager.loginUser(credentials)
            .then(parsedResponse => {
                if ("valid" in parsedResponse && parsedResponse.valid && "token" in parsedResponse) {
                    sessionStorage.setItem("user-token", parsedResponse.token)
                    setIsLoggedIn(true)
                }
            })
    }

    const logout = () => {
        setIsLoggedIn(false)
        sessionStorage.removeItem("user-token")
    }

    return { isAuthenticated, logout, login, register, createEmployee }
}

export default AuthMethods
