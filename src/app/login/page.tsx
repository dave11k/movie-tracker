'use client'

import { LoginForm } from '@/components/auth/LoginForm'
import { withGuest } from '@/components/auth/withGuest'

function LoginPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-6xl font-bold text-center mb-8">
          Welcome Back
        </h1>
        <p className="text-xl text-center text-gray-300 mb-12">
          Sign in to access your movie collection
        </p>
        <LoginForm />
      </div>
    </main>
  )
}

export default withGuest(LoginPage) 