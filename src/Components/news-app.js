import React from 'react'
import {useState} from 'react'
import {useEffect} from 'react'
import News2 from './news';
import "./news-app.css";
import {useRef} from "react";

export default function News() {

    const [query,setQuery]=useState("tesla");
    const queryInputRef=useRef(null);

    const apikey="220aafef59cf4b0aba860f2098722dbd";
    const apiurl=`https://newsapi.org/v2/everything?q=${query}&from=2024-01-27&sortBy=publishedAt&apiKey=${apikey}`;

    // const[query,setQuery]=useState("tesla");
    const[NewsList,SetNewsList]=useState([]);

    useEffect(()=>{
        fetchdata();
    },[query]);
    
    //data mounting pe call hoga bas;

    async function fetchdata(){
        const response= await fetch(apiurl);
        const jsondata= await response.json();
        SetNewsList(jsondata.articles);
    }



    function handlesubmit(){
        const queryvalue=queryInputRef.current.value;
        setQuery(queryvalue);
    }

  return (
    <div>

        <div className='search'>
            <input type='text' ref={queryInputRef}></input>
            <button onClick={handlesubmit}>submit</button>
        </div>


        <div className='newsgrid'>
        {
            NewsList.map(news=>{
                return <News2 key={news.url} news={news}/>
            })
        }
        </div>
    </div>
  );
}
