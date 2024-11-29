import Customer from '../src/pages/dashboard/Customer'
import LoginPage from '../src/pages/LoginPage'
import Dashboard from '../src/pages/dashboard/Dashboard'
import SignupPage from '../src/pages/SignupPage'
import { Toaster } from 'sonner';
import { Route, Routes } from 'react-router-dom';
import Navbar from '../src/components/Navbar'
import Sidebar from './components/Sidebar';
import Transaksi from './pages/dashboard/Transaksi';
import Product from './pages/dashboard/Product';
import Footer from './components/Footer';

const MainLayout = (props) => {
  return (
    <>
      <div className="flex flex-col h-screen">
        <Navbar />
        <div className="flex flex-1">
          <Sidebar />
          <main className="flex-1 bg-gray-100 p-4">
            {props.children}
          </main>
        </div>
        <Footer />
      </div>
    </>
  )
}



function App() {

  return (
    <>
      <Toaster position='top-center' />
      <Routes>
        <Route element={<LoginPage />} path='/' />
        <Route element={<SignupPage />} path='/Signup' />
        <Route element={<MainLayout><Dashboard /></MainLayout>} path='/Dashboard' />
        <Route element={<MainLayout><Product /></MainLayout>} path='/product' />
        <Route element={<MainLayout><Transaksi /></MainLayout>} path='/transaksi' />
      </Routes>
    </>



  );
}

export default App;



{/* <ListProduct /> */ }
{/* <CreateProduct /> */ }
{/* <Product /> */ }
{/* <Dashboard /> */ }

























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