import React, {Component} from 'react';
import Author from './Author'
import Article from './Article';
import Side from './Side'
import Bottom from './Bottom'
import Links from './Links'


class Main extends Component {
    render() {
      return (


     <main className="expanded row">
        <Author />
        <Article />
        <Side />
        <Bottom />
        <Links />
     </main>

        
    )
  }     
}

export default Main