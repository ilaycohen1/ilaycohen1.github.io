function PirateStories(props){
    return (
        <><Title title = "Pirates:"/>
        <div class="imageStories">
            <ImageStory image="pirate.png" story="This is a pirate." name="Alberto" url="" age="3"/>
            <ImageStory image="pirate2.png" story="This is pirate number 2." name="Giorgio" url="" age="0.7"/>
        </div></>
    )
}

const pirates = ReactDOM.createRoot(document.getElementById("pirates"))
const navbar = ReactDOM.createRoot(document.getElementById("navbar"))

navbar.render(<Navbar/>)
pirates.render(<PirateStories/>)

