import { useContext, useEffect, useState } from "react"
import Login from "./components/Auth/Login"
import AdminDashboard from "./components/Dashboard/AdminDashboard"
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard"
import { getLocalStorage, setLocalStorage } from "./utils/LocalStorage"
import { AuthContext } from "./context/AuthProvider"


function App() {
  const [user, setUser] = useState(null);
  const [loggedInuserData, setLoggedInUserData] = useState(null)
  const authData = useContext(AuthContext);

  useEffect(() => {
    const loggedInUser = localStorage.getItem('loggedInUser');

    if (loggedInUser) {
      const userData = JSON.parse(loggedInUser)
      setUser(userData.role)
      setLoggedInUserData(userData.data)
      console.log('User logged in', userData)
    }
  }, [authData])


  const handleLogin = (email, password) => {
    // if (email == 'admin@gmail.com' && password == '123') {
    if (authData.admin.find((e) => email == e.email && password == e.password)) {
      const admin = authData.admin.find((e) => email == e.email);
      setUser('admin')
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin', data: admin }))
    } else if (authData) {
      const employee = authData.employees.find((e) => email == e.email && password == e.password);
      if (employee) {
        setUser('employee');
        setLoggedInUserData(employee)
        localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee', data: employee }))
      } else {
        alert("invalide ")
      }

    }
    else {
      alert("invalide ")
    }
  }



  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ''}
      {user == 'admin' ? <AdminDashboard /> : user == 'employee' ? <EmployeeDashboard data={loggedInuserData} /> : ''}
      {/* <EmployeeDashboard /> */}
      {/* <AdminDashboard /> */}
    </>
  )
}

export default App
