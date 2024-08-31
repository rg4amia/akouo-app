import { useCallback, useEffect, useState } from "react";
import BaseLayout from "@/Layouts/BaseLayout";
import { Head, Link, useForm, usePage } from "@inertiajs/react";
import { debounce, pickBy } from "lodash";
import ellipse from "../../../../public/assets/img/ellipse.png";
import SelectOption from "@/Components/SelectOption";
import TextInput from "@/Components/TextInput";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import ButtonStandard from "@/Components/ButtonStandard";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import FlashMessage from "@/Components/FlashMessage";
import InputError from "@/Components/InputError";
import DeleteIcon from "../../../../public/assets/icons/delete.svg";
import EyeIcon from "../../../../public/assets/icons/eye.svg";

export default function UserIndex({ props, auth }) {
    /* Sweet alert Config */
    const MySwal = withReactContent(Swal);

    /* Select 2 Multi */
    const animatedComponents = makeAnimated();

    /* Upload Image Process */
    const [file, setFile] = useState(null);
    const [uploadedFileURL, setUploadedFileURL] = useState(null);

    function handleChange(event) {
        const selectedFile = event.target.files[0];
        if (selectedFile) {
            setFile(selectedFile);
            setData("photo", file);
            setUploadedFileURL(URL.createObjectURL(selectedFile)); // Create a URL for the selected file
        }
    }

    //template header
    const [state, setState] = useState(true);

    const {
        data: people,
        meta,
        filtered,
        attributes,
        pays,
        type_utilisateurs,
        roles,
        entites,
        cellules,
        status_users,
        affectes,
    } = usePage().props.users;

    /* Flash Message */
    const { flash } = usePage().props;
    const [stateSuccess, setStateSuccess] = useState("");
    const [stateError, setStateError] = useState(flash.error);
    const [stateInfo, setStateInfo] = useState(flash.info);

    setTimeout(() => {
        if (stateSuccess || stateError || stateInfo) setStateSuccess(null);
        setStateError(null);
        setStateInfo(null);
    }, 3000);

    useEffect(() => {
        setStateError(flash.error);
    }, [flash]);

    const [params, setParams] = useState(filtered);
    const [pageNumber, setPageNumber] = useState([]);

    const { data, setData, reset, processing, post, errors } = useForm({
        nom: "",
        prenoms: "",
        telephone: "",
        email: "",
        type_utilisateur_id: "",
        pay_id: "",
        role: "",
        password: "",
        entite_origine_id: "",
        status_user_id: "",
        affecter_entite: "",
        cellule_id: "",
        photo: "",
    });

    /*  const reload = useCallback(
        debounce((query) => {
            get(route("user.index"), pickBy(query), {
                preserveState: true,
            });
        }, 90050),
        []
    ); */

    //useEffect(() => reload(params), [params]);

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
        //MySwal.fire('mess')
    }, []);

    const onChange = (event) =>
        setParams({ ...params, [event.target.name]: event.target.value });

    /* Appplication du modal */
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleChangePays = (e) => {
        setData("pay_id", e.target.value);
    };

    /* Function d'ajout d'utilisateur */
    const submit = (e) => {
        e.preventDefault();
        post(route("user.store"), {
            onSuccess: (e) => {
                console.log(e.props.flash);
                setStateSuccess(e.props.flash.success);
                reset([]), closeModal();
                stateSuccess && MySwal.fire(stateSuccess);
            },
        });
    };

    return (
        <BaseLayout state={state} auth={auth}>
            <Head title="Gestion des Utilisateurs" />
            {stateSuccess && (
                <div className="bg-green-100 border-lb-4 border-green-500 text-green-700 p-4 mb-4">
                    <p>{stateSuccess}</p>
                </div>
            )}

            {stateError && (
                <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-4">
                    <p>{stateError}</p>
                </div>
            )}
            {stateInfo && (
                <div className="bg-blue-100 border-l-4 border-blue-500 text-blue-700 p-4 mb-4">
                    <p>{stateInfo}</p>
                </div>
            )}
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
                            id="openModal"
                            onClick={openModal}
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
                            {people.map((user, index) => (
                                <tr className="" key={index}>
                                    <td className="py-1 px-2 border">
                                        <div className="w-full relative border-neutral-600 box-border h-[79px] flex flex-row items-center justify-start p-3 gap-2 text-left text-3xs text-gray-description">
                                            {/*  <div className="w-10 relative rounded-[50%] bg-lightgray h-10"> */}
                                            <img
                                                className="w-10 relative rounded-[50%]"
                                                alt=""
                                                src={ellipse}
                                            />
                                            {/* </div> */}
                                            <div className="flex flex-row items-start justify-start">
                                                <div className="flex flex-col items-start justify-start">
                                                    <b className="relative text-[12px] text-black">
                                                        {user.name}
                                                    </b>
                                                    <div className="rounded bg-bg overflow-hidden flex flex-row items-center justify-center py-0.5 px-1 gap-2.5">
                                                        <div className="relative font-semibold">
                                                            {user.telephone}
                                                        </div>
                                                    </div>
                                                    <div className="relative font-medium">
                                                        {user.email}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="py-1 px-2 border">
                                        <span className="font-medium">
                                            {" "}
                                            {user.pays}
                                        </span>
                                    </td>
                                    <td className="py-1 px-6 border">
                                        <div className="rounded bg-bg text-greenVh overflow-hidden flex flex-row items-center justify-center py-1 px-2 gap-2.5">
                                            <div className="relative font-semibold">
                                                {user.cellule}
                                            </div>
                                        </div>
                                    </td>
                                    <td className="py-1 px-6 border">
                                        <div className="rounded-md bg-bg flex items-center justify-center py-1">
                                            {user.typeutilisateur}
                                        </div>
                                    </td>
                                    <td className="py-1 px-6 border">
                                        <div className="rounded-md bg-bg flex items-center justify-center py-1">
                                            {user.categorie}
                                        </div>
                                    </td>
                                    <td className="py-1 px-6 border">
                                        {user.entiteaffecte.length > 0 ? (
                                            <ul>
                                                {user.entiteaffecte.map(
                                                    (entite, index) => (
                                                        <li
                                                            className="rounded-md bg-bg flex items-center justify-center py-1 mt-1"
                                                            key={index}
                                                        >
                                                            {entite}
                                                        </li>
                                                    )
                                                )}
                                            </ul>
                                        ) : (
                                            <p>Aucune entité affectée.</p>
                                        )}
                                    </td>
                                    <td className="py-1 px-6 border">
                                        <div
                                            className={`${
                                                user.statususer === "Validé"
                                                    ? "bg-greenVh"
                                                    : user.statususer ===
                                                      "En attente"
                                                    ? "bg-yellowVh"
                                                    : user.statususer ===
                                                      "Rejeté"
                                                    ? "bg-redVh"
                                                    : ""
                                            } rounded-md text-white flex items-center justify-center py-1 px-1.5 mt-1`}
                                        >
                                            <div className="relative font-semibold">
                                                {user.statususer}
                                            </div>
                                        </div>
                                    </td>
                                    <td className="py-1 px-6 border">
                                        <div className="relative border-neutral-600 h-[79px] flex flex-row items-center justify-start py-3 px-4 gap-2 text-center text-xs text-blackish font-outfit-semibold-12">
                                            <Link
                                                href={route("user.show", user)}
                                                as="button"
                                                className="cursor-pointer rounded-lg bg-base-white border-stroke-bulto border-[1px] border-solid flex flex-row items-center justify-center p-3 gap-1"
                                            >
                                                <img
                                                    className="w-5 relative h-5 overflow-hidden shrink-0"
                                                    alt=""
                                                    src={EyeIcon}
                                                />
                                                <div className="w-[23px] relative font-semibold hidden">
                                                    Voir
                                                </div>
                                            </Link>
                                            <Link
                                                href={route(
                                                    "user.destroy",
                                                    user
                                                )}
                                                method="delete"
                                                as="button"
                                                className="flex flex-col items-start justify-end gap-2 text-left text-sm text-gray-700 font-text-s-medium"
                                            >
                                                <div className="cursor-pointer rounded-lg bg-base-white border-stroke-bulto border-[1px] border-solid flex flex-row items-center justify-center p-3 gap-1">
                                                    <img
                                                        className="w-5 relative h-5 overflow-hidden shrink-0"
                                                        alt=""
                                                        src={DeleteIcon}
                                                    />
                                                </div>
                                                <div className="w-[59px] relative tracking-[-0.1px] leading-[20px] font-medium hidden">
                                                    Headline
                                                </div>
                                            </Link>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            <ul className="flex items-center gap-x-1 mt-10">
                {meta.links.map((item, index) => (
                    <Link
                        disabled={item.active == true ? true : false}
                        as="button"
                        className={`${
                            item.active == true
                                ? "text-white cursor-default bg-green-vh"
                                : "text-gray-800"
                        } py-[7px] px-3 rounded-lg flex items-center justify-center box-border`}
                        href={item.url || ""}
                    >
                        <span
                            className="font-semibold"
                            dangerouslySetInnerHTML={{
                                __html: item.label,
                            }}
                        />
                    </Link>
                ))}
            </ul>
            {/* start modal */}

            {isModalOpen && (
                <div
                    id="userModal"
                    className="fixed z-50 inset-0 bg-gray-900 bg-opacity-30 backdrop-blur-sm overflow-y-auto h-full px-4"
                >
                    <div className="top-3 mx-auto shadow-xl justify-between rounded-3xl bg-white w-1/3">
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
                            <form onSubmit={submit}>
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
                                        Remplissez les informations de
                                        l’utilisateur et confirmez
                                    </div>
                                </div>

                                {/* Form Fields */}
                                <div className="flex flex-col text-gray gap-3 gap-x-1">
                                    {/* Profile Input Image */}
                                    <div className="flex flex-row items-center justify-center relative gap-2.5">
                                        <label
                                            htmlFor="file-input"
                                            className="cursor-pointer"
                                        >
                                            <img
                                                className="w-20 h-20 z-0 object-cover rounded-full"
                                                alt="Profile"
                                                src={
                                                    uploadedFileURL ||
                                                    "./assets/icons/ellipse-cricle.svg"
                                                } // Show uploaded file or default profile image
                                            />
                                            <img
                                                className="w-8 h-8 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none"
                                                alt="Camera Icon"
                                                src="./assets/icons/camera-alt.svg"
                                            />
                                        </label>

                                        {/* Hidden File Input */}
                                        <input
                                            id="file-input"
                                            type="file"
                                            onChange={handleChange}
                                            className="hidden"
                                        />
                                    </div>
                                    <InputError
                                        message={errors.photo}
                                        className="mt-0"
                                    />

                                    {/*  Name and Surname */}
                                    <div className="flex flex-row gap-3 w-full">
                                        <div className="flex flex-col gap-1">
                                            <label
                                                htmlFor="nom"
                                                className="font-bold"
                                            >
                                                Nom*
                                            </label>
                                            <TextInput
                                                id="nom"
                                                type="text"
                                                name="nom"
                                                placeholder="Ecrivez le nom ici"
                                                onChange={(e) =>
                                                    setData(
                                                        "nom",
                                                        e.target.value
                                                    )
                                                }
                                                error={errors.nom}
                                            />
                                            <InputError
                                                message={errors.nom}
                                                className="mt-0"
                                            />
                                        </div>
                                        <div className="flex flex-col gap-1">
                                            <label
                                                htmlFor="prenom"
                                                className="font-bold"
                                            >
                                                Prénoms*
                                            </label>
                                            <TextInput
                                                id="prenoms"
                                                type="text"
                                                name="prenoms"
                                                placeholder="Ecrivez le nom ici"
                                                onChange={(e) =>
                                                    setData(
                                                        "prenoms",
                                                        e.target.value
                                                    )
                                                }
                                                error={errors.prenoms}
                                            />
                                            <InputError
                                                message={errors.prenoms}
                                                className="mt-0"
                                            />
                                        </div>
                                    </div>

                                    {/* User Type and Category */}
                                    <div className="flex flex-row gap-3">
                                        <div className="flex flex-col gap-1 w-full">
                                            <label
                                                htmlFor="typeUtilisateur"
                                                className="font-bold"
                                            >
                                                Type d’utilisateur*
                                            </label>

                                            <SelectOption
                                                placeholder="Selectionner type d'utilisateur"
                                                options={type_utilisateurs}
                                                error={
                                                    errors.type_utilisateur_id
                                                }
                                                onChange={(e) =>
                                                    setData(
                                                        "type_utilisateur_id",
                                                        e.target.value
                                                    )
                                                }
                                            />
                                            <InputError
                                                message={
                                                    errors.type_utilisateur_id
                                                }
                                                className="mt-0"
                                            />
                                        </div>

                                        <div className="flex flex-col gap-1 w-full">
                                            <label
                                                htmlFor="categorieUtilisateur"
                                                className="font-bold"
                                            >
                                                Catégorie d’utilisateur*
                                            </label>
                                            <SelectOption
                                                options={roles}
                                                placeholder="Selectionner catégorie"
                                                error={errors.role}
                                                onChange={(e) =>
                                                    setData(
                                                        "role",
                                                        e.target.value
                                                    )
                                                }
                                            />
                                            <InputError
                                                message={errors.role}
                                                className="mt-0"
                                            />
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
                                            <TextInput
                                                id="telephone"
                                                type="tel"
                                                name="telephone"
                                                error={errors.telephone}
                                                placeholder="Ecrivez le telephone ici"
                                                onChange={(e) =>
                                                    setData(
                                                        "telephone",
                                                        e.target.value
                                                    )
                                                }
                                            />
                                            <InputError
                                                message={errors.telephone}
                                                className="mt-0"
                                            />
                                        </div>

                                        <div className="flex flex-col gap-1">
                                            <label
                                                htmlFor="email"
                                                className="font-bold"
                                            >
                                                Email*
                                            </label>
                                            <TextInput
                                                id="email"
                                                type="email"
                                                name="email"
                                                error={errors.email}
                                                placeholder="Ecrivez le mail ici"
                                                onChange={(e) =>
                                                    setData(
                                                        "email",
                                                        e.target.value
                                                    )
                                                }
                                            />
                                            <InputError
                                                message={errors.email}
                                                className="mt-0"
                                            />
                                        </div>
                                    </div>

                                    {/* Password */}
                                    <label
                                        htmlFor="password"
                                        className="font-bold"
                                    >
                                        Mot de passe*
                                    </label>

                                    <TextInput
                                        id="email"
                                        type="password"
                                        name="email"
                                        placeholder="Ecrivez le Mot passe ici"
                                        error={errors.password}
                                        onChange={(e) =>
                                            setData("password", e.target.value)
                                        }
                                    />
                                    <InputError
                                        message={errors.password}
                                        className="mt-0"
                                    />

                                    {/*  Country, Origin Entity, Cell, Assigned Entities, and Status */}

                                    <div className="flex flex-row gap-3">
                                        <div className="flex flex-col gap-1 w-full">
                                            <label
                                                htmlFor="pays"
                                                className="font-bold"
                                            >
                                                Pays*
                                            </label>
                                            <SelectOption
                                                name="pay_id"
                                                placeholder="Selectionner pays"
                                                options={pays}
                                                error={errors.pay_id}
                                                onChange={handleChangePays}
                                            />
                                            <InputError
                                                message={errors.pay_id}
                                                className="mt-0"
                                            />
                                        </div>

                                        <div className="flex flex-col gap-1 w-full">
                                            <label
                                                htmlFor="entiteOrigine"
                                                className="font-bold"
                                            >
                                                Entité d’origine*
                                            </label>
                                            <SelectOption
                                                options={entites}
                                                placeholder="Selectionner entité d’origine"
                                                name="entite_origine_id"
                                                error={errors.entite_origine_id}
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

                                    <div className="flex flex-row gap-3">
                                        <div className="flex flex-col gap-1 w-full">
                                            <label
                                                htmlFor="cellule"
                                                className="font-bold"
                                            >
                                                Cellule*
                                            </label>
                                            <SelectOption
                                                options={cellules}
                                                placeholder="Selectionner cellule"
                                                error={errors.cellule_id}
                                                onChange={(e) =>
                                                    setData(
                                                        "cellule_id",
                                                        e.target.value
                                                    )
                                                }
                                            />
                                            <InputError
                                                message={errors.cellule_id}
                                                className="mt-0"
                                            />
                                        </div>

                                        <div className="flex flex-col gap-1 w-full">
                                            <label
                                                htmlFor="statut"
                                                className="font-bold"
                                            >
                                                Statut
                                            </label>
                                            <SelectOption
                                                name="status_user_id"
                                                placeholder="Selectionner statut"
                                                className="rounded-lg border-2 border-stroke-bulto p-2"
                                                options={status_users}
                                                error={errors.status_user_id}
                                                onChange={(e) =>
                                                    setData(
                                                        "status_user_id",
                                                        e.target.value
                                                    )
                                                }
                                            />
                                            <InputError
                                                message={errors.status_user_id}
                                                className="mt-0"
                                            />
                                        </div>
                                    </div>

                                    <div className="flex flex-col">
                                        <div className="flex flex-row gap-3">
                                            <div className="flex flex-col gap-1 w-full">
                                                <label
                                                    htmlFor="entitesAffectees"
                                                    className="font-bold"
                                                >
                                                    Entité(s) affectée(s)*
                                                </label>

                                                <Select
                                                    name="affecter_entite"
                                                    closeMenuOnSelect={true}
                                                    placeholder="Selectionner entité(s) affectée(s)"
                                                    components={
                                                        animatedComponents
                                                    }
                                                    defaultValue={[]}
                                                    isMulti
                                                    isClearable
                                                    options={entites}
                                                    isSearchable
                                                    onChange={(value) =>
                                                        setData(
                                                            "affecter_entite",
                                                            value
                                                        )
                                                    }
                                                    className="rounded-lg border-2 border-stroke-bulto p-1"
                                                />
                                                <InputError
                                                    message={
                                                        errors.affecter_entite
                                                    }
                                                    className="mt-0"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-row w-full gap-2">
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
                                        {/* <button className="w-full relative shadow-[0px_1px_2px_rgba(0,_0,_0,_0.08)] rounded-lg bg-blueVh flex flex-row items-center justify-center py-3 px-6 box-border text-left text-[16px] text-white font-outfit">
                                            <div
                                                className="relative font-semibold cursor-pointer"
                                                id="enregistrerText"
                                            >
                                                Enregistrer
                                            </div>
                                        </button> */}
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    {/* end modal */}
                </div>
            )}
        </BaseLayout>
    );
}
