import { Link } from "@inertiajs/react";

export default function DataValueTable({record}) {

    return (
        <tr className="">
            <td className="py-1 px-6 border items-center">
                <a className="font-bold">{record.envoye_par.nom}</a>
                <div className="bg-slate-50 rounded-lg px-2">
                    {record.envoye_par.telephone}
                </div>
            </td>
            <td className="py-1 px-6 border">
                <div className="rounded bg-light-gray-bg flex flex-row items-center justify-center py-1 px-2 box-border text-[10px] text-green-vh">
                    <div className="font-semibold">cellule</div>
                </div>
            </td>
            <td className="py-1 px-6 border">
                <div className="rounded bg-bg overflow-hidden flex flex-row items-center justify-center py-1 px-2 gap-2.5">
                    <div className="relative font-semibold">
                        zone
                    </div>
                    <img
                        className="w-[8.2px] h-[4.1px] hidden"
                        alt=""
                        src="Icon.svg"/>
                </div>
            </td>
            <td className="py-1 px-6 border">{record.path}</td>
            <td className="py-1 px-6 border">
                <div className="relative rounded bg-stroke-light-blue border-blue border-[1px] border-solid box-border w-full overflow-hidden shrink-0 flex flex-row items-center justify-center py-1 px-2 gap-1 text-left text-[10px] text-blue font-outfit">
                    <div className="relative font-semibold">{record.note}</div>
                </div>
            </td>
            <td className="py-1 px-6 border">
                <div className="w-full py-3 px-4 text-left text-[10px] text-gray-mid-description">
                    <div className="font-medium inline-block">
                       {record.observation}
                    </div>
                </div>
            </td>
            <td className="py-1 px-6 border">
                <div className="relative border-neutral-600 h-[79px] flex flex-row items-center justify-start py-3 px-4 gap-2 text-center text-xs text-blackish font-outfit-semibold-12">
                    <Link href={ route('record.show', record.id) } className="rounded-lg bg-base-white border-stroke-bulto border-[2px] border-solid flex flex-row items-center justify-center p-3 gap-1">
                        <img
                            className="w-4 relative h-4 overflow-hidden shrink-0"
                            alt=""
                            src="./assets/icons/eye.svg"
                        />
                        <div className="w-[23px] relative font-semibold hidden">
                            Voir
                        </div>
                    </Link>
                    <div className="flex flex-col items-start justify-end gap-1.5 text-left text-sm text-gray-700 font-text-s-medium">
                        <div className="self-stretch shadow-[0px_1px_2px_rgba(16,_24,_40,_0.04)] rounded-lg bg-base-white border-red-delete border-[2px] border-solid box-border h-10 flex flex-row items-center justify-start p-2.5 gap-3">
                            <img
                                className="w-5 relative h-5 overflow-hidden shrink-0"
                                alt=""
                                src="./assets/icons/delete.svg"
                            />
                        </div>
                        <div className="w-[59px] relative tracking-[-0.1px] leading-[20px] font-medium hidden">
                            Headline
                        </div>
                    </div>
                </div>
            </td>
        </tr>
    );
}
