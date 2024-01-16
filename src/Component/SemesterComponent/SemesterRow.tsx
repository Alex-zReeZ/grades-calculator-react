import InputButton from "./InputButton.tsx";
import GradeElement from "./GradeComponent/GradeElement.tsx";
import SemesterAverage from "./SemesterAverage.tsx";
import {useEffect, useState} from "react";
import SemesterIncrementation from "./SemesterIncrementation.tsx";

export default function SemesterRow({onNewAverageAdded}: {onNewAverageAdded :(g : number) => void}) {
    //add grade to the semester

    const [allGrades, setGrades] = useState<number[]>([]);

    const addGradeToSemester = (g: number) => setGrades((grades) => [...grades, g]);

    const calculateAverage = (gradeArray: number[]): number | null => {
        if (gradeArray.length > 0) {

            // Calculate average of semester
            let sum = 0;
            for (let i = 0; i < gradeArray.length; i++) {
                sum += gradeArray[i];
            }
            const average = sum / gradeArray.length;
            return Math.round(average * 2) / 2;
        } else {
            return null;
        }
    };


    useEffect(() => {
        onNewAverageAdded(calculateAverage(allGrades))
    }, [allGrades])


    return (
            <div
                className="px-4 py-6 sm:grid sm:grid-cols-5 sm:gap-4 sm:px-0"
            >
                <dt className="text-sm font-medium text-gray-900 py-2">
                    <SemesterIncrementation />
                </dt>
                <dd
                    className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-4 sm:mt-0 flex justify-between gap-x-1.5"
                >
                    <div
                        className="flex flex-row flex-nowrap overflow-y-scroll gap-x-1.5"
                    >
                        {allGrades.map((grade, index ) => (
                            <GradeElement key={index} grade={grade}/>
                        ))}
                    </div>
                    <div className="flex">
                            <InputButton onNewGradeAdded={addGradeToSemester}/>
                            <SemesterAverage average={calculateAverage(allGrades)} />
                    </div>
                </dd>
            </div>
    )
}
