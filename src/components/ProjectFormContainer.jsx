import { useState } from "react";
import styles from "../styles/ProjectFormContainer.module.css";

function ProjectFormContainer({ onAddProject }) {
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [category, setCategory] = useState("");

	function handleSubmit(e) {
		e.preventDefault();
		if (!title.trim()) return;

		onAddProject({
			name: title.trim(),
			description: description.trim(),
			imageSource: "",
			imageAltText: "",
			imageDataAltText: "",
			category: category.trim(),
		});

		setTitle("");
		setDescription("");
		setCategory("");
	}

	return (
		<div className={styles.formContainer}>
			<h2 className={styles.formTitle} id="form-title">
				Add New Project
			</h2>
			<form className={styles.publishProjectForm} onSubmit={handleSubmit}>
				<div className={styles.formGroup}>
					<label className={styles.label}>Project Title</label>
					<input
						className={styles.input}
						id="project-title-text-box"
						placeholder="e.g. Modern UI Revamp"
						type="text"
						value={title}
						onChange={(e) => setTitle(e.target.value)}
					/>
				</div>
				<div className={styles.formGroup}>
					<label className={styles.label}>Description</label>
					<textarea
						className={styles.textarea}
						id="project-description-text-box"
						placeholder="Brief project overview..."
						rows="3"
						value={description}
						onChange={(e) => setDescription(e.target.value)}
					></textarea>
				</div>
				<div className={styles.formGroup}>
					<label className={styles.label}>Category</label>
					<input
						className={styles.input}
						id="project-category-text-box"
						placeholder="e.g. Technology"
						type="text"
						value={category}
						onChange={(e) => setCategory(e.target.value)}
					/>
				</div>
				<button
					className={styles.submitButton}
					id="publish-project-button"
					type="submit"
					disabled={!title.trim()}
				>
					Publish Project
				</button>
			</form>
		</div>
	);
}

export default ProjectFormContainer;
