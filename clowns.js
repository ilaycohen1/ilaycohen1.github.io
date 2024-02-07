function ClownStories(props){
    return (
        <><Title title = "Clowns:"/>
        <div class="imageStories">
            <ImageStory image="clown.png" story="This is a clown." name="Alberto" url="" age="3"/>
            <ImageStory image="clown2.png" story="This is clown number 2." name="Giorgio" url="" age="0.7"/>
        </div></>
    )
}

const clowns = ReactDOM.createRoot(document.getElementById("clowns"))
const navbar = ReactDOM.createRoot(document.getElementById("navbar"))

navbar.render(<Navbar/>)
clowns.render(<ClownStories/>)

