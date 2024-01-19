import {useState} from "react";
import SemesterRow from "./SemesterComponent/SemesterRow.tsx";
import {AddNewSemester} from "./AddNewSemester.tsx";
import {calculateAverage} from "./CalculateAverage.tsx";
import SvgColor from "./SvgColor.tsx";


export let semesterNumber = 0;

export function AllSemester() {

    const [semesters, setSemesters] = useState<Array<number | null>>([]);
    const average = calculateAverage(semesters)

    const addSemester = () => {
        if (semesters.length < 8) {
            setSemesters([...semesters, null]);
            semesterNumber++
        }
    }


    const newAverage = (indexToUpdate: number, averageToUpdate: number | null) => {
        setSemesters(semesters.map((average, index) => {
            if (indexToUpdate === index) {
                return averageToUpdate;
            } else {
                return average;
            }
        }));
    }

    const renderSemesterRows = () => {
        return semesters.map((_average, index) => (
            <SemesterRow onNewAverageAdded={(g) => newAverage(index, g)} key={index}/>
        ));
    }

    return (
        <>
            <section aria-labelledby="section-1-title">
                <h2 className="sr-only" id="section-1-title">Grades</h2>
                <div className="overflow-hidden rounded-lg bg-white shadow">
                    <div className="p-6">
                        <div className="md:flex md:items-center md:justify-between">
                            <div className="min-w-0 flex-1">
                                <h2
                                    className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl
                                     sm:tracking-tight"
                                >
                                    Mathématiques
                                </h2>
                            </div>
                            <span
                                className="inline-flex items-center gap-x-1.5 rounded-md px-3 py-1 text-lg font-bold
                                text-gray-900 ring-1 ring-inset ring-gray-200"
                            >
                                <SvgColor grade={average}/>
                            </span>
                        </div>

                        <div className="mt-6 border-t border-gray-100">
                            {renderSemesterRows()}
                            <AddNewSemester addSemester={addSemester}/>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
