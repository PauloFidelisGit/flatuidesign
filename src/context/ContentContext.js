import { createContext, useContext, useState } from 'react';

const ContentContext = createContext();

const ContentContextProvider = ({ children }) => {
  const [header, setHeader] = useState({});

  return (
    <ContentContext.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{
        header,
        setHeader,
      }}
    >
      {children}
    </ContentContext.Provider>
  );
};
export default ContentContextProvider;

export function useContentContext() {
  const context = useContext(ContentContext);
  const { header, setHeader } = context;
  return { header, setHeader };
}
