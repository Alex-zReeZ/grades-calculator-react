import {useState} from "react";


export default function DashBoardGrades() {

    const [MathsAverage, setMathsAverage] = useState<number>(0)

    /*
    all the other average to import here...
    const [SociétéAverage, setSociétéAverage] = useState<number>(0)
    const [AnglaisAverage, setAnglaisAverage] = useState<number>(0)
    const [moduleEpsicAverage, setModuleAverage] = useState<number>(0)
    const [CieAverage, setCieAverage] = useState<number>(0)
     */

    const NewMathsAverage = (g :number) => setMathsAverage((grades) => [...grades, g]);

    return (
        <>
            <div
                className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2 bg-white px-6 py-6"
            >
                <dt className="text-sm font-medium leading-6 text-gray-500">
                    Maths
                </dt>
                <dd className="text-xs font-medium text-green-600">
                    +54.02%
                </dd>
                <dd
                    className="w-full flex-none text-3xl font-medium leading-10 tracking-tight text-gray-900"
                >
                    6
                </dd>
            </div>
        </>
    )
}