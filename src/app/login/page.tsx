import React from 'react'
import Common from '../component/common'
import { GalleryVerticalEnd } from "lucide-react"
import { LoginForm } from "@/components/login-form"

const page = () => {
  return (
    <div className='md:max-w-[1920px]'>
        <Common title='Login Page' subtitle='Login' />
        <div className="flex min-h-svh flex-col items-center justify-center gap-6 bg-muted p-6 md:p-10">
            <div className="flex w-full max-w-sm flex-col gap-6">
                <LoginForm />
            </div>
        </div>
    </div>
  )
}

export default page