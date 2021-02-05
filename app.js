const e = React.createElement;
const element = <h1>Geez, okay</h1>;

function App()
{
    return(
        ReactDOM.render(element, document.getElementById('root'));
    )
}


setInterval(App, 1000);
