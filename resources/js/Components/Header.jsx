const Header = (props) => {
  return (
    <header className="sticky top-0 bg-white z-10 flex justify-between py-3 px-6 space-x-6 border-b border-gray-200">
      {/* User Profile */}
      <div className="flex items-center gap-3">
        <img
          className="w-10 h-10 object-cover"
          alt="Ellipse"
          src={props.profileImageSrc || './assets/img/ellipse.png'}
        />
        <div className="flex-col items-start justify-center">
          <div className="text-grayDescription text-sm">{props.welcomeMessage || 'Bienvenue'}</div>
          <div className="font-bold text-black text-xl">{props.userName || 'Joel KOFFI'}</div>
        </div>
        <img
          className="w-6 h-6"
          alt="Smiling face with halo"
          src={props.smilingFaceIcon || './assets/icons/smiling-face-with-halo.png'}
        />
      </div>

      {/* Notifications */}
      <div className="relative">
        <button
          className="w-[40px] h-10 flex items-center justify-end bg-jauneVh rounded-xl text-sm text-white p-2"
          aria-label="Notifications"
        >
          <svg
            className="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="16"
            viewBox="0 0 14 16"
            fill="currentColor"
          >
            <path
              d="M13.445,7.447A3.185,3.185,0,0,1,14,9.088l-.022.148a3.252,3.252,0,0,1-.774,2.2,4.069,4.069,0,0,1-2.572,1.232,34.465,34.465,0,0,1-7.306,0A4.022,4.022,0,0,1,.8,11.439,3.207,3.207,0,0,1,0,9.249v-.1A3.3,3.3,0,0,1,.6,7.469L.659,7.4A3.035,3.035,0,0,0,1.389,5.99V4.54a.631.631,0,0,1,.653-.381.619.619,0,0,1,.553.507v1.45a.353.353,0,0,1,0,.077A4.166,4.166,0,0,1,1.586,8.151a1.982,1.982,0,0,0-.321,1v.155a2.022,2.022,0,0,0,.482,1.373,2.768,2.768,0,0,0,1.71.788,33.927,33.927,0,0,0,7.073,0,2.773,2.773,0,0,0,1.746-.824,2,2,0,0,0,.46-1.33V9.151a2.056,2.056,0,0,0-.314-1.007,4.175,4.175,0,0,1-1.067-1.957.358.358,0,0,1,0-.077V4.653C11.143,2.527,8.944,1.211,7.03,1.211a4.853,4.853,0,0,0-2.323.584.649.649,0,0,1-.639,0A.595.595,0,0,1,4.093.739,6.108,6.108,0,0,1,6.971,0C9.5,0,12.334,1.732,12.656,4.512v1.45a2.973,2.973,0,0,0,.731,1.408A.538.538,0,0,1,13.445,7.447Zm-6.238,7.3a1.641,1.641,0,0,0,1.072-.624h.007a.647.647,0,0,1,.888-.081.592.592,0,0,1,.084.855,2.926,2.926,0,0,1-4.581,0,.592.592,0,0,1,.084-.855.647.647,0,0,1,.888.081,1.661,1.661,0,0,0,1.558.624Z"
              fill="#FFFFFF"
            />
          </svg>
          <span className="w-5 h-5 absolute top-0 right-[-7.55%] rounded-full bg-greenVh text-white text-xs border-white border-[2px] flex items-center justify-center">
            {props.notificationCount || 21}
          </span>
        </button>
      </div>
    </header>
  );
};

export default Header;