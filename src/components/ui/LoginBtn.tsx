'use client'

import { signIn, signOut, useSession } from 'next-auth/react'

export default function LoginBtn() {
    const { data: session } = useSession();

    if (session) {
      return (
        <div>
          <p>Welcome, {session.user?.name}!</p>
          <button onClick={() => signOut()}>로그아웃</button>
        </div>
      );
    }
    return (
      <div>
        <p>You are not signed in</p>
        <button onClick={() => signIn()}>로그인</button>
      </div>
    );
} 