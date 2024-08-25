"use client";

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import Personalpage from "@/components/personal_webpage"
import Studymain from "@/components/studymainpage"
import DropdownMenu from "@/components/ui/DropDownMenu"

export default function mainpage() {
  return (
    <div>
      <DropdownMenu></DropdownMenu>
    </div>
  )
}