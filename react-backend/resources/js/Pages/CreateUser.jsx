import { useState } from 'react'; // Add this import
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Checkbox from '@/Components/Checkbox';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';

export default function CreateUser({ auth }) {
    const [mode, setMode] = useState('login'); // 'login' or 'register'
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    const switchMode = () => {
        setMode((prevMode) => (prevMode === 'login' ? 'register' : 'login'));
        reset();
    };

    const submit = (e) => {
        e.preventDefault();

        const routeName = mode === 'login' ? 'login' : 'register';
        post(route(routeName));
    };

    return (
        <AuthenticatedLayout
            user={auth.user}>
            <Head title={mode === 'login' ? 'Log in' : 'Register'} />
            {auth.status && <div className="mb-4 font-medium text-sm text-green-600">{auth.status}</div>}
            
            <div className='w-full sm:max-w-md mt-6 px-6 py-4 bg-white dark:bg-gray-800 shadow-md overflow-hidden sm:rounded-lg'>
                <form onSubmit={submit}>
                    <div>
                        <InputLabel htmlFor="email" value="Email" />

                        <TextInput
                            id="email"
                            type="email"
                            name="email"
                            value={data.email}
                            className="mt-1 block w-full"
                            autoComplete="username"
                            isFocused={true}
                            onChange={(e) => setData('email', e.target.value)}
                        />

                        <InputError message={errors.email} className="mt-2" />
                    </div>

                    {mode === 'login' && (
                        <div className="mt-4">
                            <InputLabel htmlFor="password" value="Password" />

                            <TextInput
                                id="password"
                                type="password"
                                name="password"
                                value={data.password}
                                className="mt-1 block w-full"
                                autoComplete="current-password"
                                onChange={(e) => setData('password', e.target.value)}
                            />

                            <InputError message={errors.password} className="mt-2" />
                        </div>
                    )}

                    <div className="block mt-4">
                        <label className="flex items-center">
                            <Checkbox
                                name="remember"
                                checked={data.remember}
                                onChange={(e) => setData('remember', e.target.checked)}
                            />
                            <span className="ms-2 text-sm text-gray-600 dark:text-gray-400">Remember me</span>
                        </label>
                    </div>

                    <div className="flex items-center justify-end mt-4">
                        {auth.canResetPassword && mode === 'login' && (
                            <Link
                                href={route('password.request')}
                                className="underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800"
                            >
                                Forgot your password?
                            </Link>
                        )}

                        <PrimaryButton className="ms-4" disabled={processing}>
                            {mode === 'login' ? 'Log in' : 'Register'}
                        </PrimaryButton>
                    </div>
                </form>

                <div className="mt-4 text-center">
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                        {mode === 'login' ? "Don't have an account?" : 'Already have an account?'}
                    </span>
                    <button
                        onClick={switchMode}
                        className="ml-2 underline text-sm text-indigo-600 dark:text-indigo-400 hover:text-indigo-900 dark:hover:text-indigo-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800"
                    >
                        {mode === 'login' ? 'Register' : 'Log in'}
                    </button>
                </div>
            </div>
        </AuthenticatedLayout >
    );
}
