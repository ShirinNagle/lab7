import React from 'react';
import axios from 'axios';


class Edit extends React.Component{

    constructor(props) {
        super(props);
        this.state = {Title: '', Year: '', Poster: ''};
    
        this.handleChangeMovieTitle = this.handleChangeMovieTitle.bind(this);
        this.handleChangeMovieYear = this.handleChangeMovieYear.bind(this);
        this.handleChangeMoviePoster = this.handleChangeMoviePoster.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
      //life cycle hook
      componentDidMount(){
          alert(this.props.match.params.id)
          axios.get('http://localhost:4000/api/movies/' + this.props.match.params.id)
          .then((response)=>{
              this.setState({
                  Title:response.data.title,
                  Year:response.data.year,
                  Poster:response.data.poster,
                  _id:response.data._id
              })
          })
          .catch()
      }
    
      handleChangeMovieTitle(e) {
        this.setState({Title: e.target.value});
      }
      handleChangeMovieYear(e) {
        this.setState({Year: e.target.value});
      }
    
      handleChangeMoviePoster(e) {
        this.setState({Poster: e.target.value});
      }
    
      handleSubmit(e) {
        alert('Title: '+this.state.Title +''+ 'Year: '+ this.state.Year + ''+'Poster: '+ this.state.Poster);
        e.preventDefault();
        const newMovie = {
    
          title: this.state.Title,
          year: this.state.Year,
          poster: this.state.Poster
        }
        axios.put('http://localhost:4000/api/movies/'+ this.state._id, newMovie)
        .then()
        .catch();

        
    
    
          }
    
      render(){
      return (
        <div>
         <h1>Hello from Edit</h1>
         <form onSubmit={this.handleSubmit}>
           <div className="form-group">
            <label>
              Movie Title:
              </label>
              <input type="text" value={this.state.Title} onChange={this.handleChangeMovieTitle} />
            
            
    
          
            </div>
            <div className="form-group">
            <label>
            Movie Year:
              </label>
              <input type="text" value={this.state.Year} onChange={this.handleChangeMovieYear} />
            
            
            </div>
    
            <div className="form-group">
            <label>
              Movie Poster Url
            </label>
            <textarea className='form-control' rows = '6' value ={this.state.Poster} onChange={this.handleChangeMoviePoster} ></textarea>
            <div className='form-group'>
            <input type="submit" value="Submit" />
            </div>
            </div>
          </form>
          
         
        </div>
      );
    }
    }
    export default Edit;