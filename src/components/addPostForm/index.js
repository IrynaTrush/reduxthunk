import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './style.css';
import { postNewTweet } from '../../redux/actions/home.action';
import { users } from '../../redux/selectors/home.selector';
import { loadUsers } from '../../redux/actions/home.action';

const AddPostForm = (props) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const [content, changeContent] = useState('');
    const [image, changeImage] = useState('');
    const [userId, changeId] = useState(0);
    const [isDisable, changeIsDisable] = useState(true);
    const usersServer = useSelector(users);

    useEffect(() => {
        setTimeout(() => dispatch(loadUsers()), 500);
        if(content !== '' && image !== '') {
            changeIsDisable(false);
        } else {
            changeIsDisable(true);
        }
    }, [content, image, dispatch]);
    
    const handleContent = (e) => {
        changeContent(e.target.value);
    }
    
    const handleImage = (e) => {
        changeImage(e.target.value);
    }

    const handleId = (e) => {
        changeId(e.target.value);
        console.log(userId)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(postNewTweet(userId, content, image, history));
    }

    const option = usersServer.map((item,index) => {
        return (
            <option value={item.id} style={{color: '#737373'}}>{item.name}</option>
        )
    })
    return(
        <div className="wrapperForm" >
            <form onSubmit={handleSubmit}>
               <input  placeholder="Content of your post" className="input" required onChange={handleContent}/>
               <input placeholder="URL of the valid image" className="input" required  onChange={handleImage}/>
                <select className="select" onChange={handleId}>
                  {option}
                </select>
                <button type="submit" className="btn"  disabled={isDisable}>
                    Add new post
                </button>
            </form>
        </div>
    )
}

export default AddPostForm;