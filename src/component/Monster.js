import React from 'react';
import {Button, Grid} from "@material-ui/core";

export default function Monster({area, name, count, handleClick}) {

	const handleIncrement = (areaName, monsterName) => {
		handleClick(areaName, monsterName, count+1);
	}

	const handleDecrement = (areaName, monsterName) => {
		handleClick(areaName, monsterName, count-1);
	}

	return (
		<Grid container item>
			<Grid item xs={3}>{name}</Grid>
			<Grid item xs={3}><Button size={"small"} onClick={() => handleIncrement(area, name)}>+</Button></Grid>
			<Grid item xs={3}>{count}</Grid>
			<Grid item xs={3}><Button size={"small"} onClick={() => handleDecrement(area, name)} >-</Button></Grid>
		</Grid>
	);
};
