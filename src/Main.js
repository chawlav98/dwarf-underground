import React, {Component} from 'react';
import Author from './Author'
import Article from './Article';
import Side from './Side'
import Bottom from './Bottom'


class Main extends Component {
    render() {
      return (


        <main className="expanded row">
        <Author />
        <Article />
        <Links />
        
        <Side />
        <Bottom />
        </main>

        
    )
  }     
}

export default Main