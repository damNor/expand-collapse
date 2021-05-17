class LoopWithClickHandler extends React.Component {
  state = {
    users: [
      { userid: 1, username: "gaearon", name: "Dan Abramov" },
      { userid: 2, username: "bvaughn", name: "Brian Vaughn" },
      { userid: 3, username: "zpao", name: "Paul O’Shannessy" },
    ],
  };

  handleClick = (event) => {
    this.setState({ clicked: Number(event.target.dataset.id) });
  };

  render() {
    const { clicked, users } = this.state;
    const user = users.find(({ userid }) => userid === clicked);
    return (
      <div onClick={this.handleClick}>
        {users.map(({ userid, username, name }) => (
          <div key={userid} data-id={userid}>
            {name} ({username})
          </div>
        ))}

        <p>user selected: {user ? user.name : "none"}</p>
      </div>
    );
  }
}

ReactDOM.render(<LoopWithClickHandler />, document.getElementById("root"));
