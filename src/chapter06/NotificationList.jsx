import React from 'react'
import Notification from './Notification'

const reservedNotifications = [
    {
        id: 1,
        message: "안녕하세요, 너 못생겼어",
    },
    {
        id: 2,
        message: "안녕하세요, 아니야 잘생겼어",
    },
    {
        id: 3,
        message: "안녕하세요, 에이 그건 아니다.",
    }
]

let timer;

class NotificationList extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            notifications: [],
        }
    }

    componentDidMount() {
        const {notifications} = this.state;
        timer = setInterval(() => {
            if(notifications.length < reservedNotifications.length){
                const index = notifications.length
                notifications.push(reservedNotifications[index])
                this.setState({
                    notifications: notifications
                })
            } else {
                this.setState({
                    notifications: [],
                })
                clearInterval(timer)
            }
        },1000)
    }

    render() {
        return (
            <div>
                {this.state.notifications.map((notification)=> {
                    return <Notification key = {notification.id} id = {notification.id} message = {notification.message}/>
                })}
            </div>
        )
    }
}

export default NotificationList