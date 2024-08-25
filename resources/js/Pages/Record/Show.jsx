import Sidebar from "@/Components/SideBar";
import Header from "@/Components/Header";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, usePage } from "@inertiajs/react";
import Footer from "@/Components/Footer";
import { useState } from "react";
import BaseLayout from "@/Layouts/BaseLayout";
import ellipse from '../../../../public/assets/img/ellipse.png';
import messageDetail  from '../../../../public/assets/icons/message-detail.svg';
import recordStart from '../../../../public/assets/icons/star-record.svg';
import interactionMsg from '../../../../public/assets/icons/interaction-msg.svg';
import response from '../../../../public/assets/icons/response.svg';

export default function RecordDetails({ auth, record }) {

    const [state, setState] = useState(false);

    return (
        <BaseLayout state={state} auth={auth}>
            <Head title={"Detail Entegistrement"} />

            <div className="flex flex-col items-start m-4">
                <div className="flex items-start">
                        {/* User Profile */}
                        <div className="flex items-center gap-3 border-r pr-8">
                            <img
                                className="w-10 h-10 object-cover"
                                alt="Ellipse"
                                src={ellipse}
                            />
                            <div className="flex flex-col justify-center">
                                <div className="text-sm text-grayDescription">
                                    Josianne
                                </div>
                                <div className="text-xl font-bold text-black">
                                    KONE
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col justify-between ml-3 space-y-2">
                            <p className="w-16 p-1 text-[12px] text-center font-bold text-greenVh bg-gray-200 rounded-lg">
                                Djiby 8
                            </p>
                            <div className="text-[12px] font-semibold text-gray-mid-description">
                                Angré 8ème Tranche
                            </div>
                        </div>
                        <div className="flex w-[318px] h-[60px] ml-5 mr-2 rounded-full border border-light-gray-bg"></div>
                        <div className="pt-2">
                            <p className="w-[57px] text-[12px] font-bold text-left text-gray">
                                Note globale
                            </p>
                        </div>
                        <div className="flex items-center justify-center px-2 py-1 text-[12px] font-semibold text-blueVh bg-stroke-light-blue border-2 border-solid border-blueVh rounded-lg">
                            <div>Bon</div>
                        </div>
                    </div>

                    <div className="flex flex-col mt-2">
                        <div className="flex items-center">
                            <img
                                className="w-5 h-5 mr-2"
                                src={messageDetail}
                            />
                            <p className="text-greenVh">
                                Descriptif enregistreur
                            </p>
                        </div>
                        <span className="text-xs tracking-wide text-gray-mid-description">
                            Informations de l’enregistrement
                        </span>
                    </div>

                    <div className="flex flex-wrap mt-4">
                        <div className="relative mb-4 mr-2">
                            <label
                                htmlFor="titre"
                                className="block mb-2 font-semibold text-gray-700"
                            >
                                Titre
                            </label>
                            <input
                                type="text"
                                id="titre"
                                name="titre"
                                placeholder="CE_Djiby8_Enr0123"
                                className="w-[350px] border-inherit p-3 text-[14px] font-medium text-gray-mid-description bg-light-gray-bg rounded-lg"
                            />
                        </div>

                        <div className="relative mb-4 mr-2">
                            <label
                                htmlFor="theme"
                                className="block mb-2 font-semibold text-gray-700"
                            >
                                Thème
                            </label>
                            <input
                                type="text"
                                id="theme"
                                name="theme"
                                placeholder="Overflow, le débordement divin"
                                className="w-[350px] border-inherit p-3 text-[14px] font-medium text-gray-mid-description bg-light-gray-bg rounded-lg"
                            />
                        </div>

                        <div className="relative mb-4 mr-2">
                            <label
                                htmlFor="verset"
                                className="block mb-2 font-semibold text-gray-700"
                            >
                                Verset de base
                            </label>
                            <input
                                type="text"
                                id="verset"
                                name="verset"
                                placeholder="Psaume 23"
                                className="w-[200px] border-inherit p-3 text-[14px] font-medium text-gray-mid-description bg-light-gray-bg rounded-lg"
                            />
                        </div>

                        <div className="relative mb-4 mr-2">
                            <label
                                htmlFor="source"
                                className="block mb-2 font-semibold text-gray-700"
                            >
                                Source (dévotionnel, livre, etc...)
                            </label>
                            <input
                                type="text"
                                id="source"
                                name="source"
                                placeholder="Thème de l’année,Traversée 23-24"
                                className="w-[350px] border-inherit p-3 text-[14px] font-medium text-gray-mid-description bg-light-gray-bg rounded-lg"
                            />
                        </div>
                    </div>

                    <div className="flex flex-col mt-4">
                        <div className="flex items-center">
                            <img
                                className="w-5 h-5 mr-2"
                                src={recordStart}
                            />
                            <p className="text-red-vh">Evaluation noteur</p>
                        </div>
                        <span className="text-xs tracking-wide text-gray-mid-description">
                            Détail de l’évaluation de l’enregistrement
                        </span>
                    </div>

                    <div className="flex flex-wrap mt-4">
                        <div className="relative mb-4 mr-2">
                            <label
                                htmlFor="titre"
                                className="block mb-2 font-semibold text-gray-700"
                            >
                                Compréhension du message
                            </label>
                            <input
                                type="text"
                                id="titre"
                                name="titre"
                                placeholder="Claire"
                                className="w-[220px] border-inherit p-3 text-[14px] font-medium text-gray-mid-description bg-light-gray-bg rounded-lg"
                            />
                        </div>

                        <div className="relative mb-4 mr-2">
                            <label
                                htmlFor="theme"
                                className="block mb-2 font-semibold text-gray-700"
                            >
                                Verset de base
                            </label>
                            <input
                                type="text"
                                id="theme"
                                name="theme"
                                placeholder="Conforme"
                                className="w-[200px] border-inherit p-3 text-[14px] font-medium text-gray-mid-description bg-light-gray-bg rounded-lg"
                            />
                        </div>

                        <div className="relative mb-4 mr-2">
                            <label
                                htmlFor="verset"
                                className="block mb-2 font-semibold text-gray-700"
                            >
                                Cibles clairement identifiées ?
                            </label>
                            <input
                                type="text"
                                id="verset"
                                name="verset"
                                placeholder="Très bien"
                                className="w-[200px] border-inherit p-3 text-[14px] font-medium text-gray-mid-description bg-light-gray-bg rounded-lg"
                            />
                        </div>

                        <div className="relative mb-4 mr-2">
                            <label
                                htmlFor="source"
                                className="block mb-2 font-semibold text-gray-700"
                            >
                                Thématique traitée définie ?
                            </label>
                            <input
                                type="text"
                                id="source"
                                name="source"
                                placeholder="Bien"
                                className="w-[350px] border-inherit p-3 text-[14px] font-medium text-gray-mid-description bg-light-gray-bg rounded-lg"
                            />
                        </div>

                        <div className="relative mb-4 mr-2">
                            <label
                                htmlFor="source"
                                className="block mb-2 font-semibold text-gray-700"
                            >
                            Mise en pratique décrite ?
                            </label>
                            <input
                                type="text"
                                id="source"
                                name="source"
                                placeholder="Confus"
                                className="w-full border-inherit p-3 text-[14px] font-medium text-gray-mid-description bg-light-gray-bg rounded-lg"
                            />
                        </div>

                        <div className="relative mb-4 mr-2">
                            <label
                                htmlFor="comments"
                                className="block mb-2 font-semibold text-gray-700"
                            >
                                Commentaires
                            </label>
                            <div className="w-full p-3 bg-light-gray-bg rounded-lg">
                                <textarea
                                    className="w-[900px] border-inherit h-[76px] p-0 text-[14px] font-medium text-gray-mid-description bg-transparent resize-none border-none"
                                    placeholder="Le verset n'est pas trop clair. Mieux préciser le verset de base."
                                ></textarea>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col mt-4">
                        <div className="flex items-center">
                            <img
                                className="w-5 h-5 mr-2"
                                src={interactionMsg}
                            />
                            <p className="text-grayDescription">Interactions</p>
                        </div>
                        <span className="text-xs tracking-wide text-gray-mid-description">
                            Détail de l’évaluation de l’enregistrement
                        </span>
                        <div>
                            <div className="w-[800px] p-6 mt-6 text-base text-black bg-white rounded-lg shadow-[0px_4px_12px_rgba(0,_0,_0,_0.1)]">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-4">
                                        <img
                                            className="w-8 h-8 rounded-full"
                                            alt="Profile picture"
                                            src="./assets/img/wz-hero.png"
                                        />
                                        <span className="font-semibold">
                                            Wilfried SEZAN
                                        </span>
                                        <span className="text-gray-description">
                                            Il y a 1 mois
                                        </span>
                                    </div>
                                    <button className="flex items-center gap-2 text-green-vh">
                                        <img
                                            className="w-3.5 h-[12.3px]"
                                            alt="Reply icon"
                                            src={response}
                                        />
                                        <span className="font-semibold">
                                            Répondre
                                        </span>
                                    </button>
                                </div>
                                <p className="text-justify text-grayDescription">
                                    Interessant. Essaie de séquencer ton
                                    message. Contexte, verset de base, intro, le
                                    message même appuyé sur la Parole, et les
                                    points pratiques claires appuyés sur la
                                    Parole toujours et l'orientation du Saint
                                    Esprit.
                                </p>
                            </div>

                            <div className="relative w-full flex flex-row items-start justify-start gap-10 ml-10 mt-4 text-left text-base text-black font-outfit">
                                <div className="w-0.5 relative bg-light-gray h-[276px]"></div>
                                <div className="flex flex-col items-start justify-start gap-3">
                                    <div className="shadow-[0px_4px_12px_rgba(0,_0,_0,_0.1)] rounded-lg bg-white flex flex-col items-start justify-start p-6 gap-3">
                                        <div className="w-[629px] flex flex-row items-center justify-between">
                                            <div className="flex flex-row items-center justify-start gap-4">
                                                <img
                                                    className="w-8 relative rounded-[50%] h-8 object-cover"
                                                    alt=""
                                                    src="Oval.png"
                                                />
                                                <div className="relative font-semibold">
                                                    Pasteur Mohammed SANOGO
                                                </div>
                                                <div className="relative text-gray-mid-description">
                                                    Il y a 1 semaine
                                                </div>
                                            </div>
                                            <div className="flex flex-row items-center justify-start gap-2 text-green-vh">
                                                <img
                                                    className="w-3.5 relative h-[12.3px]"
                                                    alt=""
                                                    src="Path.svg"
                                                />
                                                <div className="relative font-semibold">
                                                    Répondre
                                                </div>
                                            </div>
                                        </div>
                                        <div className="w-[628px] relative inline-block text-green-vh">
                                            <span>@Josianne kone</span>
                                            <span className="text-gray-mid-description">
                                                Félicitations ma fille. Puissant
                                                message. Mais appuies le de “il
                                                est écrit”. Jésus a répondit au
                                                diable par les “il est écrit”.
                                                Cela donne de la puissance à ton
                                                message car Dieu est fidèle à Sa
                                                Parole pour l’accomplir.
                                            </span>
                                        </div>
                                    </div>
                                    <div className="shadow-[0px_4px_12px_rgba(0,_0,_0,_0.1)] rounded-lg bg-white flex flex-col items-start justify-start p-6 gap-3 text-dark-blue">
                                        <div className="w-[629px] flex flex-row items-center justify-between">
                                            <div className="flex flex-row items-center justify-start gap-4">
                                                <img
                                                    className="w-8 relative rounded-[50%] h-8 object-cover"
                                                    alt=""
                                                    src="Oval.png"
                                                />
                                                <div className="relative font-semibold">
                                                    Wilfried SEZAN
                                                </div>
                                                <div className="rounded bg-bg overflow-hidden flex flex-row items-center justify-center py-1 px-2 gap-2.5 text-gray-mid-description">
                                                    <div className="relative font-semibold">
                                                        Vous
                                                    </div>
                                                    <img
                                                        className="w-[8.2px] relative h-[4.1px] hidden"
                                                        alt=""
                                                        src="Icon.svg"
                                                    />
                                                </div>
                                                <div className="relative text-grayish-blue">
                                                    Il y a 2 jours
                                                </div>
                                            </div>
                                            <div className="flex flex-row items-center justify-start gap-3 text-soft-red">
                                                <div className="flex flex-row items-center justify-start gap-2">
                                                    <img
                                                        className="w-[11.5px] relative h-3.5"
                                                        alt=""
                                                        src="Shape.svg"
                                                    />
                                                    <div className="relative font-medium">
                                                        Supprimer
                                                    </div>
                                                </div>
                                                <div className="flex flex-row items-center justify-start gap-2 text-green-vh">
                                                    <img
                                                        className="w-3.5 relative h-[12.3px]"
                                                        alt=""
                                                        src="Path.svg"
                                                    />
                                                    <div className="relative font-semibold">
                                                        Répondre
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="w-[628px] relative inline-block text-slateblue">
                                            <span>
                                                @Pasteur Mohammed Sanogo
                                            </span>
                                            <span className="text-grayish-blue">
                                                {" "}
                                                Amen Pasteur !
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="relative shadow-[0px_4px_12px_rgba(0,_0,_0,_0.1)] rounded-lg mt-4 bg-white w-[800px] flex flex-row items-start justify-start p-6 box-border gap-4 text-left text-base text-grayish-blue font-outfit">
                                <div className="flex flex-row items-start justify-start gap-4">
                                    <img
                                        className="w-10 relative rounded-[50%] h-10 object-cover"
                                        alt=""
                                        src="./assets/img/user_auth.svg"
                                    />
                                    <div className="rounded-lg bg-white border-gray-unselected border-[1px] border-solid flex flex-row items-center justify-center p-3">
                                        <div className="w-[453px] relative inline-block h-[84px] shrink-0">
                                            Ajouter une interaction...
                                        </div>
                                    </div>
                                </div>
                                <div className="rounded bg-green-vh overflow-hidden flex flex-row items-center justify-center py-2 px-3 gap-2.5 text-white">
                                    <div className="relative font-semibold">
                                        Envoyer
                                    </div>
                                    <img
                                        className="w-[8.2px] relative h-[4.1px] hidden"
                                        alt=""
                                        src="Icon.svg"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        </BaseLayout>
    );
}
