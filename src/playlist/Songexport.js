import React, { createContext, useContext, useState } from 'react';

const Songexport = createContext();

export const SongProvider = ({ children }) => {
  const [selectedSong, setSelectedSong] = useState(null);
  const [isclick, setIsclick]  = useState(true);
  
  return (
    < Songexport.Provider value={{ selectedSong, setSelectedSong ,isclick, setIsclick}}>
      {children}
    </ Songexport.Provider>
  );
};

export const useSongData = () => {
  return useContext(Songexport);
};