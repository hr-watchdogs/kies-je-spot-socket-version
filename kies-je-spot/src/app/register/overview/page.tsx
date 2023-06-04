"use client"
import {Heading} from "@/components/ui/Typography/Heading";
import {useState} from "react";
import {Paragraph} from "@/components/ui/Typography/Paragraph";
import Image from "next/image";
import MapboxMap from "@/components/mapbox/Map";
import mapboxgl, {MapboxOptions, Marker} from "mapbox-gl";


export default function OverviewPage() {
    const [names, setNames] = useState(["Nigel", "Timon"])
    // Rotterdam Zuidplein
    const startPoint = new mapboxgl.LngLat(4.4900041626887495, 51.88733854904965);
    const onMapLoaded = (map: mapboxgl.Map) => {
        console.log("Loaded map...")
        new Marker().setLngLat(startPoint).addTo(map);
    }
    const onMapRemoved = () => {
        console.log("Map removed...")
        // window.alert("Map loaded")
    }

    const mapSettings: Omit<MapboxOptions, "container"> = {
        center: startPoint,
        zoom: 15.5,
        pitch: 45,
        // style: "mapbox://styles/mapbox/dark-v10",
        bearing: -17.6,
        antialias: true,
        attributionControl: true,
        trackResize: true
    }


    return (
        <div className=" bg-blue-500 bottom-0 h-[65vh] w-full rounded-t-[5vh] px-6 flex items-center justify-center">
            <div className="flex items-center flex-col justify-between w-full h-full space-y-2">
                <div className="flex flex-col items-center w-full space-y-8 ">
                    <div className="flex w-full flex-row justify-between items-center">
                        <div className="flex space-x-2">
                            {names.map((name, index) => {
                                return <Image key={index} alt={"User icon"} src={"/onboarding/user.png"} width={35} height={10}/>
                            })}
                        </div>
                        <Heading type={"h3"}>Eenheid overzicht</Heading>
                        <span className="bg-white rounded-lg flex items-center justify-center  h-8 px-4">
                            <Paragraph className="text-blue-500" fontWeight="semibold">41:01</Paragraph>
                        </span>
                    </div>
                </div>
                <div className="w-full h-full flex flex-col">
                    <div className="flex flex-col w-ful h-1/3 justify-start items-start  justify-center items-start">
                        <div className="flex flex-col w-2/3">
                            <Heading type="h3">Werkzaamheden</Heading>
                            <Paragraph fontWeight="thin" className="text-sm">
                                De eenheid is werkzaam in Rotterdam Zuid.
                                Vandaag zijn jullie aan het patrouilleren en beschikken jullie over een hondengeleider.
                            </Paragraph>
                        </div>
                    </div>
                    <div className="flex flex-col w-full h-2/3 space-y-2">
                        <div className="flex flex-col w-full space-y-2">
                            <Heading type="h3">Startlocatie</Heading>
                            <MapboxMap onMapLoaded={onMapLoaded} onMapRemoved={onMapRemoved}
                                       initialOptions={mapSettings}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
