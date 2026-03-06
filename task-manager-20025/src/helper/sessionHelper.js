class SessionHelper {
    setToken(token) {
        localStorage.setItem('token', token);
    }
    getToken() {
        return localStorage.getItem('token');
    }

    setUserDetails(userDetails) {
        localStorage.setItem('userDetails', JSON.stringify(userDetails));
    }
    getUserDetails() {
        return JSON.parse(localStorage.getItem('userDetails'));
    }
    removeSession() {
        // localStorage.removeItem('token');
        // localStorage.removeItem('userDetails');
        localStorage.clear();
    }
}

export const {setToken, getToken, setUserDetails, getUserDetails, removeSession} = new SessionHelper();