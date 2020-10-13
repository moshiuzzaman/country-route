import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Country from '../Country/Country';

const Home = () => {
    const [countrys,setCountry]= useState([])
    useEffect(()=>{
        fetch('https://restcountries.eu/rest/v2/all')
        .then(res=>res.json())
        .then(data =>setCountry(data))
    },[])
    return (
        <div >
            <h1>countrys loded : {countrys.length}</h1>
            <div className="allcountry">
                {/* {
                    countrys.map(country =><Country  country={country}></Country>)
                } */}
                <Country></Country>
            </div>
        </div>
    );
};

export default Home;