import React from 'react';
import logo from '../../assets/img/logo.png'

export default function EmptyJobAdvertList(props) {
    return (
        <div className={"mx-auto w-1/2"} style={{marginTop: 100}}>
           
            <img src={logo}/>
            <h1 className="text-4xl font-semibold leading-normal text-blueGray-800 text-center"
                style={{marginTop: -20}}>Kayıtlı iş ilanı bulunamadı!</h1>
        </div>
    );
}

