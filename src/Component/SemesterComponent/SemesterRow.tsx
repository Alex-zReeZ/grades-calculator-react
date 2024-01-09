import GradeElement from "../GradeComponent/GradeElement.tsx";
import InputButton from "./InputButton.tsx";

export default function SemesterRow() {
    return (
        <>
            <div
                className="px-4 py-6 sm:grid sm:grid-cols-5 sm:gap-4 sm:px-0"
            >
                <dt className="text-sm font-medium text-gray-900 py-2">
                    Semestre 1
                </dt>
                <dd
                    className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-4 sm:mt-0 flex justify-between gap-x-1.5"
                >
                    <div
                        className="flex flex-row flex-nowrap overflow-y-scroll gap-x-1.5"
                    >
                        <GradeElement grade={1}/>
                        <GradeElement grade={5}/>
                        <GradeElement grade={4}/>
                        <GradeElement grade={1}/>
                        <InputButton/>
                    </div>
                </dd>
            </div>

        </>
    )
}