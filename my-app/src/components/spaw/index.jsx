import styles from './styles.module.css';
import IconX from '../../assets/x.svg';

function CardSpawAlert({text1, text2, socials, onClose}) {
  return (
    <div className={styles.cardSpawAlert}>
        <div className={styles.buttonClose}>
            <button className={styles.button} onClick={onClose} > 
                <img src={IconX} width={10} height={10}/>
            </button>
        </div>
        <div className={styles.p1}> {text1} </div>
        <div className={styles.p2}>
            {text2}
            <div className={styles.socials}> {socials} </div>
        </div>
    </div>
  );
}

export default CardSpawAlert;
