import styles from './two-grid.module.scss';
export const TwoGrid = ({primary, secondary}: any) => {
    return <div className={styles.two_grid}>
        <div className={styles.two_grid__item}>
            {primary}
        </div>
        <div className={styles.two_grid__item}>
            {secondary}
        </div>
    </div>
}
