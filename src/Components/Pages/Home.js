import React from 'react'
import DragElement from '../Drag/DragElement'
import {HiMessage, Photo} from '../Style/StyledHome'

export default function Home() {
    return (
        <>
            <DragElement>
                <HiMessage>
                    hej!
                    Jestem Kuba, a to jest moja strona
                </HiMessage>
            </DragElement>

            <DragElement id="photo">
                <Photo />
            </DragElement>
        </>
    )
}
