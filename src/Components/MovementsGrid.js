import Inferno from 'inferno';
import Component from 'inferno-component';

export class MovementsGrid extends Component {
  state = { movements: [] };

  render() {
    return (
      <div>
        <MovementEditRow onSaved={this.createMovement} />
        {this.state.movements.map(m => <MovementRow movement={m} />)}
      </div>);
  }

  createMovement = (movement) => {
    this.setState({
      movements: [
        ...this.state.movements,
        movement,
      ],
    });
  }
}

const MovementRow = (props) =>
  <div>
    {props.movement.date}
    -
    {props.movement.title}
    -
    {props.movement.amount}
  </div>;

class MovementEditRow extends Component {
  render() {
    return (
      <div>
        <input placeholder="Date" onChange={this.onDateChanged} />
        <input placeholder="Title" onChange={this.onTitleChanged} />
        <input placeholder="Amount" onChange={this.onAmountChanged} />
        <button onClick={this.onSaved}>Save</button>
      </div>);
  }

  onDateChanged = (event) =>
    this.setState({ date: event.target.value });

  onTitleChanged = (event) =>
    this.setState({ title: event.target.value });

  onAmountChanged = (event) =>
    this.setState({ amount: event.target.value });

  onSaved = () => {
    if (this.props.onSaved) {
      this.props.onSaved({
        date: this.state.date,
        title: this.state.title,
        amount: this.state.amount,
      });
    }
  }
}
