"use client"
import {Heading} from "@/components/ui/Typography/Heading";
import {Button, ButtonType} from "@/components/ui/Button";
import {RegisterUnitNames} from "@/components/ui/Form/RegisterUnitNames";
import {useState} from "react";
import {Paragraph} from "@/components/ui/Typography/Paragraph";


export default function Page() {
    const [names, setNames] = useState([""])

    return (
        <div className=" bg-blue-500 bottom-0 h-[65vh] w-full rounded-t-[5vh] p-6 flex items-center justify-center">
            <div className="flex items-center flex-col justify-between w-full h-full">
                <div className="flex flex-col items-center w-full space-y-2">
                    <Heading type={"h2"}>Voer namen agenten in</Heading>
                    <Paragraph fontWeight="regular">Voer de namen in van de agenten in de eenheid.</Paragraph>
                    <Paragraph fontWeight="regular" className="text-xs">Maximaal 3 personen</Paragraph>
                </div>
                <div className="flex flex-col w-full max-w-md justify-center items-center">
                    <RegisterUnitNames names={names} setNames={setNames}/>
                </div>
                <div className="flex flex-col space-y-2">
                    <Button
                        buttonType={ButtonType.PRIMARY}
                        onClick={async (e) => {
                            e.preventDefault()
                            console.log(names)
                        }}
                    >Volgende</Button>
                    <Paragraph fontWeight="regular" className="text-sm">Geen code zichtbaar? Vraag de trainer om
                        assistentie.</Paragraph>
                </div>
            </div>
        </div>
    )
}
