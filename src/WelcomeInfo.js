import React from 'react'

export default function WelcomeInfo({weddingData}) {
    return (
        <div className='center'>
            <h2 className='button'>Witamy na stronie informacyjnej poświęconej naszemu ślubowi.</h2>

            <p className='button'>
                W dniu 1 października 2022 roku odbędzie się ślub oraz przyjęcie weselne, na które serdecznie Was zaprasamy.
            </p>
            
            <p className='button'>
                Poniżej znajduje się kilka przydatnych informacji wraz z lokalizacjami.
            </p>

            <p className='button'>
                Ślub odbędzie się {weddingData.church.date} w {weddingData.church.name} o godzinie {weddingData.church.time}.
            </p>
            
            <p className='button'>
                Następnie serdecznie zapraszamy na przyjęcie weslene odbywające się w {weddingData.reception.name}.
            </p>
        </div>
    )
}
