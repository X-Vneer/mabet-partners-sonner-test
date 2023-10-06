"use client"

import React, { useEffect, useLayoutEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { SingUpFirstStepSchema } from "@/validation/signup"
import { Button, Checkbox, rem, Select, Stepper, TextInput } from "@mantine/core"
import { useMediaQuery } from "@mantine/hooks"
import { IconCircleCheck } from "@tabler/icons-react"
import {
  AtSign,
  Building,
  ChevronLeftCircle,
  Landmark,
  Lock,
  Phone,
  User,
  UserCheck2,
  UserPlus,
} from "lucide-react"
import { toast } from "sonner"

import { useFormContext } from "../context"

type Props = {}

const Page = (props: Props) => {
  const matches = useMediaQuery("(max-width: 1024px)")
  const [step, setStep] = useState(0)

  const router = useRouter()
  const { formData } = useFormContext()
  useEffect(() => {
    if (!SingUpFirstStepSchema.safeParse(formData).success) {
      // setTimeout(() => {
      toast.error("يجب  تسحيل بيانات المستخدم قبل  بيانات العقار")
      // }, 1)
      // router.replace("/signup")
    }
  }, [])

  return (
    <div>
      <h1 className="flex items-center gap-2 text-3xl font-semibold  leading-loose">
        اضف عقارك الآن
      </h1>
      <p className=" font-medium text-gray-500">اضف عقارك بخطوات بسيطة</p>

      <div className="mt-5">
        <Stepper
          size={matches ? "xs" : "md"}
          classNames={{
            step: " flex-col gap-2 justify-center text-center",
            stepBody: "w-full",
          }}
          active={step}
          completedIcon={
            <IconCircleCheck style={{ width: rem(18), height: rem(18) }} />
          }
        >
          <Stepper.Step
            icon={<Building size={matches ? 17 : 20} />}
            label="بيانات العقار"
            allowStepSelect={false}
          />
          <Stepper.Step
            icon={<UserCheck2 size={matches ? 18 : 22} />}
            label="توثيق الهوية"
            allowStepSelect={false}
          />
          <Stepper.Step
            icon={<Landmark size={matches ? 18 : 22} />}
            label="الحساب البنكي"
            allowStepSelect={false}
          />
        </Stepper>
      </div>

      <form className="mt-10  space-y-5" noValidate>
        <TextInput
          size={"lg"}
          placeholder="اسم العقار"
          required
          leftSection={<User />}
          label="اسم العقار"
        />

        <Select
          data={["test", "test2"]}
          size="lg"
          label="المنطقة"
          placeholder="اختر المنطقة"
        />

        <Select
          data={["test", "test2"]}
          size="lg"
          label="المدينة"
          placeholder="اختر المدينة"
        />

        <Select
          data={["test", "test2"]}
          size="lg"
          label="نوع العقار"
          placeholder="اختر نوع العقار"
        />

        <Checkbox radius={"sm"} size="lg" label="اوافق علي الشروط و الاحكام" />

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
          التالي
        </Button>
      </form>
    </div>
  )
}

export default Page
