import React, { useState } from 'react';
import { FiUpload } from 'react-icons/fi';

import { Sidebar, Navbar } from '../../components/index';
import './New.scss';



const New = ({ inputs, title, type }) => {
  const [selectedProfile, setSelectedProfile] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className='app__new'>
      <Sidebar />
      <div className="new-container">
        <Navbar />
        <div className='new'>
          <div className="top">
            <h3>Add New { title }</h3>
          </div>
          <div className="bottom">
            <div className="left">
              <img 
                src={ selectedProfile ? 
                  URL.createObjectURL(selectedProfile) : 
                  "https://www.freeiconspng.com/thumbs/no-image-icon/no-image-icon-6.png"
                } 
                alt={ selectedProfile ? 'User Profile' : 'No Image' }
                draggable={ false }
              />
            </div>
            <div className="right">
              <form onSubmit={ handleSubmit }>
                <div className="formInput userProfile">
                  <label htmlFor="profile">{ type } </label>
                  <label htmlFor="profile"><FiUpload size={ 23 } /></label>
                  <input 
                    type="file" 
                    id="profile" 
                    style={{ display: 'none' }} 
                    onChange={ (e) => setSelectedProfile(e.target.files[0]) }
                  />
                </div>
                {
                  inputs.map(input => (
                    <div className={ input.class } key={ input.id }>
                      {
                        input.labels.map((l, i) => (
                          <label
                            key={ `label-${ i }` }
                          >
                            { l.content }
                          </label>
                        ))
                      }
                      <input
                        type={ input.inputType } 
                        placeholder={ input.inputPlaceHolder }
                      />
                    </div>
                  ))
                }
                <button type='submit'>Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;