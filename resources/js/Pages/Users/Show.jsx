import { useState } from "react";

export default function UserShow({auth,user}) {

    //define type header
    const [state, setState] = useState(true);

    return (
        <BaseLayout state={state} auth={auth}>
            <div className="flex flex-col items-start">
                <div className="flex flex-col items-start justify-start text-[24px] mb-4 w-full">
                    <div className="flex flex-row items-center justify-start gap-2">
                        <img
                            className="w-6 h-6"
                            alt=""
                            src="./assets/icons/user-circle.svg"
                        />
                        <div className="relative font-semibold text-blueVh">
                            Informations de l’utilisateur
                        </div>
                    </div>
                    <div className="text-[12px] text-[#5F6D7E]">
                        Editez les informations de l’utilisateur
                    </div>
                </div>

                {/*  Information Update to user */}
                <div className="relative w-full flex flex-col items-start justify-start gap-4 text-left text-base text-gray font-outfit-medium-14">
                    <div className="flex flex-col items-start justify-start gap-1 text-[12px] text-grayish-middle">
                        <div className="flex flex-row items-center justify-center relative gap-2.5">
                            <img
                                className="w-20 relative h-20 z-[0]"
                                alt="User Profile Picture"
                                src="./assets/icons/ellipse-cricle.svg"
                            />
                            <img
                                className="w-[41.88%] absolute !m-[0] h-[37.75%] top-[31.13%] right-[29.09%] bottom-[31.12%] left-[29.04%] max-w-full overflow-hidden max-h-full z-[1]"
                                alt="Camera Icon"
                                src="./assets/icons/camera-alt.svg"
                            />
                        </div>
                        <div className="flex flex-row items-center justify-start">
                            <div className="relative">
                                Compte créé le 12.12.2023
                            </div>
                        </div>
                    </div>

                    {/* Name Field */}
                    <div className="flex flex-row items-start justify-start gap-3 w-full">
                        <div className="flex flex-col items-start justify-start gap-1">
                            <label for="name" className="relative">
                                <b>Nom*</b>
                            </label>
                            <input
                                type="text"
                                id="name"
                                className="rounded-lg bg-white border-stroke-bulto border-[2px] border-solid p-3 text-sm text-grayish-middle font-medium-subtitle"
                                value="KONE"
                            />
                        </div>

                        {/* Surname Field */}
                        <div className="flex flex-col items-start justify-start gap-1">
                            <label for="surname" className="relative">
                                <b>Prénoms*</b>
                            </label>
                            <input
                                type="text"
                                id="surname"
                                className="rounded-lg bg-white border-stroke-bulto border-[2px] border-solid p-3 text-sm text-grayish-middle font-medium-subtitle"
                                value="Josianne"
                            />
                        </div>

                        {/* User Type Dropdown */}
                        <div className="flex flex-col items-start justify-start gap-1">
                            <label for="userType" className="relative">
                                <b>Type d’utilisateur*</b>
                            </label>
                            <select
                                id="userType"
                                className="w-full rounded-lg bg-white border-stroke-bulto border-[2px] border-solid p-3 text-sm text-grayish-middle font-medium-subtitle"
                            >
                                <option value="Ecouteur" selected>
                                    Ecouteur
                                </option>
                            </select>
                        </div>

                        {/* User Category Dropdown */}
                        <div className="flex flex-col items-start justify-start gap-1">
                            <label for="userCategory" className="relative">
                                <b>Catégorie d’utilisateur*</b>
                            </label>
                            <select
                                id="userCategory"
                                className="w-full rounded-lg bg-white border-stroke-bulto border-[2px] border-solid p-3 text-sm text-grayish-middle font-medium-subtitle"
                            >
                                <option value="User" selected>
                                    User
                                </option>
                            </select>
                        </div>
                    </div>

                    <div className="flex flex-row items-start justify-start gap-3 w-full">
                        {/* Phone Number Field */}
                        <div className="flex flex-col items-start justify-start gap-1">
                            <label for="phoneNumber" className="relative">
                                <b>Numéro de téléphone*</b>
                            </label>
                            <input
                                type="text"
                                id="phoneNumber"
                                className="rounded-lg bg-white border-stroke-bulto border-[2px] border-solid p-3 flex items-center gap-2.5 text-sm text-grayish-middle font-medium-subtitle"
                                value="+225 01 02 03 45 67"
                            />
                        </div>

                        {/* Email Field */}
                        <div className="flex flex-col items-start justify-start gap-1">
                            <label for="email" className="relative">
                                <b>Email*</b>
                            </label>
                            <input
                                type="email"
                                id="email"
                                className="w-full rounded-lg bg-white border-stroke-bulto border-[2px] border-solid p-3 text-sm text-grayish-middle font-medium-subtitle"
                                value="josianne.kone@gmail.com"
                            />
                        </div>

                        {/* Password Field */}
                        <div className="flex flex-col items-start justify-start gap-1">
                            <label for="password" className="relative">
                                <b>Mot de passe*</b>
                            </label>
                            <input
                                type="password"
                                id="password"
                                className="w-full rounded-lg bg-white border-stroke-bulto border-[2px] border-solid p-3 text-sm text-grayish-middle font-medium-subtitle"
                                value="******"
                            />
                        </div>
                    </div>

                    <div className="flex flex-row items-start justify-start gap-[13px]">
                        {/* Country Dropdown */}
                        <div className="flex flex-col items-start justify-start gap-1">
                            <label for="country" className="relative">
                                <b>Pays*</b>
                            </label>
                            <select
                                id="country"
                                className="rounded-lg bg-white border-stroke-bulto border-[2px] border-solid p-3 text-sm text-grayish-middle font-medium-subtitle"
                            >
                                <option value="Côte d'Ivoire" selected>
                                    Côte d'Ivoire
                                </option>
                            </select>
                        </div>

                        {/* Origin Entity Dropdown */}
                        <div className="flex flex-col items-start justify-start gap-1">
                            <label for="originEntity" className="relative">
                                <b>Entité d’origine*</b>
                            </label>
                            <select
                                id="originEntity"
                                className="rounded-lg bg-white border-stroke-bulto border-[2px] border-solid p-3 text-sm text-grayish-middle font-medium-subtitle"
                            >
                                <option value="Centre Kodesh" selected>
                                    Centre Kodesh
                                </option>
                            </select>
                        </div>

                        {/* Cell Dropdown */}
                        <div className="flex flex-col items-start justify-start gap-1">
                            <label for="cell" className="relative">
                                <b>Cellule*</b>
                            </label>
                            <select
                                id="cell"
                                className="rounded-lg bg-white border-stroke-bulto border-[2px] border-solid p-3 text-sm text-grayish-middle font-medium-subtitle"
                            >
                                <option value="Djiby 8ème Tranche" selected>
                                    Djiby 8ème Tranche
                                </option>
                            </select>
                        </div>
                    </div>

                    <div className="flex flex-row items-start justify-start gap-4">
                        {/* Affected Entities */}
                        <div className="flex flex-col items-start justify-start gap-1">
                            <label for="affectedEntities" className="relative">
                                <b>Entité(s) affectée(s)*</b>
                            </label>
                            <div className="rounded-lg bg-white border-stroke-bulto border-[2px] border-solid p-3 flex flex-wrap gap-2.5 text-sm text-grayish-middle font-medium-subtitle">
                                <div className="rounded-8xs bg-light-stroke py-0.5 px-2">
                                    Angré 8ème Tranche
                                </div>
                                <div className="rounded-8xs bg-light-stroke py-0.5 px-2">
                                    Angré 7ème Tranche
                                </div>
                            </div>
                        </div>

                        {/* Status Dropdown */}
                        <div className="flex flex-col items-start justify-start gap-1">
                            <label for="status" className="relative">
                                <b>Statut</b>
                            </label>
                            <div className="rounded-lg bg-white border-stroke-bulto border-[2px] border-solid p-3 flex items-center gap-2.5 text-sm text-white">
                                <div className="rounded-8xs bg-green-vh py-0.5 px-2">
                                    Validé
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-start m-4" role="group">
                    <div className="w-full bg-base-white max-w-full flex flex-row flex-wrap items-center justify-center py-3 gap-3 border mt-2 rounded-lg tracking-[normal] text-left text-xs text-gray-mid-description font-outfit">
                        <div className="relative text-[16px] font-medium text-black px-4">
                            Liste des enregistrements de l’utilisateur
                        </div>

                        <div className=""></div>

                        <table className="min-w-full bg-white border-t mt-1">
                            <thead>
                                <tr className="text-xs border-b">
                                    <th className="py-3 px-6 text-left border-r">
                                        Enregistrement (+thème)
                                    </th>
                                    <th className="py-3 px-6 text-left border-r">
                                        Note globale
                                    </th>
                                    <th className="py-3 px-6 text-left border-r">
                                        Date
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
                                {/* Additional rows can be added similarly */}
                                <td className="py-1 px-6 border"></td>
                                <td className="py-1 px-6 border">
                                    <div className="relative rounded bg-stroke-light-blue border-blue border-[1px] border-solid box-border w-full overflow-hidden shrink-0 flex flex-row items-center justify-center py-1 px-2 gap-1 text-left text-[10px] text-blue font-outfit">
                                        <div className="relative font-semibold">
                                            Bon
                                        </div>
                                    </div>
                                </td>
                                <td className="py-1 px-6 border">
                                    Reçu le 19,08,2024
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
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </BaseLayout>
    );
}
