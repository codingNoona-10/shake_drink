import React from "react";
import { Box, Container, Typography } from "@mui/material";
import SearchButtons from "../components/SearchButtons";
import { styled } from "@mui/material/styles";
import SearchForm from "../components/SearchForm";
import { useSearchParams } from "react-router-dom";

const ContainerSx = styled(Container)(({ theme, paddingTop = 8, paddingBottom = 6 }) => ({
	// pt: 8,
	// pb: 6,
	// paddingTop: theme.spacing(8),
	// paddingBottom: theme.spacing(6),
	paddingTop: theme.spacing(paddingTop), // 기본값은 8
	paddingBottom: theme.spacing(paddingBottom), // 기본값은 6
}));

const SearchPage = () => {
	const [searchParams, setSearchParams] = useSearchParams();
	const keyword = searchParams.get("q");

	const handleSearch = (e) => {
		e.preventDefault();
		setSearchParams({ q: keyword });
	};
	return (
		<>
			<Box>
				{/* <Typography component="h2" variant="h1">
					검색페이지
				</Typography> */}
				<Box>
					<Container maxWidth="lg">
						<Typography
							component="h2"
							variant="h3"
							sx={{
								display: "flex",
								margin: "32px 0",
								textAlign: "center",
								justifyContent: "center",
								alignItems: "flex-end",
							}}
						>
							Drink
							<Typography
								component="span"
								variant="h2"
								sx={{
									fontWeight: "500",
									color: "#FD4926",
								}}
							>
								Searching
							</Typography>
						</Typography>
					</Container>
				</Box>
				<Box>
					<ContainerSx maxWidth="lg">
						<SearchForm onSearch={handleSearch} />
					</ContainerSx>
				</Box>
				<Box>
					<ContainerSx maxWidth="lg">
						<SearchButtons />
					</ContainerSx>
				</Box>
			</Box>
		</>
	);
};

export default SearchPage;
