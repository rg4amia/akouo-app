import Footer from "@/Components/Footer";
import { useCallback, useEffect, useState } from "react";
import BaseLayout from "@/Layouts/BaseLayout";
import DataTable from "./Partials/DataTable";
import { Head, useForm, usePage } from "@inertiajs/react";
import debounce from "lodash.debounce";
import pickBy from "lodash.debounce";
import { Link } from "lucide-react";
//import { debounce, pickBy } from "lodash";
//import DataTable from "./Partials/DataTable";
import DataTable from 'datatables.net-react';
import DT from 'datatables.net-dt';

DataTable.use(DT);

export default function UserIndex({ auth, data, links, filters }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const { get, processing, errors, reset } = useForm();
    const [state, setState] = useState(true);

/*
    const { data: people, meta, filtered, attributes } = usePage().props;
    const [params, setParams] = useState(filtered);
    const [pageNumber, setPageNumber] = useState([]);

    const reload = useCallback(
        debounce((query) => {
            get(route("users.index"), pickBy(query), {
                preserveState: true,
            });
        }, 150),
        []
    );

    useEffect(() => reload(params), [params]);

    useEffect(() => {
        let numbers = [];
        for (
            let i = attributes.per_page;
            i <= meta.total / attributes.per_page;
            i = i + attributes.per_page
        ) {
            numbers.push(i);
        }
        setPageNumber(numbers);
    }, []);

    const onChange = (event) =>
        setParams({ ...params, [event.target.name]: event.target.value }); */

    return (
        <BaseLayout state={state} auth={auth}>
            <Head title="Gestion des Utilisateurs"/>
            <div className="flex flex-col items-start m-4" role="group">
                <div className="flex flex-row justify-between items-center w-full">
                    <div>
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
                    </div>
                    <div className="gap-6">
                        <button
                            className="relative rounded-lg bg-blueVh w-full overflow-hidden flex flex-col items-start justify-start py-2 px-4 box-border cursor-pointer text-left text-[12px] text-white font-outfit"
                            id="openModal" onClick={openModal}
                        >
                            <div className="flex flex-row items-center justify-start gap-2">
                                <div className="bg-white rounded-md">
                                    <img
                                        className="w-5 relative h-5 overflow-hidden shrink-0"
                                        alt=""
                                        src="./assets/icons/btn_icon_users.svg"
                                    />
                                </div>
                                <div className="relative font-semibold">
                                    Créer un utilisateur
                                </div>
                            </div>
                        </button>
                    </div>
                </div>

                <div className="relative font-outfit m-3 flex">
                    <input
                        type="text"
                        id="seach"
                        name="seach"
                        placeholder="Recherche..."
                        className="w-[400px] px-10 py-2 border border-stokelightblue rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E1EFFC]"
                    />

                    <div className="inset-y-0 left-1 pl-3 top-0 flex items-center pointer-events-none">
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

                {/*<DataTable/>*/}

                <DataTable ajax={get(route('user.create'))} columns={columns} className="display">
                    <thead>
                        <tr>
                        <th>Name</th>
                        <th>Position</th>
                        <th>Office</th>
                        <th>Extn.</th>
                        <th>Start date</th>
                        <th>Salary</th>
                        </tr>
                    </thead>
                </DataTable>


                {/*<DataTable/>*/}

                {/* <div className="w-full bg-base-white max-w-full flex flex-row flex-wrap items-center justify-center py-3 gap-3 border mt-2 rounded-lg tracking-[normal] text-left text-xs text-gray-mid-description font-outfit">
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
                                        <a
                                            href="details_user.html"
                                            className="rounded-lg bg-base-white border-stroke-bulto border-[2px] border-solid flex flex-row items-center justify-center p-3 gap-1"
                                        >
                                            <img
                                                className="w-4 relative h-4 overflow-hidden shrink-0"
                                                alt=""
                                                src="./assets/icons/eye.svg"
                                            />
                                            <div className="w-[23px] relative font-semibold hidden">
                                                Voir
                                            </div>
                                        </a>
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
                        </tbody>
                    </table>
                </div> */}
            </div>
            {/* start modal */}

            {isModalOpen && (
                <div
                    id="userModal"
                    className="fixed z-50 inset-0 bg-gray-900 bg-opacity-30 backdrop-blur-sm overflow-y-auto h-full px-4"
                >
                    <div className="relative top-3 mx-auto shadow-xl rounded-3xl  bg-white w-1/3">
                        <div className="flex justify-end p-2">
                            <button
                                id="closeModal"
                                onClick={closeModal}
                                type="button"
                                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
                            >
                                <svg
                                    className="w-5 h-5"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                        clipRule="evenodd"
                                    ></path>
                                </svg>
                            </button>
                        </div>

                        <div className="p-6 pt-0">
                            {/* Content Modal */}

                            {/* Header */}
                            <div className="flex flex-col items-start justify-start text-[24px] mb-4">
                                <div className="flex flex-row items-center justify-start gap-2">
                                    <img
                                        className="w-6 h-6"
                                        alt=""
                                        src="./assets/icons/user-circle.svg"
                                    />
                                    <div className="relative font-semibold text-blueVh">
                                        Ajouter un utilisateur
                                    </div>
                                </div>
                                <div className="text-[12px] text-grayish-middle">
                                    Remplissez les informations de l’utilisateur
                                    et confirmez
                                </div>
                            </div>

                            {/* Form Fields */}
                            <div className="flex flex-col gap-4 text-gray">
                                {/* Profile Image */}
                                <div className="flex flex-row items-center justify-center relative gap-2.5">
                                    <img
                                        className="w-20 h-20 z-0"
                                        alt=""
                                        src="./assets/icons/ellipse-cricle.svg"
                                    />
                                    <img
                                        className="w-8 h-8 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                                        alt=""
                                        src="./assets/icons/camera-alt.svg"
                                    />
                                </div>

                                {/*  Name and Surname */}
                                <div className="flex flex-row gap-3">
                                    <div className="flex flex-col gap-1">
                                        <label
                                            htmlFor="nom"
                                            className="font-bold"
                                        >
                                            Nom*
                                        </label>
                                        <input
                                            id="nom"
                                            type="text"
                                            placeholder="Ecrivez le nom ici"
                                            className="w-[230px] p-3 rounded-lg border-2 border-stroke-bulto"
                                        />
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <label
                                            htmlFor="prenom"
                                            className="font-bold"
                                        >
                                            Prénoms*
                                        </label>
                                        <input
                                            id="prenom"
                                            type="text"
                                            placeholder="Ecrivez le/les prénoms ici"
                                            className="w-[230px] p-3 rounded-lg border-2 border-stroke-bulto"
                                        />
                                    </div>
                                </div>

                                {/* User Type and Category */}
                                <div className="flex flex-row gap-3">
                                    <div className="flex flex-col gap-1">
                                        <label
                                            htmlFor="typeUtilisateur"
                                            className="font-bold"
                                        >
                                            Type d’utilisateur*
                                        </label>
                                        <select
                                            id="typeUtilisateur"
                                            className="w-[230px] p-3 rounded-lg border-2 border-stroke-bulto"
                                        >
                                            <option>Ecouteur</option>
                                            <option>Noteur</option>
                                            <option>Gestionnaire</option>
                                        </select>
                                    </div>

                                    <div className="flex flex-col gap-1">
                                        <label
                                            htmlFor="categorieUtilisateur"
                                            className="font-bold"
                                        >
                                            Catégorie d’utilisateur*
                                        </label>
                                        <select
                                            id="categorieUtilisateur"
                                            className="w-[230px] p-3 rounded-lg border-2 border-stroke-bulto"
                                        >
                                            <option>User</option>
                                            <option>Admin</option>
                                            <option>Super Admin</option>
                                        </select>
                                    </div>
                                </div>

                                {/* Phone Number and Email */}
                                <div className="flex flex-row gap-3">
                                    <div className="flex flex-col gap-1">
                                        <label
                                            htmlFor="telephone"
                                            className="font-bold"
                                        >
                                            Numéro de téléphone*
                                        </label>
                                        <input
                                            id="telephone"
                                            type="tel"
                                            placeholder="+225 01 02 03 45 67"
                                            className="w-[230px] p-3 rounded-lg border-2 border-stroke-bulto"
                                        />
                                    </div>

                                    <div className="flex flex-col gap-1">
                                        <label
                                            htmlFor="email"
                                            className="font-bold"
                                        >
                                            Email*
                                        </label>
                                        <input
                                            id="email"
                                            type="email"
                                            placeholder="josianne.kone@gmail.com"
                                            className="w-[230px] p-3 rounded-lg border-2 border-stroke-bulto"
                                        />
                                    </div>
                                </div>

                                {/* Password */}
                                <div className="flex flex-col gap-1">
                                    <label
                                        htmlFor="password"
                                        className="font-bold"
                                    >
                                        Mot de passe*
                                    </label>
                                    <input
                                        id="password"
                                        type="password"
                                        placeholder="******"
                                        className="w-[472px] p-3 rounded-lg border-2 border-stroke-bulto"
                                    />
                                </div>

                                {/*  Country, Origin Entity, Cell, Assigned Entities, and Status */}

                                <div className="flex flex-row gap-3">
                                    <div className="flex flex-col gap-1">
                                        <label
                                            htmlFor="pays"
                                            className="font-bold"
                                        >
                                            Pays*
                                        </label>
                                        <select
                                            id="pays"
                                            className="w-[230px] p-3 rounded-lg border-2 border-stroke-bulto"
                                        >
                                            <option>Côte d'Ivoire</option>
                                        </select>
                                    </div>

                                    <div className="flex flex-col gap-1">
                                        <label
                                            htmlFor="entiteOrigine"
                                            className="font-bold"
                                        >
                                            Entité d’origine*
                                        </label>
                                        <select
                                            id="entiteOrigine"
                                            className="w-[230px] p-3 rounded-lg border-2 border-stroke-bulto"
                                        >
                                            <option>Centre Kodesh</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="flex flex-row gap-3">
                                    <div className="flex flex-col gap-1">
                                        <label
                                            htmlFor="cellule"
                                            className="font-bold"
                                        >
                                            Cellule*
                                        </label>
                                        <select
                                            id="cellule"
                                            className="w-[230px] p-3 rounded-lg border-2 border-stroke-bulto"
                                        >
                                            <option>Djiby 8</option>
                                        </select>
                                    </div>

                                    <div className="flex flex-col gap-1">
                                        <label
                                            htmlFor="statut"
                                            className="font-bold"
                                        >
                                            Statut
                                        </label>
                                        <select
                                            id="statut"
                                            className="w-[230px] p-3 rounded-lg border-2 border-stroke-bulto"
                                        >
                                            <option>En attente</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="flex flex-col">
                                    <div className="flex flex-row gap-3">
                                        <div className="flex flex-col gap-1">
                                            <label
                                                htmlFor="entitesAffectees"
                                                className="font-bold"
                                            >
                                                Entité(s) affectée(s)*
                                            </label>
                                            <div className="flex flex-row flex-wrap gap-1 p-3 rounded-lg border-2 border-stroke-bulto">
                                                <span className="bg-light-stroke py-0.5 px-2 rounded-8xs">
                                                    Angré 9
                                                </span>
                                                <span className="bg-light-stroke py-0.5 px-2 rounded-8xs">
                                                    Angré 8-2
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-row w-full gap-2">
                                    <button className="w-full relative [filter:drop-shadow(0px_1px_2px_rgba(0,_0,_0,_0.08))] rounded-lg border-gray-unselected border-[2px] border-solid box-border flex flex-row items-center justify-center py-3 px-6 text-left text-[16px] text-gray-unselected font-outfit">
                                        <div
                                            className="relative font-semibold cursor-pointer"
                                            id="annulerText"
                                        >
                                            Annuler
                                        </div>
                                    </button>
                                    <button className="w-full relative shadow-[0px_1px_2px_rgba(0,_0,_0,_0.08)] rounded-lg bg-blueVh flex flex-row items-center justify-center py-3 px-6 box-border text-left text-[16px] text-white font-outfit">
                                        <div
                                            className="relative font-semibold cursor-pointer"
                                            id="enregistrerText"
                                        >
                                            Enregistrer
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* end modal */}
                </div>
            )}
        </BaseLayout>
    );
}
