import styles from './two-grid.module.scss';
export const TwoGrid = ({primary, secondary}: any) => {
    const PrimaryComponent = primary.component;
    const primaryProps = primary.props;
    const SecondaryComponent = secondary.component;
    const secondaryProps = secondary.props;
    return <div className={styles.two_grid}>
        <div className={styles.two_grid__item}>
            <PrimaryComponent {...primaryProps} />
        </div>
        <div className={styles.two_grid__item}>
            <SecondaryComponent {...secondaryProps} />
        </div>
    </div>
}
