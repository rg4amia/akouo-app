import { useState, useEffect } from "react";
import BaseLayout from "@/Layouts/BaseLayout";
import { Head, Link, useForm, usePage } from "@inertiajs/react";
import TextInput from "@/Components/TextInput";
import InputError from "@/Components/InputError";
import SelectOption from "@/Components/SelectOption";
import makeAnimated from "react-select/animated";
import Select from "react-select";
import ButtonStandard from "@/Components/ButtonStandard";
import { toast } from "react-toastify";


export default function EntiteIndex({ props, auth }) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    /* Select 2 Multi */
    const animatedComponents = makeAnimated();

    const openModal = () => {
        setIsModalOpen(true);
    };

    const {
        data: entite,
        type_entites,
        entites,
        rattachements,
        pays,
        meta,
        users,
        zones,
        filtered,
        attributes,
    } = usePage().props.entites;

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const { data, setData, reset, processing, post, get, errors } = useForm({
        libelle: "",
        pay_id: "",
        zone_id: "",
        type_entite_id: "",
        rattachement_id: "",
        entite_origine_id: "",
        affecter_entite: "",
        link_maps: "",
    });

    const [state, setState] = useState(true);

    const [params, setParams] = useState(filtered);
    const [pageNumber, setPageNumber] = useState([]);

    useEffect(() => {
        let numbers = [];
        for (
            //attributes
            let i = attributes.per_page;
            i <= meta.total / attributes.per_page;
            i = i + attributes.per_page
        ) {
            numbers.push(i);
        }
        setPageNumber(numbers);
    }, []);

    /* Flash Message */
    const { flash } = usePage().props;

    useEffect(() => {
        flash.success && toast.success(flash.success);
        flash.error && toast.error(flash.error);
        flash.info && toast.error(flash.info);
    }, [flash]);

    const onChange = (event) =>
        setParams({ ...params, [event.target.name]: event.target.value });

    /* Function pour la création d'entité */
    const submit = (e) => {
        e.preventDefault();
        post(route("entite.store"), {
            onSuccess: (e) => {
                reset([]);
                closeModal();
            },
        });
    };

    const handledSearch = (e) => {
        get(route("entite.index"));
    };

    return (
        <BaseLayout auth={auth} state={state}>
            <Head title="Entités" />

            <div className="flex flex-col items-start m-4">
                <div className="flex flex-row items-center justify-between w-full">
                    <div>
                        <div className="flex items-center text-2xl font-semibold font-outfit">
                            <svg
                                className="w-5 h-5 mr-2 fill-blueVh size-6"
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
                                    className="relative w-5 h-5 overflow-hidden shrink-0"
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

                <div className="relative flex m-3 font-outfit">
                    <input
                        type="text"
                        id="seach"
                        name="seach"
                        placeholder="Recherche..."
                        className="w-[400px] px-10 py-2 border border-stokelightblue rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E1EFFC]"
                    />

                    <div className="absolute inset-y-0 flex items-center pl-3 pointer-events-none">
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

                    <table className="min-w-full mt-1 bg-white border-t">
                        <thead>
                            <tr className="text-xs border-b">
                                <th className="px-6 py-3 text-left border-r">
                                    Nom entité
                                </th>
                                <th className="px-6 py-3 text-left border-r">
                                    Pays
                                </th>
                                <th className="px-6 py-3 text-left border-r">
                                    Zone
                                </th>
                                <th className="px-6 py-3 text-left border-r">
                                    Type d’entité
                                </th>
                                <th className="px-6 py-3 text-left border-r">
                                    Affichage nom
                                </th>
                                <th className="px-6 py-3 text-left border-r">
                                    Rattachement
                                </th>
                                <th className="px-6 py-3 text-left border-r">
                                    Affectation(s)
                                </th>
                                <th className="px-6 py-3 text-left border-r">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody className="text-xs text-gray-600">
                            {entite.map((entite, index) => (
                                <tr className="" key={index}>
                                    <td className="px-6 py-1 border">
                                        <b>{entite.libelle}</b>
                                    </td>
                                    <td className="px-6 py-1 border">
                                        <div className="">{entite.pays}</div>
                                    </td>
                                    <td className="px-6 py-1 border">
                                        <div className="">{entite.zone}</div>
                                    </td>
                                    <td className="px-6 py-1 border">
                                        <div className="relative rounded bg-greenVh w-full overflow-hidden flex flex-row items-center justify-center py-1 px-2 box-border text-left text-[10px] text-white font-outfit">
                                            <b className="relative">
                                                {entite.typeentite}
                                            </b>
                                        </div>
                                    </td>
                                    <td className="px-6 py-1 border">
                                        <div className="w-full relative box-border h-[79px] flex flex-col items-center justify-center p-3 text-left text-[10px] text-black font-outfit">
                                            <b className="relative">
                                                {entite.typeentite}
                                            </b>
                                        </div>
                                    </td>
                                    <td className="px-6 py-1 border">
                                        <div className="relative text-[10px] font-semibold font-outfit text-gray-mid-description text-left">
                                            {entite.rattachement}
                                        </div>
                                    </td>

                                    <td className="px-6 py-1 border">
                                        {entite.useraffecte.length > 0 ? (
                                            <ul>
                                                {entite.useraffecte.map(
                                                    (name, index) => (
                                                        <li
                                                            className="flex items-center justify-center py-1 mt-1 rounded-md bg-bg"
                                                            key={index}
                                                        >
                                                            {name}
                                                        </li>
                                                    )
                                                )}
                                            </ul>
                                        ) : (
                                            <p>Aucune entité affectée.</p>
                                        )}
                                    </td>
                                    <td className="border">
                                        <Link
                                            href={route("entite.show", entite)}
                                            as="button"
                                            className="w-full relative box-border h-[79px] flex flex-row items-center justify-center py-3 px-4 gap-2 text-center text-xs text-blackish font-outfit-semibold-12"
                                        >
                                            <div
                                                className="rounded-lg bg-white border-stroke-bulto border-[2px] border-solid flex flex-row items-center justify-center p-1 gap-1 cursor-pointer"
                                                id="pDFButtonContainer"
                                            >
                                                <img
                                                    className="relative w-4 h-4 overflow-hidden shrink-0"
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
                                        </Link>
                                    </td>
                                </tr>
                            ))}
                            {/* Additional rows can be added similarly */}
                        </tbody>
                    </table>
                </div>
                {/* Footer */}
                <div className="flex items-center justify-between mt-4">
                    <nav className="flex items-center">
                        {meta.links.map((link, index) => (
                            <Link
                                key={index}
                                href={link.url || "#"}
                                className={`px-3 py-2 mx-1 text-sm font-medium rounded-lg ${
                                    link.active
                                        ? "bg-green-vh text-white"
                                        : "bg-white text-gray-700 hover:bg-gray-50"
                                } ${
                                    !link.url &&
                                    "pointer-events-none opacity-50"
                                }`}
                                dangerouslySetInnerHTML={{ __html: link.label }}
                            />
                        ))}
                    </nav>
                    <div className="flex items-center">
                        <select
                            id="load"
                            name="load"
                            onChange={onChange}
                            value={params.load}
                            className="block w-full py-2 pl-3 pr-10 text-base border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        >
                            {pageNumber.map((page, index) => (
                                <option key={index}>{page}</option>
                            ))}
                        </select>
                    </div>
                </div>
            </div>

            {/* start modal */}
            {isModalOpen && (
                <div
                    id="userModal"
                    className="fixed inset-0 z-50 h-full px-4 overflow-y-auto bg-gray-900 backdrop-blur-sm bg-opacity-60 "
                >
                    <div className="relative w-1/3 mx-auto bg-white shadow-xl top-3 rounded-3xl">
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
                        <form onSubmit={submit}>
                            <div className="p-6 pt-0">
                                {/* Content Modal */}
                                {/* Form Fields */}
                                <div className="flex flex-col items-start justify-start gap-4">
                                    <div className="flex flex-row items-start justify-between w-full gap-3">
                                        <div className="flex flex-col w-full gap-1">
                                            <label className="relative">
                                                <b>Nom entité*</b>
                                            </label>
                                            {/* <input
                                            className="rounded-lg w-[242px]  bg-white border-stroke-bulto border-[2px] border-solid box-border p-3 text-sm text-grayish-middle font-medium-subtitle"
                                            type="text"
                                            value="Vallon 3"
                                        /> */}
                                            <TextInput
                                                id="libelle"
                                                type="text"
                                                name="libelle"
                                                placeholder="Ecrivez nom entité"
                                                onChange={(e) =>
                                                    setData(
                                                        "libelle",
                                                        e.target.value
                                                    )
                                                }
                                                error={errors.nom}
                                            />
                                            <InputError
                                                message={errors.libelle}
                                                className="mt-0"
                                            />
                                        </div>

                                        <div className="flex flex-col w-full gap-1">
                                            <label className="font-bold">
                                                Pays*
                                            </label>
                                            {/*  <input
                                            className="rounded-lg w-[242px]  bg-white border-stroke-bulto border-[2px] border-solid p-3 text-sm text-grayish-middle font-medium-subtitle"
                                            type="text"
                                            value="Côte d'Ivoire"
                                        /> */}
                                            <SelectOption
                                                options={pays}
                                                placeholder="Selectionner pays"
                                                error={errors.pay_id}
                                                className="w-[242px]"
                                                onChange={(e) =>
                                                    setData(
                                                        "pay_id",
                                                        e.target.value
                                                    )
                                                }
                                            />
                                            <InputError
                                                message={errors.pay_id}
                                                className="mt-0"
                                            />
                                        </div>
                                    </div>
                                    <div className="flex flex-row items-start justify-between w-full gap-3">
                                        <div className="flex flex-col w-full gap-1">
                                            <label
                                                htmlFor="typeUtilisateur"
                                                className="font-bold"
                                            >
                                                Zone*
                                            </label>
                                            <SelectOption
                                                options={zones}
                                                placeholder="Selectionner zone"
                                                error={errors.zone_id}
                                                className="w-full"
                                                onChange={(e) =>
                                                    setData(
                                                        "zone_id",
                                                        e.target.value
                                                    )
                                                }
                                            />
                                            <InputError
                                                message={errors.zone_id}
                                                className="mt-0"
                                            />
                                        </div>

                                        <div className="flex flex-col items-start justify-start w-full gap-1">
                                            <label
                                                htmlFor="typeUtilisateur"
                                                className="font-bold"
                                            >
                                                <b>Type d’entité*</b>
                                            </label>
                                            <SelectOption
                                                options={type_entites}
                                                placeholder="Selectionner type entités"
                                                error={errors.type_entite_id}
                                                className="w-full "
                                                onChange={(e) =>
                                                    setData(
                                                        "type_entite_id",
                                                        e.target.value
                                                    )
                                                }
                                            />
                                            <InputError
                                                message={errors.type_entite_id}
                                                className="mt-0"
                                            />
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
                                            <SelectOption
                                                options={rattachements}
                                                placeholder="Selectionner type entités"
                                                error={errors.rattachement_id}
                                                className=" w-[242px]"
                                                onChange={(e) =>
                                                    setData(
                                                        "rattachement_id",
                                                        e.target.value
                                                    )
                                                }
                                            />
                                            <InputError
                                                message={errors.rattachement_id}
                                                className="mt-0"
                                            />
                                        </div>
                                        <div className="flex flex-col gap-1">
                                            <label
                                                htmlFor="typeUtilisateur"
                                                className="font-bold"
                                            >
                                                Origine*
                                            </label>
                                            <SelectOption
                                                options={entites}
                                                placeholder="Selectionner entité d'origine"
                                                error={errors.entite_origine_id}
                                                className=" w-[242px]"
                                                onChange={(e) =>
                                                    setData(
                                                        "entite_origine_id",
                                                        e.target.value
                                                    )
                                                }
                                            />
                                            <InputError
                                                message={
                                                    errors.entite_origine_id
                                                }
                                                className="mt-0"
                                            />
                                        </div>
                                    </div>
                                    <div className="flex flex-row items-start justify-start w-full">
                                        <div className="flex flex-col items-start justify-start w-full gap-1">
                                            <label
                                                htmlFor="typeUtilisateur"
                                                className="font-bold"
                                            >
                                                Affectation(s)*
                                            </label>
                                            <Select
                                                name="affecter_entite"
                                                closeMenuOnSelect={true}
                                                placeholder="Selectionner utilisateur"
                                                components={animatedComponents}
                                                defaultValue={[]}
                                                isMulti
                                                isClearable
                                                options={users}
                                                isSearchable
                                                onChange={(value) =>
                                                    setData(
                                                        "affecter_entite",
                                                        value
                                                    )
                                                }
                                                className="w-full p-1 border-2 rounded-lg border-stroke-bulto"
                                            />
                                            <InputError
                                                message={errors.affecter_entite}
                                                className="mt-0"
                                            />
                                            {/* <select
                                            id="typeUtilisateur"
                                            className="w-[497px] p-3 rounded-lg border-2 border-stroke-bulto"
                                        >
                                            <option>
                                                Fabrice B., Sanny K., Joelle M.
                                            </option>
                                        </select> */}
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col items-start justify-start w-full gap-2 mt-3">
                                    <label className="font-medium">
                                        Adresse sur la carte
                                    </label>
                                    <div className="flex flex-col items-start justify-start w-full gap-1">
                                        <label className="">
                                            <b>
                                                Lien google maps de l’adresse *
                                            </b>
                                        </label>
                                        <TextInput
                                            id="link_maps"
                                            type="text"
                                            className="w-full"
                                            name="link_maps"
                                            placeholder="Ecrivez adresse maps ici"
                                            onChange={(e) =>
                                                setData(
                                                    "link_maps",
                                                    e.target.value
                                                )
                                            }
                                            error={errors.link_maps}
                                        />
                                        {/* <input
                                        className="w-[497px] rounded-lg bg-white border-stroke-bulto border-[2px] border-solid box-border p-3 text-sm text-grayish-middle font-medium-subtitle"
                                        type="text"
                                        value="https://maps.app.goo.gl/xrzfQ8y8GDkU5i1HA"
                                    /> */}
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
                                <div className="w-[497px] flex flex-row items-start justify-between text-gray-unselected mt-5 space-x-4">
                                    <ButtonStandard
                                        className="text-black bg-gray-100 border-gray-unselected focus:ring-2 focus:ring-[#E1EFFC] hover:bg-gray-200"
                                        disabled={processing}
                                        onClick={() => closeModal(false)}
                                    >
                                        <div
                                            className="relative font-semibold cursor-pointer"
                                            id="annulerText"
                                        >
                                            Annuler
                                        </div>
                                    </ButtonStandard>
                                    <ButtonStandard
                                        className="text-white bg-blueVh focus:ring-2 focus:ring-[#E1EFFC] hover:bg-blueVh"
                                        disabled={processing}
                                    >
                                        <div
                                            className="relative font-semibold cursor-pointer"
                                            id="enregistrerText"
                                        >
                                            Enregistrer
                                        </div>
                                    </ButtonStandard>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            )}
            {/* end modal */}
        </BaseLayout>
    );
}
