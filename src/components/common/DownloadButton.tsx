import React from "react"
import Image from "next/image"
import { appStore, googlePlay } from "@/assets"
import { AppDownloadLinks } from "@/constants/app-download-links"

import { cn } from "@/lib/utils"

type Props = { className?: string }

const DownloadButton = ({ className }: Props) => {
  return (
    <div className={cn("flex gap-4", className)}>
      <a target="_blank" rel="noopener" href={AppDownloadLinks.googlePlay}>
        <Image alt="download from google play" src={googlePlay} />
      </a>
      <a target="_blank" rel="noopener" href={AppDownloadLinks.appStore}>
        <Image alt="download from app store" src={appStore} />
      </a>
    </div>
  )
}

export default DownloadButton
