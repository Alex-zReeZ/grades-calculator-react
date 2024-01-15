import InputButton from "./InputButton.tsx";
import GradeElement from "./GradeComponent/GradeElement.tsx";
import SemesterAverage from "./SemesterAverage.tsx";
import semesterIncrementation from "./semesterIncrementation.tsx";
import { useState } from "react";

export default function SemesterRow() {
    const [allGrades, setGrades] = useState<number[]>([]);

    const addGradeToSemester = (g: number) => setGrades((grades) => [...grades, g]);

    const gradeWithColor = allGrades.map((grade, index) => (
        <GradeElement key={index} grade={grade} />
    ));

    return (
        <>
            <div className="px-4 py-6 sm:grid sm:grid-cols-5 sm:gap-4 sm:px-0">
                {semesterIncrementation()}
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-4 sm:mt-0 flex justify-between gap-x-1.5">
                    <div className="flex flex-row flex-nowrap overflow-y-scroll gap-x-1.5">
                        {gradeWithColor}
                        <InputButton onNewGradeAdded={addGradeToSemester} />
                        <SemesterAverage average={5} />
                    </div>
                </dd>
            </div>
        </>
    );
}
