
import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function() {

  class EnterPoints extends React.Component {
    onEnterPoints = () => {
      if (typeof this.props.clickMethod === 'function') {
        let number = prompt("wprowadź wynik");
        this.props.clickMethod(number); //clickMethod jest funkcją zdefniowaną w rodzicu,
        //prop.numberOfCounts bierze z rodzica
      }
    }
    render() {
      return <div>
      <h1>{this.props.title}</h1>
      <button onClick={this.onEnterPoints}>
        Dodaj punkty
      </button>
    </div>
    }
  }

class Shop extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      list: [],
      sum: []
    }
  }
  listPoints = (points) => { //ten number przyjmie od dziecka - this.props.numberOfCounts
    let newList = this.state.list.slice(); //musi być slice 0 żeby powstała nowa tablica
    newList.push(points);
    // let newList = this.state.list.concat([points]); - alternatywa1
    // let newList = [...this.state.list, points]; - alternatywa2
    let newSum = newList.reduce(function(a, b) {
      let c = parseInt(a,10);
      let d = parseInt(b,10);
      return c + d;
    });
    this.setState({
      list: newList,
      sum: newSum
    });
  }

    render() {
      return <div>
        <EnterPoints clickMethod={this.listPoints} title={this.props.title}/>
        <ul>
          {this.state.list.map((points,i ) => <li key={i}>{points}</li>)}
        </ul>
      suma punktów:  {this.state.sum}
      </div>;
    }
  }

  class App extends React.Component {
    render() {
      return <div>
      <Shop title="My" />
      <Shop title="Wy" />
      </div>
    }
  }

  ReactDOM.render(
    <App />, document.getElementById('app'));

});
