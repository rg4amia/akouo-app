import Sidebar from "@/Components/SideBar";
import Header from "@/Components/Header";
import Footer from "@/Components/Footer";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import BaseLayout from "@/Layouts/BaseLayout";
import { useState } from "react";

export default function Dashboard({ auth, data }) {

    const [state, setState] = useState(true);

    return (
        <BaseLayout state={state} auth={auth}>

            <Head title="Tableau de Board" />

            <div className="flex flex-col items-start m-4 overflow-y-auto" role="group">
                <div className="font-outfit text-2xl font-semibold flex items-center">
                    <img
                        className="h-5 w-5 mr-2"
                        loading="lazy"
                        alt="Dashboard Icon"
                        src="./assets/icons/dashbord-icon.svg"
                    />
                    Tableau de bord
                </div>
                <span> Vue générale des enregistrements et utilisateurs </span>
            </div>

            <div className="relative font-outfit m-3 flex">
                <input
                    type="text"
                    id="seach"
                    name="seach"
                    placeholder="Recherche..."
                    className="w-[400px] px-10 py-2 border border-stokelightblue rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E1EFFC]"
                />
                <div className="inset-y-0 left-0 pl-3 top-0 flex items-center pointer-events-none">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="size-5 text-grayDescription"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                        />
                    </svg>
                </div>
            </div>

            <div className="flex flex-row p-3 space-x-3 justify-between">
                {/*div className="w-[112px] h-full border-stokelightblue border p-2 rounded-lg"*/}
                <div className="pr-2 w-full h-[52px] flex items-start p-1.5 gap-1 bg-white border border-stroke-bulto rounded-lg text-grayDescription text-[10px] font-outfit">
                    <img
                        className="h-full w-[35px] shrink-0"
                        loading="lazy"
                        alt="Akouo Icon"
                        src="./assets/icons/akouo_icon.png"
                    />

                    <div className="flex flex-col gap-0.5">
                        <a className="text-[inherit] text-[10px] min-w-[73px] no-underline">
                            Enregistrements
                        </a>
                        <a className="text-black text-[16px] font-bold min-w-[28px] no-underline">
                            {data.enregistrement}
                        </a>
                    </div>
                </div>
                <div className="pr-2 w-full h-[52px] p-1.5 rounded-lg bg-white border-stroke-bulto border flex items-center py-1.5 px-[7px] text-3xs text-grayDescription font-outfit">
                    <div className="flex-1 flex flex-col items-start gap-0.5">
                        <a className="text-[10px] inline-block min-w-[98px] no-underline">
                            Moyenne note globale
                        </a>
                        <div className="flex items-center gap-[2.5px]">
                            <div className="flex-1 rounded bg-blue-100 border-blueVh border flex items-center gap-1 px-0.5">
                                <a className="font-medium text-[13px] text-blueVh inline-block min-w-[10px]">
                                    Bon
                                </a>
                            </div>
                            <b className="text-black min-w-[29px] text-sm leading-[20.5px]">
                                {data.note_globale}
                                <span className="text-sm">%</span>
                            </b>
                            <div className="rounded bg-bg flex items-center justify-center py-0.5 px-1 gap-2.5 text-grayDescription">
                                <a className="font-medium text-xs inline-block min-w-[23px] no-underline">
                                    +10%
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                {/*/div*/}
                <div className="pr-2 w-full h-[52px] p-1.5 rounded-lg bg-white border flex items-center">
                    <div className="flex-1 flex flex-col items-start gap-0.5">
                        <a className="text-[10px]">Moyenne Comprehension</a>
                        <div className="flex items-start justify-between gap-[2.5px] text-red-50">
                            <div className="flex-1 rounded bg-blue border-blue border flex items-center gap-1 px-0.5">
                                <a className="font-medium text-[13px]">Bon</a>
                            </div>
                            <b className="text-black text-sm">
                                72<span>%</span>
                            </b>
                            <div className="rounded flex items-center py-0.5 px-1 gap-2.5 text-grayDescription">
                                <a className="font-medium text-xs">+10%</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="pr-2 w-full h-[52px] p-1.5 rounded-lg bg-white border-stroke-bulto border flex items-center py-1.5 px-[7px] text-3xs text-grayDescription font-outfit">
                    <div className="flex-1 flex flex-col items-start gap-0.5">
                        <a className="text-[10px] inline-block min-w-[98px] no-underline">
                            Moyenne verset
                        </a>
                        <div className="flex items-center gap-[2.5px] text-blue">
                            <div className="flex-1 rounded bg-stroke-light-blue border-blue border flex items-center gap-1 px-0.5">
                                <a className="font-medium text-[13px] inline-block min-w-[10px]">
                                    Bon
                                </a>
                            </div>
                            <b className="text-black min-w-[29px] text-sm leading-[20.5px]">
                                72<span className="text-sm">%</span>
                            </b>
                            <div className="rounded bg-bg flex items-center justify-center py-0.5 px-1 gap-2.5 text-grayDescription">
                                <a className="font-medium text-xs inline-block min-w-[23px] no-underline">
                                    +10%
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="pr-2 w-full h-[52px] p-1.5 rounded-lg bg-white border-stroke-bulto border flex items-center py-1.5 px-[7px] text-3xs text-grayDescription font-outfit">
                    <div className="flex-1 flex flex-col items-start gap-0.5">
                        <a className="text-[10px] inline-block min-w-[98px] no-underline">
                            Identification cibles{" "}
                        </a>
                        <div className="flex items-center gap-[2.5px] text-blue">
                            <div className="flex-1 rounded bg-stroke-light-blue border-blue border flex items-center gap-1 px-0.5">
                                <a className="font-medium text-[13px] inline-block min-w-[10px]">
                                    Bon
                                </a>
                            </div>
                            <b className="text-black min-w-[29px] text-sm leading-[20.5px]">
                                72<span className="text-sm">%</span>
                            </b>
                            <div className="rounded bg-bg flex items-center justify-center py-0.5 px-1 gap-2.5 text-grayDescription">
                                <a className="font-medium text-xs inline-block min-w-[23px] no-underline">
                                    +10%
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="pr-2 w-full h-[52px] p-1.5 rounded-lg bg-white border-stroke-bulto border flex items-center py-1.5 px-[7px] text-3xs text-grayDescription font-outfit">
                    <div className="flex-1 flex flex-col items-start gap-0.5">
                        <a className="text-[10px] inline-block min-w-[98px] no-underline">
                            Traitement thématique
                        </a>
                        <div className="flex items-center gap-[2.5px] text-blue">
                            <div className="flex-1 rounded bg-stroke-light-blue border-blue border flex items-center gap-1 px-0.5">
                                <a className="font-medium text-[13px] inline-block min-w-[10px]">
                                    Bon
                                </a>
                            </div>
                            <b className="text-black min-w-[29px] text-sm leading-[20.5px]">
                                72<span className="text-sm">%</span>
                            </b>
                            <div className="rounded bg-bg flex items-center justify-center py-0.5 px-1 gap-2.5 text-grayDescription">
                                <a className="font-medium text-xs inline-block min-w-[23px] no-underline">
                                    +10%
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="pr-2 w-full h-[52px] p-1.5 rounded-lg bg-white border-stroke-bulto border flex items-center py-1.5 px-[7px] text-3xs text-grayDescription font-outfit">
                    <div className="flex-1 flex flex-col items-start gap-0.5">
                        <a className="text-[10px] inline-block min-w-[98px] no-underline">
                            Mise en pratique
                        </a>
                        <div className="flex items-center gap-[2.5px] justify-between">
                            <div className="flex-1 rounded bg-stroke-light-blue border-blue border flex items-center gap-1 px-0.5">
                                <a className="font-medium text-[13px] inline-block min-w-[10px]">
                                    Bon
                                </a>
                            </div>
                            <b className="text-black min-w-[29px] text-sm leading-[20.5px]">
                                72<span className="text-sm">%</span>
                            </b>
                            <div className="rounded bg-bg flex items-center justify-center py-0.5 px-1 gap-2.5 text-grayDescription">
                                <a className="font-medium text-xs inline-block min-w-[23px] no-underline">
                                    +10%
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-1/3 h-[52px] relative rounded-lg bg-white border-stroke-bulto border-[1px] border-solid box-border overflow-hidden flex flex-col items-start justify-start py-1.5 px-[5px] leading-[normal] tracking-[normal] text-center text-[16px] text-black font-outfit">
                    <div className="w-[47px] flex flex-row items-start justify-start py-0 px-[3px] box-border">
                        <a className="[text-decoration:none] flex-1 relative font-bold text-[inherit]">
                            10
                        </a>
                    </div>
                    <a className="[text-decoration:none] relative text-[8px] text-gray-mid-description">
                        <p className="m-0">Users</p>
                        <p className="m-0">enregistreurs</p>
                    </a>
                </div>

                <div className="w-1/3 h-[52px] rounded-lg bg-white border-stroke-bulto border-[1px] border-solid box-border overflow-hidden flex flex-col items-start justify-start py-1.5 px-[5px] leading-[normal] tracking-[normal] text-center text-[16px] text-black font-outfit">
                    <div className="w-[47px] flex flex-row items-start justify-start py-0 px-[3px] box-border">
                        <a className="[text-decoration:none] flex-1 font-bold text-[inherit]">
                            10
                        </a>
                    </div>
                    <a className="[text-decoration:none] text-[8px] text-gray-mid-description">
                        <p className="m-0">Users</p>
                        <p className="m-0">noteurs</p>
                    </a>
                </div>
                <div className="w-1/3 h-[52px] rounded-lg bg-white border-stroke-bulto border-[1px] border-solid box-border overflow-hidden flex flex-col items-start justify-start py-1.5 px-[5px] leading-[normal] tracking-[normal] text-center text-[16px] text-black font-outfit">
                    <div className="w-[47px] flex flex-row items-start justify-start py-0 px-[3px] box-border">
                        <a className="[text-decoration:none] flex-1 font-bold text-[inherit]">
                            10
                        </a>
                    </div>
                    <a className="[text-decoration:none] text-[8px] text-gray-mid-description">
                        <p className="m-0">Users</p>
                        <p className="m-0">admins</p>
                    </a>
                </div>
                <div className="w-1/3 h-[52px] rounded-lg bg-white border-stroke-bulto border-[1px] border-solid box-border overflow-hidden flex flex-col items-start justify-start py-1.5 px-[5px] leading-[normal] tracking-[normal] text-center text-[16px] text-black font-outfit">
                    <div className="w-[47px] flex flex-row items-start justify-start py-0 px-[3px] box-border">
                        <a className="[text-decoration:none] flex-1 font-bold text-[inherit]">
                            10
                        </a>
                    </div>
                    <a className="[text-decoration:none] text-[8px] text-gray-mid-description">
                        <p className="m-0">Super</p>
                        <p className="m-0">admins</p>
                    </a>
                </div>
            </div>

            <div className="flex flex-col items-start m-4" role="group">
                <div className="font-outfit text-2xl font-semibold flex items-center">
                    <img
                        className="h-5 w-5 mr-2"
                        loading="lazy"
                        alt="Dashboard Icon"
                        src="./assets/icons/akouo_icon.png"
                    />
                    Tableau des enregistrements
                </div>
                <p className="text-xs text-gray-mid-description">
                    Vue générale de tous les enregistrements par entité(s)
                    assignée(s)
                </p>

                <div className="w-full bg-base-white max-w-full flex flex-row flex-wrap items-center justify-start py-4 gap-3 border mt-2 rounded-lg tracking-[normal] text-left text-xs text-gray-mid-description font-outfit">
                    <div className="relative text-[16px] font-medium text-black px-4">
                        Liste des enregistrements
                    </div>

                    <select
                        placeholder="Cellule"
                        className="w-[100px] rounded-lg bg-base-white border-stroke-bulto border-[2px] border-solid box-border overflow-hidden shrink-0 flex flex-col items-center justify-start py-[5px] px-1.5"
                    >
                        <option>Envoyé par</option>
                    </select>

                    <select
                        placeholder="Cellule"
                        className="w-[100px] rounded-lg bg-base-white border-stroke-bulto border-[2px] border-solid box-border overflow-hidden shrink-0 flex flex-col items-center justify-start py-[5px] px-1.5"
                    >
                        <option>Cellule</option>
                    </select>

                    <select
                        placeholder="Cellule"
                        className="w-[100px] rounded-lg bg-base-white border-stroke-bulto border-[2px] border-solid box-border overflow-hidden shrink-0 flex flex-col items-center justify-start py-[5px] px-1.5"
                    >
                        <option>Zone</option>
                    </select>
                    <select
                        placeholder="Cellule"
                        className="w-[100px] rounded-lg bg-base-white border-stroke-bulto border-[2px] border-solid box-border overflow-hidden shrink-0 flex flex-col items-center justify-start py-[5px] px-1.5"
                    >
                        <option>Note globale</option>
                    </select>

                    <div className="top-[20px] right-[24px] flex flex-col items-start justify-center">
                        <div className="[filter:drop-shadow(0px_1px_2px_rgba(16,_24,_40,_0.04))] rounded-[5px] flex flex-col items-center justify-center">
                            <svg
                                className="w-6 h-6 overflow-hidden shrink-0 size-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                                />
                            </svg>
                        </div>
                    </div>

                    <table className="min-w-full bg-white border-t mt-1">
                        <thead>
                            <tr className="text-xs border-b">
                                <th className="py-3 px-6 text-left border-r">
                                    Envoyé par
                                </th>
                                <th className="py-3 px-6 text-left border-r">
                                    Cellule
                                </th>
                                <th className="py-3 px-6 text-left border-r">
                                    Zone
                                </th>
                                <th className="py-3 px-6 text-left border-r">
                                    Enregistrement (+thème)
                                </th>
                                <th className="py-3 px-6 text-left border-r">
                                    Note globale
                                </th>
                                <th className="py-3 px-6 text-left border-r">
                                    Observations
                                </th>
                                <th className="py-3 px-6 text-left border-r">
                                    Actions
                                </th>
                            </tr>
                        </thead>
                        <tbody className="text-gray-600 text-xs">
                            <tr className="">
                                <td className="py-1 px-6 border">
                                    <a className="font-bold">Josianne KONE</a>
                                    <div className="bg-slate-50 rounded-lg w-full">
                                        +225 07 44 55 66 77
                                    </div>
                                </td>
                                <td className="py-1 px-6 border">
                                    <div className="rounded bg-light-gray-bg flex flex-row items-center justify-center py-1 px-2 box-border text-[10px] text-green-vh">
                                        <div className="font-semibold">
                                            Djiby 8
                                        </div>
                                    </div>
                                </td>
                                <td className="py-1 px-6 border">
                                    <div className="rounded bg-bg overflow-hidden flex flex-row items-center justify-center py-1 px-2 gap-2.5">
                                        <div className="relative font-semibold">
                                            Angré 8ème Tranche
                                        </div>
                                        <img
                                            className="w-[8.2px] h-[4.1px] hidden"
                                            alt=""
                                            src="Icon.svg"
                                        />
                                    </div>
                                </td>
                                <td className="py-1 px-6 border"></td>
                                <td className="py-1 px-6 border">
                                    <div className="relative rounded bg-stroke-light-blue border-blue border-[1px] border-solid box-border w-full overflow-hidden shrink-0 flex flex-row items-center justify-center py-1 px-2 gap-1 text-left text-[10px] text-blue font-outfit">
                                        <div className="relative font-semibold">
                                            Bon
                                        </div>
                                    </div>
                                </td>
                                <td className="py-1 px-6 border">
                                    <div className="w-full py-3 px-4 text-left text-[10px] text-gray-mid-description">
                                        <div className="font-medium inline-block">
                                            Le verset n’est pas trop claire.
                                            Mieux préciser le verset de base.
                                        </div>
                                    </div>
                                </td>
                                <td className="py-1 px-6 border">
                                    <div className="relative border-neutral-600 h-[79px] flex flex-row items-center justify-start py-3 px-4 gap-2 text-center text-xs text-blackish font-outfit-semibold-12">
                                        <div className="rounded-lg bg-base-white border-stroke-bulto border-[2px] border-solid flex flex-row items-center justify-center p-3 gap-1">
                                            <img
                                                className="w-4 relative h-4 overflow-hidden shrink-0"
                                                alt=""
                                                src="./assets/icons/eye.svg"
                                            />
                                            <div className="w-[23px] relative font-semibold hidden">
                                                Voir
                                            </div>
                                        </div>
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
                            <tr>
                                <td className="py-1 px-6 border">
                                    <a className="font-bold">Josianne KONE</a>
                                    <div className="bg-slate-50 rounded-lg w-full">
                                        +225 07 44 55 66 77
                                    </div>
                                </td>
                                <td className="py-1 px-6 border">
                                    <div className="rounded bg-light-gray-bg flex flex-row items-center justify-center py-1 px-2 box-border text-[10px] text-green-vh">
                                        <div className="font-semibold">
                                            Djiby 8
                                        </div>
                                    </div>
                                </td>
                                <td className="py-1 px-6 border">
                                    <div className="rounded bg-bg overflow-hidden flex flex-row items-center justify-center py-1 px-2 gap-2.5">
                                        <div className="relative font-semibold">
                                            Angré 8ème Tranche
                                        </div>
                                        <img
                                            className="w-[8.2px] h-[4.1px] hidden"
                                            alt=""
                                            src="Icon.svg"
                                        />
                                    </div>
                                </td>
                                <td className="py-1 px-6 border"></td>
                                <td className="py-1 px-6 border">
                                    <div className="relative rounded bg-stroke-light-blue border-blue border-[1px] border-solid box-border w-full overflow-hidden shrink-0 flex flex-row items-center justify-center py-1 px-2 gap-1 text-left text-[10px] text-blue font-outfit">
                                        <div className="relative font-semibold">
                                            Bon
                                        </div>
                                    </div>
                                </td>
                                <td className="py-1 px-6 border">
                                    <div className="w-full py-3 px-4 text-left text-[10px] text-gray-mid-description">
                                        <div className="font-medium inline-block">
                                            Le verset n’est pas trop claire.
                                            Mieux préciser le verset de base.
                                        </div>
                                    </div>
                                </td>
                                <td className="py-1 px-6 border">
                                    <div className="relative border-neutral-600 h-[79px] flex flex-row items-center justify-start py-3 px-4 gap-2 text-center text-xs text-blackish font-outfit-semibold-12">
                                        <div className="rounded-lg bg-base-white border-stroke-bulto border-[2px] border-solid flex flex-row items-center justify-center p-3 gap-1">
                                            <img
                                                className="w-4 relative h-4 overflow-hidden shrink-0"
                                                alt=""
                                                src="./assets/icons/eye.svg"
                                            />
                                            <div className="w-[23px] relative font-semibold hidden">
                                                Voir
                                            </div>
                                        </div>
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
                            <tr>
                                <td className="py-1 px-6 border-[1px]">
                                    <a className="font-bold">Josianne KONE</a>
                                    <div className="bg-slate-50 rounded-lg w-full">
                                        +225 07 44 55 66 77
                                    </div>
                                </td>
                                <td className="py-1 px-6 border">
                                    <div className="rounded bg-light-gray-bg flex flex-row items-center justify-center py-1 px-2 box-border text-[10px] text-green-vh">
                                        <div className="font-semibold">
                                            Djiby 8
                                        </div>
                                    </div>
                                </td>
                                <td className="py-1 px-6 border">
                                    <div className="rounded bg-bg overflow-hidden flex flex-row items-center justify-center py-1 px-2 gap-2.5">
                                        <div className="relative font-semibold">
                                            Angré 8ème Tranche
                                        </div>
                                        <img
                                            className="w-[8.2px] h-[4.1px] hidden"
                                            alt=""
                                            src="Icon.svg"
                                        />
                                    </div>
                                </td>
                                <td className="py-1 px-6 border"></td>
                                <td className="py-1 px-6 border">
                                    <div className="relative rounded bg-stroke-light-blue border-blue border-[1px] border-solid box-border w-full overflow-hidden shrink-0 flex flex-row items-center justify-center py-1 px-2 gap-1 text-left text-[10px] text-blue font-outfit">
                                        <div className="relative font-semibold">
                                            Bon
                                        </div>
                                    </div>
                                </td>
                                <td className="py-1 px-6 border">
                                    <div className="w-full py-3 px-4 text-left text-[10px] text-gray-mid-description">
                                        <div className="font-medium inline-block">
                                            Le verset n’est pas trop claire.
                                            Mieux préciser le verset de base.
                                        </div>
                                    </div>
                                </td>
                                <td className="py-1 px-6 border">
                                    <div className="relative border-neutral-600 h-[79px] flex flex-row items-center justify-start py-3 px-4 gap-2 text-center text-xs text-blackish font-outfit-semibold-12">
                                        <div className="rounded-lg bg-base-white border-stroke-bulto border-[2px] border-solid flex flex-row items-center justify-center p-3 gap-1">
                                            <img
                                                className="w-4 relative h-4 overflow-hidden shrink-0"
                                                alt=""
                                                src="./assets/icons/eye.svg"
                                            />
                                            <div className="w-[23px] relative font-semibold hidden">
                                                Voir
                                            </div>
                                        </div>
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
                            <tr>
                                <td className="py-1 px-6 border">
                                    <a className="font-bold">Josianne KONE</a>
                                    <div className="bg-slate-50 rounded-lg w-full">
                                        +225 07 44 55 66 77
                                    </div>
                                </td>
                                <td className="py-1 px-6 border">
                                    <div className="rounded bg-light-gray-bg flex flex-row items-center justify-center py-1 px-2 box-border text-[10px] text-green-vh">
                                        <div className="font-semibold">
                                            Djiby 8
                                        </div>
                                    </div>
                                </td>
                                <td className="py-1 px-6 border">
                                    <div className="rounded bg-bg overflow-hidden flex flex-row items-center justify-center py-1 px-2 gap-2.5">
                                        <div className="relative font-semibold">
                                            Angré 8ème Tranche
                                        </div>
                                        <img
                                            className="w-[8.2px] h-[4.1px] hidden"
                                            alt=""
                                            src="Icon.svg"
                                        />
                                    </div>
                                </td>
                                <td className="py-1 px-6 border"></td>
                                <td className="py-1 px-6 border">
                                    <div className="relative rounded bg-stroke-light-blue border-blue border-[1px] border-solid box-border w-full overflow-hidden shrink-0 flex flex-row items-center justify-center py-1 px-2 gap-1 text-left text-[10px] text-blue font-outfit">
                                        <div className="relative font-semibold">
                                            Bon
                                        </div>
                                    </div>
                                </td>
                                <td className="py-1 px-6 border">
                                    <div className="w-full py-3 px-4 text-left text-[10px] text-gray-mid-description">
                                        <div className="font-medium inline-block">
                                            Le verset n’est pas trop claire.
                                            Mieux préciser le verset de base.
                                        </div>
                                    </div>
                                </td>
                                <td className="py-1 px-6 border">
                                    <div className="relative border-neutral-600 h-[79px] flex flex-row items-center justify-start py-3 px-4 gap-2 text-center text-xs text-blackish font-outfit-semibold-12">
                                        <div className="rounded-lg bg-base-white border-stroke-bulto border-[2px] border-solid flex flex-row items-center justify-center p-3 gap-1">
                                            <img
                                                className="w-4 relative h-4 overflow-hidden shrink-0"
                                                alt=""
                                                src="./assets/icons/eye.svg"
                                            />
                                            <div className="w-[23px] relative font-semibold hidden">
                                                Voir
                                            </div>
                                        </div>
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
                            {/* Additional rows can be added similarly */}
                        </tbody>
                    </table>
                </div>
            </div>

            <div className="flex flex-col items-start m-4" role="group">
                <div className="font-outfit text-2xl font-semibold flex items-center">
                    <svg
                        className="h-5 w-5 mr-2 fill-blueVh size-6"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                    >
                        <path d="M4.5 6.375a4.125 4.125 0 1 1 8.25 0 4.125 4.125 0 0 1-8.25 0ZM14.25 8.625a3.375 3.375 0 1 1 6.75 0 3.375 3.375 0 0 1-6.75 0ZM1.5 19.125a7.125 7.125 0 0 1 14.25 0v.003l-.001.119a.75.75 0 0 1-.363.63 13.067 13.067 0 0 1-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 0 1-.364-.63l-.001-.122ZM17.25 19.128l-.001.144a2.25 2.25 0 0 1-.233.96 10.088 10.088 0 0 0 5.06-1.01.75.75 0 0 0 .42-.643 4.875 4.875 0 0 0-6.957-4.611 8.586 8.586 0 0 1 1.71 5.157v.003Z" />
                    </svg>
                    Liste des utilisateurs
                </div>
                <p className="text-xs text-gray-mid-description">
                    Vue générale de tous les utilisateurs
                </p>

                <div className="w-full bg-base-white max-w-full flex flex-row flex-wrap items-center justify-center py-3 gap-3 border mt-2 rounded-lg tracking-[normal] text-left text-xs text-gray-mid-description font-outfit">
                    <div className="relative text-[16px] font-medium text-black px-4">
                        Liste des utilisateurs
                    </div>

                    <select
                        placeholder="Cellule"
                        className="w-[100px] rounded-lg bg-base-white border-stroke-bulto border-[2px] border-solid box-border overflow-hidden shrink-0 flex flex-col items-center justify-start py-[5px] px-1.5"
                    >
                        <option>Envoyé par</option>
                    </select>

                    <select
                        placeholder="Cellule"
                        className="w-[100px] rounded-lg bg-base-white border-stroke-bulto border-[2px] border-solid box-border overflow-hidden shrink-0 flex flex-col items-center justify-start py-[5px] px-1.5"
                    >
                        <option>Pays</option>
                    </select>

                    <select
                        placeholder="Cellule"
                        className="w-[100px] rounded-lg bg-base-white border-stroke-bulto border-[2px] border-solid box-border overflow-hidden shrink-0 flex flex-col items-center justify-start py-[5px] px-1.5"
                    >
                        <option>Cellule</option>
                    </select>
                    <select
                        placeholder="Cellule"
                        className="w-[140px] rounded-lg bg-base-white border-stroke-bulto border-[2px] border-solid box-border overflow-hidden shrink-0 flex flex-col items-center justify-start py-[5px] px-1.5"
                    >
                        <option>Type d'utilisateur</option>
                    </select>

                    <select
                        placeholder="Cellule"
                        className="w-[140px] rounded-lg bg-base-white border-stroke-bulto border-[2px] border-solid box-border overflow-hidden shrink-0 flex flex-col items-center justify-start py-[5px] px-1.5"
                    >
                        <option>Catégorie d'utilisateur</option>
                    </select>
                    <select
                        placeholder="Cellule"
                        className="w-[140px] rounded-lg bg-base-white border-stroke-bulto border-[2px] border-solid box-border overflow-hidden shrink-0 flex flex-col items-center justify-start py-[5px] px-1.5"
                    >
                        <option>Entité(s) affectée(s)</option>
                    </select>
                    <select
                        placeholder="Cellule"
                        className="w-[100px] rounded-lg bg-base-white border-stroke-bulto border-[2px] border-solid box-border overflow-hidden shrink-0 flex flex-col items-center justify-start py-[5px] px-1.5"
                    >
                        <option>Décision</option>
                    </select>
                    <div className="">
                        <svg
                            className="w-6 h-6 overflow-hidden shrink-0 size-6"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                            />
                        </svg>
                    </div>

                    <table className="min-w-full bg-white border-t mt-1">
                        <thead>
                            <tr className="text-xs border-b">
                                <th className="py-3 px-6 text-left border-r">
                                    NOM, Prénoms
                                </th>
                                <th className="py-3 px-6 text-left border-r">
                                    Pays
                                </th>
                                <th className="py-3 px-6 text-left border-r">
                                    Cellule
                                </th>
                                <th className="py-3 px-6 text-left border-r">
                                    Type d’utilisateur
                                </th>
                                <th className="py-3 px-6 text-left border-r">
                                    Catégorie utilisateur
                                </th>
                                <th className="py-3 px-6 text-left border-r">
                                    Entité(s) affectée(s)
                                </th>
                                <th className="py-3 px-6 text-left border-r">
                                    Décision
                                </th>
                                <th className="py-3 px-6 text-left border-r">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody className="text-gray-600 text-xs">
                            <tr className="">
                                <td className="py-1 px-6 border">
                                    <a className="font-bold">Josianne KONE</a>
                                    <div className="bg-slate-50 rounded-lg w-full">
                                        +225 07 44 55 66 77
                                    </div>
                                </td>
                                <td className="py-1 px-6 border">
                                    <div className="rounded bg-light-gray-bg flex flex-row items-center justify-center py-1 px-2 box-border text-[10px] text-green-vh">
                                        <div className="font-semibold">
                                            Djiby 8
                                        </div>
                                    </div>
                                </td>
                                <td className="py-1 px-6 border">
                                    <div className="rounded bg-bg overflow-hidden flex flex-row items-center justify-center py-1 px-2 gap-2.5">
                                        <div className="relative font-semibold">
                                            Angré 8ème Tranche
                                        </div>
                                        <img
                                            className="w-[8.2px] h-[4.1px] hidden"
                                            alt=""
                                            src="Icon.svg"
                                        />
                                    </div>
                                </td>
                                <td className="py-1 px-6 border"></td>
                                <td className="py-1 px-6 border">
                                    <div className="relative rounded bg-stroke-light-blue border-blue border-[1px] border-solid box-border w-full overflow-hidden shrink-0 flex flex-row items-center justify-center py-1 px-2 gap-1 text-left text-[10px] text-blue font-outfit">
                                        <div className="relative font-semibold">
                                            Bon
                                        </div>
                                    </div>
                                </td>
                                <td className="py-1 px-6 border">
                                    <div className="w-full py-3 px-4 text-left text-[10px] text-gray-mid-description">
                                        <div className="font-medium inline-block">
                                            Le verset n’est pas trop claire.
                                            Mieux préciser le verset de base.
                                        </div>
                                    </div>
                                </td>
                                <td className="py-1 px-6 border">
                                    <div className="relative rounded bg-stroke-light-blue border-blue border-[1px] border-solid box-border w-full overflow-hidden shrink-0 flex flex-row items-center justify-center py-1 px-2 gap-1 text-left text-[10px] text-blue font-outfit">
                                        <div className="relative font-semibold">
                                            Bon
                                        </div>
                                    </div>
                                </td>
                                <td className="py-1 px-6 border">
                                    <div className="relative border-neutral-600 h-[79px] flex flex-row items-center justify-start py-3 px-4 gap-2 text-center text-xs text-blackish font-outfit-semibold-12">
                                        <div className="rounded-lg bg-base-white border-stroke-bulto border-[2px] border-solid flex flex-row items-center justify-center p-3 gap-1">
                                            <img
                                                className="w-4 relative h-4 overflow-hidden shrink-0"
                                                alt=""
                                                src="./assets/icons/eye.svg"
                                            />
                                            <div className="w-[23px] relative font-semibold hidden">
                                                Voir
                                            </div>
                                        </div>
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
                            <tr>
                                <td className="py-1 px-6 border">
                                    <a className="font-bold">Josianne KONE</a>
                                    <div className="bg-slate-50 rounded-lg w-full">
                                        +225 07 44 55 66 77
                                    </div>
                                </td>
                                <td className="py-1 px-6 border">
                                    <div className="rounded bg-light-gray-bg flex flex-row items-center justify-center py-1 px-2 box-border text-[10px] text-green-vh">
                                        <div className="font-semibold">
                                            Djiby 8
                                        </div>
                                    </div>
                                </td>
                                <td className="py-1 px-6 border">
                                    <div className="rounded bg-bg overflow-hidden flex flex-row items-center justify-center py-1 px-2 gap-2.5">
                                        <div className="relative font-semibold">
                                            Angré 8ème Tranche
                                        </div>
                                        <img
                                            className="w-[8.2px] h-[4.1px] hidden"
                                            alt=""
                                            src="Icon.svg"
                                        />
                                    </div>
                                </td>
                                <td className="py-1 px-6 border"></td>
                                <td className="py-1 px-6 border">
                                    <div className="relative rounded bg-stroke-light-blue border-blue border-[1px] border-solid box-border w-full overflow-hidden shrink-0 flex flex-row items-center justify-center py-1 px-2 gap-1 text-left text-[10px] text-blue font-outfit">
                                        <div className="relative font-semibold">
                                            Bon
                                        </div>
                                    </div>
                                </td>
                                <td className="py-1 px-6 border">
                                    <div className="w-full py-3 px-4 text-left text-[10px] text-gray-mid-description">
                                        <div className="font-medium inline-block">
                                            Le verset n’est pas trop claire.
                                            Mieux préciser le verset de base.
                                        </div>
                                    </div>
                                </td>
                                <td className="py-1 px-6 border">
                                    <div className="relative rounded bg-stroke-light-blue border-blue border-[1px] border-solid box-border w-full overflow-hidden shrink-0 flex flex-row items-center justify-center py-1 px-2 gap-1 text-left text-[10px] text-blue font-outfit">
                                        <div className="relative font-semibold">
                                            Bon
                                        </div>
                                    </div>
                                </td>
                                <td className="py-1 px-6 border">
                                    <div className="relative border-neutral-600 h-[79px] flex flex-row items-center justify-start py-3 px-4 gap-2 text-center text-xs text-blackish font-outfit-semibold-12">
                                        <div className="rounded-lg bg-base-white border-stroke-bulto border-[2px] border-solid flex flex-row items-center justify-center p-3 gap-1">
                                            <img
                                                className="w-4 relative h-4 overflow-hidden shrink-0"
                                                alt=""
                                                src="./assets/icons/eye.svg"
                                            />
                                            <div className="w-[23px] relative font-semibold hidden">
                                                Voir
                                            </div>
                                        </div>
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
                            <tr>
                                <td className="py-1 px-6 border-[1px]">
                                    <a className="font-bold">Josianne KONE</a>
                                    <div className="bg-slate-50 rounded-lg w-full">
                                        +225 07 44 55 66 77
                                    </div>
                                </td>
                                <td className="py-1 px-6 border">
                                    <div className="rounded bg-light-gray-bg flex flex-row items-center justify-center py-1 px-2 box-border text-[10px] text-green-vh">
                                        <div className="font-semibold">
                                            Djiby 8
                                        </div>
                                    </div>
                                </td>
                                <td className="py-1 px-6 border">
                                    <div className="rounded bg-bg overflow-hidden flex flex-row items-center justify-center py-1 px-2 gap-2.5">
                                        <div className="relative font-semibold">
                                            Angré 8ème Tranche
                                        </div>
                                        <img
                                            className="w-[8.2px] h-[4.1px] hidden"
                                            alt=""
                                            src="Icon.svg"
                                        />
                                    </div>
                                </td>
                                <td className="py-1 px-6 border"></td>
                                <td className="py-1 px-6 border">
                                    <div className="relative rounded bg-stroke-light-blue border-blue border-[1px] border-solid box-border w-full overflow-hidden shrink-0 flex flex-row items-center justify-center py-1 px-2 gap-1 text-left text-[10px] text-blue font-outfit">
                                        <div className="relative font-semibold">
                                            Bon
                                        </div>
                                    </div>
                                </td>
                                <td className="py-1 px-6 border">
                                    <div className="w-full py-3 px-4 text-left text-[10px] text-gray-mid-description">
                                        <div className="font-medium inline-block">
                                            Le verset n’est pas trop claire.
                                            Mieux préciser le verset de base.
                                        </div>
                                    </div>
                                </td>
                                <td className="py-1 px-6 border">
                                    <div className="relative rounded bg-stroke-light-blue border-blue border-[1px] border-solid box-border w-full overflow-hidden shrink-0 flex flex-row items-center justify-center py-1 px-2 gap-1 text-left text-[10px] text-blue font-outfit">
                                        <div className="relative font-semibold">
                                            Bon
                                        </div>
                                    </div>
                                </td>
                                <td className="py-1 px-6 border">
                                    <div className="relative border-neutral-600 h-[79px] flex flex-row items-center justify-start py-3 px-4 gap-2 text-center text-xs text-blackish font-outfit-semibold-12">
                                        <div className="rounded-lg bg-base-white border-stroke-bulto border-[2px] border-solid flex flex-row items-center justify-center p-3 gap-1">
                                            <img
                                                className="w-4 relative h-4 overflow-hidden shrink-0"
                                                alt=""
                                                src="./assets/icons/eye.svg"
                                            />
                                            <div className="w-[23px] relative font-semibold hidden">
                                                Voir
                                            </div>
                                        </div>
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
                            <tr>
                                <td className="py-1 px-6 border">
                                    <a className="font-bold">Josianne KONE</a>
                                    <div className="bg-slate-50 rounded-lg w-full">
                                        +225 07 44 55 66 77
                                    </div>
                                </td>
                                <td className="py-1 px-6 border">
                                    <div className="rounded bg-light-gray-bg flex flex-row items-center justify-center py-1 px-2 box-border text-[10px] text-green-vh">
                                        <div className="font-semibold">
                                            Djiby 8
                                        </div>
                                    </div>
                                </td>
                                <td className="py-1 px-6 border">
                                    <div className="rounded bg-bg overflow-hidden flex flex-row items-center justify-center py-1 px-2 gap-2.5">
                                        <div className="relative font-semibold">
                                            Angré 8ème Tranche
                                        </div>
                                        <img
                                            className="w-[8.2px] h-[4.1px] hidden"
                                            alt=""
                                            src="Icon.svg"
                                        />
                                    </div>
                                </td>
                                <td className="py-1 px-6 border"></td>
                                <td className="py-1 px-6 border">
                                    <div className="relative rounded bg-stroke-light-blue border-blue border-[1px] border-solid box-border w-full overflow-hidden shrink-0 flex flex-row items-center justify-center py-1 px-2 gap-1 text-left text-[10px] text-blue font-outfit">
                                        <div className="relative font-semibold">
                                            Bon
                                        </div>
                                    </div>
                                </td>
                                <td className="py-1 px-6 border">
                                    <div className="w-full py-3 px-4 text-left text-[10px] text-gray-mid-description">
                                        <div className="font-medium inline-block">
                                            Le verset n’est pas trop claire.
                                            Mieux préciser le verset de base.
                                        </div>
                                    </div>
                                </td>
                                <td className="py-1 px-6 border">
                                    <div className="relative rounded bg-stroke-light-blue border-blue border-[1px] border-solid box-border w-full overflow-hidden shrink-0 flex flex-row items-center justify-center py-1 px-2 gap-1 text-left text-[10px] text-blue font-outfit">
                                        <div className="relative font-semibold">
                                            Bon
                                        </div>
                                    </div>
                                </td>
                                <td className="py-1 px-6 border">
                                    <div className="relative border-neutral-600 h-[79px] flex flex-row items-center justify-start py-3 px-4 gap-2 text-center text-xs text-blackish font-outfit-semibold-12">
                                        <div className="rounded-lg bg-base-white border-stroke-bulto border-[2px] border-solid flex flex-row items-center justify-center p-3 gap-1">
                                            <img
                                                className="w-4 relative h-4 overflow-hidden shrink-0"
                                                alt=""
                                                src="./assets/icons/eye.svg"
                                            />
                                            <div className="w-[23px] relative font-semibold hidden">
                                                Voir
                                            </div>
                                        </div>
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
                            {/*  Additional rows can be added similarly */}
                        </tbody>
                    </table>
                </div>
            </div>
        </BaseLayout>
    );
}
