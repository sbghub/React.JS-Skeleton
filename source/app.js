var React = require('react');
var ReactDOM = require('react-dom');
// 'gulp' in command line after edits to push them to build folder

// make components here with React.createClass
var Component = React.createClass({
    render: function () {
        return <div>Hello {this.props.name}</div>;
    }
});

// connect to html containers/provide init params here with ReactDOM.render
ReactDOM.render(
    <Component name="world" />,
    document.getElementById('container')
);