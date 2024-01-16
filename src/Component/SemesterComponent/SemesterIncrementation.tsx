export default function SemesterIncrementation() {
    let semesterNumber = 0;
    if (semesterNumber <= 8) {
        semesterNumber++
    }/* else {
        semesterButton.remove()
    }*/

    return (
        <>
            <dt className="text-sm font-medium text-gray-900 py-2">
                Semester {semesterNumber}
            </dt>
        </>
    )
}
