import SvgColor from "../SvgColor.tsx";

export default function SemesterAverage({ average }: { average: number | null}) {
    if (!isNaN(average as number)) {
        return (
            <span
                className="ml-1 inline-flex items-center gap-x-1.5 rounded-md px-2 py-2 text-sm font-bold text-gray-900
                ring-1 ring-inset ring-gray-300"
            >
        <SvgColor grade={average}/>
                {average}
      </span>
        );
    } else if (average === null){
        return null
    }
}