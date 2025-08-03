const isAuthenticated = () => {
    console.log("Token:", localStorage.getItem("authToken"));

    const token = localStorage.getItem('authToken');
    return !!token;
}


export default isAuthenticated;