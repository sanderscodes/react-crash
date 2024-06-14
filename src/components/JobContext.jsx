import React, { createContext, useContext } from 'react';

const JobContext = createContext();

export const useJobActions = () => useContext(JobContext);

export const JobProvider = ({ children, value }) => {
  return <JobContext.Provider value={value}>{children}</JobContext.Provider>;
};
