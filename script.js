var CounterInPlus = React.createClass({
    getInitialState: function() {
        return {
            counter: 0
        };
    },

    increment: function() {
        this.setState({
            counter: this.state.counter + 1
        });

    },

    render: function() {
        return React.createElement('button', {onClick: this.increment},
            React.createElement('div', {}, 'Licznik ' + this.state.counter)
        );
    }
});

var CounterInMinus = React.createClass({
    getInitialState: function() {
        return {
            counter: 0
        };
    },

    decrement: function() {
        this.setState({
            counter: this.state.counter - 1
        });

    },

    render: function() {
        return React.createElement('button', {onClick: this.decrement},
            React.createElement('div', {}, 'Licznik ' + this.state.counter)
        );
    }
});

var element = React.createElement(CounterInPlus);
var element2 = React.createElement(CounterInMinus);
ReactDOM.render(element, document.getElementById('app'));
ReactDOM.render(element2, document.getElementById('app2'));