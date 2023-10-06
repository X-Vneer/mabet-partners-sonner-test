"use client"

import React, { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { waveIcon } from "@/assets"
import { Button, TextInput } from "@mantine/core"
import { AtSign, Lock, LogIn, User, UserPlus } from "lucide-react"

import { cn } from "@/lib/utils"
import DownloadButton from "@/components/common/DownloadButton"

type Props = {}

const Login = (props: Props) => {
  const [value, setValue] = useState("login")
  return (
    <div>
      <h1 className="flex items-center gap-2 text-3xl font-semibold  leading-loose">
        أهلا بك شريك مبيت
        <Image className="block h-8 w-8 shrink-0 " src={waveIcon} alt="wave" />
      </h1>
      <p className=" font-medium text-gray-500">
        يرجا ادخال بياناتك للانضمام إلينا...
      </p>

      <form className="mt-5 space-y-5">
        <div className="flex w-full gap-3 rounded-xl border border-borderColor  text-center ">
          <Link
            className="flex w-1/2  items-center justify-center gap-2  rounded-r-xl  bg-primary py-3 font-semibold text-white "
            href={"/login"}
          >
            <User />
            تسجيل دخول
          </Link>
          <Link
            className="flex   w-1/2 items-center justify-center gap-2 py-3 "
            href={"/signup"}
          >
            <UserPlus />
            تسجيل جديد
          </Link>
        </div>
        <TextInput
          size="lg"
          placeholder="قم بإدخال البريد الالكتروني"
          label="البريد الالكتروني"
          name="email"
          required
          leftSection={<AtSign />}
        />
        <TextInput
          size="lg"
          placeholder="******"
          label="كلمة المرور"
          name="password"
          type="password"
          required
          leftSection={<Lock />}
        />
        <Link
          href="/dashboard"
          className=" block text-left text-sm font-medium  text-gray-500"
        >
          هل نسيت كلمة المرور؟
        </Link>

        <Button
          size="lg"
          classNames={{
            label: "grow justify-center",
          }}
          rightSection={
            <div className=" mr-auto">
              <LogIn className=" rotate-180" />
            </div>
          }
          type="submit"
          fullWidth
        >
          تسجيل الدخول
        </Button>
        <p className="text-center text-lg lg:text-xl">
          حمل تطبيقات مبيت ، لتجربه أسهل.
        </p>
        <DownloadButton className="justify-center" />
      </form>
    </div>
  )
}

export default Login
