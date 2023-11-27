import React from 'react'
import { linearGradientDef } from '@nivo/core'
import { ResponsivePie } from '@nivo/pie'
import './Statistics.css'

const Statistics = () => {
    return (
        <div className='bottom_container'>
            <div className='stats_container'>
                <h1>Completion</h1>
                <ResponsivePie
                    data={[
                        {
                        "id": "Complete",
                        "label": "Complete",
                        "value": 60,
                        "color": "hsl(240, 70%, 50%)"
                        },
                        {
                        "id": "Incomplete",
                        "label": "Incomplete",
                        "value": 40,
                        "color": "hsl(192, 57%, 17%)"
                        }
                    ]}
                    margin={{ top: 50, right: 60, bottom: 0, left: 60 }}
                    innerRadius={0.6}
                    padAngle={0.7}
                    cornerRadius={3}
                    activeOuterRadiusOffset={8}
                    borderWidth={0}
                    borderColor={{
                        from: 'color',
                        modifiers: [
                            [
                                'darker',
                                0.2
                            ]
                        ]
                    }}
                    enableArcLabels={false}
                    enableArcLinkLabels={false}
                    arcLinkLabelsSkipAngle={10}
                    arcLinkLabelsTextColor="#333333"
                    arcLinkLabelsThickness={2}
                    arcLinkLabelsColor={{ from: 'color' }}
                    arcLabelsSkipAngle={10}
                    arcLabelsTextColor={{
                        from: 'color',
                        modifiers: [
                            [
                                'darker',
                                2
                            ]
                        ]
                    }}
                    defs={[
                        linearGradientDef('gradientA', [
                            { offset: 0, color: 'rgb(0,255,198)' },
                            { offset: 100, color: '#9acd32' },
                        ]),
                        linearGradientDef('gradientB', [
                            { offset: 0, color: '#133b45' },
                            { offset: 100, color: '#133b45' },
                        ]),

                        {
                            id: 'gradientC',
                            type: 'linearGradient',
                            colors: [
                                { offset: 0, color: '#008000' },
                                { offset: 100, color: '#9acd32' },
                            ],
                        },
                    ]}
                    fill={[
                        { match: { id: 'Complete' }, id: 'gradientA' },
                        { match: { id: 'Incomplete' }, id: 'gradientB' },
                    ]}
                    
                />
            </div>
            <div className='recents_container'>Recents</div>
        </div>
    )
}

export default Statistics