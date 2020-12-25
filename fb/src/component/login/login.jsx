import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom';
import styles from './login.module.css'
function Login({authService}) {
    const history = useHistory();
    const goToMain = (id,displayName,photoURL) => {
        history.push({
            pathname : "/main",
            state: {id, displayName, photoURL}
        });
    };
    const onClick = () => {
        authService.login().then(user => goToMain(user.user.uid,user.user.displayName,user.user.photoURL));
    }
    useEffect(() => {
        authService.state(user => {
            user && goToMain(user.uid,user.displayName,user.photoURL)
        });
    });
    return (
        <section className={styles.login}>
            <img className={styles.logo} src="/facebook.png" alt="logo"/>
            <ul className={styles.box}>
                <li className={styles.input}>
                    <input 
                        type="text" 
                        className={`${styles.id} ${styles.inputstyle}`}
                        name="id"
                        placeholder="이메일 또는 전화번호"
                    />
                </li>
                <li className={styles.input}>
                    <input 
                        type="password" 
                        className={`${styles.password} ${styles.inputstyle}`}
                        name="password"
                        placeholder="비밀번호"
                    />
                </li>
                <li className={styles.btnstyle}>
                    <button className={styles.btn}>로그인</button>
                </li>
                <li className={styles.btnstyle}>
                    <button className={styles.btn} onClick={onClick}>구글 로그인</button>
                </li>
            </ul>
        </section>
    )
}

export default Login
