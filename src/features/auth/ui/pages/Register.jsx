import React, { useState } from 'react'
import { Link } from 'react-router'
import { User, Mail, Lock, CheckCircle2, AlertCircle, ArrowRight } from 'lucide-react'
import AuthHeader from '../components/AuthHeader'
import AuthInput from '../components/AuthInput'
import AuthButton from '../components/AuthButton'
import AuthDivider from '../components/AuthDivider'
import GoogleAuthButton from '../components/GoogleAuthButton'
import PasswordStrengthMeter from '../components/PasswordStrengthMeter'
import useAuth from '../../hooks/useAuth'

export const Register = () => {
  const {
    registerData: formData,
    registerErrors: errors,
    registerLoading: isLoading,
    registerStatusMessage: statusMessage,
    handleRegisterChange: handleChange,
    handleRegisterSubmit: handleSubmit,
    handleGoogleSignup,
  } = useAuth();

  return (
    <div className="w-full">
      {/* Brand & Page Header */}
      <AuthHeader
        title="Create an account"
        subtitle="Effortless alignment and project clarity for high-velocity teams."
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

      {/* Google Signup Button */}
      <GoogleAuthButton
        onClick={handleGoogleSignup}
        label="Sign up with Google"
        isLoading={isLoading}
      />

      {/* Divider */}
      <AuthDivider text="OR REGISTER WITH EMAIL" />

      <form onSubmit={handleSubmit} className="space-y-3.5">
        {/* Full Name */}
        <AuthInput
          id="register-name"
          label="Full name"
          type="text"
          placeholder="Alex Johnson"
          value={formData.fullName}
          onChange={handleChange('fullName')}
          error={errors.fullName}
          icon={User}
          required
          autoComplete="name"
        />

        {/* Work Email */}
        <AuthInput
          id="register-email"
          label="Work email"
          type="email"
          placeholder="alex@company.com"
          value={formData.email}
          onChange={handleChange('email')}
          error={errors.email}
          icon={Mail}
          required
          autoComplete="email"
        />

        {/* Password */}
        <div>
          <AuthInput
            id="register-password"
            label="Password"
            type="password"
            placeholder="Create a password (min 8 chars)"
            value={formData.password}
            onChange={handleChange('password')}
            error={errors.password}
            icon={Lock}
            required
            autoComplete="new-password"
          />
          {/* Live Password Strength Indicator */}
          <PasswordStrengthMeter password={formData.password} />
        </div>

        {/* Confirm Password */}
        <AuthInput
          id="register-confirm-password"
          label="Confirm password"
          type="password"
          placeholder="Re-enter your password"
          value={formData.confirmPassword}
          onChange={handleChange('confirmPassword')}
          error={errors.confirmPassword}
          icon={Lock}
          required
          autoComplete="new-password"
        />

        {/* Terms Checkbox */}
        {/* <div className="pt-1">
          <label className="flex items-start gap-2 select-none cursor-pointer">
            <input
              type="checkbox"
              checked={formData.agreeTerms}
              onChange={handleChange('agreeTerms')}
              className="mt-0.5 w-4 h-4 rounded border-zinc-700 bg-zinc-900 text-zinc-100 focus:ring-1 focus:ring-zinc-400 accent-zinc-200 cursor-pointer"
            />
            <span className="text-xs text-zinc-400 leading-tight">
              I agree to the{' '}
              <a href="#terms" className="text-zinc-200 hover:underline underline-offset-2">
                Terms of Service
              </a>{' '}
              and{' '}
              <a href="#privacy" className="text-zinc-200 hover:underline underline-offset-2">
                Privacy Policy
              </a>
              .
            </span>
          </label>
          {errors.agreeTerms && (
            <p className="text-xs text-rose-400 pt-1">
              {errors.agreeTerms}
            </p>
          )}
        </div> */}

        {/* Primary Create Account Button */}
        <div className="pt-2">
          <AuthButton
            type="submit"
            variant="default"
            isLoading={isLoading}
            className="w-full h-10"
          >
            <span>Create Account</span>
            <ArrowRight className="w-4 h-4 ml-0.5" />
          </AuthButton>
        </div>
      </form>

      {/* Switch to Login Link */}
      <div className="mt-6 text-center text-xs text-zinc-400">
        <span>Already have an account? </span>
        <Link
          to="/login"
          className="font-medium text-zinc-100 hover:underline underline-offset-4 ml-1"
        >
          Sign in
        </Link>
      </div>
    </div>
  )
}

export default Register

