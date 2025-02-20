export const paypal = {
  createOrder: async function createOrder(price: number) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          id: "DUMMY_ORDER_ID",
          status: "CREATED",
          purchase_units: [
            {
              amount: {
                currency_code: "USD",
                value: price,
              },
            },
          ],
        })
      }, 500)
    })
  },

  capturePayment: async function capturePayment(orderId: string) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          id: orderId,
          status: "COMPLETED",
        })
      }, 500)
    })
  },
}
