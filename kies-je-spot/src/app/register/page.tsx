"use client"
import Image from 'next/image'
import {Heading} from "@/components/ui/Heading";
import {Button, ButtonType} from "@/components/ui/Button";
import {OTPForm} from "@/components/ui/OTPForm";
import {useEffect, useRef, useState} from "react";
import {AuthCodeRef} from "react-auth-code-input";
import {useRouter} from "next/navigation";

export default function Index() {

    const [otp, setOtp] = useState<string>("")
    const [invalid, setInvalid] = useState<boolean>(false)
    const AuthInputRef = useRef<AuthCodeRef>();
    const router = useRouter()

    useEffect(()=>{
        router.prefetch('/register/unit')

    },[otp])
    return (
        <div className=" bg-blue-500 bottom-0 h-[65vh] w-full rounded-t-[5vh] p-6 flex items-center justify-center">
            <div className="flex items-center flex-col justify-between py-8 w-full h-full">
                <div className="flex flex-col items-center w-full space-y-2">
                    <Heading type={"h2"}>Voer trainingscode in</Heading>
                    <p className="font-xs">Voer de code in die aangegeven staat op het board.</p>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <OTPForm ref={AuthInputRef} invalid={invalid} setInvalid={setInvalid} value={otp} setValue={setOtp}  onsubmit={(e) => {
                        console.log("submitted otp", e)
                    }}/>
                    { invalid ? <p className="text-[#FF0000] text-sm">Ingevoerde code is incorrect of niet meer geldig</p>: null}
                </div>
                <div className="flex flex-col space-y-2">
                    <Button
                        buttonType={ButtonType.PRIMARY}
                        onClick={ async (e) => {
                            e.preventDefault()
                            console.log(otp)
                            if (otp.length < 5) {
                                setInvalid(true)
                                return
                            }
                            window.alert(`Code: ${otp}`)
                           await router.push('/register/unit')
                        }}
                    >Aanmelden</Button>
                    <p className="font-xs">Geen code zichtbaar? Vraag de trainer om assistentie.</p>
                </div>
            </div>
        </div>
    )
}
