import React from 'react'
import Back from '../common/back/Back'
import CoursesCard from './CoursesCard'
import OnlineCourses from './OnlineCourses'

function CourseHome() {
  return (
    <div>
           <Back title="Explore Courses"/>
           <CoursesCard/>
           <OnlineCourses/>
    </div>
  )
}

export default CourseHome
