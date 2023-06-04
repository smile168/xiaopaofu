export default async function paymentsHandler(req, res) {
  const payments = [
    {
      id: '1',
      category: 'zelle',
      searchBy: 'wednesday31234567@gmail.com',
      registerAs: 'Jie',
    },
    {
      id: '2',
      category: 'zelle',
      searchBy: 'vxxiaopaofu123@gmail.com',
      registerAs: 'Jiayu',
    },
    {
      id: '3',
      category: 'zelle',
      searchBy: 'vxxiaopaofu1232@gmail.com',
      registerAs: 'Jiahao',
    },
    { id: '4', category: 'paypal', searchBy: 'xiaoliuya', registerAs: 'Jie' },
    {
      id: '5',
      category: '支付宝',
      searchBy: '15623689395',
      registerAs: 'haoze',
    },
    {
      id: '6',
      category: '微信',
      searchBy: 'xiaopaofu-123',
      registerAs: '小泡芙',
    },
    {
      id: '7',
      category: 'zelle',
      searchBy: 'tuesday21234567@gmail.com',
      registerAs: 'Jie',
    },
  ];
  res.status(200).json(payments);
}
