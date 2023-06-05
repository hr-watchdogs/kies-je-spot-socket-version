import Image from "next/image";
import {Heading} from "@/components/ui/Typography/Heading";

export default function Banner() {
    return <div className="flex items-center justify-center w-full h-[35vh] landscape:h-[20vh] ">
        <Heading type="h2" color="text-blue-500" >Wachtend op start van training...</Heading>
    </div>;
}
