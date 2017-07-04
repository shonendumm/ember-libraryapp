import Ember from 'ember';

export default Ember.Controller.extend({

    emailAddress: '',
    isEmailValid: Ember.computed.match('emailAddress', /^.+@.+\..+$/),

    message: '',
    isMessageValid: Ember.computed.gte('message', 5),

// whether to disable the button based on validations above:
    isDisabled: Ember.computed.not('isEmailValid', 'isMessageValid'),

    actions: {

      contactUs() {
        
        this.set('responseMessage', `Thank you! Your message has been sent.`);
        this.set('emailAddress', '');
        this.set('message', '');

      }
    }

});
