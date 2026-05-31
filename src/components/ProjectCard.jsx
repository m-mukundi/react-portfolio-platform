import styles from "./ProjectCard.module.css";

function ProjectCard({ project }) {
	return (
		<div className={styles.card}>
			<div className={styles.thumbnailContainer}>
				{project.imageSource ? (
					<img
						className={styles.thumbnail}
						id="thumbnail"
						alt={project.imageAltText}
						data-alt={project.imageDataAltText}
						src={project.imageSource}
					/>
				) : (
					<div className={styles.placeholderThumbnail}>
						<span
							className={`material-symbols-outlined ${styles.placeholderIcon}`}
						>
							add_a_photo
						</span>
					</div>
				)}
			</div>
			<div className={styles.details}>
				{project.category && (
					<div className={styles.categoryContainer}>
						<span className={styles.categoryBadge}>{project.category}</span>
					</div>
				)}
				<h3 className={styles.projectName} id="project-card-name">
					{project.name}
				</h3>
				<p className={styles.projectDescription} id="project-card-description">
					{project.description}
				</p>
				<a className={styles.viewLink} href="#">
					View Project
					<span className={`material-symbols-outlined ${styles.arrowIcon}`}>
						arrow_forward
					</span>
				</a>
			</div>
		</div>
	);
}

export default ProjectCard;
