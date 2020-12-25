import React, { useRef, useState } from 'react'
import { useLocation } from 'react-router-dom'
import styles from './inputbox.module.css'
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AddPhotoAlternateIcon from '@material-ui/icons/AddPhotoAlternate';
function Inputbox({addPost,fileUpload}) {
    const [imageurl, setImageurl] = useState({imageURL : null});
    const [isLoading, setIsLoading] = useState(false);
    const location = useLocation();
    const inputRef = useRef();
    const formRef = useRef();
    const textRef = useRef();
    const addBtn = (e) => {
        e.preventDefault();
        inputRef.current.click();
    };
    const addDataValue = (e) => {
        e.preventDefault();
        if(isLoading){
            alert('이미지 업로드 중 입니다.');
            return;
        }
        const post = {
            id : Date.now(),
            uid : location.state.id,
            userName : location.state.displayName,
            userPhotoURL : location.state.photoURL,
            userText : textRef.current.value || '',
            imageURL : imageurl.imageURL,
            likes : 0,
        };
        formRef.current.reset();
        addPost(post);
        setImageurl({
            imageURL : null,
        });
    };
    const onChange = async (e) => {
        setIsLoading(true);
        const uploaded = await fileUpload.upload(e.target.files[0]);
        console.log(uploaded);
        setIsLoading(false);
        setImageurl({
            imageURL : uploaded.url,
        });
    };
    return (
        <form ref={formRef} className={styles.inputbox}>
            <section className={styles.input}>
                <img 
                    src={location.state.photoURL} 
                    alt="photoInput"
                    className={styles.profileimg}
                    />
                <div className={styles.inputwrap}>
                    <input 
                        ref={textRef}
                        type="text"
                        placeholder="무슨 생각을 하고 계신가요?"
                        className={styles.inputtext}
                    />
                </div>
                <button onClick={addDataValue}>submit</button>
            </section>
            <section className={styles.addbtn}>
                <div className={styles.btnstyle}>
                    <button disabled="true" className={styles.btn}>
                        <VideoCallIcon /><p>라이브 방송</p> 
                    </button>
                </div>
                {isLoading ? 
                    <div className={styles.loadingbox}>
                        <div className={styles.loading}></div>
                    </div>
                    :
                    <div className={styles.btnstyle}>
                        <input onChange={onChange} ref={inputRef} type="file" accept="image/*" className={styles.file}/>
                        <button onClick={addBtn} className={styles.btn}>
                            <AddPhotoAlternateIcon /> <p>사진/동영상</p> 
                        </button>
                    </div>
                }
            </section>
        </form>
    )
}

export default Inputbox
