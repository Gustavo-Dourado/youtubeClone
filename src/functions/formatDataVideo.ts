export function FormatVideoDate(publishedDate: string){
    const hoje = new Date()
    const videoDate = new Date (publishedDate)
    const msPorDia = 24 * 60 * 60 * 1000 // Quantidade de milisseconds em 1 mês

    let differenceDays = Math.floor((hoje.getTime() - videoDate.getTime()) / msPorDia) // Resultado em dias
    let differenceMonths =  Math.floor(differenceDays/30)// Resultado em meses arrendondado
    let differenceYears = Math.floor(differenceDays/365) // Resultado em anos arredondado para baixo

    function singularOrPlural(difference: number, target: number){
        let stringResult

        if(difference === 1){
            const singular = ['dia','mês', 'ano']
            stringResult = singular[target]
                 
        } else {
            const plural =['dias', 'meses', 'anos']
            stringResult = plural[target]
        }
        return stringResult
    }

    let formatPublishedDate;

    if(differenceYears >= 1){
        const yearOrYears = singularOrPlural(differenceYears, 2)
        differenceMonths = (differenceMonths - (differenceYears * 12)) //Recalcula o número de meses faltandes a cada ano completo
        differenceDays = (differenceDays - (differenceYears * 365)) //Recalcula o número de dias faltandes a cada ano completo
     
        differenceMonths > 0?  //Caso tenha meses faltantes, ele vai mostrar os meses restantes também na formatação da data
            formatPublishedDate = 
            `há ${differenceYears} ${yearOrYears} e ${differenceMonths} ${singularOrPlural(differenceMonths, 1)}`
        :
            formatPublishedDate = `há ${differenceYears} ${yearOrYears}`

    } else if(differenceMonths >= 1){
        const monthOrMonths = singularOrPlural(differenceMonths, 1)
        differenceDays = (differenceDays - (differenceMonths * 30)) //Recalcula o número de dias faltandes a cada mês completo
        differenceDays > 0?
            formatPublishedDate = `há ${differenceMonths} ${monthOrMonths} e ${singularOrPlural(differenceDays, 0)}`
        :
            formatPublishedDate = `há ${differenceMonths} ${monthOrMonths}`
    
    } else if(differenceDays === 0){
        formatPublishedDate = 'Publicado hoje'
    } else{
        formatPublishedDate = `há ${differenceDays} ${singularOrPlural(differenceDays, 0)}`
    }

    return formatPublishedDate
}

export function FormatVideoViews(videoViews: string){
    const views = Number(videoViews)
   
    let viewFormat;
    let numberOfViews;
    
    if(views < 1000){
        viewFormat = views
    } else if( views < 1000000){
        numberOfViews = Math.trunc(views/1000)
        viewFormat = `${numberOfViews} mil`
    } else{
        numberOfViews = Number((views/1000000).toFixed(1))
        numberOfViews = numberOfViews.toLocaleString('pt-Br')
        viewFormat = `${numberOfViews} mi de`
    }

    return viewFormat
}