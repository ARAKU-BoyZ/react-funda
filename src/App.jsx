import Header from './components/Header'
import Footer from './components/Footer'
import Profile from './components/Profile'
import Counter from './components/Counter'
import { Button, Divider } from '@nextui-org/react'
import Dashboard from './components/Dashboard'
import { Routes, Route } from 'react-router-dom'
// App.js
import React, { useEffect } from 'react';
import Sidebar from './components/SideBar'
import Navbar from './components/Navbar';
import Table from './components/Tabel'
import LoginPage from './components/LoginPage'
import axios from 'axios'
import { useState } from 'react'

function App() {
  const [isLogin, setIsLogin] = useState(false);

  useEffect (() => {
    const isToken = localStorage.getItem('token')
    if (isToken) {
      setIsLogin(true)
    }else {
      setIsLogin(false)
    }
  }, [])

  const onLogin = (username, password) => {
    axios.post("/api/v1/auth/login",
      {
        "username": username,
        "password": password,
      }
    ).then ((sukses) => {
      localStorage.setItem('token', sukses.data.data.token)
      console.log("data", sukses)
      setIsLogin(true)
    })
    .catch ((error) => {
      console.error("error", error)
      setIsLogin(false)
    })
  }



  return (
    <>
      <div className='flex h-screen'>
        <Sidebar />
        <div className='flex flex-col flex-1'>
          <Navbar />
          <div className='flex justify-between p-6 bg-gray-100'>
            <h1 className='text-3xl font-bold mb-6'>Data Transaksi</h1>
            <Button className='font-semibold'>Tambah Transaksi</Button>
          </div>
          <Table />
        </div>
      </div>
      {/* {isLogin ? <div className="flex h-screen">
        <Sidebar />
        <div className="flex flex-col flex-1">
          <Navbar />
          <div className="flex justify-between p-6 bg-gray-100">
            <h1 className="text-3xl font-bold mb-6">Data Transaksi</h1>
            <Button className='font-semibold'>Tambah Transaksi</Button>
          </div>
          <Table />
         </div>
      </div> : <LoginPage data={onLogin} />} */}
    </>

  );
}

export default App;
{/* <Counter /> */}