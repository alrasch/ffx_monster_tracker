import React, {useCallback} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import './css/common.css';
import Monster from "./component/Monster";
import {MainContext} from "./Context";

function App() {
	const useStyles = makeStyles((theme) => ({
		root: {
			flexGrow: 1,
		},
		paper: {
			padding: theme.spacing(0),
			textAlign: 'center',
			color: theme.palette.text.primary,
			backgroundColor: theme.palette.background
		},
	}));
	const classes = useStyles();

	const { state, dispatch } = React.useContext(MainContext);

	const handleClick = useCallback((areaName, monsterName, newCount) => {
		dispatch({
			type: "UPDATE_COUNT",
			area: areaName,
			monster: monsterName,
			count: newCount
		});
	}, [dispatch]);

	const areaObjects = Object.entries(state.areas).map(([area, monster]) => {
		const bonster = Object.entries(monster).map(([ponster, count]) =>
			<Grid item xs={12} key={ponster}>
				<Monster area={area} name={ponster} count={count} handleClick={handleClick}/>
			</Grid>
		);

		return (
			<Grid item xs={2} key={area}>
				<Paper className={classes.paper}>
					<Grid item xs={12}><h3>{area}</h3></Grid>
					{bonster}
				</Paper>
			</Grid>
		);
	});

	return (
		<div className={classes.root} id={"app-container"} key={"app-container"} >
			<Grid container spacing={0}>
				{areaObjects}
			</Grid>
		</div>
	);
}

export default App;
