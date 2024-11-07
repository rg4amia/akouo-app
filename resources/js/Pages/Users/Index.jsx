import { useCallback, useEffect, useState } from "react";
import BaseLayout from "@/Layouts/BaseLayout";
import { Head, Link, useForm, usePage } from "@inertiajs/react";
import ellipse from "../../../../public/assets/img/ellipse.png";
import SelectOption from "@/Components/SelectOption";
import TextInput from "@/Components/TextInput";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import ButtonStandard from "@/Components/ButtonStandard";
import InputError from "@/Components/InputError";
import DeleteIcon from "../../../../public/assets/icons/delete.svg";
import EyeIcon from "../../../../public/assets/icons/eye.svg";
import { toast } from "react-toastify";

export default function UserIndex({ props, auth }) {

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
    const [state] = useState(true);

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
    } = usePage().props.users;

    /* Flash Message */
    const { flash } = usePage().props;

    useEffect(() => {
        flash.success && toast.success(flash.success);
        flash.error && toast.error(flash.error);
        flash.info && toast.error(flash.info);
    }, [flash]);

    const [params, setParams] = useState(filtered);
    const [pageNumber, setPageNumber] = useState([]);

    const { data, setData, reset, processing, post, get, errors } = useForm({
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
        photo: [],
    });

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

    const handledSearch = (e) => {
       // get(route("user.index", e.target.value));
    };

    /* Function d'ajout d'utilisateur */
    const submit = (e) => {
        e.preventDefault();
        post(route("user.store"), {
            onSuccess: (e) => {
                reset([]);
                closeModal();
            },
        });
    };

    return (
        <BaseLayout state={state} auth={auth}>
            <Head title="Gestion des Utilisateurs" />

            <div className="flex flex-col items-start m-4" role="group">
                <div className="flex flex-row justify-between items-center w-full">
                    <div>
                        <div className="flex items-center text-2xl font-semibold font-outfit">
                            <svg
                                className="mr-2 w-5 h-5 fill-blueVh size-6"
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
                            <div className="flex flex-row gap-2 justify-start items-center">
                                <div className="bg-white rounded-md">
                                    <img
                                        className="overflow-hidden relative w-5 h-5 shrink-0"
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

                {/* Champ Recherche des utilisateurs */}
                <div className="flex relative mt-3 mb-3 font-outfit">
                    <input
                        type="text"
                        id="search"
                        name="search"
                        placeholder="Recherche ..."
                        className="w-[400px] px-10 py-2 border border-stokelightblue rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E1EFFC]"
                        onChange={handledSearch}
                    />
                    <div className="flex absolute inset-y-0 top-0 left-0 items-center pl-3 pointer-events-none">
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
                            className="overflow-hidden w-6 h-6 shrink-0 size-6"
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

                    <table className="mt-1 min-w-full bg-white border-t">
                        <thead>
                            <tr className="text-xs border-b">
                                <th className="px-6 py-3 text-left border-r">
                                    NOM, Prénoms
                                </th>
                                <th className="px-6 py-3 text-left border-r">
                                    Pays
                                </th>
                                <th className="px-6 py-3 text-left border-r">
                                    Cellule
                                </th>
                                <th className="px-6 py-3 text-left border-r">
                                    Type d’utilisateur
                                </th>
                                <th className="px-6 py-3 text-left border-r">
                                    Catégorie utilisateur
                                </th>
                                <th className="px-6 py-3 text-left border-r">
                                    Entité(s) affectée(s)
                                </th>
                                <th className="px-6 py-3 text-left border-r">
                                    Décision
                                </th>
                                <th className="px-6 py-3 text-left border-r">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody className="text-xs text-gray-600">
                            {people.map((user, index) => (
                                <tr className="" key={index}>
                                    <td className="px-2 py-1 border">
                                        <div className="w-full relative border-neutral-600 box-border h-[79px] flex flex-row items-center justify-start p-3 gap-2 text-left text-3xs text-gray-description">
                                            {/*  <div className="w-10 relative rounded-[50%] bg-lightgray h-10"> */}

                                            {user.avatar != null ? (
                                                <img
                                                    className="w-10 relative rounded-[50%]"
                                                    alt=""
                                                    src={user.avatar}
                                                />
                                            ) : (
                                                <img
                                                    className="w-10 relative rounded-[50%]"
                                                    alt=""
                                                    src={ellipse}
                                                />
                                            )}
                                            {/* </div> */}
                                            <div className="flex flex-row justify-start items-start">
                                                <div className="flex flex-col justify-start items-start">
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
                                    <td className="px-2 py-1 border">
                                        <span className="font-medium">
                                            {" "}
                                            {user.pays}
                                        </span>
                                    </td>
                                    <td className="px-6 py-1 border">
                                        <div className="rounded bg-bg text-greenVh overflow-hidden flex flex-row items-center justify-center py-1 px-2 gap-2.5">
                                            <div className="relative font-semibold">
                                                {user.cellule}
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-1 border">
                                        <div className="flex justify-center items-center py-1 rounded-md bg-bg">
                                            {user.typeutilisateur}
                                        </div>
                                    </td>
                                    <td className="px-6 py-1 border">
                                        <div className="flex justify-center items-center py-1 rounded-md bg-bg">
                                            {user.categorie}
                                        </div>
                                    </td>
                                    <td className="px-6 py-1 border">
                                        <div className="flex flex-row justify-center py-1 rounded-md flex-items-center bg-bg">
                                            {user.entiteaffecte.length > 0
                                                ? user.entiteaffecte.join(
                                                      " || "
                                                  )
                                                : "Aucune entité affectée."}
                                        </div>
                                    </td>
                                    <td className="px-6 py-1 border">
                                        <div
                                            className={`rounded-md text-white text-[10px] flex items-center justify-center py-1 px-1.5 mt-1 ${
                                                {
                                                    Validé: "bg-greenVh",
                                                    "En attente": "bg-yellowVh",
                                                    Rejeté: "bg-redVh",
                                                }[user.statususer] || ""
                                            }`}
                                        >
                                            <div className="relative font-semibold">
                                                {user.statususer}
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-1 border">
                                        <div className="relative border-neutral-600 h-[70px] flex flex-row items-center justify-start py-2 px-2 gap-2 text-center text-xs text-blackish font-outfit-semibold-12">
                                            <Link
                                                href={route("user.show", user)}
                                                as="button"
                                                className="cursor-pointer rounded-lg bg-base-white border-stroke-bulto border-[1px] border-solid flex flex-row items-center justify-center p-3 gap-1"
                                            >
                                                <img
                                                    className="overflow-hidden relative h-3 shrink-0"
                                                    alt=""
                                                    src={EyeIcon}
                                                />
                                                <div className="w-[23px] relative font-semibold hidden">
                                                    Voir
                                                </div>
                                            </Link>
                                            {auth.user.id !== user.id && (
                                                <Link
                                                    href={route(
                                                        "user.destroy",
                                                        user
                                                    )}
                                                    method="delete"
                                                    as="button"
                                                    className="p-3 rounded-lg border bg-base-white border-stroke-bulto"
                                                >
                                                    <img
                                                        className="h-3"
                                                        alt="Supprimer"
                                                        src={DeleteIcon}
                                                    />
                                                </Link>
                                            )}
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            <ul className="flex gap-x-1 justify-between items-center p-6 mt-10 w-full">
                <div className="flex justify-end items-center">
                    {meta.links.map((item, index) => (
                        <Link
                            key={item}
                            disabled={!item.url}
                            as="button"
                            className={`py-[7px] px-3 rounded-lg flex items-center justify-center box-border ${
                                item.url
                                    ? "text-white cursor-pointer bg-green-vh hover:bg-green-600"
                                    : "text-gray-400 cursor-not-allowed bg-gray-200"
                            }`}
                            href={item.url || "#"}
                            preserveState
                            preserveScroll
                        >
                            <span
                                className="font-semibold border-stroke-bulto"
                                dangerouslySetInnerHTML={{ __html: item.label }}
                            />
                        </Link>
                    ))}
                </div>
                <div className="flex justify-end items-center">
                    <select
                        id="load"
                        name="load"
                        onChange={(e) => {
                            const newLoad = e.target.value;
                            router.get(
                                route("users.index"),
                                { load: newLoad },
                                {
                                    preserveState: true,
                                    preserveScroll: true,
                                    replace: true,
                                }
                            );
                        }}
                        value={params.load}
                        className="p-2 rounded-xl border-stroke-bulto"
                    >
                        {pageNumber.map((page, index) => (
                            <option key={index} value={page}>
                                {page}
                            </option>
                        ))}
                    </select>
                </div>
            </ul>
            {/* start modal */}

            {isModalOpen && (
                <div
                    id="userModal"
                    className="overflow-y-auto fixed inset-0 z-50 px-4 h-full bg-gray-900 bg-opacity-30 backdrop-blur-sm"
                >
                    <div className="relative top-3 mx-auto w-1/3 bg-white rounded-3xl shadow-xl">
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
                                    <div className="flex flex-row gap-2 justify-start items-center">
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
                                <div className="flex flex-col gap-x-1 gap-3 text-gray">
                                    {/* Profile Input Image */}
                                    <div className="flex flex-row items-center justify-center relative gap-2.5">
                                        <label
                                            htmlFor="file-input"
                                            className="cursor-pointer"
                                        >
                                            <img
                                                className="object-cover z-0 w-20 h-20 rounded-full"
                                                alt="Profile"
                                                src={
                                                    uploadedFileURL ||
                                                    "./assets/icons/ellipse-cricle.svg"
                                                } // Show uploaded file or default profile image
                                            />
                                            <img
                                                className="absolute top-1/2 left-1/2 w-8 h-8 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none"
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
                                                className="p-2 rounded-lg border-2 border-stroke-bulto"
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
                                                    className="p-1 rounded-lg border-2 border-stroke-bulto"
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
                                    <div className="flex flex-row gap-2 w-full">
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
