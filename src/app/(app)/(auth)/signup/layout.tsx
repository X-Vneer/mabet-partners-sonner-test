import React from "react"

import { FormProvider } from "./context"

type Props = {
  children: React.ReactNode
}

const layout = ({ children }: Props) => {
  return <FormProvider>{children}</FormProvider>
}

export default layout
