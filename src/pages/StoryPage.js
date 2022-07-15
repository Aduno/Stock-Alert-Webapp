import React from 'react'
import { useParams } from 'react-router-dom'
import { LanguageContext } from '../Apps';
import Story from '../components/Story'

import { stories, storiesFr } from '../data/NewsStory'

function StoryPage() {
    const id = useParams()['id'];
  return (
    <LanguageContext.Consumer>{(language)=>(
    <>
      {(language==='En'? <Story src={stories[id]['img']} title={storiesFr[id]['title']} author={storiesFr[id]['author']} date={storiesFr[id]['date']}>{storiesFr[id]['text']}</Story>:<Story src={stories[id]['img']} title={stories[id]['title']} author={stories[id]['author']} date={stories[id]['date']}>{stories[id]['text']}</Story>)}
    
    </>
    )}</LanguageContext.Consumer>
    
  )
}

export default StoryPage