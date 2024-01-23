import { useLocation, Navigate } from 'react-router-dom'
import { useAuth } from './useAuth'
interface IRequireAuthtsxProps {
   children: React.ReactNode
}

const RequireAuth = (props: IRequireAuthtsxProps) => {
   const { children } = props
   const location = useLocation()
   const context = useAuth()

   if (!context?.user) {
      return <Navigate to='/router-dom/example/login' state={{ from: location }} />
   }
   return children
}

export default RequireAuth