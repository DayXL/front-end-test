import styles from './styles.module.css';

function BodyHome({searchUserIn, github, very, easy, searchBar, spaw}) {
    return (
        <div className={styles.bodyHome}>
          <p>{searchUserIn}
            <strong>{github}</strong>
          </p>
          <p>
            {very}
            <strong>{easy}</strong>
          </p>
          <div> {spaw} </div>
          <div> {searchBar} </div>
        </div>
    );
}

export default BodyHome;
