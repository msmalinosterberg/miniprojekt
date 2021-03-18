export interface DeliveryMethod {
  id: number;
  company: string;
  time: string;
  price: number;
}

export const deliveryMethods: DeliveryMethod[] = [
    {
      id: 1,
      company: 'PostNord',
      time: calculateDeliveryOneDay(),
      price: 145,
    },
    {
      id: 2,
      company: 'Bring',
      time: calculateDeliveryTwoDays(),
      price: 129,
    },
    {
      id: 3,
      company: 'DB Schenker',
      time: calculateDeliveryThreeDays(),
      price: 89,
    }
  ];

  function calculateDeliveryOneDay() {
    const today = new Date()
    const tomorrow = new Date(today)
    tomorrow.setDate(tomorrow.getDate() + 1)
    return tomorrow.toISOString().split('T')[0];
  }

  function calculateDeliveryTwoDays() {
    const today = new Date()
    const tomorrow = new Date(today)
    tomorrow.setDate(tomorrow.getDate() + 2)
    return tomorrow.toISOString().split('T')[0];
  }

  function calculateDeliveryThreeDays() {
    const today = new Date()
    const tomorrow = new Date(today)
    tomorrow.setDate(tomorrow.getDate() + 3)
    return tomorrow.toISOString().split('T')[0];
  }

  // export function calculateDeliveryDay() {
  //   const today = new Date()
  //   const tomorrow = new Date(today)
  //   return tomorrow.setDate(tomorrow.getDate() + <any>deliveryMethods.map((item: any) => (item.time / 24)))
    
  //   //tomorrow.toISOString().split('T')[0];
  // }