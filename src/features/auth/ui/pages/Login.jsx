import React, { useState } from 'react'
import { Link } from 'react-router'
import { Mail, Lock, ArrowRight, AlertCircle, CheckCircle2 } from 'lucide-react'
import AuthHeader from '../components/AuthHeader'
import AuthInput from '../components/AuthInput'
import AuthButton from '../components/AuthButton'
import AuthDivider from '../components/AuthDivider'
import GoogleAuthButton from '../components/GoogleAuthButton'
import useAuth from '../../hooks/useAuth'


export const Login = () => {
  const {
    loginData: formData,
    loginErrors: errors,
    loginLoading: isLoading,
    loginStatusMessage: statusMessage,
    handleLoginChange: handleChange,
    handleLoginSubmit: handleSubmit,
    handleGoogleLogin,
  } = useAuth();
  
  return (
    <div className="w-full">
      {/* Brand & Page Header */}
      <AuthHeader
        title="Welcome back"
        subtitle="Where modern teams synchronize, collaborate, and ship."
      />

      {/* Status Alert Notification */}
      {statusMessage && (
        <div
          className={`mb-5 p-3 rounded-lg text-xs flex items-center gap-2.5 border ${
            statusMessage.type === 'success'
              ? 'bg-emerald-950/30 border-emerald-500/30 text-emerald-400'
              : 'bg-rose-950/30 border-rose-500/30 text-rose-400'
          }`}
        >
          {statusMessage.type === 'success' ? (
            <CheckCircle2 className="w-4 h-4 shrink-0" />
          ) : (
            <AlertCircle className="w-4 h-4 shrink-0" />
          )}
          <span>{statusMessage.text}</span>
        </div>
      )}

      {/* Google Login Button */}
      <GoogleAuthButton
        onClick={handleGoogleLogin}
        label="Continue with Google"
        isLoading={isLoading}
      />

      {/* Divider */}
      <AuthDivider text="OR WITH EMAIL" />

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Email Input */}
        <AuthInput
          id="login-email"
          label="Work email"
          type="email"
          placeholder="name@company.com"
          value={formData.email}
          onChange={handleChange('email')}
          error={errors.email}
          icon={Mail}
          required
          autoComplete="email"
        />

        {/* Password Input */}
        <AuthInput
          id="login-password"
          label="Password"
          type="password"
          placeholder="Enter your password"
          value={formData.password}
          onChange={handleChange('password')}
          error={errors.password}
          icon={Lock}
          required
          autoComplete="current-password"
          rightElement={
            <a
              href="#forgot"
              className="text-xs text-zinc-400 hover:text-zinc-200 transition-colors"
            >
              Forgot password?
            </a>
          }
        />

        {/* Remember Me */}
        {/* <div className="flex items-center pt-0.5">
          <label className="flex items-center gap-2 select-none cursor-pointer">
            <input
              type="checkbox"
              checked={formData.rememberMe}
              onChange={handleChange('rememberMe')}
              className="w-4 h-4 rounded border-zinc-700 bg-zinc-900 text-zinc-100 focus:ring-1 focus:ring-zinc-400 accent-zinc-200 cursor-pointer"
            />
            <span className="text-xs text-zinc-400 hover:text-zinc-300">
              Remember this device
            </span>
          </label>
        </div> */}

        {/* Primary Submit Button */}
        <div className="pt-2">
          <AuthButton
            type="submit"
            variant="default"
            isLoading={isLoading}
            className="w-full h-10"
          >
            <span>Sign in</span>
            <ArrowRight className="w-4 h-4 ml-0.5" />
          </AuthButton>
        </div>
      </form>

      {/* Switch to Register Link */}
      <div className="mt-6 text-center text-xs text-zinc-400">
        <span>Don&apos;t have an account? </span>
        <Link
          to="/register"
          className="font-medium text-zinc-100 hover:underline underline-offset-4 ml-1"
        >
          Create account
        </Link>
      </div>
    </div>
  )
}

export default Login

