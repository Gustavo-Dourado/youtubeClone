import axios from "axios";
import { createContext, useState } from "react";

interface videoProps{
    id: {
        videoId: string,
    },
    snippet: {
        title: string,
        channelTitle: string,
        description: string,
        publishedAt: string,
        thumbnails: {
            high: {
                url: string,
            }
            maxres?: {
                url: string,
            }
        }
    },
}

interface searchContextInterface{
    searchContent: string
    setSearchContent: (value: string) => void
    arrayVideosFound: videoProps[]
    setArrayVideosFound: (arrayVideos : videoProps[]) => void
    searchItem: () => void
}

interface serachStorageInterface{
    children: React.ReactNode
}

export const SearchContext = createContext<searchContextInterface>({} as searchContextInterface)

export const SearchStorage = ({children} : serachStorageInterface) => {

    const [searchContent, setSearchContent] = useState('');
    const [arrayVideosFound, setArrayVideosFound] = useState<videoProps[]>([]);

    async function searchItem(){
        const API_KEY= 'AIzaSyBvwf_v237JI72LLDHFz1zagJH6xo6ynPc'

        const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=12&order=viewCount&q=${searchContent}&type=video&key=${API_KEY}`
        
            try{
                const response = await axios.get(url)
                setArrayVideosFound(response.data.items)
                console.log('Vídeos encontrados com sucesso')
            } catch(error){ 
                console.log(error)
            }
    }

    return(
        <SearchContext.Provider value={{
            searchContent,
            setSearchContent,
            arrayVideosFound,
            setArrayVideosFound,
            searchItem
        }}>
            {children}
        </SearchContext.Provider>
    )
}