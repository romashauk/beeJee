import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import md5 from 'js-md5';

const styles = {
  card: {
    minWidth: 400,
    minHeight: 400,
    margin: 50,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
    marginTop: 24,
  },
  pos: {
    marginBottom: 12,
  },
  description: {
    maxHeight: 100,
    minWidth: 350,
    overflow: `scroll`,
  },
};
class Task extends Component {
  state = {
    edit: false,
    statusForm: 0,
    textValue: '',
  };
  editCard = () => {
    this.setState({
      edit: !this.state.edit,
    });
  };
  handleSelect = e => {
    this.setState({
      statusForm: e.target.value,
    });
  };
  handleChange = value => {
    this.setState({
      textValue: value,
    });
  };
  render() {
    const { id, username, email, text, status, admin } = this.props;
    const { edit, statusForm, textValue } = this.state;
    console.log(md5(textValue));
    return (
      <>
        <Card className="card" style={styles.card}>
          <CardContent className="content">
            <Typography color="textSecondary" gutterBottom>
              User
            </Typography>
            <Typography>{username}</Typography>
            <Typography style={styles.title} color="textSecondary" gutterBottom>
              Email
            </Typography>
            <Typography>{email}</Typography>
            <Typography style={styles.title} color="textSecondary" gutterBottom>
              Description
            </Typography>
            {!edit ? (
              <Typography>{text}</Typography>
            ) : (
              <TextField
                onChange={e => this.handleChange(e.target.value)}
                style={styles.description}
                multiline
                defaultValue={text}
              />
            )}

            <Typography style={styles.title} color="textSecondary" gutterBottom>
              Status
            </Typography>
            {!edit ? (
              <Typography>{status === 10 ? 'Done' : 'To do'}</Typography>
            ) : (
              <Select onChange={e => this.handleSelect(e)} value={statusForm}>
                <MenuItem value={0}>To do</MenuItem>
                <MenuItem value={10}>Done</MenuItem>
              </Select>
            )}
          </CardContent>
          {!admin && (
            <CardActions className="card__buttons">
              {!edit ? (
                <Button onClick={this.editCard} size="small" color="primary">
                  Edit
                </Button>
              ) : (
                <>
                  <Button size="small" color="primary">
                    Save
                  </Button>
                  <Button onClick={this.editCard} size="small">
                    Cancel
                  </Button>
                </>
              )}
            </CardActions>
          )}
        </Card>
      </>
    );
  }
}
export default Task;
