import React from 'react';
import './ImageLinkForm.css'

const ImageLinkForm = () => {
	return (
		<div>
			<p className='f3'>
				{'This Magic Brain will detect faces in your pictures. Give it a try.'}
			</p>
			<div className='center'>
				<div className='form center pa4 br3 shadow-5'>
					<input className='outl-n f4 pa2 ph w-70 center bn br--left br4' type='text' />
					<button className='outl-n w-30 grow f4 link ph1 pv2 dib white bg-blue bn br--right br4'>Detect</button>
				</div>
			</div>
		</div>
		);
}

export default ImageLinkForm;