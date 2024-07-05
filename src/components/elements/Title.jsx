import React from 'react'

export default function Title({ title, classname }) {
  return (
    <div className={` text-4xl font-medium ${classname}`}>
      {title}
    </div>
  )
}
