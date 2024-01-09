export default function SvgColor({ grade }: { grade: number }) {
    let colorClass;

    if (grade > 4 && grade <= 6) {
        colorClass = "fill-green-500";
    } else if (grade === 4) {
        colorClass = "fill-yellow-500";
    } else if (grade < 4 && grade >= 1) {
        colorClass = "fill-red-500";
    }

    return (
        <svg
            className={`h-1.5 w-1.5 ${colorClass}`}
            viewBox="0 0 6 6"
            aria-hidden="true"
        >
            <circle cx="3" cy="3" r="3" />
        </svg>
    );
}
