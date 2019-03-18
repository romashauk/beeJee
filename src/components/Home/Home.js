import React, { Component } from 'react';
import * as taskActions from '../../redux/actions/tasks';
import { connect } from 'react-redux';
import Pagination from '../Pagination/Pagination';
import TaskForm from '../TaskForm/TaskForm';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Loader from '../Loader/Loader';
import * as authActions from '../../redux/actions/authorization';
import Task from '../Task/Task';
import Sort from '../Sort/Sort';
import encode from 'encode-3986';
import md5 from 'js-md5';
import axios from 'axios';

class Home extends Component {
  state = {
    sortField: 'id',
    sortDirection: 'asc',
    page: 1,
  };

  componentDidMount() {
    this.getTasks();
  }
  logOut = () => {
    this.props.logout();
  };
  getTasks = () => {
    const { sortField, sortDirection, page } = this.state;

    this.props.getTasks(sortField, sortDirection, page);
  };

  handleTaskCreate = data => {
    this.props.createTask(data).then(() => this.getTasks());
  };

  handlePageChange = page => {
    this.setState({ page }, this.getTasks);
  };
  updateData = value => {
    this.setState({ sortField: value });
    this.getTasks();
  };
  updateDirection = dir => {
    this.setState({
      sortDirection: dir,
    });
    this.getTasks();
  };
  editTask = () => {
    const status = encodeURIComponent(10);
    const text = encodeURIComponent('text');
    const token = encodeURIComponent('beejee');
    let signature = md5(`status=${status}&text=${text}&token=${token}`);
    let data = {
      signature,
      status,
      text,
      token,
    };

    axios
      .post(
        `https://uxcandy.com/~shapoval/test-task-backend/?developer=Name/edit/1372/`,
        data
      )
      .then(({ data }) => {
        console.log(data);
      });
  };
  render() {
    const { loading, taskList, taskTotal, admin, history } = this.props;
    const { page, sortField } = this.state;

    return (
      <>
        <AppBar onClick={this.editTask} className="header">
          <div className="header__container">
            <h2>Welcome</h2>
            {!admin ? (
              <Button
                onClick={() => history.push('/login')}
                className="header__btn"
                color="inherit"
              >
                Log In
              </Button>
            ) : (
              <Button
                onClick={this.logOut}
                className="header__btn"
                color="inherit"
              >
                Log Out
              </Button>
            )}
          </div>
        </AppBar>
        <TaskForm onSubmit={this.handleTaskCreate} />
        <Sort
          getTasks={this.getTasks}
          updateData={this.updateData}
          updateDirection={this.updateDirection}
          value={sortField}
          {...this.state}
        />
        {loading && <Loader />}
        <div className="wrapper">
          {taskList.map(t => (
            <Task
              key={t.id}
              id={t.id}
              username={t.username}
              admin={admin}
              email={t.email}
              text={t.text}
              status={t.status}
            />
          ))}
        </div>

        <Pagination
          totalPages={Math.ceil(taskTotal / 3)}
          activePage={page}
          onChange={this.handlePageChange}
        />
      </>
    );
  }
}
const mapStateToProps = ({ tasks, admin }) => ({
  loading: tasks.loading,
  taskList: tasks.entries,
  taskTotal: tasks.total,
  admin: admin,
});
export default connect(
  mapStateToProps,
  { ...authActions, ...taskActions }
)(Home);
