import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Search = () => {
    const [ term, setTerm ] = useState('programming');
    const [ results, setResults ] = useState([]);

    useEffect(
        () => {
            const search = async () => {
                const {
                    data
                } = await axios.get('https://en.wikipedia.org/w/api.php', {
                    params : {
                        action   : 'query',
                        list     : 'search',
                        origin   : '*',
                        format   : 'json',
                        srsearch : term
                    }
                });

                setResults(data.query.search);
            };

            search();
        },
        [ term ]
    );

    const renderedResults = results.map((result) => {
        return (
            <div key={result.pageid} className="item">
                <div className="right floated content">
                    <a
                        className="ui button"
                        href={`https://en.wikipedia.org?curid=${result.pageid}`}
                    >
                        Go
                    </a>
                </div>
                <div className="content">
                    <div className="header">{result.title}</div>
                    {/* ONLY USE WHEN SOURCE IS TRUSTED. OPEN TO XSS ATTACK */}
                    <span
                        dangerouslySetInnerHTML={{ __html: result.snippet }}
                    />
                </div>
            </div>
        );
    });

    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter Search Term</label>
                    <input
                        className="input"
                        value={term}
                        onChange={(e) => setTerm(e.target.value)}
                    />
                </div>
            </div>
            <div className="ui celled list">{renderedResults}</div>
        </div>
    );
};

export default Search;
