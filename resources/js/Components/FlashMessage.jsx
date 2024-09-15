import { usePage } from '@inertiajs/react';
import { useEffect, useState } from 'react';

function FlashMessage({ stateSuccess, stateError, stateInfo }) {
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
