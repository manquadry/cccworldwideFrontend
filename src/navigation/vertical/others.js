export default [
  { heading: 'Others' },
  {
    title: 'User Dashboard',
    icon: { icon: 'tabler-command' },
    to: 'access-control',
    action: 'read',
    subject: 'AclDemo',
   
  },
  {
    title: 'Home',
    icon: { icon: 'tabler-smart-home' },
    children: [
      {
        title: 'Level 2.1',
        icon: { icon: 'tabler-smart-home' },
        to: null,
        action: 'read',
        subject: 'AclDemo',
        
      },
      {
        title: 'Level 2.2',
        icon: { icon: 'tabler-smart-home' },
        to: null,
        action: 'read',
        subject: 'AclDemo',
      },
      {
        title: 'Level 2.2',
        children: [
          {
            title: 'Level 3.1',
            to: null,
          },
          {
            title: 'Level 3.2',
            to: null,
          },
        ],
      },
    ],
  },
  
  {
    title: 'Nav Levels',
    icon: { icon: 'tabler-menu-2' },
    children: [
      {
        title: 'Level 2.1',
        to: null,
        
      },
      {
        title: 'Level 2.2',
        children: [
          {
            title: 'Level 3.1',
            to: null,
          },
          {
            title: 'Level 3.2',
            to: null,
          },
        ],
      },
    ],
  },
  {
    title: 'Disabled Menu',
    to: null,
    icon: { icon: 'tabler-eye-off' },
    disable: true,
  },
  {
    title: 'Raise Support',
    href: 'https://pixinvent.ticksy.com/',
    icon: { icon: 'tabler-headphones' },
    target: '_blank',
  },
  {
    title: 'Documentation',
    href: 'https://demos.pixinvent.com/vuexy-vuejs-admin-template/documentation/',
    icon: { icon: 'tabler-file-text' },
    target: '_blank',
  },
]
