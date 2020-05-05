import React, { useState, useEffect } from 'react';
import { useDispatch} from 'react-redux';
import { useHistory } from 'react-router-dom';
import './style.css';
import { postNewUser } from '../../redux/actions/home.action';


const AddUserForm = (props) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const [url, changeURL] = useState('');
    const [name, changeName] = useState('');
    const [username, changeUsername] = useState('');
    const [buttonState, changeButtonState] = useState(true);

    const handleURL = (e) => {
        changeURL(e.target.value);
    }
    const handleName = (e) => {
        changeName(e.target.value);
    }
    const handleUsername = (e) => {
        changeUsername(e.target.value);
    }

    useEffect(() => {
        if(url !== '' && name !== '' && username !== '') {
          changeButtonState(false)
        } else {
            changeButtonState(true)
        }
    }, [url, name, username])

    const submitUser = (e) => {
        e.preventDefault();
        dispatch(postNewUser( name, username, url, history));
    }

    return(
        <div className="wrapperForm">
            <form onSubmit={submitUser}>
               <input id="avatar" placeholder="Paste a valid URL for avatar" className="input" required onChange={handleURL}/>
               <input id="name" placeholder="Paste your name" className="input" required onChange={handleName}/>
               <input id="username" placeholder="Paste username" className="input" required onChange={handleUsername}/>
                <button type="submit" className="btn" disabled={buttonState} >
                    Add new user
                </button>
            </form>
        </div>
    )
}

export default AddUserForm;