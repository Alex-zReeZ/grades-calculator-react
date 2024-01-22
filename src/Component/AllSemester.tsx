import {useState} from "react";
import SemesterRow from "./SemesterComponent/SemesterRow.tsx";
import {AddNewSemester} from "./SemesterComponent/AddNewSemester.tsx";
import {calculateAverage} from "./CalculateAverage.tsx";
import {useAverageStore} from "./GradeStore.tsx";
import GlobalAverage from "./GlobalAverage.tsx";


export function AllSemester() {
    const [semesters, setSemesters] = useState<Array<number | null>>([]);
    const average = calculateAverage(semesters)

    useAverageStore.getState().updateAverage(average, 'math');

    const addSemester = () => {
        if (semesters.length < 8) {
            setSemesters([...semesters, null]);
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
            <SemesterRow
                onNewAverageAdded={(g) => newAverage(index, g)}
                key={index}
                semesterNumber={index+1}
            />
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
                            <GlobalAverage grade={average}/>
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
