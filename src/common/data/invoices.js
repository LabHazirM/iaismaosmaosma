const invoiceList = [
  {
    id: 1,
    founder: "Marion Burton",
    founderAt: "Lab Hazir",
    invoiceID: "14251",
    company: "Lab Hazir Dashboard UI",
    invoicePrice: "1455",
    date: "10 Oct, 19",
    color: "primary",
    orderId: "12345",
    billingAddress: "John Smith, 1234 Main, Apt. 4B, Springfield ST 54321",
    shippingAddress: "Kenny Rigdon, 1234 Main, Apt. 4B, Springfield ST 54321",
    card: "Visa ending **** 4242",
    email: "jsmith@email.com",
    orderDate: "October 16, 2019",
    orderSummary: {
      items: [
        {
          id: 1,
          item: "Lab Hazir - Bootstrap 5 Admin Dashboard",
          price: "$499.00",
        },
        {
          id: 2,
          item: "Lab Hazir - Landing Template",
          price: "$399.00",
        },
        {
          id: 3,
          item: "Veltrix - Admin Dashboard Template	",
          price: "$499.00",
        },
      ],
      subTotal: "$1397.00",
      shipping: "$13.00",
      total: "$1410.00",
    },
  },
  {
    id: 2,
    image: "avatar2",
    founder: "Francis Witte",
    founderAt: "Lab Hazir",
    invoiceID: "14252",
    company: "Brand logo design",
    invoicePrice: "1024",
    date: "11 Oct, 19",
    orderId: "12345",
    billingAddress: "John Smith, 1234 Main, Apt. 4B, Springfield ST 54321",
    shippingAddress: "Kenny Rigdon, 1234 Main, Apt. 4B, Springfield ST 54321",
    card: "Visa ending **** 4242",
    email: "jsmith@email.com",
    orderDate: "October 16, 2019",
    orderSummary: {
      items: [
        {
          id: 1,
          item: "Lab Hazir - Bootstrap 5 Admin Dashboard",
          price: "$499.00",
        },
        {
          id: 2,
          item: "Lab Hazir - Landing Template	",
          price: "$399.00",
        },
        {
          id: 3,
          item: "Veltrix - Bootstrap 5 Admin Template",
          price: "$499.00",
        },
      ],
      subTotal: "$1397.00",
      shipping: "$13.00",
      total: "$1410.00",
    },
  },
  {
    id: 3,
    image: "avatar2",
    founder: "Joseph Flint",
    founderAt: "Lab Hazir",
    invoiceID: "14253",
    company: "Landing page Design",
    invoicePrice: "1189",
    date: "12 Oct, 19",
    orderId: "12345",
    billingAddress: "John Smith, 1234 Main, Apt. 4B, Springfield ST 54321",
    shippingAddress: "Kenny Rigdon, 1234 Main, Apt. 4B, Springfield ST 54321",
    card: "Visa ending **** 4242",
    email: "jsmith@email.com",
    orderDate: "October 16, 2019",
    orderSummary: {
      items: [
        {
          id: 1,
          item: "Lab Hazir - Bootstrap 5 Admin Dashboard",
          price: "$499.00",
        },
        {
          id: 2,
          item: "Lab Hazir - Bootstrap 5 Landing Template",
          price: "$399.00",
        },
        {
          id: 3,
          item: "Veltrix - Bootstrap 5 Admin Template",
          price: "$499.00",
        },
      ],
      subTotal: "$1397.00",
      shipping: "$13.00",
      total: "$1410.00",
    },
  },
  {
    id: 4,
    image: "avatar2",
    founder: "Larry Nielsen",
    founderAt: "Lab Hazir",
    invoiceID: "14254",
    company: "Redesign - Landing page",
    invoicePrice: "1245",
    date: "12 Oct, 19",
    orderId: "12345",
    billingAddress: "John Smith, 1234 Main, Apt. 4B, Springfield ST 54321",
    shippingAddress: "Kenny Rigdon, 1234 Main, Apt. 4B, Springfield ST 54321",
    card: "Visa ending **** 4242",
    email: "jsmith@email.com",
    orderDate: "October 16, 2019",
    orderSummary: {
      items: [
        {
          id: 1,
          item: "Lab Hazir - Bootstrap 5 Admin Dashboard",
          price: "$499.00",
        },
        {
          id: 2,
          item: "Lab Hazir - Bootstrap 5 Landing Template",
          price: "$399.00",
        },
        {
          id: 3,
          item: "Veltrix - Bootstrap 5 Admin Template",
          price: "$499.00",
        },
      ],
      subTotal: "$1397.00",
      shipping: "$13.00",
      total: "$1410.00",
    },
  },
  {
    id: 5,
    image: "avatar2",
    founder: "Mark Evans",
    founderAt: "Lab Hazir",
    invoiceID: "14255",
    company: "Blog Template Design",
    invoicePrice: "1024",
    date: "11 Oct, 19",
    orderId: "12345",
    billingAddress: "John Smith, 1234 Main, Apt. 4B, Springfield ST 54321",
    shippingAddress: "Kenny Rigdon, 1234 Main, Apt. 4B, Springfield ST 54321",
    card: "Visa ending **** 4242",
    email: "jsmith@email.com",
    orderDate: "October 16, 2019",
    orderSummary: {
      items: [
        {
          id: 1,
          item: "Lab Hazir - Bootstrap 5 Admin Dashboard",
          price: "$499.00",
        },
        {
          id: 2,
          item: "Lab Hazir - Bootstrap 5 Landing Template",
          price: "$399.00",
        },
        {
          id: 3,
          item: "Veltrix - Bootstrap 5 Admin Template",
          price: "$499.00",
        },
      ],
      subTotal: "$1397.00",
      shipping: "$13.00",
      total: "$1410.00",
    },
  },
  {
    id: 6,
    founder: "Timothy Lee",
    founderAt: "Lab Hazir",
    invoiceID: "14256",
    company: "Landing page Design",
    invoicePrice: "1189",
    date: "13 Oct, 19",
    color: "success",
    orderId: "12345",
    billingAddress: "John Smith, 1234 Main, Apt. 4B, Springfield ST 54321",
    shippingAddress: "Kenny Rigdon, 1234 Main, Apt. 4B, Springfield ST 54321",
    card: "Visa ending **** 4242",
    email: "jsmith@email.com",
    orderDate: "October 16, 2019",
    orderSummary: {
      items: [
        {
          id: 1,
          item: "Lab Hazir - Bootstrap 5 Admin Dashboard",
          price: "$499.00",
        },
        {
          id: 2,
          item: "Lab Hazir - Bootstrap 5 Landing Template",
          price: "$399.00",
        },
        {
          id: 3,
          item: "Veltrix - Bootstrap 5 Admin Template",
          price: "$499.00",
        },
      ],
      subTotal: "$1397.00",
      shipping: "$13.00",
      total: "$1410.00",
    },
  },
  {
    id: 7,
    image: "avatar2",
    founder: "Stanley Bland",
    founderAt: "Lab Hazir",
    invoiceID: "14257",
    company: "Landing page UI",
    invoicePrice: "1148",
    date: "14 Oct, 19",
    orderId: "12345",
    billingAddress: "John Smith, 1234 Main, Apt. 4B, Springfield ST 54321",
    shippingAddress: "Kenny Rigdon, 1234 Main, Apt. 4B, Springfield ST 54321",
    card: "Visa ending **** 4242",
    email: "jsmith@email.com",
    orderDate: "October 16, 2019",
    orderSummary: {
      items: [
        {
          id: 1,
          item: "Lab Hazir - Bootstrap 5 Admin Dashboard",
          price: "$499.00",
        },
        {
          id: 2,
          item: "Lab Hazir - Bootstrap 5 Landing Template",
          price: "$399.00",
        },
        {
          id: 3,
          item: "Veltrix - Bootstrap 5 Admin Template",
          price: "$499.00",
        },
      ],
      subTotal: "$1397.00",
      shipping: "$13.00",
      total: "$1410.00",
    },
  },
  {
    id: 8,
    founder: "Tommy Wilson",
    founderAt: "Lab Hazir",
    invoiceID: "14258",
    company: "Redesign - Dashboard",
    invoicePrice: "1259",
    date: "15 Oct, 19",
    color: "info",
    orderId: "12345",
    billingAddress: "John Smith, 1234 Main, Apt. 4B, Springfield ST 54321",
    shippingAddress: "Kenny Rigdon, 1234 Main, Apt. 4B, Springfield ST 54321",
    card: "Visa ending **** 4242",
    email: "jsmith@email.com",
    orderDate: "October 16, 2019",
    orderSummary: {
      items: [
        {
          id: 1,
          item: "Lab Hazir - Bootstrap 5 Admin Dashboard",
          price: "$499.00",
        },
        {
          id: 2,
          item: "Lab Hazir - Bootstrap 5 Landing Template",
          price: "$399.00",
        },
        {
          id: 3,
          item: "Veltrix - Bootstrap 5 Admin Template",
          price: "$499.00",
        },
      ],
      subTotal: "$1397.00",
      shipping: "$13.00",
      total: "$1410.00",
    },
  },
  {
    id: 9,
    image: "avatar2",
    founder: "Louis Brandon",
    founderAt: "Lab Hazir",
    invoiceID: "14259",
    company: "Email Template UI",
    invoicePrice: "1355",
    date: "15 Oct, 19",
    orderId: "12345",
    billingAddress: "John Smith, 1234 Main, Apt. 4B, Springfield ST 54321",
    shippingAddress: "Kenny Rigdon, 1234 Main, Apt. 4B, Springfield ST 54321",
    card: "Visa ending **** 4242",
    email: "jsmith@email.com",
    orderDate: "October 16, 2019",
    orderSummary: {
      items: [
        {
          id: 1,
          item: "Lab Hazir - Bootstrap 5 Admin Dashboard",
          price: "$499.00",
        },
        {
          id: 2,
          item: "Lab Hazir - Bootstrap 5 Landing Template",
          price: "$399.00",
        },
        {
          id: 3,
          item: "Veltrix - Bootstrap 5 Admin Template",
          price: "$499.00",
        },
      ],
      subTotal: "$1397.00",
      shipping: "$13.00",
      total: "$1410.00",
    },
  },
];

export { invoiceList };
