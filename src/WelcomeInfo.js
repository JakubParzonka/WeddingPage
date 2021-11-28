import React from 'react'

export default function WelcomeInfo({weddingData}) {
    return (
        <div>
            <h2>Witamy na stronie informacyjnej poświęconej naszemu ślubu.</h2>

            <p>
                W dniu 1 października 2022 roku odbędzie się ślub oraz przyjęcie weselne, na które serdecznie Was zaprasamy.
            </p>
            
            <p>
                Poniżej znajduje się kilka przydatnych informacji wraz z lokalizacjami.
            </p>

            <p>
                Ślub odbędzie się {weddingData.church.date} w {weddingData.church.name} o godzinie {weddingData.church.time}.
            </p>
            
            <p>
                Następnie serdecznie zapraszamy na przyjęcie weslene odbywające się w {weddingData.reception.name}.
            </p>
        </div>
    )
}
