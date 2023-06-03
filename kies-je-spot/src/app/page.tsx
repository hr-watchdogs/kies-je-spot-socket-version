"use client"
import {Heading} from "@/components/ui/Heading";
import {Button, ButtonType} from "@/components/ui/Button";
import {useRouter} from "next/navigation";

export default function Home() {
    const router = useRouter()

    return (
        <main
            className="flex min-h-screen flex-col items-center h-screen w-screen bg-white flex flex-col justify-end items-end">
            <div className="flex items-center justify-center w-full h-[35vh]">
                <div className="flex flex-col">
                    <div className="flex">
                        <Heading type="h1" className="text-blue-500 font-bold">Kies je spot</Heading>
                        <Heading type="h6" className="text-blue-500 font-regular">©</Heading>
                    </div>
                    <div className="flex">
                        <Heading type="h6" className="text-blue-500 font-regular">Crisisbeheer training voor
                            Agenten</Heading>
                    </div>
                </div>
            </div>
            <div className=" bg-blue-500 bottom-0 h-[65vh] w-full rounded-t-[5vh] p-6 flex items-center justify-center">
                <div className="flex flex-row w-full ">
                    <div
                        className="w-1/2 flex flex-col space-y-2 bg-blue-200 items-between justify-between rounded-xl p-2 text-black m-2">
                        <div className="flex flex-col space-y-2 items-center justify-center text-center">
                            <Heading type="h3">Begin met trainen</Heading>
                            <p>Om te beginnen met de training moet je aanmelden met de gegeven trainingscode.</p>
                        </div>
                        <Button onClick={()=>router.push("/register/")}>Meld je aan</Button>
                    </div>
                    <div
                        className="w-1/2 flex flex-col space-y-2 bg-blue-200 items-between justify-between rounded-xl p-2 text-black m-2">
                        <div className="flex flex-col space-y-2  text-center">
                            <Heading type="h3">Nieuwe training maken</Heading>
                            <p>Maak een nieuwe training aan. (Alleen mogelijk voor geregistreerde IBT Docenten).</p>
                        </div>
                        <Button buttonType={ButtonType.DISABLED}>Nieuwe training</Button>
                    </div>

                </div>
            </div>
        </main>
    )
}
