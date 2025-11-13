import styles from './styles.module.css';

function FootBar({logo, vision, addressOne, addressTwo, socials, rightsReserved, addressTitleOne, addressTitleTwo, onBack}) {
    return (
        <div className={styles.footBar}>
            <div className={styles.fisrtFootBar}>               
                <div className={styles.divLogoVision}> 
                    <img src={logo} />
                    <p> {vision} </p> 
                </div>
                <div className={styles.divAddress}>
                    <div className={styles.titleAddress}> 
                        <p> {addressTitleOne} </p>
                        <p> {addressOne} </p>  
                    </div>

                    <div className={styles.titleAddress}> 
                        <p> {addressTitleTwo} </p>
                        <p> {addressTwo} </p>
                    </div>       
                </div>
            </div>
            <div className={styles.line}></div>
            <div className={styles.secondFootBar}> 
                <div className={styles.rights}> <p> {rightsReserved} </p> </div>
                <div className={styles.social}> {socials} </div>
                <div className={styles.button}> 
                    <button onClick={onBack}> VOLTAR AO TOPO </button>
                </div>
            </div>
        </div>
    );
}

export default FootBar;
