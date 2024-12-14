import DetailAssignment from '@/components/room/DetailAssignment'
import DetailTheory from '@/components/room/DetailTheory'
import React, {useEffect, useState} from 'react'
import {showResource} from "@/services/ResourceService.jsx";
import {useParams} from "react-router-dom";
import ResourceChat from "@/components/room/ResourceChat.jsx";

const DetailResource = () => {
    const {resourceId} = useParams()
    const [resource, setResource] = useState()
    useEffect(() => {
        const getResource = async () => {
            await showResource(resourceId)
                .then(res => {
                    setResource(res.data)
                })
        }

        getResource().catch(err => {
            console.log(err)
        })
    }, [resourceId])
    return (
        <>
            <DetailAssignment resource={resource}/>
            <hr className="my-7" />
            <h3 className={'font-bold'}>Komentar Kelas :</h3>
            <ResourceChat resource={resource} setResource={setResource} />
        </>
    )
}

export default DetailResource