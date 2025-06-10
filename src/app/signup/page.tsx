'use client'

import { SignupForm } from '@/components/auth/SignupForm'
import { withGuest } from '@/components/auth/withGuest'

function SignupPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-6xl font-bold text-center mb-8">
          Join Movie Tracker
        </h1>
        <p className="text-xl text-center text-gray-300 mb-12">
          Create an account to start tracking your movies
        </p>
        <SignupForm />
      </div>
    </main>
  )
}

export default withGuest(SignupPage) 