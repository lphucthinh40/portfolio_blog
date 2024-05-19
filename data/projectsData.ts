interface Project {
  title: string,
  description: string,
  href?: string,
  imgSrc?: string,
}

const projectsData: Project[] = [
  {
    title: 'UnrealVision - Synthetic Dataset Generator',
    description: `Developed a synthetic dataset simulation environment in Unreal Engine 5 that can be used for 3D Human Pose Estimation`,
    imgSrc: '/static/images/google.png',
    href: 'https://www.google.com',
  },
  {
    title: 'Project Faiz',
    description: `Developed a ROS2-based Drone powered by GPT-4o for decision making`,
    imgSrc: '/static/images/time-machine.jpg',
    href: '/blog/the-time-machine',
  },
]

export default projectsData
