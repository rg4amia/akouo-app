import Sidebar from "@/Components/SideBar";
import Header from "@/Components/Header";
import Footer from "@/Components/Footer";
import DataValueTable from "./Partials/DataValueTable";
import { useState } from "react";
import BaseLayout from "@/Layouts/BaseLayout";

export default function RecordIndex({ auth, record }) {
    const [state, setState] = useState(true);

    return (
        <BaseLayout state={state} auth={auth}>
         <div className="flex flex-col items-start m-4" role="group">
                        <div className="font-outfit text-2xl font-semibold flex items-center">
                            <img
                                className="h-5 w-5 mr-2"
                                loading="lazy"
                                alt="Dashboard Icon"
                                src="./assets/icons/akouo_icon.png"
                            />
                            Listes des enregistrements
                        </div>
                        <p className="text-xs text-gray-mid-description">
                            Vue générale de tous les enregistrements par
                            entité(s) assignée(s)
                        </p>

                        <div className="bg-base-white w-full py-4 gap-3 border mt-2 rounded-lg tracking-[normal] text-left text-xs text-gray-mid-description">
                            <div className="relative text-[16px] font-medium text-black px-4">
                                Liste des enregistrements
                            </div>

                            <div className="flex flex-row justify-between m-3 gap-3">
                                <select
                                    placeholder="Cellule"
                                    className="w-2/4 rounded-lg bg-base-white border-stroke-bulto border-[2px] border-solid box-border py-[5px] px-1.5"
                                >
                                    <option>Envoyé par</option>
                                </select>
                                <select
                                    placeholder="Cellule"
                                    className="w-2/4 rounded-lg bg-base-white border-stroke-bulto border-[2px] border-solid py-[5px] px-1.5"
                                >
                                    <option>Cellule</option>
                                </select>

                                <select
                                    placeholder="Cellule"
                                    className="w-2/4 rounded-lg bg-base-white border-stroke-bulto border-[2px] border-solid py-[5px] px-1.5"
                                >
                                    <option>Zone</option>
                                </select>
                                <select
                                    placeholder="Cellule"
                                    className="w-2/4 rounded-lg bg-base-white border-stroke-bulto border-[2px] border-solid py-[5px] px-1.5"
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
                                     { record.data.map(record =>
                                        <DataValueTable key={record.id} record={record} />
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
        </BaseLayout>
    );
}
