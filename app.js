const e = React.createElement;

function App() {
    const element = (<h1>Geez, okay</h1>);
    ReactDOM.render(element, document.getElementById('root'));
}


setInterval(App, 1000);
