import React, { useState, useEffect } from 'react';
import axios from 'axios';
import keys from '../api/keys';

const Convert = ({ language, text }) => {
  const [ translated, setTranslated ] = useState('');
  const [ debouncedText, setDebouncedText ] = useState(text);

  useEffect(
    () => {
      const timerID = setTimeout(() => {
        setDebouncedText(text);
      }, 750);

      return () => {
        clearTimeout(timerID);
      };
    },
    [ text ]
  );

  useEffect(
    () => {
      const doTranslation = async () => {
        const { data } = await axios.post(
          'https://translation.googleapis.com/language/translate/v2',
          {},
          {
            params : {
              q      : debouncedText,
              target : language.value,
              key    : keys.googleTranslate
            }
          }
        );

        setTranslated(data.data.translations[0].translatedText);
      };

      doTranslation();
    },
    [ language, debouncedText ]
  );

  return (
    <div>
      <h1 className="ui header">{translated}</h1>
    </div>
  );
};

export default Convert;
