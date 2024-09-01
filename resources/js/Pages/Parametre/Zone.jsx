import { useState } from "react";
import BaseLayout from "@/Layouts/BaseLayout";

const [state, setState] = useState(true);

export default function Zone({ auth }) {
    return (
        <BaseLayout auth={auth} state={state}>
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
                            Liste des entités
                        </div>
                        <p className="text-xs text-gray-mid-description">
                            Vue générale de toutes les entités
                        </p>
                    </div>
                    <div className="gap-6">
                        <button
                            className="relative rounded-lg bg-greenVh w-full overflow-hidden flex flex-col items-start justify-start py-2 px-4 box-border cursor-pointer text-left text-[12px] text-white font-outfit"
                            id="openModal"
                            onClick={openModal}
                        >
                            <div className="flex flex-row items-center justify-start gap-2">
                                <img
                                    className="w-5 relative h-5 overflow-hidden shrink-0"
                                    alt=""
                                    src="./assets/icons/entite_menu.svg"
                                />
                                <div className="relative font-semibold">
                                    Créer une entité
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

                    <div className="inset-y-0 left-10 pl-3 top-0 flex items-center pointer-events-none">
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

                <div className="w-full bg-base-white flex flex-row flex-wrap items-center justify-between py-3 gap-3 border mt-2 rounded-lg tracking-[normal] text-left text-xs text-gray-mid-description font-outfit">
                    <div className="relative text-[16px] font-medium text-black px-4">
                        Liste des entités
                    </div>

                    <select
                        placeholder="Cellule"
                        className="w-[100px] rounded-lg bg-base-white border-stroke-bulto border-[2px] border-solid box-border overflow-hidden shrink-0 flex flex-col items-center justify-start py-[5px] px-1.5"
                    >
                        <option>A à Z / Z à A</option>
                    </select>

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
                                    Nom entité
                                </th>
                                <th className="py-3 px-6 text-left border-r">
                                    Pays
                                </th>
                                <th className="py-3 px-6 text-left border-r">
                                    Zone
                                </th>
                                <th className="py-3 px-6 text-left border-r">
                                    Type d’entité
                                </th>
                                <th className="py-3 px-6 text-left border-r">
                                    Affichage nom
                                </th>
                                <th className="py-3 px-6 text-left border-r">
                                    Rattachement
                                </th>
                                <th className="py-3 px-6 text-left border-r">
                                    Affectation(s)
                                </th>
                                <th className="py-3 px-6 text-left border-r">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody className="text-gray-600 text-xs">
                            <tr className="">
                                <td className="py-1 px-6 border">
                                    <b>Kodesh</b>
                                </td>
                                <td className="py-1 px-6 border">
                                    <div className="">Côte d'ivoire</div>
                                </td>
                                <td className="py-1 px-6 border">
                                    <div className="">Abidjan</div>
                                </td>
                                <td className="py-1 px-6 border">
                                    <div className="relative rounded bg-greenVh w-full overflow-hidden flex flex-row items-center justify-center py-1 px-2 box-border text-left text-[10px] text-white font-outfit">
                                        <b className="relative">Centre</b>
                                    </div>
                                </td>
                                <td className="py-1 px-6 border">
                                    <div className="w-full relative box-border h-[79px] flex flex-col items-center justify-center p-3 text-left text-[10px] text-black font-outfit">
                                        <b className="relative">
                                            Centre Kodesh
                                        </b>
                                    </div>
                                </td>
                                <td className="py-1 px-6 border">
                                    <div className="relative text-[10px] font-semibold font-outfit text-gray-mid-description text-left">
                                        Aucune
                                    </div>
                                </td>

                                <td className="py-1 px-6 border">
                                    <div className="w-full relative h-[79px] flex flex-row flex-wrap items-center justify-start py-3 px-4 gap-1 text-left text-3xs text-gray-mid-description font-outfit">
                                        <div className="rounded bg-bg overflow-hidden flex flex-row items-center justify-center p-1 gap-2.5">
                                            <div className="relative font-normal">
                                                Mohammed S.
                                            </div>
                                        </div>
                                        <div className="rounded bg-bg overflow-hidden flex flex-row items-center justify-center p-1 gap-2.5">
                                            <div className="relative font-normal">
                                                Liliane S.
                                            </div>
                                        </div>
                                        <div className="rounded bg-bg overflow-hidden flex flex-row items-center justify-center p-1 gap-2.5">
                                            <div className="relative font-normal">
                                                Gérard K.
                                            </div>
                                        </div>
                                        <div className="rounded bg-bg overflow-hidden flex flex-row items-center justify-center p-1 gap-2.5">
                                            <div className="relative font-normal">
                                                Thierry N.
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <a
                                        href="details_entite.html"
                                        className="w-full relative box-border h-[79px] flex flex-row items-center justify-center py-3 px-4 gap-2 text-center text-xs text-blackish font-outfit-semibold-12"
                                    >
                                        <div
                                            className="rounded-lg bg-white border-stroke-bulto border-[2px] border-solid flex flex-row items-center justify-center p-1 gap-1 cursor-pointer"
                                            id="pDFButtonContainer"
                                        >
                                            <img
                                                className="w-4 relative h-4 overflow-hidden shrink-0"
                                                alt=""
                                                src="./assets/icons/eye.svg"
                                            />
                                            <div className="w-[23px] relative font-semibold hidden">
                                                Voir
                                            </div>
                                        </div>
                                        <div className="relative text-[10px] font-semibold text-gray-description text-left">
                                            Voir
                                        </div>
                                    </a>
                                </td>
                            </tr>
                            {/* Additional rows can be added similarly */}
                        </tbody>
                    </table>
                </div>
                {/* Footer */}
            </div>

            {/* start modal */}
            {isModalOpen && (
                <div
                    id="userModal"
                    className="fixed z-50 inset-0 bg-gray-900 backdrop-blur-sm bg-opacity-60 overflow-y-auto h-full px-4 "
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
                            {/* Form Fields */}
                            <div className="flex flex-col items-start justify-start gap-4">
                                <div className="flex flex-row items-start justify-between gap-3">
                                    <div className="flex flex-col gap-1">
                                        <label className="relative">
                                            <b>Nom entité*</b>
                                        </label>
                                        <input
                                            className="rounded-lg w-[242px]  bg-white border-stroke-bulto border-[2px] border-solid box-border p-3 text-sm text-grayish-middle font-medium-subtitle"
                                            type="text"
                                            value="Vallon 3"
                                        />
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <label className="relative">
                                            <b>Pays*</b>
                                        </label>
                                        <input
                                            className="rounded-lg w-[242px]  bg-white border-stroke-bulto border-[2px] border-solid p-3 text-sm text-grayish-middle font-medium-subtitle"
                                            type="text"
                                            value="Côte d'Ivoire"
                                        />
                                    </div>
                                </div>
                                <div className="flex flex-row items-start justify-between gap-3">
                                    <div className="flex flex-col gap-1">
                                        <label
                                            htmlFor="typeUtilisateur"
                                            className="font-bold"
                                        >
                                            Zone*
                                        </label>
                                        <select
                                            id="typeUtilisateur"
                                            className="w-[242px] p-3 rounded-lg border-2 border-stroke-bulto"
                                        >
                                            <option>Gènève</option>
                                        </select>
                                    </div>

                                    <div className="flex flex-col items-start justify-start gap-1">
                                        <label className="relative">
                                            <b>Type d’entité*</b>
                                        </label>
                                        <select
                                            id="typeUtilisateur"
                                            className="w-[242px] p-3 rounded-lg border-2 border-stroke-bulto"
                                        >
                                            <option>Gènève</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="flex flex-row items-start justify-start gap-[13px]">
                                    <div className="flex flex-col gap-1">
                                        <label
                                            htmlFor="typeUtilisateur"
                                            className="font-bold"
                                        >
                                            Rattachement*
                                        </label>
                                        <select
                                            id="typeUtilisateur"
                                            className="w-[242px] p-3 rounded-lg border-2 border-stroke-bulto"
                                        >
                                            <option>Assemblé europe</option>
                                        </select>
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <label
                                            htmlFor="typeUtilisateur"
                                            className="font-bold"
                                        >
                                            Origine*
                                        </label>
                                        <select
                                            id="typeUtilisateur"
                                            className="w-[242px] p-3 rounded-lg border-2 border-stroke-bulto"
                                        >
                                            <option>Centre Kodesh</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="flex flex-row items-start justify-start">
                                    <div className="flex flex-col items-start justify-start gap-1">
                                        <label
                                            htmlFor="typeUtilisateur"
                                            className="font-bold"
                                        >
                                            Affectation(s)*
                                        </label>
                                        <select
                                            id="typeUtilisateur"
                                            className="w-[497px] p-3 rounded-lg border-2 border-stroke-bulto"
                                        >
                                            <option>
                                                Fabrice B., Sanny K., Joelle M.
                                            </option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="w-[497px] flex flex-col items-start justify-start gap-2">
                                <label className="relative font-medium">
                                    Adresse sur la carte
                                </label>
                                <div className="flex flex-col items-start justify-start gap-1">
                                    <label className="relative">
                                        <b>Lien google maps de l’adresse *</b>
                                    </label>
                                    <input
                                        className="w-[497px] rounded-lg bg-white border-stroke-bulto border-[2px] border-solid box-border p-3 text-sm text-grayish-middle font-medium-subtitle"
                                        type="text"
                                        value="https://maps.app.goo.gl/xrzfQ8y8GDkU5i1HA"
                                    />
                                </div>
                                <div className="w-[497px] relative h-[247px] text-[12px] text-black">
                                    <img
                                        className="absolute top-[0px] left-[0px] rounded-xl w-[497px] h-[247px] object-cover"
                                        alt=""
                                        src="./assets/img/map_demo.png"
                                    />
                                    <div className="absolute top-[37px] left-[76px] w-[236px] h-[92.3px]">
                                        <img
                                            className="absolute h-[42.58%] w-[13.56%] top-[57.42%] right-[86.44%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
                                            alt=""
                                            src="./assets/icon/marquer.svg"
                                        />
                                        <div className="absolute top-[0px] left-[8px] rounded-lg bg-gray-200 overflow-hidden flex flex-row items-center justify-center pt-1.5 px-3 pb-3">
                                            <input
                                                className="w-[204px] relative font-medium inline-block shrink-0 border-none bg-transparent focus:outline-none"
                                                type="text"
                                                value="Vallon, à coté de Thanon Namanko, Résidence Rayan"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-[497px] flex flex-row items-start justify-between text-gray-unselected mt-5">
                                <div className="w-60 [filter:drop-shadow(0px_1px_2px_rgba(0,_0,_0,_0.08))] rounded-lg border-gray-unselected border-[2px] border-solid box-border flex flex-row items-center justify-center py-3 px-6">
                                    <div
                                        className="relative font-semibold cursor-pointer"
                                        id="annulerText"
                                    >
                                        Annuler
                                    </div>
                                </div>
                                <div className="w-60 shadow-[0px_1px_2px_rgba(0,_0,_0,_0.08)] rounded-lg bg-green-vh flex flex-row items-center justify-center py-3 px-6 box-border text-white">
                                    <div className="relative font-semibold">
                                        Enregistrer
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            {/* end modal */}
        </BaseLayout>
    );
}
