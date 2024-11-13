import { createContext, useState } from "react";
import api from "../../src/api";
import { useContext } from "react";
import { UserContext } from "./userContext";
import { useNavigate } from "react-router-dom";

interface userVideosArrayInterface{
    channel: string
    description: string
    image: string
    title: string
    uploadDate: string
    user_id: string
    video_id: string
    views: string
}

interface videoContextInterface{
    createVideo: (
        user_id: string, 
        image: string, 
        title: string, 
        description: string,
        channel: string, 
        views: string, 
        uploadDate: string
    ) => void
    arrayVideos: userVideosArrayInterface[]
    getUserVideos: (user_id: string) => void
}

interface videoStorageProps{
    children: React.ReactNode
}

export const VideoContext = createContext<videoContextInterface>({} as videoContextInterface);

export const VideoStorage = ({children} : videoStorageProps) => {

    const { token } = useContext(UserContext);
    
    const [arrayVideos, setArrayVideos] = useState<userVideosArrayInterface[]>([])

    const navigate = useNavigate();

    const getUserVideos = (user_id: string) => {
        api.get(`videos/get-videos?user_id=${user_id}`, {headers: {Authorization: token}}).then(({ data }) => {
            setArrayVideos(data.videos);
            console.log('Vídeos carregados com sucesso');
        }).catch((error) => {
            console.log("Erro ao carregar vídeos", error);
        })
    }

    const createVideo = 
        (user_id: string, image: string, title: string, description: string,
        channel: string, views: string, uploadDate: string) => {
            api.post('videos/create-video', 
                        {user_id, title, image, description, channel, views, uploadDate},
                        {headers: {Authorization: token}}
            ).then(() =>{
                console.log('Vídeo criado com sucesso');
                navigate('/user-channel')
            }).catch((error) => {
                console.log('Falha ao criar vídeo', error);
            }); 
        };

    return(
        <VideoContext.Provider value={{
          createVideo,
          arrayVideos,
          getUserVideos
        }}>
            {children}
        </VideoContext.Provider>
    )
}

