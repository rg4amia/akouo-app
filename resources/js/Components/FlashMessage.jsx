import { usePage } from '@inertiajs/react';
import { useEffect, useState } from 'react';

function FlashMessage() {

    const {flash} = usePage().props;
    const [stateSuccess, setStateSuccess] = useState(flash.success);
    const [stateError, setStateError] = useState(flash.error);
    const [stateInfo, setStateInfo] = useState(flash.info);

  // Automatically hide the flash messages after 5 seconds (5000 ms)
  useEffect(() => {

    console.log('flash message:______'+ flash.success +'______');
    if (stateSuccess || stateError || stateInfo) {
      const timer = setTimeout(() => {
        setStateSuccess(null);
        setStateError(null);
        setStateInfo(null);
      }, 300);

      // Cleanup the timer when the component unmounts or when flash state changes
      return () => clearTimeout(timer);
    }
  }, [stateSuccess, stateError, stateInfo]);

  return (
    <>
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
    </>
  );
}

export default FlashMessage;
