import React from 'react'
import DragElement from '../Drag/DragElement'
import {HiMessage, Photo, WhatICan, Title, MyPlans, MyWorks, Contant, AboutMe} from '../Style/StyledHome'

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

            <DragElement id="WhatICan">
                <WhatICan >
                    <Title>
                        co umiem?
                    </Title>
                    <div>
                        <ul>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>react</li>
                            <li>JavaScript</li>
                            <li>Node</li>
                        </ul>
                    </div>
                </WhatICan>
            </DragElement>

            <DragElement id="MyWorks">
                <MyWorks>
                    <Title>
                        moje prace
                    </Title>
                </MyWorks>
            </DragElement>

            <DragElement id="MyPlans">
                <MyPlans>
                    <Title>
                        moje plany
                    </Title>
                </MyPlans>
            </DragElement>

            <DragElement id="AboutMe">
                <AboutMe>
                    O mnie
                </AboutMe>
            </DragElement>

            <DragElement id="Contant">
                <Contant>
                    <Title>
                        kontakt
                    </Title>
                </Contant>
            </DragElement>

        </>
    )
}
