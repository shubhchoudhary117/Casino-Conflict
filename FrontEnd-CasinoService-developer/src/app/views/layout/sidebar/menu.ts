import { MenuItem } from './menu.model';

export const MENU: MenuItem[] = [
  {
    label: 'Main',
    isTitle: true
  },
  {
    label: 'Dashboard',
    icon: 'home',
    link: '/dashboard'
  },
  {
    label: 'Admin Panel',
    isTitle: true
  },
  {
    label: 'Provider Panel',
    icon: 'users',
    link: '/provider-panel',
  },
  {
    label: 'Client Panel ',
    icon: 'users',
    link: '/client-panel',
  },
  // {
  //   label: 'Agent',
  //   icon: 'users',
  //   link: '/agent',
  // },
  // {
  //   label: 'Client',
  //   icon: 'users',
  //   link: '/client',
  // },



  // {
  //   label: 'Web Apps',
  //   isTitle: true
  // },
  // {
  //   label: 'Email',
  //   icon: 'mail',
  //   subItems: [
  //     {
  //       label: 'Inbox',
  //       link: '/apps/email/inbox',
  //     },
  //     {
  //       label: 'Read',
  //       link: '/apps/email/read'
  //     },
  //     {
  //       label: 'Compose',
  //       link: '/apps/email/compose'
  //     },
  //   ]
  // },
  // {
  //   label: 'Chat',
  //   icon: 'message-square',
  //   link: '/apps/chat',
  // },
  // {
  //   label: 'Calendar',
  //   icon: 'calendar',
  //   link: '/apps/calendar',
  //   badge: {
  //     variant: 'primary',
  //     text: 'Event',
  //   }
  // },
  {
    label: 'CASH TRANSACTION',
    isTitle: true
  },
  {
    label: 'Debit/Credit Entery (C)',
    icon: 'credit-card',
    link:'ct/client'
  },
  {
    label: 'Debit/Credit Entery (P)',
    icon: 'credit-card',
    link:'/ct/provider'

  },
  // {
  //   label: 'Debit/Credit Entery (S)',
  //   icon: 'credit-card',
  //   link:'/ct/super'

  // },
  // {
  //   label: 'Debit/Credit Entery (M)',
  //   icon: 'credit-card',
  //   link:'/ct/master'

  // },
  {
    label:'LEDGER',
    isTitle:true,
  },
  {
    label: 'My Ledger',
    icon: 'arrow-right-circle',
    link:'/ledger'

  },{
    label: 'Client Plus/Minus',
    icon: 'arrow-right-circle',
    link:'/ledger/client/pm'
  },{
    label: 'All Client Ledger',
    icon: 'arrow-right-circle',
    link:'/ledger/client'

  },
  {
    label: 'All Provider Ledger',
    icon: 'arrow-right-circle',
    link:'/ledger/provider'

  },
  {
    label:'Old Data',
    isTitle:true
  },
  {
    label: 'Sport Game',
    icon: 'arrow-right-circle',
    link:'/old/game/completeGame'

  },
  {
    label: 'Ledger',
    icon: 'arrow-right-circle',
    link:'/old/ledger'

  },

  {
    label: 'Debit/Credit Entery (C)',
    icon: 'credit-card',
    link:'old/oldclient'
  },
  {
    label: 'Debit/Credit Entery (P)',
    icon: 'credit-card',
    link:'/old/oldprovider'

  },
  {
    label:'Games',
    isTitle:true,
  },

  {
    label:'InPlay Game',
    link: "/game/inPlay",
    icon:'play'

  },
  {
    label:'Complete Game',
    link: "/game/completeGame",
    icon:'pause-circle'
  },
  {
    label: 'Casino',
    isTitle: true
  },
  // {
  //   label: 'Live Casino Position',
  //   icon: 'trending-up',
  //   subItems: [
  //     {
  //       label: 'VirtualTeen Position',
  //       link: "/casino/position",

  //     },
  //     {
  //       label: 'LiveTeen20 Position',
  //       link: "/reports/data-report/master",
  //     },
  //   ]
  // },
  {
    label:'Casino Details',
    link: "/casino/ledger",
    icon:'box'
  },
  {
    label: 'VirtualTeen Position',
    link: "/casino/position",
    icon:'box'
  },
  {
    label: 'Report',
    isTitle: true
  },
  {
    label: 'Data Reports',
    icon: 'database',
    subItems: [
      {
        label: 'Master Reports',
        link: "/reports/data-report/master",
      },
      {
        label: 'Super Reports',
        link: '/reports/data-report/super',
      },
      {
        label: 'Agent Reports',
        link: '/reports/data-report/agent',
      },
      {
        label: 'Clients Reports',
        link: '/reports/data-report/client',
      },
    ]
  },
  {
    label: 'Login Reports',
    icon: 'log-in',
    subItems: [
      {
        label: 'Master Login Reports',
        link: '/reports/login-report/master',
      },
      {
        label: 'Super Login Reports',
        link: '/reports/login-report/super',
      },
      {
        label: 'Agent Login Reports',
        link: '/reports/login-report/agent',
      },
      {
        label: 'Clients Login Reports',
        link: '/reports/login-report/client',
      },
    ]
  },

  // {
  //   label: 'Components',
  //   isTitle: true
  // },
  // {
  //   label: 'UI Kit',
  //   icon: 'feather',
  //   subItems: [
  //     {
  //       label: 'Accordion',
  //       link: '/ui-components/accordion',
  //     },
  //     {
  //       label: 'Alerts',
  //       link: '/ui-components/alerts',
  //     },
  //     {
  //       label: 'Badges',
  //       link: '/ui-components/badges',
  //     },
  //     {
  //       label: 'Breadcrumbs',
  //       link: '/ui-components/breadcrumbs',
  //     },
  //     {
  //       label: 'Buttons',
  //       link: '/ui-components/buttons',
  //     },
  //     {
  //       label: 'Button group',
  //       link: '/ui-components/button-group',
  //     },
  //     {
  //       label: 'Cards',
  //       link: '/ui-components/cards',
  //     },
  //     {
  //       label: 'Carousel',
  //       link: '/ui-components/carousel',
  //     },
  //     {
  //       label: 'Collapse',
  //       link: '/ui-components/collapse',
  //     },
  //     {
  //       label: 'Datepicker',
  //       link: '/ui-components/datepicker',
  //     },
  //     {
  //       label: 'Dropdowns',
  //       link: '/ui-components/dropdowns',
  //     },
  //     {
  //       label: 'List group',
  //       link: '/ui-components/list-group',
  //     },
  //     {
  //       label: 'Media object',
  //       link: '/ui-components/media-object',
  //     },
  //     {
  //       label: 'Modal',
  //       link: '/ui-components/modal',
  //     },
  //     {
  //       label: 'Navs',
  //       link: '/ui-components/navs',
  //     },
  //     {
  //       label: 'Navbar',
  //       link: '/ui-components/navbar',
  //     },
  //     {
  //       label: 'Pagination',
  //       link: '/ui-components/pagination',
  //     },
  //     {
  //       label: 'Popovers',
  //       link: '/ui-components/popovers',
  //     },
  //     {
  //       label: 'Progress',
  //       link: '/ui-components/progress',
  //     },
  //     {
  //       label: 'Rating',
  //       link: '/ui-components/rating',
  //     },
  //     {
  //       label: 'Scrollbar',
  //       link: '/ui-components/scrollbar',
  //     },
  //     {
  //       label: 'Spinners',
  //       link: '/ui-components/spinners',
  //     },
  //     {
  //       label: 'Timepicker',
  //       link: '/ui-components/timepicker',
  //     },
  //     {
  //       label: 'Tooltips',
  //       link: '/ui-components/tooltips',
  //     },
  //     {
  //       label: 'Typeadhed',
  //       link: '/ui-components/typeahead',
  //     },
  //   ]
  // },
  // {
  //   label: 'Advanced UI',
  //   icon: 'anchor',
  //   subItems: [
  //     {
  //       label: 'Cropper',
  //       link: '/advanced-ui/cropper',
  //     },
  //     {
  //       label: 'Owl carousel',
  //       link: '/advanced-ui/owl-carousel',
  //     },
  //     {
  //       label: 'SortableJs',
  //       link: '/advanced-ui/sortablejs',
  //     },
  //     {
  //       label: 'Sweet alert',
  //       link: '/advanced-ui/sweet-alert',
  //     },
  //   ]
  // },
  // {
  //   label: 'Forms',
  //   icon: 'file-text',
  //   subItems: [
  //     {
  //       label: 'Basic elements',
  //       link: '/form-elements/basic-elements'
  //     },
  //     {
  //       label: 'Advanced elements',
  //       subItems: [
  //         {
  //           label: 'Form validation',
  //           link: '/advanced-form-elements/form-validation'
  //         },
  //         {
  //           label: 'Input mask',
  //           link: '/advanced-form-elements/input-mask'
  //         },
  //         {
  //           label: 'Ng-select',
  //           link: '/advanced-form-elements/ng-select'
  //         },
  //         {
  //           label: 'Ngx-chips',
  //           link: '/advanced-form-elements/ngx-chips'
  //         },
  //         {
  //           label: 'Ngx-color-picker',
  //           link: '/advanced-form-elements/ngx-color-picker'
  //         },
  //         {
  //           label: 'Ngx-dropzone',
  //           link: '/advanced-form-elements/ngx-dropzone-wrapper'
  //         },
  //       ]
  //     },
  //     {
  //       label: 'Editors',
  //       link: '/form-elements/editors'
  //     },
  //     {
  //       label: 'Wizard',
  //       link: '/form-elements/wizard'
  //     },
  //   ]
  // },
  // {
  //   label: 'Charts & graphs',
  //   icon: 'pie-chart',
  //   subItems: [
  //     {
  //       label: 'ApexCharts',
  //       link: '/charts-graphs/apexcharts',
  //     },
  //     {
  //       label: 'ChartJs',
  //       link: '/charts-graphs/chartjs',
  //     },
  //   ]
  // },
  // {
  //   label: 'Tables',
  //   icon: 'layout',
  //   subItems: [
  //     {
  //       label: 'Basic tables',
  //       link: '/tables/basic-table',
  //     },
  //     {
  //       label: 'Data table',
  //       link: '/tables/data-table',
  //     },
  //     {
  //       label: 'Ngx-datatable',
  //       link: '/tables/ngx-datatable'
  //     }
  //   ]
  // },
  {
    label: 'Icons',
    icon: 'smile',
    subItems: [
      {
        label: 'Feather icons',
        link: '/icons/feather-icons',
      },
      {
        label: 'Mdi icons',
        link: '/icons/mdi-icons',
      }
    ]
  },
  // {
  //   label: 'Pages',
  //   isTitle: true
  // },
  // {
  //   label: 'Special pages',
  //   icon: 'book',
  //   subItems: [
  //     {
  //       label: 'Blank page',
  //       link: '/general/blank-page',
  //     },
  //     {
  //       label: 'Faq',
  //       link: '/general/faq',
  //     },
  //     {
  //       label: 'Invoice',
  //       link: '/general/invoice',
  //     },
  //     {
  //       label: 'Profile',
  //       link: '/general/profile',
  //     },
  //     {
  //       label: 'Pricing',
  //       link: '/general/pricing',
  //     },
  //     {
  //       label: 'Timeline',
  //       link: '/general/timeline',
  //     }
  //   ]
  // },
  // {
  //   label: 'Authentication',
  //   icon: 'unlock',
  //   subItems: [
  //     {
  //       label: 'Login',
  //       link: '/auth/login',
  //     },
  //     {
  //       label: 'Register',
  //       link: '/auth/register',
  //     },
  //   ]
  // },
  // {
  //   label: 'Error',
  //   icon: 'cloud-off',
  //   subItems: [
  //     {
  //       label: '404',
  //       link: '/error/404',
  //     },
  //     {
  //       label: '500',
  //       link: '/error/500',
  //     },
  //   ]
  // },
];
