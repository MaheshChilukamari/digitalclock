const jsDiv = document.getElementById('dateJS');
const jsReact = document.getElementById('dateReact');

const render = () => {
    jsDiv.innerHTML = 
    `<div class='split'>
            JSTemplate
            <input/>
            <p> ${ new Date()} </p>           
    
    </div>` ;


    var divToRender  = React.createElement(
        'div',{className: 'split'},
        'React template', React.createElement('input'),
        React.createElement('p',null,new Date().toString())
    );
    ReactDOM.render(divToRender,jsReact);
}

setInterval(render,1000);
