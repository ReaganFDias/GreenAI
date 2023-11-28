import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFolder } from '@fortawesome/free-solid-svg-icons'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectCards } from 'swiper/modules'
import Sprout from '../../assets/sprout.png'
import AniSprout from '../../assets/wave-hello-3-unscreen.gif'
import 'swiper/css'
import 'swiper/css/effect-cards'
import 'swiper/css/autoplay'
import './Folders.css'

const Folders = () => {
    return (
        <div className='folders_container'>
            <div className='subtitle'>
                <h1 className='folder_title'>Manage your</h1>
                <h1 className='folder_title'>files</h1>
                <div className='desc_container'>
                    <p className='desc'>Browse your files for a more sustainable</p>
                    <p className='desc'>management approach</p>
                </div>
            </div>
            <div className='mascot_folders'>
                <div id='swiper_container'>
                    <Swiper
                        effect={'cards'}
                        grabCursor={true}
                        modules={[Autoplay, EffectCards]}
                        className="mySwiper"
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                    >
                        <SwiperSlide>
                            <FontAwesomeIcon icon={faFolder} size='2xl'/>
                            Tech@Lilly
                        </SwiperSlide>
                        <SwiperSlide>
                            <FontAwesomeIcon icon={faFolder} size='2xl'/>
                            R&D
                        </SwiperSlide>
                        <SwiperSlide>
                            <FontAwesomeIcon icon={faFolder} size='2xl'/>
                            HR
                        </SwiperSlide>
                        <SwiperSlide>
                            <FontAwesomeIcon icon={faFolder} size='2xl'/>
                            Legal
                        </SwiperSlide>
                        <SwiperSlide>
                            <FontAwesomeIcon icon={faFolder} size='2xl'/>
                            Environmental
                        </SwiperSlide>
                        <SwiperSlide>
                            <FontAwesomeIcon icon={faFolder} size='2xl'/>
                            Procurement
                        </SwiperSlide>
                        <SwiperSlide>
                            <FontAwesomeIcon icon={faFolder} size='2xl'/>
                            Finance
                        </SwiperSlide>
                        <SwiperSlide>
                            <FontAwesomeIcon icon={faFolder} size='2xl'/>
                            Marketing
                        </SwiperSlide>
                        <SwiperSlide>
                            <FontAwesomeIcon icon={faFolder} size='2xl'/>
                            Management
                        </SwiperSlide>
                    </Swiper>
                </div>
                <video className='mascot' src={AniSprout} loop autoPlay muted></video>
            </div>
        </div>
    )
}

export default Folders