import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import DetailPage from "./pages/DetailPage";
import UserPage from "./pages/UserPage";
import AppLayout from "./components/AppLayout";
import FavorCategoryDrinks from "./pages/FavorCategoryDrinks";
import SearchPage from "./pages/SearchPage";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
	return (
		<Routes>
			<Route path="/" element={<AppLayout />}>
				<Route index element={<HomePage />} />
				<Route path=":id" element={<DetailPage />} />
				<Route path="detail" element={<DetailPage />} />
				<Route path="user" element={<UserPage />} />
				<Route path="favor-category/:id" element={<FavorCategoryDrinks />} />
				<Route path="search" element={<SearchPage />} />
			</Route>
		</Routes>
	);
}

export default App;
