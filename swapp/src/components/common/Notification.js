import React, { Component } from "react";
import observer from "../../infrastructure/observer";

export default class Notification extends Component {
    constructor(props) {
        super(props);

        this.state = {
            type: "",
            message: ""
        };

        observer.subscribe(observer.events.notification, this.showNotification);
    }

    showNotification = ({ message, type }) =>
        this.setState({
            type,
            message: message.split(".")[0]
        });

    hideNotification = () =>
        this.setState({
            type: "",
            message: ""
        });

    render() {
        if (!this.state.message) {
            return null;
        }
        const notificationType = this.state.type;
        const notificationId =
            notificationType === "error" || notificationType === "loading"
                ? notificationType + "Box"
                : "infoBox";

        return (
            <div id="notifications">
                <div id={notificationId} className="notification"  onClick={this.hideNotification} >
                    {this.state.message}
                </div>
            </div>
        );
    }
}