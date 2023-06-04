import { Inter } from 'next/font/google'
import Image from "next/image";
import {Heading} from "@/components/ui/Typography/Heading";
import {OTPForm} from "@/components/ui/OTPForm";
import {Button, ButtonType} from "@/components/ui/Button";

// const inter = Inter({ subsets: ['latin'] })

// export const metadata = {
//   title: 'Kies je spot',
//   description: 'Watchdogs',
//   robots: "no follow",
//   openGraph: {
//     description: "test og",
//     image:"/next.svg"
//   }
// }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <main className="flex min-h-screen flex-col items-center h-screen w-screen bg-white flex flex-col justify-end items-end">
        <div className="flex items-center justify-center w-full h-[35vh] landscape:h-[20vh] ">
          <Image src={'/onboarding/otp.png'} alt={"Illustration password"} width={200} height={200}/>
        </div>
        <div className="bg-blue-500 bottom-0 h-full w-full overflow-hidden landscape:h-[80vh] portrait:xl:h-[75vh] rounded-t-[5vh] flex items-center justify-center">
          {children}
        </div>
      </main>
  )
}
