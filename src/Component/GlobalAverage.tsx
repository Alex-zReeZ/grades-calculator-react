import SvgColor from "./SvgColor.tsx";

export default function GlobalAverage({grade}: { grade: number | null }) {


    if (grade as number) {
        return (
            <span
                className="inline-flex items-center gap-x-1.5 rounded-md px-3 py-1 text-lg font-bold
                                text-gray-900 ring-1 ring-inset ring-gray-200"
            >
            <SvgColor grade={grade}/>
        </span>
        );
    } else if (grade === null) {
        return
    }
}




