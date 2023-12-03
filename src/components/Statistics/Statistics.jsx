import React, { useState } from 'react'
import { linearGradientDef } from '@nivo/core'
import { ResponsivePie } from '@nivo/pie'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileLines, faCheck, faXmark, faEllipsis } from '@fortawesome/free-solid-svg-icons'
import { motion } from 'framer-motion'
import './Statistics.css'

const Statistics = () => {
    return (
        <div className='bottom_container'>
            <div className='stats_container'>
                <h1 id='stats_h1'>Complete</h1>
                <ResponsivePie
                    data={[
                        {
                        "id": "Complete",
                        "label": "Complete",
                        "value": 67,
                        "color": "hsl(240, 70%, 50%)"
                        },
                        {
                        "id": "Incomplete",
                        "label": "Incomplete",
                        "value": 33,
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
                <div className="percentage_complete">67%</div>
            </div>
            <div className='recents_container'>
                <h1 id='stats_h1'>Recent</h1>
                <div className='recents_grid'>
                    <motion.button whileHover={{ scale: 1.02 }} className='file_metadata'>
                        <FontAwesomeIcon size='2xl' icon={faFileLines} style={{color: '#ff0000',}} />
                        <div className='icon_name'>
                            <p>Image_configuration.pdf</p>
                            <div className='img_group'>
                                <FontAwesomeIcon size='2xl' icon={faXmark} style={{color: '#ff1a1a',}} />
                                <FontAwesomeIcon size='2xl' icon={faCheck} style={{color: '#00ff00',}} />
                            </div>
                        </div>
                        <div className='date_size'>
                            <p>Nov 28, 2023</p>
                            <p>2.3 GB</p>
                        </div>
                    </motion.button>
                    <motion.button whileHover={{ scale: 1.02 }} className='file_metadata'>
                        <FontAwesomeIcon size='2xl' icon={faFileLines} style={{color: '#76a30c',}} />
                        <div className='icon_name'>
                            <p>Knowledge_article.docx</p>
                            <div className="img_group">
                                <FontAwesomeIcon icon={faEllipsis} />
                                <FontAwesomeIcon icon={faEllipsis} />
                            </div>
                        </div>
                        <div className='date_size'>
                            <p>Aug 15, 2006</p>
                            <p>3 MB</p>
                        </div>
                    </motion.button>
                    <motion.button whileHover={{ scale: 1.02 }} className='file_metadata'>
                        <FontAwesomeIcon size='2xl' icon={faFileLines} style={{color: '#d37a07',}} />
                        <div className='icon_name'>
                            <p>Data_protection_policy_23.pdf</p>
                            <div className="img_group">
                                <FontAwesomeIcon size='2xl' icon={faCheck} style={{color: '#00ff00',}} />
                                <FontAwesomeIcon size='2xl' icon={faCheck} style={{color: '#00ff00',}} />
                            </div>
                        </div>
                        <div className='date_size'>
                            <p>Sep 01, 2023</p>
                            <p>1.6 GB</p>
                        </div>
                    </motion.button>
                    <motion.button whileHover={{ scale: 1.02 }} className='file_metadata'>
                        <FontAwesomeIcon size='2xl' icon={faFileLines} style={{color: '#008cff',}} />
                        <div className='icon_name'>
                            <p>DUX776_2324.xlsx</p>
                            <div className="img_group">
                                <FontAwesomeIcon icon={faEllipsis} />
                                <FontAwesomeIcon icon={faXmark} style={{color: '#ff1a1a',}} />
                            </div>
                        </div>
                        <div className='date_size'>
                            <p>Jan 13, 2021</p>
                            <p>1.8 GB</p>
                        </div>
                    </motion.button>
                </div>
            </div>
        </div>
    )
}

export default Statistics