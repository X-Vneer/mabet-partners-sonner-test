"use client"

import React, { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { waveIcon } from "@/assets"
import { SingUpFirstStepSchema } from "@/validation/signup"
import { DevTool } from "@hookform/devtools"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button, TextInput } from "@mantine/core"
import { AtSign, ChevronLeftCircle, Lock, Phone, User, UserPlus } from "lucide-react"
import { Controller, useForm } from "react-hook-form"
import { toast } from "sonner"
import z from "zod"

import DownloadButton from "@/components/common/DownloadButton"

import { useFormContext } from "./context"

type Props = {}

const SignUp = (props: Props) => {
  // form context
  const { updateFormData } = useFormContext()

  // managing form state using React hook form
  const {
    register,
    formState: { errors },
    handleSubmit,
    control,
  } = useForm<z.infer<typeof SingUpFirstStepSchema>>({
    resolver: zodResolver(SingUpFirstStepSchema),
    defaultValues: {
      email: "",
      name: "",
      phonenumber: "",
      password: "",
      confirmPassword: "",
    },
  })

  const navigate = useRouter()
  const onSubmit = handleSubmit((data) => {
    updateFormData(data)
    navigate.push("/signup/register")
  })
  return (
    <div>
      <h1
        className="flex items-center gap-2 text-3xl font-semibold  leading-loose"
        onClick={() => {
          toast.error("يجب تسحيل بيانات اليوزر قبل  بيانات العقار")
        }}
      >
        أهلا بك شريك مبيت
        <Image className="block h-8 w-8 shrink-0 " src={waveIcon} alt="wave" />
      </h1>
      <p className=" font-medium text-gray-500">
        يرجا ادخال بياناتك للانضمام إلينا...
      </p>

      <form onSubmit={onSubmit} className="mt-5 space-y-5" noValidate>
        <div className=" flex w-full gap-3 rounded-xl border border-borderColor  text-center ">
          <Link
            className="flex w-1/2  items-center justify-center gap-2  py-3"
            href={"/login"}
          >
            <User />
            تسجيل دخول
          </Link>
          <Link
            className="flex w-1/2  items-center justify-center gap-2 rounded-l-xl bg-primary  py-3  font-semibold text-white "
            href={"/signup"}
          >
            <UserPlus />
            تسجيل جديد
          </Link>
        </div>

        <TextInput
          error={errors.name?.message}
          {...register("name")}
          size="lg"
          placeholder="الاسم ثلاثي"
          leftSection={<User />}
          label="الاسم ثلاثي"
        />

        <TextInput
          error={errors.phonenumber?.message}
          {...register("phonenumber")}
          size="lg"
          placeholder="رقم الجوال"
          leftSection={<Phone />}
          label="رقم الجوال"
        />

        <TextInput
          error={errors.email?.message}
          {...register("email")}
          size="lg"
          placeholder="قم بإدخال البريد الالكتروني"
          label="البريد الالكتروني"
          leftSection={<AtSign />}
        />

        <TextInput
          {...register("password")}
          error={errors.password?.message}
          size="lg"
          placeholder="******"
          label="كلمة المرور"
          type="password"
          leftSection={<Lock />}
        />

        <TextInput
          error={errors.confirmPassword?.message}
          {...register("confirmPassword")}
          size="lg"
          placeholder="******"
          label="تاكيد كلمة المرور"
          type="password"
          leftSection={<Lock />}
        />

        <Button
          size="lg"
          classNames={{
            label: "grow justify-center",
          }}
          rightSection={
            <div className=" mr-auto">
              <ChevronLeftCircle />
            </div>
          }
          type="submit"
          fullWidth
        >
          إنشاء حساب
        </Button>

        <p className="text-center text-lg lg:text-xl">
          حمل تطبيقات مبيت ، لتجربه أسهل.
        </p>
        <DownloadButton className="justify-center" />
        <DevTool control={control} />
      </form>
    </div>
  )
}

export default SignUp
