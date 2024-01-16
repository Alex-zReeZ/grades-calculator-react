import SemesterRow from "./SemesterComponent/SemesterRow.tsx";
import {useState} from "react";

export function AddNewSemester() {
    const [semesters, setSemesters] = useState<number[]>([]);

    let semesterNumber = 0;
    if (semesterNumber <= 8) {
        semesterNumber++
    }

    const addSemester = () => {
        if (semesters.length < 8) {
            setSemesters([...semesters, <SemesterRow key={semesters.length}/>]);
        }
    }

        return (
            <>
                <div className="px-4 py-6 sm:gap-4 sm:px-0">
                    {semesters}
                    <button
                        type="button"
                        onClick={addSemester}
                        className="relative block w-full rounded-lg border-2 border-dashed border-gray-300 p-4 text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                        <svg
                            className="mx-auto h-8 w-8 text-gray-400"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
                            />
                        </svg>
                        <span
                            className="mt-2 block text-sm font-semibold text-gray-900"
                        >Add semester</span
                        >
                    </button>
                </div>
            </>
        )

}