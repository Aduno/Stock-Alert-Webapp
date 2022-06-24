import React from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
import Story from '../components/Story'

import { stories } from '../data/NewsStory'

function StoryPage() {
    const id = useParams()['id'];
  return (
    <>
    <Story src={stories[id]['img']} title={stories[id]['title']} author={stories[id]['author']} date={stories[id]['date']}>{stories[id]['text']}</Story>
    </>
  )
}

export default StoryPage