import SvgColor from '../../SvgColor.tsx';

export default function GradeElement({ grade }: { grade: number }) {



  return (
      <>
      <span
          className="inline-flex items-center gap-x-1.5 rounded-md px-2 py-2 text-sm font-medium text-gray-900 ring-1 ring-inset ring-gray-200"
      >
        <SvgColor grade={grade} />
        {grade}
      </span>
      </>
  );
}
