import DetailAssignment from '@/components/room/DetailAssignment'
import DetailTheory from '@/components/room/DetailTheory'
import React, {useEffect, useState} from 'react'
import {showResource} from "@/services/ResourceService.jsx";
import {useParams} from "react-router-dom";

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
            {/* <DetailTheory/> */}
            <DetailAssignment resource={resource}/>
        </>
    )
}

export default DetailResource