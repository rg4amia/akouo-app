import logoVh from "../../../public/assets/img/logo_vh_multi.png";

export default function Footer() {
    return (
        <div className="flex flex-col items-start m-4">
            <div className="bottom-0 left-64 right-0 w-full flex flex-row items-end justify-between text-left text-xs text-gray-mid-description">
                <div className="font-medium">
                    (c) Copyrights, Vases d’Honneur, Tous Droits Réservés,
                    Propriété Privée
                </div>
                <div className="flex flex-row items-end justify-start gap-1.5 text-right">
                    <div className="relative">
                        <span className="font-medium">
                            Partager l’amour de{" "}
                        </span>
                        <span className="font-extrabold text-goldenrod">
                            CHRIST
                        </span>
                        <span className="font-medium">
                            {" "}
                            pour changer le monde
                        </span>
                    </div>
                    <img
                        className="w-[73px] relative h-10 object-cover"
                        alt=""
                        src={logoVh}
                    />
                </div>
            </div>
        </div>
    );
}
