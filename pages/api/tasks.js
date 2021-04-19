// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const getTasks = (req, res) => {
  const json = [
    {
      title: {
        text: '01 November 2021 to 30 November 2021',
      },
      subtitle: {
        text: 'Due in 35 days on 08 January 2022',
        icon: 'calendar',
        author: 'Kyle Mayne',
      },
      links: {
        comments: [1, 2, 3, 4, 5],
        files: [1, 2, 3, 4],
      },
      amount: {
        currency: 'EUR',
        amount: 2345,
      },
    },
    {
      title: {
        text: '12 December 2021 to 30 December 2021',
      },
      subtitle: {
        text: 'Due in 35 days on 08 January 2022',
        icon: 'calendar',
        author: 'Kyle Mayne',
      },
      links: {
        comments: [1],
        files: [],
      },
      amount: {
        currency: 'GBP',
        amount: 4500,
      },
    },
    {
      title: {
        text: '15 August 2022 to 30 September 2022',
      },
      subtitle: {
        text: 'Due in 35 days on 08 January 2022',
        icon: 'calendar',
        author: 'Kyle Mayne',
      },
      links: {
        comments: [1, 2, 3],
        files: [1, 2],
      },
      amount: {
        currency: 'USD',
        amount: 4500,
      },
    },
    {
      title: {
        text: '15 August 2022 to 30 September 2022',
      },
      subtitle: {
        text: 'Due in 35 days on 08 January 2022',
        icon: null,
        author: null,
      },
      links: {},
      amount: {
        currency: 'GBP',
        amount: 4500,
      },
    },
  ];
  res.status(200).json(json);
};

export default getTasks;
