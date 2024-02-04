import { useAverageStore } from "./AverageStore.tsx";


export default function DashBoard() {

    const {Mathematique,Anglais,SocieteEtLangues ,Informatique,ModuleEpsic,Cie ,OverAllGrade } = useAverageStore();

    return (
        <div className="grid grid-cols-1 gap-4">
            <section aria-labelledby="section-2-title">
                <h2 className="sr-only" id="section-2-title"/>
                <div className="overflow-hidden rounded-lg bg-white shadow">
                    <dl
                        className="
                        mx-auto grid grid-cols-1 gap-px bg-gray-900/5 sm:grid-cols-2 lg:grid-cols-2"
                    >
                        <div
                            className="col-span-2 flex flex-wrap items-baseline justify-between gap-x-2
                             gap-y-2 bg-white px-6 py-6"
                        >
                            <dt className="text-sm font-medium leading-6 text-gray-500">
                                Moyenne générale
                            </dt>
                            <dd className="text-xs font-medium text-green-600">+4.75%</dd>
                            <dd
                                className="w-full flex-none text-3xl font-bold leading-10 tracking-tight text-gray-900"
                            >
                                {OverAllGrade}
                            </dd>
                        </div>
                        <div
                            className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2 bg-white px-6 py-6"
                        >
                            <dt className="text-sm font-medium leading-6 text-gray-500">
                                Maths
                            </dt>
                            <dd className="text-xs font-medium text-green-600">
                                +54.02%
                            </dd>
                            <dd
                                className="w-full flex-none text-3xl font-medium leading-10 tracking-tight text-gray-900"
                            >
                                {Mathematique}
                            </dd>
                        </div>
                        <div
                            className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2 bg-white px-6 py-6"
                        >
                            <dt className="text-sm font-medium leading-6 text-gray-500">
                                Société
                            </dt>
                            <dd className="text-xs font-medium text-red-700">-1.39%</dd>
                            <dd
                                className="w-full flex-none text-3xl font-medium leading-10 tracking-tight text-gray-900"
                            >
                                {SocieteEtLangues}
                            </dd>
                        </div>
                        <div
                            className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2 bg-white px-6 py-6"
                        >
                            <dt className="text-sm font-medium leading-6 text-gray-500">
                                Anglais
                            </dt>
                            <dd className="text-xs font-medium text-green-600">
                                +10.18%
                            </dd>
                            <dd
                                className="w-full flex-none text-3xl font-medium leading-10 tracking-tight text-gray-900"
                            >
                                {Anglais}
                            </dd>
                        </div>
                        <div
                            className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2 bg-white px-6 py-6"
                        >
                            <dt className="text-sm font-medium leading-6 text-gray-500">
                                Informatique
                            </dt>
                            <dd className="text-xs font-medium text-green-600">
                                +10.18%
                            </dd>
                            <dd
                                className="w-full flex-none text-3xl font-medium leading-10 tracking-tight text-gray-900"
                            >
                                {Informatique}
                            </dd>
                        </div>
                        <div
                            className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2 bg-white px-6 py-6"
                        >
                            <dt className="text-sm font-medium leading-6 text-gray-500">
                                Modules EPSIC
                            </dt>
                            <dd className="text-xs font-medium text-green-600">
                                +10.18%
                            </dd>
                            <dd
                                className="w-full flex-none text-3xl font-medium leading-10 tracking-tight text-gray-900"
                            >
                                {ModuleEpsic}
                            </dd>
                        </div>
                        <div
                            className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2 bg-white px-6 py-6"
                        >
                            <dt className="text-sm font-medium leading-6 text-gray-500">
                                Modules CIE
                            </dt>
                            <dd className="text-xs font-medium text-red-600">-10.18%</dd>
                            <dd
                                className="w-full flex-none text-3xl font-medium leading-10 tracking-tight text-gray-900"
                            >
                                {Cie}
                            </dd>
                        </div>
                    </dl>
                </div>
            </section>
        </div>
    )
}