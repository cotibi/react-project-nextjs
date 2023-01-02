import styles from '../styles/signinform.module.css';
import Link from 'next/link';

const Signinform = () => (

    <div className={styles.maincontainer}>
        <h1 className={styles.signinheader}>Sign in</h1>
        <div className={styles.inputcontainer}>

            <label className={styles.label} for="email"><b>Email</b></label>
            <input className={styles.input} type="text" placeholder="Enter e-mail" name="email" required></input>

            <label className={styles.label} for="psw"><b>Password</b></label>
            <input className={styles.input} type="password" placeholder="Enter password" name="psw" required></input>

            <input className={styles.submit} type="submit" name="submit "></input>

        </div>

        <h3>Don't have an account? Sign up!</h3>

    </div>
);
export default Signinform;