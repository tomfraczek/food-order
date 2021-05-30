import React from 'react';

import { SpicinessLevelContainer, Level } from './spiciness-level.styles.jsx'

const SpicinessLevel = ({level}) => (
    <SpicinessLevelContainer>
        {
            [...Array(level)].map((e, i) => <Level key={i}></Level>)
        }
    </SpicinessLevelContainer>
)

export default SpicinessLevel;