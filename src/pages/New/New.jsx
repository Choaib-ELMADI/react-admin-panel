import React, { useEffect, useState } from 'react';
import { FiUpload } from 'react-icons/fi';
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

import { db, auth, store } from '../../config/firebase';
import { Sidebar, Navbar } from '../../components/index';
import './New.scss';



const New = ({ inputs, title, type }) => {
  const [selectedProfile, setSelectedProfile] = useState(null);
  const [data, setData] = useState({});
  const [uploadingProgress, setUploadingProgress] = useState(null);

  useEffect(() => {
    const uploadFile = () => {
      const name = new Date().getTime() + selectedProfile.name;
      const storageRef = ref(store, `images/${ name }`);
      const uploadTask = uploadBytesResumable(storageRef, selectedProfile);

      uploadTask.on('state_changed', 
        (snapshot) => {
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setUploadingProgress(progress);
        }, 
        (error) => {
          console.error(error);
        }, 
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setData((prev) => ({ ...prev, image: downloadURL }));
          });
        }
      );
    };

    selectedProfile && uploadFile();
  }, [selectedProfile]);
  

  const handleAddNew = async (e) => {
    e.preventDefault();

    try {
      const res = await createUserWithEmailAndPassword(auth, data.email, data.password);

      await setDoc(doc(db, `${ title }s`, res.user.uid), {
        ...data,
        timeStamp: serverTimestamp(),
      });
    }
    catch(err) {
      console.error(err);
    }
  };

  const handleFormInput = (e) => {
    const id = e.target.id;
    const value = e.target.value;

    setData({ ...data, [id]: value });
  };

  return (
    <div className='app__new'>
      <Sidebar />
      <div className="new-container">
        <Navbar />
        <div className='new'>
          <div className="top">
            <h2>Add New { title }</h2>
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
              <form onSubmit={ handleAddNew }>
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
                        id={ input.id }
                        type={ input.inputType } 
                        placeholder={ input.inputPlaceHolder }
                        onChange={ handleFormInput }
                      />
                    </div>
                  ))
                }
                <button 
                  type='submit'
                  disabled={ uploadingProgress !== null && uploadingProgress < 100 }
                >Send</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;