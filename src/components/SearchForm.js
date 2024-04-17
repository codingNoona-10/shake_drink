import React, { useState } from "react";
import { Box, TextField, InputAdornment, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const SearchForm = ({ onSearch }) => {
	const [keyword, setKeyword] = useState("");

	const searchByKeyword = (e) => {
		e.preventDefault();
		console.log("@@@ 검색 키워드:", keyword);
		onSearch(keyword);
		setKeyword("");
	};

	return (
		<Box
			sx={{
				display: "flex",
				flexWrap: "wrap",
				justifyContent: "center",
				p: 1,
			}}
		>
			<form
				// onClick={searchByKeyword}
				onSubmit={searchByKeyword}
				style={{ width: "100%" }}
			>
				<TextField
					value={keyword}
					onChange={(e) => setKeyword(e.target.value)}
					fullWidth
					id="search"
					type="search"
					// label="Search"
					variant="outlined"
					placeholder="Search"
					color="warning"
					sx={{
						// borderColor: "#FD4926",
						border: "1px solid #FD4926",
						minWidth: 280,
						borderRadius: "15px",
						"& .MuiOutlinedInput-root": {
							borderRadius: "15px",
							height: 70,
						},
						"&:-webkit-autofill": {
							borderRadius: "15px",
							WebkitBoxShadow: "0 0 0 1000px #FD4926 inset;",
							WebkitTextFillColor: "#FD4926",
						},
					}}
					// InputLabelProps={{
					//   shrink: false,
					// }}
					InputProps={{
						startAdornment: (
							// <InputAdornment
							//   position="start"
							//   type="submit"
							// >
							//   <SearchIcon />
							// </InputAdornment>
							<InputAdornment position="start">
								<IconButton
									type="submit"
									aria-label="search"
									sx={{ backgroundColor: "rgb(242, 92, 92)" }}
								>
									<SearchIcon sx={{ color: "#fff" }} fontSize="large" />
								</IconButton>
							</InputAdornment>
						),
					}}
				/>
			</form>
		</Box>
	);
};

export default SearchForm;
