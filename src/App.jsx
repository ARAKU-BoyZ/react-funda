import Login from './components/pages/LoginPage'
import CreateProduct from './components/AddProduct';
import SignupPage from './components/pages/SignupPage';
import LoginPage from './components/pages/LoginPage';
import Product from './components/pages/dashboard/Product';
import ListProduct from './components/pages/ListProduct';
import Dashboard from './components/pages/dashboard/Dashboard';
import { Toaster } from 'sonner';
import { Route, Routes } from 'react-router-dom';
import Homepage from './components/pages/Homepage';





function App() {
  return (
    <>
      <Toaster position='top-center' />
          <Routes>
            <Route element={<Homepage />} path='/' />
            <Route element={<LoginPage />} path='/Login' />
            <Route element={<SignupPage />} path='/Signup' />
            <Route element={<Dashboard />} path='/Dashboard' />
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