import React, { createContext, useState, useContext } from 'react';

const AttentionContext = createContext(false);

export const AttentionProvider = ({ children }) => {
  const [attention, setAttention] = useState(false);

  return (
    <AttentionContext.Provider value={{ attention, setAttention }}>
      {children}
    </AttentionContext.Provider>
  );
};

export const useAttention = () => useContext(AttentionContext);
