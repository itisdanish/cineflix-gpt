// Login.js
import Header from './Header';
import { useState } from 'react';

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <main className='relative h-screen w-full'>
      {/* Background */}
      <img
        src='https://aldianews.com/sites/default/files/articles/619306-bg-full-netflix-grid-v2.desktop.jpg'
        alt='Netflix background'
        className='h-full w-full object-cover'
      />

      {/* Dark overlay */}
      <div className='absolute inset-0 bg-black/60'></div>

      {/* Header */}
      <Header />

      {/* Login form */}
      <section className='absolute top-1/2 left-1/2 w-full max-w-md -translate-x-1/2 -translate-y-1/2 bg-black/80 p-10 md:p-12 rounded-lg shadow-lg text-white'>
        <h1 className='text-3xl md:text-4xl font-bold mb-8'>
          {isSignInForm ? 'Sign In' : 'Sign Up'}
        </h1>

        <form className='flex flex-col gap-4'>
          {!isSignInForm && (
            <div>
              <label htmlFor='fullName' className='sr-only'>
                Full Name
              </label>
              <input
                id='fullName'
                type='text'
                placeholder='Full Name'
                className='w-full p-3 bg-gray-800 rounded outline-none focus:ring-2 focus:ring-red-600'
                required
              />
            </div>
          )}

          <div>
            <label htmlFor='email' className='sr-only'>
              Email Address
            </label>
            <input
              id='email'
              type='email'
              placeholder='Email Address'
              className='w-full p-3 bg-gray-800 rounded outline-none focus:ring-2 focus:ring-red-600'
              required
            />
          </div>

          <div>
            <label htmlFor='password' className='sr-only'>
              Password
            </label>
            <input
              id='password'
              type='password'
              placeholder='Password'
              className='w-full p-3 bg-gray-800 rounded outline-none focus:ring-2 focus:ring-red-600'
              required
            />
          </div>

          <button
            type='submit'
            className='w-full bg-red-600 hover:bg-red-700 transition-colors p-3 rounded font-semibold'
          >
            {isSignInForm ? 'Sign In' : 'Sign Up'}
          </button>

          <div className='flex justify-between items-center text-sm text-gray-400'>
            <label className='flex items-center gap-2'>
              <input type='checkbox' className='accent-red-600' /> Remember me
            </label>
            <button type='button' className='hover:underline'>
              Need help?
            </button>
          </div>
        </form>

        <p className='mt-8 text-gray-400 text-sm'>
          {isSignInForm ? (
            <>
              New to Netflix?{' '}
              <button
                className='text-white hover:underline font-medium'
                onClick={toggleSignInForm}
              >
                Sign up now
              </button>
            </>
          ) : (
            <>
              Already registered ?{' '}
              <button
                className='text-white hover:underline font-medium'
                onClick={toggleSignInForm}
              >
                Sign in now
              </button>
            </>
          )}
        </p>

        <p className='mt-4 text-xs text-gray-500 leading-snug'>
          This page is protected by Google reCAPTCHA to ensure you’re not a bot.
        </p>
      </section>
    </main>
  );
};

export default Login;
