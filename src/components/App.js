import React from 'react';
import { data } from '../data';
import Navbar from './Navbar';
import MovieCard from './MovieCard';
import { addMovies } from '../actions';

class App extends React.Component {
  componentDidMount(){
    const {store} = this.props
    store.subscribe(()=>{
      console.log('UPDATED');
      this.forceUpdate();
    })
    // make api call
    // dispatch action
    store.dispatch(addMovies(data))

    // store.subscribe will call only just after dispatch
    console.log('STATE',this.props.store.getState())
  }

  render(){
    const { list } = this.props.store.getState()
    // console.log(data);
    // console.log('calling from app.js')
    console.log('RENDERED',this.props.store.getState());
    return (
      <div className="App">
        <Navbar />
        <div className="main">
        <div className="tabs">
          <div className="tab">Movies</div>
          <div className="tab">Favourites</div>
        </div>

        <div className="list">
          {list.map((movie,index)=>{
            return <MovieCard movie={movie} key={`movies-${index}`} />
          })}
        </div>
        </div>
      </div>
    );
  }
}

export default App;
