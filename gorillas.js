function GorillaStories(props){
    return (
        <><Title title="Gorillas:" />
        <div className="imageStories">
            <ImageStory image="gorilla.png" story="This is a gorilla." name="Nissim" url="" age="0.5"/>
            <ImageStory image="gorilla2.png" story="This is gorilla number 2." name="Yossi" url="" age="1.5"/>
        </div></>
    )
}


const gorillas = ReactDOM.createRoot(document.getElementById("gorillas"))
const navbar = ReactDOM.createRoot(document.getElementById("navbar"))

navbar.render(<Navbar/>)
gorillas.render(<GorillaStories/>)

