export default function semesterIncrementation() {
    let semesterNumber = 1;
    if (semesterNumber <= 8) {
        semesterNumber++
    }/* else {
        semesterButton.remove()
    }*/

    return (
        <>
            <dt className="text-sm font-medium text-gray-900 py-2">
                Semestre {semesterNumber}
            </dt>
        </>
    )
}
