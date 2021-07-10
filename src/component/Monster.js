import React from 'react';
import {Button, Grid, IconButton} from "@material-ui/core";
import {Add, ArrowUpward, Remove} from "@material-ui/icons";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	addButtonContainer: {
		backgroundColor: "lightblue"
	},
	subtractButtonContainer: {
		backgroundColor: "lightyellow"
	},
	maxButtonContainer: {
		backgroundColor: "lightgreen"
	},
	monsterName: {
		textAlign: "center"
	},
	row: {
		backgroundColor: "lightgray"
	},
	rowSuccess: {
		backgroundColor: "lightgreen"
	}
}));

export default function Monster({area, name, count, handleClick}) {

	const handleIncrement = (areaName, monsterName) => {
		handleClick(areaName, monsterName, count+1);
	}

	const handleDecrement = (areaName, monsterName) => {
		handleClick(areaName, monsterName, count-1);
	}

	const handleMaxout = (areaName, monsterName) => {
		handleClick(areaName, monsterName, 10);
	}

	const classes = useStyles();
	const rowClass = count === 10 ? classes.rowSuccess : classes.row;

	return (
		<Grid container item className={rowClass}>
			<Grid item xs={7} className={classes.monsterName}>{name}</Grid>
			<Grid item xs={1} className={classes.maxButtonContainer}>
				<IconButton color={"primary"} variant={"contained"} size={"small"} onClick={() => handleMaxout(area, name)}>
					<ArrowUpward fontSize={"small"} />
				</IconButton>
			</Grid>
			<Grid item xs={1} className={classes.addButtonContainer}>
				<IconButton color={"primary"} variant={"contained"} size={"small"} onClick={() => handleIncrement(area, name)}>
					<Add fontSize={"small"} />
				</IconButton>
			</Grid>
			<Grid item xs={2}>{count}</Grid>
			<Grid item xs={1} className={classes.subtractButtonContainer}>
				<IconButton color={"secondary"} variant={"contained"} size={"small"} onClick={() => handleDecrement(area, name)} >
					<Remove fontSize={"small"} />
				</IconButton>
			</Grid>
		</Grid>
	);
};
