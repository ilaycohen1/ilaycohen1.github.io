
function Navbar(){
    return (
        <div className="navbar">
            <a href="index.html">Home</a>
            <a href="clowns.html">Clowns</a>
            <a href="gorillas.html">Gorillas</a>
            <a href="pirates.html">Pirates</a>
        </div>
    )
}

function ImageStory(props){
    return(
        <div className="imageStory">
            <Title age={props.age}/>
            
            {props.image.startsWith("http") ? <img src={`${props.image}`}/> : <img src={`/images/${props.image}`}/>}
            
            <p>{props.story}</p>
            <p>His name is {props.name}</p>
            <p><a href={props.url}>Link</a></p>
        </div>
    )
}

function Title(p){
    if (p.age < 1){
        return (
            <div  className="title">A Baby</div>
        )        
    }
    if (p.age >= 1){
        return (
            <div className="title">An Adult</div>
        )
    }
    else {
        return (
            <div className="title">{p.title}</div>
        )
    }
}

function ComboStories(props){
    return (
        <div>
            <ClownStories/>
            <GorillaStories/>
            <PirateStories/>
        </div>
    )
}


const main = ReactDOM.createRoot(document.getElementById("main"))
const navbar = ReactDOM.createRoot(document.getElementById("navbar"))

navbar.render(<Navbar/>)
main.render(<ComboStories/>)


