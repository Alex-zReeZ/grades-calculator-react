
export default function SemesterIncrementation() {
    let semesterNumber = 0;
    if (semesterNumber <= 8) {
        semesterNumber++
    }

    return (
        <>
            Semester {semesterNumber}
        </>
    )
}
