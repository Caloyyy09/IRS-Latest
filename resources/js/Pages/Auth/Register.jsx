import { useEffect } from 'react';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';

import logoImg from '@/Components/logo.png';
import loginPic from '@/Components/login_pic.png';
export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        password_confirmation: '',
    });

    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route('register'));
    };

    return (
        <GuestLayout>
            
            <Head title="Register" />
            <div className="min-h-screen flex items-center justify-center bg-gray-100">
                <div className="flex flex-col sm:flex-row items-center">
                    <div className="w-full sm:w-1/2 flex justify-center p-4">
                        <img src={loginPic} alt="Login Illustration" className="w-100 h-70" />
                    </div>
            <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-md mr-10">
            <div className="text-center">
                            <img src={logoImg} alt="Logo" className="w-64 mx-auto" />
                            <p className="mt-4 text-gray-600 text-sm">
                                Welcome to TUP Corner, where your academic journey takes center stage. Explore, discover, and excel in your research endeavors!
                            </p>
                        </div>
                <form onSubmit={submit}>
                    <div className="mt-4">
                        <InputLabel htmlFor="email" value="Email" />

                        <TextInput
                            id="email"
                            type="email"
                            name="email"
                            value={data.email}
                            className="mt-1 block w-full"
                            autoComplete="username"
                            onChange={(e) => setData('email', e.target.value)}
                            required
                        />

                        <InputError message={errors.email} className="mt-2" />
                    </div>

                    <div className="mt-4">
                        <InputLabel htmlFor="password" value="Password" />

                        <TextInput
                            id="password"
                            type="password"
                            name="password"
                            value={data.password}
                            className="mt-1 block w-full"
                            autoComplete="new-password"
                            onChange={(e) => setData('password', e.target.value)}
                            required
                        />

                        <InputError message={errors.password} className="mt-2" />
                    </div>

                    <div className="mt-4">
                        <InputLabel htmlFor="password_confirmation" value="Confirm Password" />

                        <TextInput
                            id="password_confirmation"
                            type="password"
                            name="password_confirmation"
                            value={data.password_confirmation}
                            className="mt-1 block w-full"
                            autoComplete="new-password"
                            onChange={(e) => setData('password_confirmation', e.target.value)}
                            required
                        />

                        <InputError message={errors.password_confirmation} className="mt-2" />
                    </div>

                    <div className=" justify-end mt-5 text-center">
                        <Link
                            href={route('login')}
                            className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Already registered?
                        </Link>

                        <PrimaryButton className="mt-5" disabled={processing}>
                            Register
                        </PrimaryButton>
                    </div>
                </form>
            </div>
            </div>
                </div>

        </GuestLayout>
    );
}