import React from 'react';

function AnswerListSkeleton(props) {
    return (
        <div className="border-b border-slate-200 py-2 animate-pulse">
            <div className="flex items-top gap-x-4">
                {/* Skeleton untuk gambar profile */}
                <div className="w-[50px] h-[50px] bg-gray-300 rounded-full"></div>

                <div className="flex w-full justify-between">
                    <div className="w-full">
                        {/* Skeleton untuk nama dan tanggal */}
                        <div className="w-1/3 h-4 bg-gray-300 rounded mb-2"></div>
                        <div className="w-1/4 h-3 bg-gray-200 rounded mb-4"></div>

                        {/* Skeleton untuk attachment */}
                        <div className="grid grid-cols-4 w-full gap-4 py-4 mt-3 pe-5">
                            {Array.from({length: 4}).map((_, index) => (
                                <div key={index}
                                     className="w-full border bg-gray-100 rounded-md p-4 flex items-center space-x-4 animate-pulse">
                                    <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
                                    <div className="flex flex-col justify-center space-y-2">
                                        <div className="w-2/3 h-3 bg-gray-300 rounded"></div>
                                        <div className="w-1/2 h-2 bg-gray-200 rounded"></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div>
                        {/* Skeleton untuk input nilai */}
                        <label className="text-xs text-right text-gray-300">Nilai</label>
                        <div className="flex items-center">
                            <div className="w-10 h-6 bg-gray-300 rounded-sm"></div>
                            <div className="w-12 h-3 bg-gray-300 rounded ml-2"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AnswerListSkeleton;