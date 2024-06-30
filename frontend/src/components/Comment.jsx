import React from 'react'

const Comment = () => {
    return (
        <>
            <h3 className="mt-6 mb-6 font-semibold">Comments:</h3>
            <div className="px-2 py-2 bg-gray-200 rounded-lg mt-4">
                <div className="flex items-center justify-between">
                    <h3 className="font-bold text-gray-600">Aarya Moktan</h3>
                    <div className="flex justify-center items-center sapce-x-4 ">
                        <p className="text-gray-500 text-sm">16/06/2024</p>
                        <div className="flex items-center justify-center space-x-2 mx-3">
                            <p><FaRegEdit /></p>
                            <p><MdDelete /></p>
                        </div>
                    </div>
                </div>
                <p className="px-4 mt-2">Nice information</p>
            </div>
        </>
    )
}

export default Comment