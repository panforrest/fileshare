import React, { Component } from 'react'
import { Account, Files, Profile } from '../containers'
import { ProfileLayout} from '../layout'



class Home extends Component{
  render(){

    return(
        <div>

        <h1>Home Layout</h1>

          <Files />


        </div>
    )
  }
}

export default Home
