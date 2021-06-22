import React from 'react';
import './FaceRecognition.css'

const FaceRecognition = ({ imageUrl, boxes }) => {
	return (
		<div className='center ma'>
      <div className='absolute mt2 m2' style={{zIndex: '3', position:'relative'}}>
        <img id='inputImage' alt='' style={{width:'500px', height:'auto'}} src={imageUrl}/>
				{
					boxes.map((box, index) => {
						return <div className='bounding-box' key={index}
								style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}>
							</div>
					})
				}
			</div>
		</div>
		);
}

export default FaceRecognition;