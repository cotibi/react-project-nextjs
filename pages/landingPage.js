import styles from '../styles/landingpage.module.css';
import Link from 'next/link';

const LandingPage = () => (
    <div className={styles.container}>
  <div className={styles.header}>
  <Link href="/signinform"><button className={styles.signinbutton} type="button" name="Sign in">Sign in</button></Link>
  </div>
  <div className={styles.panelcontainer}>
    <div className={styles.leftpanel}>
      <img className={styles.logo} alt="regrow-logo" src="https://svgshare.com/i/hyb.svg" title="regrow-logo" />
      <h2 className={styles.htwo}>Learn more about our mission to reforest and how you can be an integral part in it.</h2>
    </div>
    <div className={styles.rightpanel}>
      <p><q>We really need to think about the scale of the problem we’re trying to address. We need to think in really big numbers: 2 trillion trees are needed to be planted around the world to restore global ecosystems.</q></p>
      <p className={styles.author}>– Lauren Fletcher, founder, BetaEarth.global</p>
      <p><q>The forest is not a resource for us, it is life itself. It is the only place for us to live.</q></p>
      <p className={styles.author}>- Evaristo Nugkuag Ikanan</p>
      <p><q>The forest is a peculiar organism of unlimited kindness and benevolence that makes no demands for its sustenance and extends generously the products of its life activity; it affords protection to all beings, offering shade even to the axe-man who destroys it.</q></p>
      <p className={styles.author}>- Gautama Buddha</p>
    </div>
  </div>
  <div className={styles.footer}>
    <a><img className={styles.icon} src='https://svgshare.com/i/i3A.svg' title='Facebook' /></a>
    <a><img className={styles.icon} src='https://svgshare.com/i/i4A.svg' title='LinkedIn' /></a>
    <a><img className={styles.icon} src='https://svgshare.com/i/i2E.svg' title='twitter' /></a>
    <a><img className={styles.icon} src='https://svgshare.com/i/i3R.svg' title='Redit' /></a>
  </div>
</div>
);

export default LandingPage;