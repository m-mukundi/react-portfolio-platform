import { useState } from "react";
import SearchBar from "./SearchBar";
import ProjectFormContainer from "./ProjectFormContainer";
import ProjectGallery from "./ProjectGallery";
import initialProjects from "../data/projects.json";
import styles from "./ProjectManagementAndSearch.module.css";

function ProjectManagementAndSearch() {
	const [projects, setProjects] = useState(initialProjects);
	const [searchQuery, setSearchQuery] = useState("");

	function handleAddProject(newProject) {
		setProjects((prev) => [...prev, { ...newProject, id: Date.now() }]);
	}

	const filteredProjects = projects.filter((project) => {
		const query = searchQuery.toLowerCase();
		return (
			project.name.toLowerCase().includes(query) ||
			(project.category ?? "").toLowerCase().includes(query)
		);
	});

	return (
		<section className={styles.section}>
			<div className={styles.searchBarWrapper}>
				<SearchBar
					searchQuery={searchQuery}
					onSearchChange={setSearchQuery}
				/>
			</div>
			<div className={styles.formWrapper}>
				<ProjectFormContainer onAddProject={handleAddProject} />
			</div>
			<div className={styles.galleryWrapper}>
				<ProjectGallery projects={filteredProjects} />
			</div>
		</section>
	);
}

export default ProjectManagementAndSearch;
