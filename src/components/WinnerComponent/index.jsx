/* eslint-disable react/prop-types */
import styles from "./WinnerComponent.module.css"

function WinnerComponent({ jogo }){
    return(
        <h4 className={styles.vencerdor}>Vencedor: {jogo.vencedor}</h4>
    );
}

export default WinnerComponent