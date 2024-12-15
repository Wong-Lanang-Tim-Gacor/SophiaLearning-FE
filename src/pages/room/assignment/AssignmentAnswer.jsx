import React, { useEffect, useState } from 'react';
import {getAnswerByResource, updateAnswer} from "@/services/ResourceService.jsx";
import { useParams } from "react-router-dom";
import AnswerList from "@/components/room/AnswerList.jsx";
import AnswerListSkeleton from "@/components/skeleton/room/AnswerListSkeleton.jsx";
import {toast} from "react-hot-toast";  // Pastikan ada method untuk update nilai

const AssignmentAnswer = () => {
    const { resourceId } = useParams();
    const [answers, setAnswers] = useState([]);

    useEffect(() => {
        const getAnswer = async () => {
            try {
                const response = await getAnswerByResource(resourceId);
                setAnswers(response.data);
            } catch (err) {
                console.error(err);
            }
        };
        getAnswer();
    }, [resourceId]);

    const handleUpdateNilai = async (answerId, nilai) => {
        try {
            await updateAnswer(answerId,{
                point: nilai
            })
            toast.success('Edit nilai berhasil')
        } catch (error) {
            toast.error('Terjadi kesalahan saat memperbarui nilai!');
            console.error(error);
        }
    };

    return (
        <>
            <h1 className="text-lg font-semibold mb-12">Tugas Dikumpulkan</h1>
            {
                answers.length > 0 ? (
                    answers.map((answer, i) => (
                        <AnswerList
                            answer={answer}
                            key={i}
                            onNilaiChange={handleUpdateNilai}
                        />
                    ))
                ) : (
                    <AnswerListSkeleton/>
                )
            }
        </>
    );
};

export default AssignmentAnswer;
