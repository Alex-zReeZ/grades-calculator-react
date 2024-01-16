import {useState} from "react";
import SemesterRow from "./SemesterComponent/SemesterRow.tsx";
import {AddNewSemester} from "./AddNewSemester.tsx";

export function AllSemester() {

    const [semesters, setSemesters] = useState<Array<number | null>>([]);

    console.log(semesters)
    const addSemester = () => {
        if (semesters.length < 8) {
            setSemesters([...semesters, null]);
        }
    }

    const newAverage = (indexToUpdate: number, averageToUpdate: number) => {
        setSemesters(semesters.map((average, index) => {
            if (indexToUpdate === index) {
                return averageToUpdate
            } else {
                return average
            }
        }))
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
                                    className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight"
                                >
                                    Mathématiques
                                </h2>
                            </div>
                            <div className="mt-4 flex md:ml-4 md:mt-0">
                          <span
                              className="inline-flex items-center gap-x-1.5 rounded-md px-3 py-1 text-lg font-bold text-gray-900 ring-1 ring-inset ring-gray-200"
                          >
                            <svg
                                className="h-1.5 w-1.5 fill-green-500"
                                viewBox="0 0 6 6"
                                aria-hidden="true"
                            >
                              <circle cx="3" cy="3" r="3"/>
                            </svg>

                          </span>
                            </div>
                        </div>

                        <div className="mt-6 border-t border-gray-100">
                            {semesters.map((_average, index) => <SemesterRow onNewAverageAdded={(g) => newAverage(index, g)} key={index}/>)}
                            <AddNewSemester addSemester={addSemester}/>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

