import styles from './Loading.module.scss'

export const Loading = () => {
	return (
		<div className={styles.wrap}>
			<div className={styles.ldsRing}>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
			</div>
		</div>
	)
}
