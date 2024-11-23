import { Input } from "@nextui-org/react";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { Link } from "react-router-dom";


// Validasi Inputan
const SignupSchema = z.object({
    nama: z.string().min(1, "Nama tidak boleh kosong"),
    email: z.string().email("Email tidak valid!"),
    username: z.string().min(5, "Username minimal 5 karakter!"),
    password: z.string().min(5, "Password minimal 5 karakter!"),
})


const SignupPage = () => {
    // Fungsi menyimpan Semua hasil inputan
    const form = useForm({
        defaultValues: {
            nama: "",
            email: "",
            username: "",
            password: "",
        },
        resolver: zodResolver(SignupSchema),
    })

    const registerUser = async (data) => {
        try {
            toast.success("Pendaftaran Berhasil")
        } catch (error) {
            toast.error("Pendaftaran gagal")
        }
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100"
        style={{
          backgroundImage: 'url(./src/assets/laundryStore.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'}}>
          <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-md rounded-lg">
            <h2 className="text-2xl font-bold text-center text-gray-700">Sign up!</h2>
            <form onSubmit={form.handleSubmit(registerUser)} className="space-y-4">
              <div className="space-y-1">
                <label className="block text-sm font-medium text-gray-700">Nama</label>
                <Controller
                 name="nama"
                 control={form.control}
                 render={({field, fieldState}) => {
                    return (
                        <Input
                         {...field}
                         label="Nama"
                         size="sm"
                         isInvalid={Boolean(fieldState.error)}
                         errorMessage={fieldState.error?.message} />
                    )
                 }} />
              </div>
              <div className="space-y-1">
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <Controller
                 name="email"
                 control={form.control}
                 render={({field, fieldState}) => {
                    return (
                        <Input
                         {...field}
                         type="email"
                         label="Email"
                         size="sm"
                         isInvalid={Boolean(fieldState.error)}
                         errorMessage={fieldState.error?.message} />
                    )
                 }} />
              </div>
              <div className="space-y-1">
                <label className="block text-sm font-medium text-gray-700">Username</label>
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
              <button
                type="submit"
                className="w-full py-2 font-semibold text-white bg-blue-500 rounded-lg hover:bg-blue-600">
                Sign up
              </button>
            </form>
            <p>Sudah punya akun? <Link to="/login">Login</Link></p>
          </div>
        </div>
    )
}

export default SignupPage