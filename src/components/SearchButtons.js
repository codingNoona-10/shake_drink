import { Box, Button } from "@mui/material";
import React, { useState } from "react";

const categories = ["카테고리1", "카테고리2", "카테고리3", "카테고리4"];
const SearchButtons = () => {
	const [selected, setSelected] = useState(0);

	const buttonStyle = (isSelected) => ({
		backgroundColor: isSelected ? "#FD4926" : "white",
		borderColor: isSelected ? "white" : "lightgray",
		color: isSelected ? "white" : "#FD4926",
		borderRadius: 50,
		border: `1px solid ${isSelected ? "white" : "#FD4926"}`,
		"&:hover": {
			backgroundColor: "#FD4926",
			borderColor: "white",
			color: "white",
		},
	});

	return (
		<Box
			sx={{
				display: "flex",
				flexWrap: "wrap",
				gap: 1,
				justifyContent: "center",
			}}
		>
			{categories.map((category, index) => (
				<Button
					key={index}
					variant="outlined"
					onClick={() => setSelected(index)}
					sx={buttonStyle(selected === index)}
					// sx={{
					// backgroundColor: "white",
					// borderColor: "lightgray",
					// color: "#FD4926",
					// borderRadius: "8px",
					// border: "1px solid #FD4926",

					// "& .MuiButton-root": {
					// 	borderRadius: 5,
					// },

					// "& .MuiButtonBase-root": {
					// 	borderRadius: 5,
					// },
					// "&:-webkit-autofill": {
					// 	borderRadius: 5,
					// 	WebkitBoxShadow: "0 0 0 1000px #FD4926 inset;",
					// 	WebkitTextFillColor: "#FD4926",
					// },
					// }}
				>
					{category}
				</Button>
			))}
		</Box>
	);
};

export default SearchButtons;
