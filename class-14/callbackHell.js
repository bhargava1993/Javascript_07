
function getUser(callback) {

    setTimeout(() => {
        const user = {
            id: 101,
            name: "sudheer"
        }

        callback(user)
    }, 1000)

}

function getOrders(userId, callback) {
    setTimeout(() => {
        const orders = {
            id: 501,
            userId: userId,
            product: "Laptop"
        }

        callback(orders)
    }, 1000)
}

function getPayments(orderId, callback) {
    setTimeout(() => {
        const payments = {
            orderId: orderId,
            amount: 7500,
            status: "paid"
        }

        callback(payments)
    }, 1000)
}

function sendNotification(payment, callback) {
    setTimeout(() => {
        callback("Notification sent")
    }, 1000)
}


getUser((user) => {
    console.log("user---", user)
    getOrders(user.id, (orders) => {
        console.log("orders---", orders)
        getPayments(orders.id, (payment) => {
            console.log("payment---", payment)
            sendNotification(payment, (message) => {
                console.log("message---", message)
            })
        })
    })
})