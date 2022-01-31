import { createContext, useContext, useState, useEffect } from 'react';

const AppContext = createContext();

export function AppWrapper({ children }) {
  const [showMenu, setShowMenu] = useState(false);
  const [questTitle, setquestTitle] = useState('');
  const [questDetails, setquestDetails] = useState('');
  const [subquestTitles, setsubquestTitles] = useState([]);
  const [subQuestContent, setsubQuestContent] = useState([]);
  const [githubRepoUrl, setgithubRepoUrl] = useState();

  const [currentTrackNameKey, setcurrentTrackNameKey] = useState('');
  const [currentTrackName, setcurrentTrackName] = useState('');
  const [currentProtocol, setcurrentProtocol] = useState('');
  const [currentTrackDesc, setcurrentTrackDesc] = useState('');
  const [currentQuestName, setcurrentQuestName] = useState('');
  const [currentQuestLevel, setcurrentQuestLevel] = useState('');
  const [currentQuestDesc, setcurrentQuestDesc] = useState('');
  const [quests, setQuests] = useState([]);
  const [githubRawUrl, setgithubRawUrl] = useState('');

  const [currentSubQuest, setCurrentSubQuest] = useState(0);

  const [trackList, setTrackList] = useState([]);
  const [mintingSuccess, setMintingSuccess] = useState(false);
  const [transactionDetails, setTransactionDetails] = useState(null);
  useEffect(() => {
    if (window.outerWidth >= 1024) setShowMenu(true);
  }, []);

  return (
    <AppContext.Provider
      value={{
        showMenu,
        setShowMenu,
        questTitle,
        setquestTitle,
        questDetails,
        setquestDetails,
        subquestTitles,
        setsubquestTitles,
        subQuestContent,
        setsubQuestContent,
        githubRepoUrl,
        setgithubRepoUrl,
        currentSubQuest,
        setCurrentSubQuest,
        quests,
        setQuests,
        currentTrackNameKey,
        setcurrentTrackNameKey,
        currentTrackName,
        setcurrentTrackName,
        currentProtocol,
        setcurrentProtocol, 
        currentTrackDesc,
        setcurrentTrackDesc,
        currentQuestName,
        setcurrentQuestName,
        githubRawUrl,
        setgithubRawUrl,
        currentQuestLevel,
        setcurrentQuestLevel,
        currentQuestDesc,
        setcurrentQuestDesc,
        trackList,
        setTrackList,
        mintingSuccess,
        setMintingSuccess,
        transactionDetails,
        setTransactionDetails,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
