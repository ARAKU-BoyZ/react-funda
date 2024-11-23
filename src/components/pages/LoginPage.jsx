import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@nextui-org/react";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import { z } from "zod";



// Validasi Input
const LoginSchema = z.object({
  username: z.string().min(5, "Username minimal 5 karakter"),
  password: z.string().min(5, "Password minimal 5 karakter"),
})

const LoginPage = () => {
  const form = useForm({
    defaultValues: {
      username: "",
      password: "",
    },
    resolver: zodResolver(LoginSchema)
  })

  const LoginUser = async (data) => {
    try {
      toast.success("Login berhasil")
    } catch (error) {
      toast.error("Login Error")
    }
  }


  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100"
     style={{
      backgroundImage: 'url(./src/assets/laundryStore.jpg',
      backgroundSize: 'cover',
      backgroundPosition: 'center'}}>
      <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-bold text-center text-gray-700">Log in!</h2>
        <form onSubmit={form.handleSubmit(LoginUser)} className="space-y-4">
          <div className="space-y-1">
            <label className="block text-sm font-medium text-gray-700">Nama</label>
            <Controller
             name="username"
             control={form.control}
             render={({field, fieldState}) => {
              return (
                <Input
                 {...field}
                 label="Username"
                 size="sm"
                 isInvalid={Boolean(fieldState.error)}
                 errorMessage={fieldState.error?.message} />
              )
             }} />
          </div>
          <div className="space-y-1">
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <Controller
             name="password"
             control={form.control}
             render={({field, fieldState}) => {
              return (
                <Input
                 {...field}
                 type="password"
                 label="Password"
                 size="sm"
                 isInvalid={Boolean(fieldState.error)}
                 errorMessage={fieldState.error?.message} />
              )
             }} />
          </div>
          <button className="w-full py-2 font-semibold text-white bg-blue-500 rounded-lg hover:bg-blue-600">
            Login
          </button>
        </form>
        <p>Belum punya akun? <Link to="/signup">Daftar</Link></p>
      </div>
    </div>
  )  
}

export default LoginPage;