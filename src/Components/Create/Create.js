import React, { Fragment, useState, useContext } from 'react';
import './Create.css';
import Header from '../Header/Header';
import { FirebaseContext, AuthContext } from '../../Store/Context'
import {useHistory} from 'react-router-dom'
const Create = () => {
  const { firebase } = useContext(FirebaseContext);
  const { user } = useContext(AuthContext);
  const [name, setName] = useState('')
  const [catagory, setCatagory] = useState('')
  const [price, setPrice] = useState('')
  const [image, setImage] = useState(null);
  const date=new Date()
  const history=useHistory();
  const handleSubmit = () => {
    console.log('submitted')
    firebase.storage().ref(`/image/${image.name}`).put(image).then(({ ref }) => {
      console.log('upload')
      ref.getDownloadURL().then((url) => {
        console.log(url)
        firebase.firestore().collection('products').add({
          name, catagory, price, url,userId:user.uid,
          createdAt:date.toDateString()
        }).then((response)=>history.push('/create'))
      })
    })
  }
  return (
    <Fragment>
      <Header />
      <card>
        <div className="centerDiv">

          <label htmlFor="fname">Name</label>
          <br />
          <input
            className="input"
            type="text"
            id="fname"
            name="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <br />
          <label htmlFor="fname">Category</label>
          <br />
          <input
            className="input"
            type="text"
            id="fname"
            name="category"
            value={catagory}
            onChange={(e) => setCatagory(e.target.value)}

          />
          <br />
          <label htmlFor="fname">Price</label>
          <br />
          <input className="input" type="number" id="fname" name="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <br />

          <br />
          <img alt="Posts" width="200px" height="200px" src={image ? URL.createObjectURL(image) : ""}></img>

          <br />
          <input
            onChange={(e) => { setImage(e.target.files[0]) }}
            type="file" />
          <br />
          <button onClick={handleSubmit} className="uploadBtn">upload and Submit</button>

        </div>
      </card>
    </Fragment>
  );
};

export default Create;
