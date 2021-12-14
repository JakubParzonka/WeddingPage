import React from 'react'
import Map from './Map'
import * as constants from "./data";

export default function MapList() {
    return (
        <div className='flex-item'>
            <p>
                Poniżej znajdują się lokalizacje z oznaczonymi miejscami wydarzeń:
            </p>
            {
                constants.datas.map(data => {
                    return <Map apiKey={constants.apiKey} data={data} />
                })
            }
        </div>
    )

}
