import React, { Fragment } from "react"
import { Grid, Paper, Typography, List, ListItem, ListItemText } from "@material-ui/core";

const styles = {
  Paper: {
    padding: 20,
    margnTop: 10,
    margingBottom: 10,
    height: 500,
    overflowY: 'auto'
  }
}
export default ({ category,
  exercise: {
    id,
    title = 'Welcome!',
    description = 'Please select and exercise from the list on the left.'
  },
  exercises,
  onSelect }) =>
  <Grid container spacing={8}>
    <Grid item sm>
      <Paper style={styles.Paper}>
        {exercises.map(([group, exercises]) =>
          !category || category === group
            ? <Fragment key={group}>
              <Typography
                variant="headline"
                style={{ textTransform: 'capitalize' }}>
                {group}
              </Typography>
              <List component="ul">
                {exercises.map(({ id, title }) =>
                  <ListItem
                    button
                    key={id}
                    onClick={() => onSelect(id)}>
                    <ListItemText primary={title} />
                  </ListItem>
                  // id: 'overhead-press',
                  // title: 'Overhead Press',
                  // description: 'Delts exercise...',
                )}
              </List>
            </Fragment>
            : null
        )}
      </Paper>
    </Grid>
    <Grid item sm>
      <Paper style={styles.Paper}>
        <Typography variant="display1">
          {title}
        </Typography>
        <Typography
          variant="subheading"
          style={{ marginTop: 20 }}>
          {description}
        </Typography>
      </Paper>
    </Grid>
  </Grid>