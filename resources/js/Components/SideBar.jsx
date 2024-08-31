import React, { useState } from "react";
import { Link } from "@inertiajs/react";
import { ChevronUp, ChevronDown, CogIcon, UserIcon } from "lucide-react";

import iconGrayDashboard from "../../../public/assets/icons/icon-gray-dashboard.svg";
import iconWhiteAkouo from "../../../public/assets/icons/icon_white_akouo.svg";
import akouoIcon from "../../../public/assets/icons/akouo_icon.png";
import entiteIcon from "../../../public/assets/icons/entite.svg";
import userCircle from "../../../public/assets/icons/user-circle.svg";
import btnIconUsersTrans from "../../../public/assets/icons/btn_icon_users_trans.svg";
import entiteMenu from "../../../public/assets/icons/entite_menu.svg";
import logoAkouo from "../../../public/assets/img/logos/logo.png";
import settingSVG from "../../../public/assets/icons/setting.svg";

const NavItem = ({
    href,
    icon,
    text,
    textColor,
    url,
    active,
    iconActive,
    submenuItems,
}) => {
    const [isOpen, setIsOpen] = useState(false);

    let itemClass = "ml-2 mr-3 mt-1 cursor-pointer";
    if (active) {
        switch (url) {
            case "/dashboard":
                itemClass += " bg-grayDescription rounded-lg";
                break;
            case "/record":
                itemClass += " bg-yellowVh rounded-lg";
                break;
            case "/user":
                itemClass += " bg-blueVh rounded-lg";
                break;
            case "/entite":
                itemClass += " bg-greenVh rounded-lg";
                break;
            default:
                break;
        }
    }

    const commonClasses = `flex items-center w-full px-8 py-2 ${
        active ? "text-white font-bold" : textColor
    } hover:text-greenVh group`;

    return (
        <div className={itemClass}>
            {submenuItems ? (
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className={commonClasses}
                >
                    <img
                        className="h-5 w-5 mr-2"
                        loading="lazy"
                        alt={`${text} Icon`}
                        src={`${active ? iconActive : icon}`}
                    />
                    {text}
                    <span className="ml-auto">
                        {isOpen ? (
                            <ChevronUp className="w-4 h-4" />
                        ) : (
                            <ChevronDown className="w-4 h-4" />
                        )}
                    </span>
                </button>
            ) : (
                <Link
                    href={href}
                    as="button"
                    className={commonClasses}
                    aria-label={text}
                >
                    <img
                        className="h-5 w-5 mr-2"
                        loading="lazy"
                        alt={`${text} Icon`}
                        src={`${active ? iconActive : icon}`}
                    />
                    {text}
                </Link>
            )}
            {isOpen && submenuItems && (
                <div className="pl-8">
                    {submenuItems.map((item, index) => (
                        <Link
                            key={index}
                            href={item.href}
                            className={`flex cursor-pointer items-center px-4 py-2 rounded-md w-[193px] text-sm  ${
                                item.active
                                    ? "text-blueVh font-bold bg-white"
                                    : textColor
                            } focus:outline-none`}
                        >
                            {item.icon}
                            <span className="ml-2">{item.text}</span>
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
};

const Sidebar = () => {
    const currentUrl = window.location.pathname;

    const navItems = [
        {
            href: route("dashboard"),
            icon: iconGrayDashboard,
            iconActive: iconWhiteAkouo,
            text: "Tableau de bord",
            textColor: "text-grayDescription font-medium",
            active: currentUrl === "/dashboard",
            url: "/dashboard",
        },
        {
            href: route("record.index"),
            icon: akouoIcon,
            iconActive: iconWhiteAkouo,
            text: "Enregistrements",
            textColor: "text-yellowVh font-medium",
            active: currentUrl === "/record",
            url: "/record",
        },
        {
            href: route("entite.index"),
            icon: entiteIcon,
            iconActive: entiteMenu,
            text: "Entités",
            textColor: "text-greenVh font-medium",
            active: currentUrl === "/entite",
            url: "/entite",
        },
        {
            href: route("user.index"),
            icon: userCircle,
            iconActive: btnIconUsersTrans,
            text: "Utilisateurs",
            textColor: "text-blueVh font-medium",
            active: currentUrl === "/user",
            url: "/user",
            submenuItems: [
                {
                    href: route("user.index"),
                    icon: <UserIcon className="w-4 h-4" />,
                    text: "Liste utilisateur",
                    active: currentUrl === "/user",
                },
                {
                    href: route("parametre.index"),
                    icon: <CogIcon className="w-4 h-4" />,
                    text: "Role & Permission",
                },
            ],
        },
        {
            href: route("parametre.index"),
            icon: settingSVG,
            iconActive: btnIconUsersTrans,
            text: "Paramètres",
            textColor: "text-grayDescription font-medium",
            active: currentUrl === "/parametre",
            url: "/parametre",
            submenuItems: [
                {
                    href: route("parametre.index"),
                    icon: <UserIcon className="w-4 h-4" />,
                    text: "Profile",
                },
                {
                    href: route("parametre.index"),
                    icon: <CogIcon className="w-4 h-4" />,
                    text: "Settings",
                },
            ],
        },
    ];

    return (
        <div className="fixed top-0 left-0 h-full w-64 bg-white border-r border-gray-200 overflow-y-auto">
            <div className="py-4 px-6">
                <a href="/" className="flex items-center">
                    <img
                        src={logoAkouo}
                        alt="Logo"
                        className="w-[136px] h-auto"
                    />
                </a>
                <span className="absolute bottom-0 left-20 top-16 text-sm">
                    Super admins
                </span>
            </div>

            <div className="mt-6">
                {navItems.map((item, index) => (
                    <NavItem key={index} {...item} />
                ))}
            </div>

            <Link
                method="post"
                href={route("logout")}
                as="button"
                className="ml-8 mr-3 mt-1 absolute bottom-5"
            >
                <a className="w-[183px] h-10 rounded-lg border-whitesmoke border-[2px] border-solid box-border overflow-hidden flex flex-row items-start justify-start py-3 px-1.5 gap-[5px] leading-[normal] tracking-[normal] cursor-pointer text-left text-[12px] text-blackish font-outfit">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="size-6 h-4 w-4 relative overflow-hidden shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75"
                        />
                    </svg>
                    <button className="w-[146px] items-center box-border mb-5">
                        Se déconnecter
                    </button>
                </a>
            </Link>
        </div>
    );
};

export default Sidebar;
