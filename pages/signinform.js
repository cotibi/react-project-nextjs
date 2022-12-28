import styles from '../styles/signinform.module.css'
import Link from "next/link";

const Signinform = () => (

    <div className={styles.maincontainer}>
        <h1>Sign in</h1>
        <div className={styles.inputcontainer}>

            <label for="email"><b>Email</b></label>
            <input type="text" placeholder="Enter Email" name="email" required></input>

            <label for="psw"><b>Password</b></label>
            <input type="password" placeholder="Enter Password" name="psw" required></input>

            <input className={styles.submit} type="submit" name="submit "></input>

        </div>

        <h3>Don't have an account? <Link>Sign up!</Link></h3>

    </div>
);
export default Signinform;