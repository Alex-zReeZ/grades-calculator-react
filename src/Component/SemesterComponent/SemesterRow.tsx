import InputButton from "./InputButton.tsx";
import GradeElement from "./GradeComponent/GradeElement.tsx";
import SemesterAverage from "./SemesterAverage.tsx";
import { useEffect, useState } from "react";
import { calculateAverage } from "../CalculateAverage.tsx";


export default function SemesterRow({ onNewAverageAdded, semesterNumber }: { onNewAverageAdded: (g: number | null) => void, semesterNumber: number}) {
    const [allGrades, setGrades] = useState<number[]>([]);

    const addGradeToSemester = (g: number) => setGrades((grades) => [...grades, g]);

    useEffect(() => {
        onNewAverageAdded(calculateAverage(allGrades));
    }, [allGrades]);

    const renderGradeElements = () => {
        return allGrades.map((grade, index) => (
            <GradeElement key={index} grade={grade} />
        ));
    };

    return (
        <div className="px-4 py-6 sm:grid sm:grid-cols-5 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium text-gray-900 py-2">
                semestre {semesterNumber}
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-4 sm:mt-0 flex justify-between gap-x-1.5">
                <div className="flex flex-row flex-nowrap overflow-y-scroll gap-x-1.5">
                    {renderGradeElements()}
                </div>
                <div className="flex">
                    <InputButton onNewGradeAdded={addGradeToSemester} />
                    <SemesterAverage average={calculateAverage(allGrades)} />
                </div>
            </dd>
        </div>
    );
}
