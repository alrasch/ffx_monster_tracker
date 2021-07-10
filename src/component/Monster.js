import React from 'react';
import {Button, Grid, IconButton} from "@material-ui/core";
import {Add, Remove} from "@material-ui/icons";
import {makeStyles} from "@material-ui/core/styles";

export default function Monster({area, name, count, handleClick}) {

	const handleIncrement = (areaName, monsterName) => {
		handleClick(areaName, monsterName, count+1);
	}

	const handleDecrement = (areaName, monsterName) => {
		handleClick(areaName, monsterName, count-1);
	}

	const useStyles = makeStyles((theme) => ({
		root: {
			flexGrow: 1,
		},
		addButtonContainer: {
			backgroundColor: "lightgreen"
		},
		subtractButtonContainer: {
			backgroundColor: "lightyellow"
		},
		monsterName: {
			textAlign: "center"
		}
	}));

	const classes = useStyles();

	return (
		<Grid container item>
			<Grid item xs={8} className={classes.monsterName}>{name}</Grid>
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
