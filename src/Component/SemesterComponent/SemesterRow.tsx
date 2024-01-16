import InputButton from "./InputButton.tsx";
import GradeElement from "./GradeComponent/GradeElement.tsx";
import SemesterAverage from "./SemesterAverage.tsx";
import {useState} from "react";

export default function SemesterRow() {
    const [allGrades, setGrades] = useState<number[]>([]);

    const addGradeToSemester = (g: number) => setGrades((grades) => [...grades, g]);

    const gradeWithColor = allGrades.map((grade, index) => (
        <GradeElement key={index} grade={grade}/>
    ));

    //calculate average of semester
    let sum = 0;
    for (let i = 0; i < allGrades.length; i++) {
        sum += allGrades[i];
    }
    sum = sum / allGrades.length
    sum = Math.round(sum * 2) / 2;

    return (
        <>
            <div
                className="px-4 py-6 sm:grid sm:grid-cols-5 sm:gap-4 sm:px-0"
            >
                <dt className="text-sm font-medium text-gray-900 py-2">
                    Semester 1
                </dt>
                <dd
                    className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-4 sm:mt-0 flex justify-between gap-x-1.5"
                >
                    <div
                        className="flex flex-row flex-nowrap overflow-y-scroll gap-x-1.5"
                    >
                        {gradeWithColor}
                    </div>
                    <div className="flex">
                            <InputButton onNewGradeAdded={addGradeToSemester}/>
                            <SemesterAverage average={sum} />
                    </div>
                </dd>
            </div>
        </>
    )
}

