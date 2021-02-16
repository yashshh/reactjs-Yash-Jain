class AuthenticationService {

    registerSuccessfulLogin(username,password) {
        console.log("register successful login")
        sessionStorage.setItem("AuthenticatedUser",username)
    }

    logout() {
        sessionStorage.removeItem('AuthenticatedUser')
    }

    isUserLoggedin() {
        let user=sessionStorage.getItem('AuthenticatedUser')
        if (user===null) return false;
        return true;
    }

}
export default new AuthenticationService()