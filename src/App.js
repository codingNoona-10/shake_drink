import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import DetailPage from "./pages/DetailPage";
import UserPage from "./pages/UserPage";
import "bootstrap/dist/css/bootstrap.min.css";
import AppLayout from "./components/AppLayout";
import FavorCategoryDrinks from "./pages/FavorCategoryDrinks";
import DetailPage from "./pages/DetailPage";
import UserPage from "./pages/UserPage";
// import AppLayout from "./layout/AppLayout";
import AppLayout from "./layout/AppLayout";
import SearchPage from "./pages/SearchPage";

function App() {
	return (
		<Routes>
			<Route path="/" element={<AppLayout />}>
				<Route index element={<HomePage />} />
				<Route path=":id" element={<DetailPage />} />
				<Route path="detail" element={<DetailPage />} />
				<Route path="user" element={<UserPage />} />
				<Route path="favor-category/:id" element={<FavorCategoryDrinks />} />
				<Route path="/search" element={<SearchPage />} />
			</Route>
		</Routes>
	);
}

export default App;
