import { createContext, useState } from "react"

interface IAuthProviderProps {
    children: React.ReactNode
}
interface IAuthContext {
    user: string | null,
    signIn: (newUser: string, cb: () => void) => void,
    signOut: (cb: () => void) => void,
}
export const AuthContext = createContext<IAuthContext | null>(null)

const AuthProvider = (props: IAuthProviderProps) => {
    const { children } = props

    const [user, setUser] = useState<string | null>(null)

    const signIn = (newUser: string, cb: () => void) => {
        setUser(newUser)
        cb()
    }
    const signOut = (cb: () => void) => {
        setUser(null)
        cb()
    }
    const value = { user, signIn, signOut }
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider