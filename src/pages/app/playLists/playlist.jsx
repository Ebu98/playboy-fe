import React from 'react'
import Afrobeat from '../../../components/playlistCollections/afrobeat'
import OldSkul from '../../../components/playlistCollections/oldskool'
import Rap from '../../../components/playlistCollections/rap'
import StreetJam from '../../../components/playlistCollections/streetJams'

function PlayList() {
  return (
    <div>
       <Afrobeat title="Afrobeat" />
       <OldSkul title="Oldskul" />
       <Rap title="Rap"/>
       <StreetJam title="Steet jam" />
    </div>
  )
}
export default PlayList