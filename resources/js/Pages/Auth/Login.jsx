import Checkbox from "@/Components/Checkbox";
import GuestLayout from "@/Layouts/GuestLayout";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Head, Link, useForm } from "@inertiajs/react";
import Header from "@/Components/Auth/Header";
import ConnectButton from "@/Components/Auth/ConnectButton";
import BackgroundImage from "@/Components/Auth/BackgroundImage";

export default function Login({ status, canResetPassword }) {
    
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
        telephone: "",
        remember: false,
    });

    const submit = (e) => {
        e.preventDefault();

        post(route("login"), {
            onFinish: () => reset("password"),
        });
    };

    return (
        <div className="flex mt-10 mb-5 justify-center font-outfit">
            {/*Première colonne: 444x876 */}
            <div className="w-[580px] h-[780px] rounded-lg pt-10 pl-20 mr-8 mb-2">

                <Head title="Connexion"></Head>

                <Header
                    title="Se Connecter"
                    description="Entrez vos information pour vous connectez"
                />

                <div className="p-2 mt-2 flex justify-between">
                    <form onSubmit={submit}>
                        {/*Email */}
                        <div className="mb-2 relative">
                            <label
                                htmlFor="email"
                                className="block text-gray-700 font-bold mb-2"
                            >
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Votre email"
                                className="w-full px-10 py-3 border border-stokelightblue rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E1EFFC]"
                                onChange={(e) =>
                                    setData("email", e.target.value)
                                }
                            />
                            <div className="absolute inset-y-0 left-0 pl-3 top-8 flex items-center pointer-events-none">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="size-5 text-grayDescription"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 1 0-2.636 6.364M16.5 12V8.25"
                                    />
                                </svg>
                            </div>
                            <InputError
                                message={errors.email}
                                className="mt-2"
                            />
                        </div>

                        {/*Mot de passe */}
                        <div className="mb-2 relative">
                            <label
                                htmlFor="password"
                                className="block text-gray-700 font-bold mb-2"
                            >
                                Mot de Passe
                            </label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                placeholder="Votre mot de passe"
                                className="w-full px-10 py-3 border border-stokelightblue rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E1EFFC]"
                                onChange={(e) =>
                                    setData("password", e.target.value)
                                }
                            />
                            <div className="absolute inset-y-0 left-0 pl-3 top-8 flex items-center pointer-events-none">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="size-5 text-grayDescription"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
                                    />
                                </svg>
                            </div>
                            <InputError
                                message={errors.password}
                                className="mt-2"
                            />
                        </div>

                        <div className="flex justify-between gap-4 mt-5 mb-5">
                            <div className="flex flex-col">
                                <div className="flex-row space-x-2">
                                    <input
                                        type="checkbox"
                                        value=""
                                        className="mr-3"
                                    />
                                    Se sourvenir de moi
                                </div>
                            </div>
                            <div className="flex flex-col space-y-2">
                                <span className="font-bold">
                                    Mot de passe oublié ?
                                </span>
                            </div>
                        </div>

                        {/*Submit Button */}
                        <ConnectButton className="" disabled={processing}>
                            Se connecter
                        </ConnectButton>

                        <p className="text-center text-sm text-[#2B2B2B80] font-medium p-4">
                            En créant ce compte, vous acceptez nos Conditions
                            Générales d'Utilisation (CGU) et notre Politique de
                            Confidentialité.
                        </p>

                        <div className="text-center">
                            <button
                                type="submit"
                                className=" bg-[#CFAE1F]  hover:bg-[#d7bb3b]  w-1/3 text-white py-3 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E1EFFC]"
                            >
                                S'enregistrer
                            </button>

                            <p className="text-grayDescription font-medium text-sm mt-5">
                                (c) Copyrights, Vases d’Honneur, Akouo système
                                Tous Droits Réservés, Propriété Privée
                            </p>
                        </div>
                    </form>
                </div>
            </div>

            {/* Deuxième colonne: 742x912 avec une image de fond */}
            <BackgroundImage />
        </div>
    );
}
