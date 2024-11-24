import LoginPage from '../src/pages/LoginPage'
import Customer from '../src/pages/dashboard/Customer'
import Dashboard from '../src/pages/dashboard/Dashboard'
import SignupPage from '../src/pages/SignupPage'
import { Toaster } from 'sonner';
import { Route, Routes } from 'react-router-dom';





function App() {
  return (
    <>
      <Toaster position='top-center' />
          <Routes>
            <Route element={<LoginPage />} path='/login' />
            <Route element={<SignupPage />} path='/Signup' />
            <Route element={<Dashboard />} path='/Dashboard' />
            <Route element={<Customer />} path='/Customer' />
          </Routes>
    </>



);
}

export default App;



{/* <ListProduct /> */}
{/* <CreateProduct /> */}
{/* <Product /> */}
{/* <Dashboard /> */}

























  // const [isLogin, setIsLogin] = useState(false);

  // useEffect (() => {
  //   const isToken = localStorage.getItem('token')
  //   if (isToken) {
  //     setIsLogin(true)
  //   }else {
  //     setIsLogin(false)
  //   }
  // }, [])

  // const onLogin = (username, password) => {
  //   axios.post("/api/v1/auth/login",
  //     {
  //       "username": username,
  //       "password": password,
  //     }
  //   ).then ((sukses) => {
  //     localStorage.setItem('token', sukses.data.data.token)
  //     console.log("data", sukses)
  //     setIsLogin(true)
  //   })
  //   .catch ((error) => {
  //     console.error("error", error)
  //     setIsLogin(false)
  //   })
  // }




  


      {/* <Sidebar />
      {/* <Navbar /> */}
      {/* <div className='flex h-screen'>
        <Sidebar />
        <div className='flex flex-col flex-1'>
          <Navbar />
          <div className='flex justify-between p-6 bg-gray-100'>
            <h1 className='text-3xl font-bold mb-6'>Data Transaksi</h1>
            <Transaksi />
          </div>
          <Table />
        </div>
      </div> */}
      {/* {isLogin ? <div className="flex h-screen">
        <Sidebar />
        <div className="flex flex-col flex-1">
          <Navbar />
          <div className="flex justify-between p-6 bg-gray-100">
            <h1 className="text-3xl font-bold mb-6">Data Transaksi</h1>
            <Transaksi />
          </div>
          <Table />
         </div>
      </div> : <LoginPage data={onLogin} />} */}