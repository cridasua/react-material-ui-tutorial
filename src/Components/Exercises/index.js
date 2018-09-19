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
export default ({ exercises }) =>
  <Grid container spacing={8}>
    <Grid item sm>
      <Paper style={styles.Paper}>
        {exercises.map(([group, exercises]) =>
          <Fragment key={group}>
            <Typography
              variant="headline"
              style={{ textTransform: 'capitalize' }}>
              {group}
            </Typography>
            <List component="ul">
              {exercises.map(({ id, title }) =>
                <ListItem button key={id}>
                  <ListItemText primary={title} />
                </ListItem>
                // id: 'overhead-press',
                // title: 'Overhead Press',
                // description: 'Delts exercise...',
              )}
            </List>
          </Fragment>
        )}
      </Paper>
    </Grid>
    <Grid item sm>
      <Paper style={styles.Paper}>
        <Typography variant="display1">
          Welcome!
        </Typography>
        <Typography
          variant="subheading"
          style={{ marginTop: 20 }}>
          Please select and exercise from the list on the left.
        </Typography>
      </Paper>
    </Grid>
  </Grid>