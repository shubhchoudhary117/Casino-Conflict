import { MenuItem } from './menu.model';

export const MENUSUPER: MenuItem[] = [
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
      label: 'Master Details',
      isTitle: true
    },

    {
      label: 'Agent',
      icon: 'users',
      link: '/agent',
    },
    {
      label: 'Client',
      icon: 'users',
      link: '/client',
    },
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
      label: 'Debit/Credit Entery (A)',
      icon: 'credit-card',
      link:'/ct/agent'

    },
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

    },{
      label: 'All Agent Ledger',
      icon: 'arrow-right-circle',
      link:'/ledger/agent'

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
      label: 'Debit/Credit Entery (A)',
      icon: 'credit-card',
      link:'/old/oldagent'

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
    {
      label: 'Live Casino Position',
      icon: 'feather',
      subItems: [
        {
          label: 'VirtualTeen Position',
          link: "/casino/position",
        },
        {
          label: 'LiveTeen20 Position',
          link: "/casino/position",

        },
      ]
    },
    {
      label:'Casino Details',
      link: "/casino/ledger",
      icon:'box'
    },

    {
      label: 'Report',
      isTitle: true
    },

    {
      label: 'Data Reports',
      icon: 'feather',
      subItems: [

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
      icon: 'feather',
      subItems: [

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

  ];
