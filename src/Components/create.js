import React from 'react';
//import logo from './logo.svg';


class Create extends React.Component{

  constructor(props) {
    super(props);
    this.state = {Title: '', Year: '', Poster: ''};

    this.handleChangeMovieTitle = this.handleChangeMovieTitle.bind(this);
    this.handleChangeMovieYear = this.handleChangeMovieYear.bind(this);
    this.handleChangeMoviePoster = this.handleChangeMoviePoster.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
    alert('A name was submitted: ' + this.state.Title +''+ 'Year:'+ this.state.Year + ''+'Poster:'+ this.state.Poster);
    e.preventDefault();
      }

  render(){
  return (
    <div>
     <h1>Hello from another component</h1>
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
export default Create;