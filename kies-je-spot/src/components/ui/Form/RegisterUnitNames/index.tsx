import {Dispatch, FC, SetStateAction} from "react";
import {Input} from "@/components/ui/Form/Input";
import {Button, ButtonType} from "@/components/ui/Button";
import {classNames} from "@/utils/classNames";

interface RegisterUnitNamesOptions {
    names: string[]
    setNames?: Dispatch<SetStateAction<string[]>>
}

export const RegisterUnitNames: FC<RegisterUnitNamesOptions> = ({names, setNames}) => {
    const MAX_ARRAY_LENGTH = 3; // Set your desired maximum length
    const handleRemoveForm = (index: number) => {
        if (setNames) {
            setNames((prevNames) => {
                const updatedNames = [...prevNames];
                updatedNames.splice(index, 1);
                return updatedNames;
            });
        }
    };
    return (
        names.map((name, index) => {
            return <div className="flex w-full px-12  flex-row justify-center items-center space-x-6">
                <Input
                    key={index}
                    value={name}
                    className={classNames("bg-gray-300 p-0 mx-0 focus:bg-white w-fit",)}
                    onChange={(event) => {
                        const {value} = event.target
                        if (setNames) {
                            setNames((prevNames) => {
                                const updatedNames = [...prevNames];
                                updatedNames[index] = value;
                                return updatedNames;
                            });
                        }
                    }
                    }
                />{
                (names.length === index + 1 || names.length === index + 1 && index === 0) && names.length !== MAX_ARRAY_LENGTH ?
                    <Button
                        buttonType={ButtonType.ROUNDED}
                        onClick={() => setNames ?
                            setNames((prevState) => {
                                if (prevState.length >= MAX_ARRAY_LENGTH) return prevState
                                return [...prevState, ""]
                            }) :
                            () => {
                                console.log("Setnames callback is not configured")
                            }
                        }
                        className=" w-16 h-[50px] bg-green-600">
                        +
                    </Button>
                    :
                    <Button buttonType={ButtonType.ROUNDED}
                            className="rounded-full w-16 h-[50px]" onClick={() => handleRemoveForm(index)}>-</Button>
            }
            </div>
        })
    )
}