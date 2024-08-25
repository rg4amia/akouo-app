export default function Header({title, description}) {
    return (
    <div className="flex flex-col space-y-2">
      <div>
        <img src="./assets/img/logos/logo.png" alt="Logo Akouo" className="w-[136px] h-auto" />
      </div>
      <div className="p-1">
        <h3 className="text-2xl font-black">{title}</h3>
        <p className="text-[#2B2B2B80]">{description}</p>
      </div>
    </div>
    );
}
