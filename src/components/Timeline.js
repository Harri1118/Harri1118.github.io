// src/components/Timeline.js
import React from 'react';
import Timeline from 'react-timeline-component';

const events = [
  { date: '2020', text: 'Started my career' },
  { date: '2021', text: 'Launched my first project' },
  // Add more events
];

function MyTimeline() {
  return <Timeline events={events} />;
}

export default MyTimeline;