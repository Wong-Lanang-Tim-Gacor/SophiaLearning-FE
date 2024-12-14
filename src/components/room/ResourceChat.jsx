import React, { useState, useEffect } from 'react';
import { storeChat } from "@/services/ResourceService.jsx";
import { toast } from "react-hot-toast";
import {DateFormat} from "@/utils/FormattingString.jsx";

// Komponen skeleton untuk chat
const MessageSkeleton = () => (
    <div className="flex items-center mb-4 animate-pulse">
        <div className="flex-shrink-0">
            <div className="w-8 h-8 rounded-full bg-gray-300"></div>
        </div>
        <div className="ml-3 flex-1 p-3">
            <div className="w-1/3 h-4 bg-gray-300 mb-2"></div>
            <div className="w-1/2 h-3 bg-gray-300"></div>
        </div>
    </div>
);

const ResourceChat = (props) => {
    const { resource, setResource } = props; // Assuming resource is passed and setResource is available to update the parent component's state
    const [newMessage, setNewMessage] = useState('');

    // Fungsi untuk mengirim pesan baru
    const handleSendMessage = async () => {
        try {
            const response = await storeChat({
                resource_id: resource.id,
                message: newMessage,
            });

            // Menambahkan chat baru ke resource.chats setelah sukses
            const updatedChats = [...resource.chats, response.data];

            // Update resource di parent dengan chats yang baru
            setResource(prevState => ({
                ...prevState,
                chats: updatedChats,
            }));

            toast.success('Berhasil menambahkan komentar!');
            setNewMessage('');
        } catch (err) {
            toast.error('Gagal menambahkan komentar!');
            console.log(err);
        }
    };

    return (
        <div className="p-4 h-64">
            {
                resource?.chats ? (
                    resource?.chats.map((chat, i) => (
                        <div key={i} className="flex items-center mb-4">
                            <div className="flex-shrink-0">
                                <div className="w-8 h-8 rounded-full bg-blue-400 text-white flex items-center justify-center">
                                    {chat.user.name[0]} {/* Menampilkan inisial dari user */}
                                </div>
                            </div>
                            <div className="ml-3 flex-1 p-3">
                                <p className="font-semibold text-sm">{chat.user.name} • <small className={'font-normal'}>{DateFormat(chat.created_at)}</small></p>
                                <p className="text-sm">{chat.message}</p>
                            </div>
                        </div>
                    ))
                ) : (
                    <MessageSkeleton />
                )
            }

            <div className="py-5 border-t border-gray-200 flex">
                <input
                    type="text"
                    className="flex-1 p-2 px-4 border rounded-md outline-gray-400"
                    placeholder="Ketik pesan..."
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                />
                <button
                    className="ml-2 bg-blue-500 px-4 text-white p-2 rounded-full"
                    onClick={handleSendMessage}
                >
                    Kirim
                </button>
            </div>
        </div>
    );
};

export default ResourceChat;
