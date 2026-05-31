import styles from "../styles/HeroSection.module.css";

function HeroSection() {
	return (
		<section className={styles.heroSection}>
			<h1 className={styles.title}>Our Portfolio.</h1>
			<p className={styles.tagline}>Crafting Digital Excellence.</p>
		</section>
	);
}

export default HeroSection;
