class Subscription extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSmall: false,
      isLarge: false,
      numberOfBoxes: 1
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <form>
        <label>
          Small Veg Box:
          <input
            name="isSmall"
            type="checkbox"
            checked={this.state.isSmall}
            onChange={this.handleInputChange} />
        </label>
        <label>
          Large Veg Box:
          <input
            name="isLarge"
            type="checkbox"
            checked={this.state.isLarge}
            onChange={this.handleInputChange} />
        </label>
        <br />
        <label>
          Number of Veg Boxes:
          <input
            name="numberOfBoxes"
            type="number"
            value={this.state.numberOfBoxes}
            onChange={this.handleInputChange} />
        </label>
      </form>
    );
  }
}

ReactDOM.render(
  <Reservation />,
  document.getElementById('root')
);


export default Subscription
