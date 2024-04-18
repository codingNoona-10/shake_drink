import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import DetailPage from "./pages/DetailPage";
import UserPage from "./pages/UserPage";
import 'bootstrap/dist/css/bootstrap.min.css';
import AppLayout from "./components/AppLayout";

function App() {
	return (
		<Routes>
			<Route path="/" element={<AppLayout />}>
				<Route index element={<HomePage />} />
				<Route path="detail" element={<DetailPage />} />
				<Route path="user" element={<UserPage />} />
			</Route>
			{/* <Route path="/" element={<DetailPage />} /> */}
		</Routes>
	);
}

export default App;
