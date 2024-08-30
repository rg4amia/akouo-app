import Footer from "@/Components/Footer";
import HeaderShow from "@/Components/HeaderShow";
import Header from "@/Components/Header";
import Sidebar from "@/Components/SideBar";
import ellipse from '../../../public/assets/img/ellipse.png';

export default function BaseLayout({children , state, auth}) {

   return (
        <div className="flex font-outfit">
            <Sidebar />
            {/* Main Content */}
            <div className="ml-64 flex-1 min-h-screen">
                {state ?
                <Header
                    profileImageSrc={ellipse}
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
