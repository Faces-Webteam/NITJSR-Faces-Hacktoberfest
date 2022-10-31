import React from 'react'
import { Event } from './Event/Event';
import { People } from './People/People';
import { Workshop } from './Workshop/Workshop';
import {Gallery} from './Gallery/Gallery';

function Home() {
  return (
    <>
      <div>Home</div>
      <Event></Event>
      <Gallery></Gallery>
      <People></People>
      <Workshop></Workshop>
    </>
  )
}

export default Home