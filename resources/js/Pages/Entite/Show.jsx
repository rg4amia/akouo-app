import Sidebar from "@/Components/SideBar";
import Header from "@/Components/Header";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm, usePage } from "@inertiajs/react";
import Footer from "@/Components/Footer";
import { useState } from "react";
import BaseLayout from "@/Layouts/BaseLayout";
import ellipse from "../../../../public/assets/img/ellipse.png";
import messageDetail from "../../../../public/assets/icons/message-detail.svg";
import recordStart from "../../../../public/assets/icons/star-record.svg";
import interactionMsg from "../../../../public/assets/icons/interaction-msg.svg";
import response from "../../../../public/assets/icons/response.svg";
import entiteSvg from "../../../../public/assets/icons/entite_icon.svg";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import SelectOption from "@/Components/SelectOption";

export default function EntiteDetails({ auth, entite }) {
    const [state, setState] = useState(false);

    const {errors} = useForm();

    return (
        <BaseLayout state={state} auth={auth}>
            <Head title={"Detail Entegistrement"} />

            <div className="p-4">
                <div className="flex flex-col items-start justify-start text-[24px] mb-4 w-full"></div>
                <div className="flex flex-col items-start">
                    <div className="flex flex-col items-start justify-start text-[24px] mb-4 w-full">
                        <div className="flex flex-row items-center justify-start gap-2">
                            <img className="w-6 h-6" alt="" src={entiteSvg} />
                            <div className="relative font-semibold">
                                Informations de l’entité
                            </div>
                        </div>
                        <div className="text-[12px] text-[#5F6D7E]">
                            Editez les informations de l’entité
                        </div>
                    </div>

                    {/*  Information Update to user */}
                    <div className="w-full flex flex-col items-start justify-start gap-4 text-left text-base text-gray font-outfit-medium-14">
                        <div className="flex flex-row">
                            <div className="grid grid-rows-3 grid-cols-3 gap-x-2 w-full">
                                <div className="flex flex-col items-start gap-2">
                                    <InputLabel>Nom entité *</InputLabel>
                                    <TextInput
                                        nama="libelle"
                                        className="w-full"
                                        type="text"
                                        value={entite.data.libelle}
                                    />
                                </div>
                                <div className="flex flex-col items-start gap-2">
                                    <InputLabel>Pays *</InputLabel>
                                    <TextInput
                                        nama="libelle"
                                        type="text"
                                        className="w-full"
                                        value={
                                            entite.data.pays ?? "Aucune donnée"
                                        }
                                    />
                                </div>
                                <div className="flex flex-col items-start gap-2">
                                    <InputLabel>Zone *</InputLabel>
                                    <TextInput
                                        nama="zone"
                                        className="w-full"
                                        type="text"
                                        value={
                                            entite.data.zone ?? "Aucune donnée"
                                        }
                                    />
                                </div>
                                <div className="flex flex-col items-start gap-2">
                                    <InputLabel>Type d'entité *</InputLabel>
                                    <TextInput
                                        nama="zone"
                                        type="text"
                                        className="w-full"
                                        value={
                                            entite.data.typeentite ??
                                            "Aucune donnée"
                                        }
                                    />
                                </div>
                                <div className="flex flex-col items-start gap-2">
                                    <InputLabel>Rattachement*</InputLabel>
                                    <TextInput
                                        nama="zone"
                                        className="w-full"
                                        type="text"
                                        value={entite.data.rattachement}
                                    />
                                </div>
                                <div className="flex flex-col items-start gap-2">
                                    <InputLabel>Origine*</InputLabel>
                                    <TextInput
                                        nama="zone"
                                        className="w-full"
                                        type="text"
                                        value={entite.data.entite_origine}
                                    />
                                </div>
                                <div className="flex flex-col items-start gap-2 w-full">
                                    <InputLabel>Affectation(s)*</InputLabel>
                                    <div className="flex flex-row border-stroke-bulto p-2 rounded-lg border w-full gap-2">
                                        {entite.data.useraffecte.map(
                                            (item, index) => (
                                                <span
                                                    key={index}
                                                    className="font-medium rounded-[5px] bg-light-stroke w-full flex flex-row items-center justify-start py-0.5 px-2 box-border text-left text-sm text-grayish-middle"
                                                >
                                                    {item}
                                                </span>
                                            )
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className="m-4 flex flex-col">
                                Adresse sur la carte
                                <img
                                    class="w-[500px] relative rounded-2xl overflow-hidden h-[247px] object-cover"
                                    alt=""
                                    src="image 3.png"
                                />
                            </div>
                        </div>

                        <div
                            className="flex flex-col items-start m-4"
                            role="group"
                        >
                            <div className="w-full bg-base-white max-w-full flex flex-row flex-wrap items-center justify-start py-3 gap-3 border mt-2 rounded-lg tracking-[normal] text-left text-xs text-gray-mid-description font-outfit">
                                <div className="text-[16px] font-medium text-black px-4">
                                    Liste des enregistrements de l’entité
                                </div>
                                <span className="text-sm font-medium">
                                    Filtrer par:
                                </span>
                                <div>
                                    <SelectOption
                                        options={[]}
                                        placeholder="Utilisateur"
                                        error={errors.pay_id}
                                        className="w-[200px]"
                                        onChange={(e) =>
                                            setData("pay_id", e.target.value)
                                        }
                                    />
                                </div>
                                <div>
                                    <SelectOption
                                        options={[]}
                                        placeholder="Cellule"
                                        error={errors.pay_id}
                                        className="w-[200px]"
                                        onChange={(e) =>
                                            setData("pay_id", e.target.value)
                                        }
                                    />
                                </div>
                                <div>
                                    <SelectOption
                                        options={[]}
                                        placeholder="Note Globale"
                                        error={errors.pay_id}
                                        className="w-[200px]"
                                        onChange={(e) =>
                                            setData("pay_id", e.target.value)
                                        }
                                    />
                                </div>
                                <div>
                                    <SelectOption
                                        options={[]}
                                        placeholder="Date"
                                        error={errors.pay_id}
                                        className="w-[200px]"
                                        onChange={(e) =>
                                            setData("pay_id", e.target.value)
                                        }
                                    />
                                </div>

                                <div className=""></div>

                                <table className="min-w-full bg-white border-t mt-1">
                                    <thead>
                                        <tr className="text-xs border-b">
                                            <th className="py-3 px-6 text-left border-r">
                                                Enregistrement (+thème)
                                            </th>
                                            <th className="py-3 px-6 text-left border-r">
                                                Engeristré par
                                            </th>
                                            <th className="py-3 px-6 text-left border-r">
                                                Cellule
                                            </th>
                                            <th className="py-3 px-6 text-left border-r">
                                                Note Globale
                                            </th>
                                            <th className="py-3 px-6 text-left border-r">
                                                Date
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
                                                    Le verset n’est pas trop
                                                    claire. Mieux préciser le
                                                    verset de base.
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
                </div>
            </div>
        </BaseLayout>
    );
}
