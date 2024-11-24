export const login = (authData) => ({
    type: "LOGIN",
    payload: { authData }
})

export const logout = () => ({
    typr: "LOGOUT",
    payload: null
})