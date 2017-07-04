import Ember from 'ember';

export default Ember.Controller.extend({

    emailAddress: '',
    isValid1: Ember.computed.match('emailAddress', /^.+@.+\..+$/),

    message: '',
    isValid2: Ember.computed.gte('message', 5),

// whether to disable the button based on validations above:
    isDisabled: Ember.computed.not('isValid1', 'isValid2'),

    actions: {

      contactUs() {
        this.set('responseMessage', `Thank you! Your message has been sent.`);
        this.set('emailAddress', '');
      }
    }

});
