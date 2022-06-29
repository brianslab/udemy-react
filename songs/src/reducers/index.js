const songsReducer = () => {
  return [
    {
      title    : 'No Scrubs',
      duration : '4:05'
    },
    {
      title    : 'Macarena',
      duration : '2:30'
    },
    {
      title   : 'All Star',
      duation : '3:15'
    },
    {
      title   : 'I Want it That Way',
      duation : '1:45'
    }
  ];
};

const selectedSongReducer = (selectSong = null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload;
  }

  return selectSong;
};
