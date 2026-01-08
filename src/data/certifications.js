const certifications = {
  overview: [
    { file: '/assets/docs/1stSem20-21.png', title: '1st Sem A.Y. 20-21' },
    { file: '/assets/docs/2ndSem20-21.png', title: '2nd Sem A.Y. 20-21' },
    { file: '/assets/docs/1stSem21-22.png', title: '1st Sem A.Y. 21-22' },
    { file: '/assets/docs/1stSem22-23.png', title: '1st Sem A.Y. 22-23' },
    { file: '/assets/docs/2ndSem22-23.png', title: '2nd Sem A.Y. 22-23' },
    { file: '/assets/docs/OJT 1 - Certificate.png', title: 'On-the-Job Training I' },
    { file: '/assets/docs/OJT 2 - Certificate.png', title: 'On-the-Job Training II' }
  ],
  activities: [
    { file: '/assets/docs/Sololearn.png', title: 'C# Sololearn' },
    { file: '/assets/docs/Kotlin.jpg', title: 'Kotlin Sololearn' },
    { file: '/assets/docs/Cisco.png', title: 'Cisco Cyber Security' },
    { file: '/assets/docs/Software Development & Project Management.png', title: 'Software Development & Project Management' }
  ],
  events: [
    { file: '/assets/docs/Blockchain.jpg', title: 'CORES Blockchain' },
    { file: '/assets/docs/DataPrivacy.jpg', title: 'CORES Data Privacy' },
    { file: '/assets/docs/Hacking.jpg', title: 'CORES Hacking' },
    { file: '/assets/docs/Robotics.jpg', title: 'CORES Robotics' }
  ]
}

export const tabs = [
	{ id: 'overview', label: 'Academic', items: certifications.overview },
	{ id: 'activities', label: 'Skills', items: certifications.activities },
	{ id: 'events', label: 'Events', items: certifications.events }
  ]

