import Header from './Header'
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

function Protected(props) {
    let Cmp = props.Cmp;
    let history = useNavigate();
    useEffect(() => {
        if (!localStorage.getItem("user-info")) {
            history('/login');
        }
    }, [])

    return (
        <>
            <Cmp />
        </>
    )
}

export default Protected;