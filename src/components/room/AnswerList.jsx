import React, { useState, useEffect } from 'react';
import { DateFormat } from "@/utils/FormattingString.jsx";
import { formatFileSize, handleDownload, shortenFileName } from "@/utils/FileUtils.jsx";

function AnswerList(props) {
    const { answer, onNilaiChange } = props;
    const [nilai, setNilai] = useState(answer.point || '');  // Menyimpan nilai jawaban

    const handleNilaiUpdate = () => {
        if (nilai !== answer.nilai) {
            onNilaiChange(answer.id, nilai);
        }
    };

    const handleBlur = () => {
        handleNilaiUpdate();
    };


    const image = 'https://images.unsplash.com/photo-1526413232644-8a40f03cc03b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

    return (
        <div className="border-b border-slate-200 py-2" key={answer.id}>
            <div className="flex items-top gap-x-4">
                <img className="w-[50px] h-[50px] rounded-full object-cover" src={image} alt="profile" />
                <div className="flex w-full justify-between">
                    <div>
                        <p className="text-sm font-medium">{answer.student.name}</p>
                        <p className="text-xs text-gray-500">{DateFormat(answer.created_at)}</p>
                        <div className="grid grid-cols-4 w-full gap-4 py-4 mt-3 pe-5">
                            {
                                answer?.attachments?.map((attachment, index) => {
                                    const shortenedFileName = shortenFileName(attachment.file_name);
                                    const formattedFileSize = formatFileSize(attachment.file_size);
                                    return (
                                        <div
                                            key={index}
                                            className="w-full border bg-gray-100 rounded-md p-4 flex items-center cursor-pointer"
                                            onClick={() => handleDownload(attachment.file_url)}
                                        >
                                            <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center mr-4">
                                                <i className="fas fa-file text-gray-600 text-lg"></i>
                                            </div>
                                            <div className="flex flex-col justify-center">
                                                <span className="font-medium text-sm text-gray-800">{shortenedFileName}</span>
                                                <span className="text-xs text-gray-500">{formattedFileSize}</span>
                                            </div>
                                        </div>
                                    );
                                })
                            }
                        </div>
                    </div>

                    <div>
                        <label className="text-xs text-right">Nilai</label>
                        <div className="flex">
                            <input
                                type="number"
                                value={nilai}
                                className="text-sm w-[30px] border-b border-gray-300 outline-none"
                                onBlur={handleBlur}
                                onChange={(e) => setNilai(e.target.value)}  // Mengubah nilai input
                            />
                            <p className="text-sm">/100</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AnswerList;
