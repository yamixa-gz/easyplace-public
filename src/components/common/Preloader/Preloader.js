import React from 'react'
import s from './Preloader.module.css'
import preloader from '../../common/Preloader/preloader_linear.svg'

const Preloader = (props) => {
    return <div className={s.loaderImg}>
        <img src={preloader} alt='))'/>
    </div>

}

export default Preloader