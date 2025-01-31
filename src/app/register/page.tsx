"use client"
import {Heading} from "@/components/ui/Typography/Heading";
import {Button, ButtonType} from "@/components/ui/Button";
import {OTPForm} from "@/components/ui/Form/OTP";
import {EventHandler, MouseEvent, useEffect, useRef, useState} from "react";
import {AuthCodeRef} from "react-auth-code-input";
import {useRouter} from "next/navigation";
import {Paragraph} from "@/components/ui/Typography/Paragraph";

export default function Index() {

    const [otp, setOtp] = useState<string>("")
    const [invalid, setInvalid] = useState<boolean>(false)
    const AuthInputRef = useRef<AuthCodeRef>();
    const router = useRouter()
    const MAX_OTP_LENGTH = 5;

    const signIn = async (e:MouseEvent)=> {
        e.preventDefault()
        console.log(otp)
        if (otp.length < MAX_OTP_LENGTH) {
            setInvalid(true)
            return
        }
        // todo: remove in production
        console.log(`Code: ${otp}`)
        await router.push('/register/unit')
    }
    useEffect(() => {
        router.prefetch('/register/unit')
    }, [otp])

    return (
        <section className=" bottom-0 h-full w-full p-6 landscape:p-0 flex items-center justify-center">
            <div className="flex items-center flex-col justify-between portrait:py-8 landscape:py-0 sm:max-xl:pt-0 sm:max-xl:space-y-16 xl:space-y-12 w-full h-full sm:max-h-[40vh]">
                <div className="flex flex-col items-center w-full space-y-2 xl:space-y-6">
                    <Heading type={"h2"} className="text-2xl sm:max-xl:text-4xl xl:text-6xl">Voer trainingscode
                        in</Heading>
                    <Paragraph fontWeight="regular">Voer de code in
                        aangegeven op het bord.</Paragraph>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <OTPForm ref={AuthInputRef} invalid={invalid} setInvalid={setInvalid} value={otp}
                             setValue={setOtp}/>
                </div>
                <div className="flex flex-col space-y-6">
                    <Button
                        buttonType={ButtonType.PRIMARY}
                        onClick={signIn}
                    >
                        Aanmelden
                    </Button>
                    <Paragraph fontWeight="regular" className="text-xs text-white sm:max-xl:text-xl xl:text-xl">Geen
                        code
                        zichtbaar? Vraag de trainer om assistentie.</Paragraph>
                </div>
            </div>
        </section>
    )
}
