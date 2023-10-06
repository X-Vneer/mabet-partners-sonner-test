"use client"

import React from "react"
import {
  createTheme,
  CSSVariablesResolver,
  Input,
  MantineProvider,
  TextInput,
} from "@mantine/core"
import { Toaster } from "sonner"

type Props = {
  children: React.ReactNode
}

const theme = createTheme({
  components: {
    Input: Input.extend({
      classNames: { input: " border-borderColor  " },
      defaultProps: {
        variant: "filled",
      },
    }),
    TextInput: TextInput.extend({
      defaultProps: {
        variant: "filled",
      },
    }),
  },

  colors: {
    mabet: [
      "#e4fdfb",
      "#d7f4f2",
      "#b4e5e1",
      "#8dd7d1",
      "#6dcac3",
      "#57c3ba",
      "#49bfb6",
      "#37a89f",
      "#29968d",
      "#03827b",
    ],
  },

  primaryColor: "mabet",
})

const resolver: CSSVariablesResolver = (theme) => ({
  variables: {
    "--mantine-radius-default": "12px",
  },
  light: {},
  dark: {},
})

const Layout = ({ children }: Props) => {
  return (
    <MantineProvider theme={theme} cssVariablesResolver={resolver}>
      {children}
      <Toaster richColors />
    </MantineProvider>
  )
}

export default Layout
