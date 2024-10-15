"use client"
import { Button } from "@/components/ui/button"
import {signIn} from "next-auth/react"
import { VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

export const SignInButton = ({variant, bgColor}: {variant: VariantProps<typeof Button>["variant"], bgColor: string}) => {
  return <>
    <Button variant={variant} onClick={() => signIn()} className={cn(bgColor, "text-white hover:bg-purple-500 duration-75")}>Login</Button>
  </>
}