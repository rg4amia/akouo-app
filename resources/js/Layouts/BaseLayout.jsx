import Footer from "@/Components/Footer";
import HeaderShow from "@/Components/HeaderShow";
import Header from "@/Components/Header";
import Sidebar from "@/Components/SideBar";
//import { toast } from "sonner";
import { usePage } from "@inertiajs/react";
import { useEffect } from "react";

export default function BaseLayout({children , state, auth}) {

    const { flash } = usePage().props;

    useEffect(() => {
        //console.log(flash);
        /* flash.type && toast(flash.message, {
            type: flash.type,
            duration: 2500,
            action: {
                label: <XIcon className="h-4 w-4 shrink-0" />,
                onClick: () => toast.dismiss()
            }
        }); */
    }, []);

   return (
        <div className="flex font-outfit">
            <Sidebar />
            {/* Main Content */}
            <div className="ml-64 flex-1 min-h-screen">
                {state ?
                <Header
                    profileImageSrc="./assets/img/ellipse.png"
                    welcomeMessage="Bienvenue"
                    userName={auth.user.name}
                    smilingFaceIcon="./assets/icons/smiling-face-with-halo.png"
                    notificationCount={10}
                /> :
                <HeaderShow notificationCount={10}/>}
                <main>
                    {children}
                    <Footer/>
                </main>
            </div>
        </div>
   );
}
