import React from 'react'
import './MyWork.css'
import projet1 from '../../assets/projet1.png'
import mywork_data from '../../assets/mywork_data'

function MyWork() {
  return (
    <div id='work' className='mywork'>
        <div className="mywork-title">
            <h1>Mes projets</h1>
            <img src={projet1} alt="" />
        </div>
        <div className="mywork-container">
            {mywork_data.map((work,index)=>{
                return <img key={index} src={work.w_img} alt="" />
            })}
        </div>
        <div className="mywork-showmore">
            <p>En savoir plus</p>
        </div>
    </div>
  )
}

export default MyWork