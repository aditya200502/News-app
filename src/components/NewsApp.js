import React, { useEffect, useRef, useState } from 'react'
import News from './News';
import './NewsApp.css'
function NewsApp() {

    const apiKey = 'e0f8f3eb51424a6cb1bba79036ddbc2a';


    const [newsList, setnewsList] = useState([]);
    const [query, setquery] = useState('premierleague');

    const queryRef = useRef(null)

    const apiurl = `https://newsapi.org/v2/everything?q=${query}&from=2023-03-05&sortBy=publishedAt&apiKey=${apiKey}`
    useEffect(() => {
        fetchData();
    }, [query])

    async function fetchData() {
        try {
            const response = await fetch(apiurl);
            const jsondata = await response.json();

            setnewsList(jsondata.articles);
        }
        catch (e) {
            console.log(e, 'erroe occured');
        }
    }

    function handleSubmit(event) {
        event.preventDefault();
        const queryval = queryRef.current.value;
        setquery(queryval);
    }

    return (
        <div className='news-app'>
            <h2 className='header' >NewsApp</h2>
            <p>Type below to search</p>
            <form onSubmit={handleSubmit}>
                <input className='query-input' type='text' ref={queryRef}/>
                <input className='btn' onClick={handleSubmit} type='submit' value='Submit' />
            </form>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,48%)', justifyContent: 'space-between', rowGap: '20px' }}>
                {newsList.map(news => {
                    // return <p>{news.title}</p>
                    return <News news={news} />;
                })}
            </div>

        </div>
    )
}

export default NewsApp;