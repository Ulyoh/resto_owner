import { status } from './constants';

const datas = {
  alertsMsg: {
    ok: 'ok',
    modify: 'modifier',
    cancel: 'annuler',
    supp: 'supprimer',
    wrongid: "ce numéro n'existe pas",
  },
  txt: {
    filter: 'filtre',
    noOrders: 'pas de commandes en cours',
    prepared: 'prêt',
    labelOnDone: '-',
    labelOneMoreToDo: '+',
    labelAllDone: 'finis', // TODO: gérer le pluriel
  },
  lists: {
    0: {
      id: '0',
      listNext: '1',
      name: 'boissons',
    },
    1: {
      id: '1',
      listNext: '',
      name: 'menu',
    },
  },
  groups: {
    10: {
      name: 'Apéritifs',
      groupId: '10',
      listId: '0',
    },
    15: {
      name: 'Vins',
      groupId: '15',
      listId: '0',
    },
    20: {
      name: 'Sans Alcool',
      groupId: '20',
      listId: '0',
    },
    30: {
      name: 'Entrées',
      groupId: '30',
      listId: '1',
    },
    50: {
      name: 'Plats principaux',
      groupId: '50',
      listId: '1',
    },
    70: {
      name: 'Fromages et desserts',
      groupId: '70',
      listId: '1',
    },
  },
  articles: {
    100: {
      id: 100,
      name: 'martini rouge',
      groupId: '10',
      listId: '0',
      price: '2.25',
      waitToPrepare: {
        donegroupId: [],
        delayToStartToPrepare: 0,
        askedByWaiter: false,
      },
    },

    101: {
      id: 101,
      name: 'porto',
      groupId: '10',
      listId: '0',
      price: '2.30',
      waitToPrepare: {
        donegroupId: [],
        delayToStartToPrepare: 0,
        askedByWaiter: false,
      },
    },

    120: {
      id: 120,
      name: 'pastis',
      groupId: '10',
      listId: '0',
      price: '2.30',
      waitToPrepare: {
        donegroupId: [],
        delayToStartToPrepare: 0,
        askedByWaiter: false,
      },
    },

    203: {
      id: 203,
      name: 'cuba libre',
      groupId: '10',
      listId: '0',
      price: '2.30',
      waitToPrepare: {
        donegroupId: [],
        delayToStartToPrepare: 0,
        askedByWaiter: false,
      },
    },

    105: {
      id: 105,
      name: 'martini blanc',
      groupId: '10',
      listId: '0',
      price: '2.30',
      waitToPrepare: {
        donegroupId: [],
        delayToStartToPrepare: 0,
        askedByWaiter: false,
      },
    },

    731: {
      id: 731,
      name: 'whisky',
      groupId: '10',
      listId: '0',
      price: '2.30',
      waitToPrepare: {
        donegroupId: [],
        delayToStartToPrepare: 0,
        askedByWaiter: false,
      },
    },

    200: {
      id: 200,
      name: 'verre de vin rouge',
      groupId: '15',
      listId: '0',
      price: '2.25',
      waitToPrepare: {
        donegroupId: [],
        delayToStartToPrepare: 0,
        askedByWaiter: false,
      },
    },

    201: {
      id: 201,
      name: 'verre de vin blanc',
      groupId: '15',
      listId: '0',
      price: '2.30',
      waitToPrepare: {
        donegroupId: [],
        delayToStartToPrepare: 0,
        askedByWaiter: false,
      },
    },

    220: {
      id: 220,
      name: 'verre de rosé',
      groupId: '15',
      listId: '0',
      price: '2.30',
      waitToPrepare: {
        donegroupId: [],
        delayToStartToPrepare: 0,
        askedByWaiter: false,
      },
    },

    303: {
      id: 303,
      name: 'côte du Rhöne (bouteille)',
      groupId: '15',
      listId: '0',
      price: '2.30',
      waitToPrepare: {
        donegroupId: [],
        delayToStartToPrepare: 0,
        askedByWaiter: false,
      },
    },

    205: {
      id: 205,
      name: 'champagne',
      groupId: '15',
      listId: '0',
      price: '2.30',
      waitToPrepare: {
        donegroupId: [],
        delayToStartToPrepare: 0,
        askedByWaiter: false,
      },
    },

    300: {
      id: 300,
      name: 'thé vert',
      groupId: '20',
      listId: '0',
      price: '2.25',
      waitToPrepare: {
        donegroupId: [],
        delayToStartToPrepare: 0,
        askedByWaiter: false,
      },
    },

    301: {
      id: 301,
      name: 'thé glacé',
      groupId: '20',
      listId: '0',
      price: '2.30',
      waitToPrepare: {
        donegroupId: [],
        delayToStartToPrepare: 0,
        askedByWaiter: false,
      },
    },

    320: {
      id: 320,
      name: 'jus de tomate',
      groupId: '20',
      listId: '0',
      price: '2.30',
      waitToPrepare: {
        donegroupId: [],
        delayToStartToPrepare: 0,
        askedByWaiter: false,
      },
    },

    403: {
      id: 403,
      name: 'jus de melon',
      groupId: '20',
      listId: '0',
      price: '2.30',
      waitToPrepare: {
        donegroupId: [],
        delayToStartToPrepare: 0,
        askedByWaiter: false,
      },
    },

    305: {
      id: 305,
      name: 'limonade',
      groupId: '20',
      listName: 'boissons',
      price: '2.30',
      waitToPrepare: {
        donegroupId: [],
        delayToStartToPrepare: 0,
        askedByWaiter: false,
      },
    },

    400: {
      id: '400',
      name: 'foie gras',
      groupId: '30',
      listName: 'menu',
      price: '2.25',
      waitToPrepare: {
        donegroupId: [],
        delayToStartToPrepare: 0,
        askedByWaiter: false,
      },
    },

    401: {
      id: '401',
      name: 'caviar',
      groupId: '30',
      listName: 'menu',
      price: '2.30',
      waitToPrepare: {
        donegroupId: [],
        delayToStartToPrepare: 0,
        askedByWaiter: false,
      },
    },

    405: {
      id: '405',
      name: 'terrine de canard',
      groupId: '30',
      listName: 'menu',
      price: '2.30',
      waitToPrepare: {
        donegroupId: [],
        delayToStartToPrepare: 0,
        askedByWaiter: false,
      },
    },

    410: {
      id: '410',
      name: 'salade niçoise',
      groupId: '30',
      listName: 'menu',
      price: '2.30',
      waitToPrepare: {
        donegroupId: [],
        delayToStartToPrepare: 0,
        askedByWaiter: false,
      },
    },

    500: {
      id: '500',
      name: 'coq au vin',
      groupId: '50',
      listName: 'menu',
      price: '2.25',
      waitToPrepare: {
        donegroupId: [],
        delayToStartToPrepare: 0,
        askedByWaiter: false,
      },
    },

    501: {
      id: '501',
      name: 'moules mariniéres',
      groupId: '50',
      listName: 'menu',
      price: '2.30',
      waitToPrepare: {
        donegroupId: [],
        delayToStartToPrepare: 0,
        askedByWaiter: false,
      },
    },

    521: {
      id: '521',
      name: 'omellette aux pommes de terres',
      groupId: '50',
      listName: 'menu',
      price: '2.30',
      waitToPrepare: {
        donegroupId: [],
        delayToStartToPrepare: 0,
        askedByWaiter: false,
      },
    },

    522: {
      id: '522',
      name: 'diots au vin blanc',
      groupId: '50',
      listName: 'menu',
      price: '2.30',
      waitToPrepare: {
        donegroupId: [],
        delayToStartToPrepare: 0,
        askedByWaiter: false,
      },
    },

    600: {
      id: '600',
      name: 'plats de fromage',
      groupId: '70',
      listName: 'menu',
      price: '2.25',
      waitToPrepare: {
        donegroupId: [],
        delayToStartToPrepare: 0,
        askedByWaiter: false,
      },
    },

    601: {
      id: '601',
      name: 'tarte tatin',
      groupId: '70',
      listName: 'menu',
      price: '2.30',
      waitToPrepare: {
        donegroupId: [],
        delayToStartToPrepare: 0,
        askedByWaiter: false,
      },
    },

    620: {
      id: '620',
      name: 'coupe de glace',
      groupId: '70',
      listName: 'menu',
      price: '2.30',
      waitToPrepare: {
        donegroupId: [],
        delayToStartToPrepare: 0,
        askedByWaiter: false,
      },
    },
  },


  status: {
    [status.ORDERED]: 'commandé',
    [status.PREPARING]: 'en préparation',
    [status.PREPARED]: 'préparé',
    [status.DELIVERED]: 'servi',
    [status.PAYED]: 'payé',
  },
};

export default datas;
