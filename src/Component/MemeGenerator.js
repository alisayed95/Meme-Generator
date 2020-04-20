import React from "react";
import "./styleMeme.css"

class MemeGenerator extends React.Component{
    constructor(){
        super();
        this.state = {
            upperText : "",
            lowerText : "",
            randomImg : "http://i.imgflip.com/1bij.jpg",
            imgUrl : []
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    componentDidMount(){
       fetch("https://api.imgflip.com/get_memes")
        .then(resp => resp.json())
        .then(data =>{
            this.setState({
                imgUrl : data.data.memes
            })
        })
    }
    handleChange(event){
        const {value,name} = event.target
        this.setState({
            [name] : value
        })
    }
    handleSubmit(event){
        event.preventDefault();
        const randNum = Math.floor(Math.random()*this.state.imgUrl.length)
        const randImg = this.state.imgUrl[randNum].url
        this.setState({
            randomImg : randImg
        })
        console.log("clicked")
    }

    render(){
        return(
            <main>

                <form onSubmit={this.handleSubmit} className="cool">
                    <input 
                    type="text" 
                    placeholder="Type here your upper Text"
                    name = "upperText"
                    value = {this.state.upperText}
                    onChange = {this.handleChange}
                    />
                    <input 
                    type="text" 
                    name = "lowerText"
                    value = {this.state.lowerText}
                    placeholder="Type here your lower Text"
                    onChange = {this.handleChange}
                    />
                    <button className="genBtn">Gen</button>
                </form>
               
                <div className="meme-img">
                <p className="upper">{this.state.upperText}</p>
                    <img
                    src= {this.state.randomImg} 
                    alt="random meme"
                    />
                    <p className="lower">{this.state.lowerText}</p>
                 </div>
            </main>
        )
    }
}

export default MemeGenerator;