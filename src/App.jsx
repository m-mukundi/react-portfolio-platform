import HeroSection from "./components/HeroSection";
import ProjectManagementAndSearch from "./components/ProjectManagementAndSearch";
import "./App.css";

function App() {
	return (
		<main className="main">
			<div className="heroWrapper">
				<HeroSection />
			</div>
			<ProjectManagementAndSearch />
		</main>
	);
}

export default App;
