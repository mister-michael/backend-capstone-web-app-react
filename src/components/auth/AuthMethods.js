import { useState } from "react"
import AuthManager from "../../modules/AuthManager";


const AuthMethods = () => {

    const [loggedIn, setIsLoggedIn] = useState(false)
    const isAuthenticated = () =>
        loggedIn || sessionStorage.getItem("ecommerceapi-token") !== null

    const register = registrationInfo => {
        return AuthManager.registerUser(registrationInfo)
            .then(parsedResponse => {
                if ("token" in parsedResponse) {
                    sessionStorage.setItem("ecommerceapi-token", parsedResponse.token)
                    setIsLoggedIn(true)
                }
            })
    }

    const login = credentials => {
        return AuthManager.loginUser(credentials)
            .then(parsedResponse => {
                if ("valid" in parsedResponse && parsedResponse.valid && "token" in parsedResponse) {
                    sessionStorage.setItem("ecommerceapi-token", parsedResponse.token)
                    setIsLoggedIn(true)
                }
            })
    }

    const logout = () => {
        setIsLoggedIn(false)
        sessionStorage.removeItem("ecommerceapi-token")
    }

    return { isAuthenticated, logout, login, register }
}

export default AuthMethods
