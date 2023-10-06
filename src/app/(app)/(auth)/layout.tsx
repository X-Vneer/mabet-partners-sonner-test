import React from "react"
import Image from "next/image"
import { authImage, logo } from "@/assets"

type Props = {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <section className=" min-h-screen">
      <div className="h-full">
        <div className="flex h-full justify-center p-4 lg:gap-32 lg:p-0">
          <div className="h-full w-full lg:w-2/3 ">
            <div className="flex min-h-full  max-lg:justify-center lg:pr-20 ">
              <Image
                className=" absolute right-2 top-2  max-lg:-mr-12  max-lg:-mt-2"
                src={logo}
                alt="logo"
              />

              <div className="w-full max-w-[650px] pb-10  pt-24 lg:pt-40">
                {children}
              </div>
            </div>
          </div>
          {/*  */}
          <div className=" relative hidden min-h-screen  bg-primary  max-lg:hidden lg:block lg:w-1/3  ">
            <Image
              src={authImage}
              alt="place"
              className=" absolute top-[180px]  z-10 w-[110%] max-w-[150%] translate-x-14 xl:translate-x-32"
            />
            <div className="absolute inset-x-0 h-full overflow-hidden">
              <span className="absolute right-[24%] top-[3%] block aspect-square w-10 rounded-full border border-gray-100/60 "></span>
              <span className="absolute right-[22%] top-[12%] block aspect-square w-6 rounded-full border border-gray-100/60 "></span>
              <span className="absolute right-[73%] top-[8%] block aspect-square w-14 rounded-full border border-gray-100/60 "></span>
              <span className="absolute right-[31%] top-[32%] block aspect-square w-10 rounded-full border border-gray-100/60 "></span>
              <span className="absolute right-[75%] top-[34%] block aspect-square w-8 rounded-full border border-gray-100/60 "></span>
              <span className="absolute right-[36%] top-[67%] block aspect-square w-8 rounded-full border border-gray-100/60 "></span>
              <span className="absolute right-[77%] top-[43%] block aspect-square w-5 rounded-full border border-gray-100/60 "></span>
              <span className="absolute right-[10%] top-[10%] block aspect-square w-14 rounded-full border border-gray-100/60 "></span>
              <span className="absolute right-[45%] top-[76%] block aspect-square w-16 rounded-full border border-gray-100/60 "></span>
              <span className="absolute right-[90%] top-[45%] block aspect-square w-12 rounded-full border border-gray-100/60 "></span>
              <span className="absolute right-[10%] top-[65%] block aspect-square w-20 rounded-full border border-gray-100/60 "></span>
              <span className="absolute right-[58%] top-[80%] block aspect-square w-4 rounded-full border border-gray-100/60 "></span>
              <span className="absolute right-[40%] top-[48%] block aspect-square w-14 rounded-full border border-gray-100/60 "></span>
              <span className="absolute right-[80%] top-[90%] block aspect-square w-12 rounded-full border border-gray-100/60 "></span>
              <span className="absolute right-[30%] top-[87%] block aspect-square w-16 rounded-full border border-gray-100/60 "></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Layout
