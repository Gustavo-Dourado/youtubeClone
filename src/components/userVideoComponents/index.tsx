import { FormatVideoDate, FormatVideoViews } from "../../functions/formatDataVideo"
import { BannerImg, ChannelImg, Container, TextCard, TextContainer, Title, TitleContainer } from "./styles"

interface videoProps{
    video: {
        video_id?: string,
        user_id?: string,
        image: string,
        title: string,
        description: string,
        channel: string,
        views: string,
        uploadDate: string
    }
}

function UserVideoComponents({video}: videoProps){

    const channelTitle = video.channel.substring(0, 1)
    const formattedViews = FormatVideoViews(video.views)
    const formattedDate = FormatVideoDate(video.uploadDate)

    return (
       <Container>
        <BannerImg src={video.image}/>  
        <TitleContainer>
            <ChannelImg>
                {channelTitle}
            </ChannelImg>
            <TextContainer>
                <Title>{video.title}</Title>
                <TextCard>{video.description}</TextCard>
                <TextCard>{formattedViews} de visualizações - {formattedDate}</TextCard>
            </TextContainer>
        </TitleContainer>
       </Container>
    )
} 

export {UserVideoComponents}