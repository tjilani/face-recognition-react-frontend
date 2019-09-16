import React from 'react';

const ImageLinkForm = ({ inputChange, onBtnClick }) => {
    return (
        <div className=''>
            <p className='f3'>
                {'This AI Brain will search Faces in Pictures'}
            </p>
            <div className='w-90 center flexen br3 shadow-5 pv4 bg-white'>
                <input
                    className='pa3 br3 br--left mw6 w-60 '
                    type='text'
                    placeholder='put in the url to your picture'
                    onChange={inputChange}
                />
                <button
                    className=' pa2 br3 br--right mw4 w-25 grow ph3 pv2 dib bg-white pointer'
                    type='submit'
                    onClick={onBtnClick}
                >detect</button>
            </div>

        </div>
    );
}

export default ImageLinkForm;   