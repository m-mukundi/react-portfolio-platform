import ProjectCard from "./ProjectCard";
import styles from "./ProjectGallery.module.css";

function ProjectGallery({ projects }) {
	return (
		<div className={styles.gallery}>
			{projects.length === 0 ? (
				<p className={styles.emptyState}>No projects currently available!</p>
			) : (
				projects.map((project) => (
					<ProjectCard key={project.id} project={project} />
				))
			)}
		</div>
	);
}

export default ProjectGallery;
