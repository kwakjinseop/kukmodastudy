'use client'

import { signIn, signOut, useSession } from 'next-auth/react'

export default function Log() {
  return <button onClick={() => { signOut() }}>로그아웃</button>
} 
