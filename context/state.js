import { createContext, useContext, useState, useEffect } from "react";

const AppContext = createContext();

export function AppWrapper({ children }) {
  const [showMenu, setShowMenu] = useState(false);
  const [questTitle, setquestTitle] = useState("");
  const [questDetails, setquestDetails] = useState("");
  const [subquestTitles, setsubquestTitles] = useState([]);
  const [subQuestContent, setsubQuestContent] = useState([]);
  const [githubRepoUrl, setgithubRepoUrl] = useState();

  const [currentTrackNameKey, setcurrentTrackNameKey] = useState("");
  const [currentTrackName, setcurrentTrackName] = useState("");
  const [currentTrackDesc, setcurrentTrackDesc] = useState("");
  const [currentQuestName, setcurrentQuestName] = useState("");
  const [currentQuestLevel, setcurrentQuestLevel] = useState("");
  const [quests, setQuests] = useState([]);
  const [githubRawUrl, setgithubRawUrl] = useState("");

  const [currentSubQuest, setCurrentSubQuest] = useState(0);

  const [trackList, setTrackList] = useState([]);
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
        currentTrackDesc,
        setcurrentTrackDesc,
        currentQuestName,
        setcurrentQuestName,
        githubRawUrl,
        setgithubRawUrl,
        currentQuestLevel,
        setcurrentQuestLevel,
        trackList,
        setTrackList,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
