import Image from "next/image";
import {ReactNode} from "react";

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

export default function RootLayout(props: {
    children: ReactNode;
    banner: ReactNode;
    start: ReactNode;
}) {
  return (
      <main className="flex min-h-screen flex-col items-center h-screen w-screen bg-white flex flex-col justify-end items-end">
          {props.banner}
        <div className="bg-blue-500 bottom-0 h-full w-full overflow-hidden landscape:h-[80vh] portrait:xl:h-[75vh] rounded-t-[5vh] flex items-center justify-center">
          {props.children}
        </div>
      </main>
  )
}
