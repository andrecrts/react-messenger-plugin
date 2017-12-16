import React, { Component } from 'react';
import PropTypes from 'prop-types';
import RandomString from 'random-string';

export default class MessengerPlugin extends Component {
    static propTypes = {
        appId: PropTypes.string.isRequired,
        pageId: PropTypes.string.isRequired,
        FB: PropTypes.object,
        user_ref:PropTypes.string,
        type: PropTypes.oneOf(['send-to', 'message-us','fb-messenger-checkbox']),
        color: PropTypes.oneOf(['blue', 'white']),
        prechecked: PropTypes.oneOf(['true','false']),
        allow_login: PropTypes.oneOf(['true','false']),
        size: PropTypes.oneOf(['standard', 'large', 'xlarge'])
    };



    static defaultProps = {
        color: 'blue',
        size: 'standard',
        prechecked:'true',
        allow_login:'true',
        user_ref:'yalo_'+RandomString({length:20}),
        type: 'fb-messenger-checkbox'
    }

    initFacebookSDK() {
        const {FB, appId} = this.props;

        if (FB) {
            FB.init({
                appId,
                xfbml: true,
                version: 'v2.6'
            });
        }
    }

    componentDidMount() {
        this.props.onRef(this);
        this.initFacebookSDK();
    }

    componentWillUnmount() {
        this.props.onRef(undefined)
      }

    send(ref) {
        const {appId, pageId, user_ref} = this.props;
        FB.AppEvents.logEvent('MessengerCheckboxUserConfirmation', null, { app_id:appId, page_id:pageId, ref, user_ref });
    }

    render() {
        const {type, appId, color, size, pageId,prechecked,allow_login,user_ref} = this.props;
        // use dangerouslySetInnerHTML because React will ignore custom attributes
        const origin = window.location.href;
        const markup = {
            __html: '<div class=' + type +' origin='+origin+ ' messenger_app_id=' + appId + ' page_id=' + pageId + ' user_ref=' + user_ref  + ' size=' + size + ' prechecked='+ prechecked + ' allow_login='+allow_login+ '></div>'
        };
        return <div dangerouslySetInnerHTML={markup}></div>;
    }
}
