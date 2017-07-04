import Ember from 'ember';

export default Ember.Controller.extend({

    emailAddress: '',
    isEmailValid: Ember.computed.match('emailAddress', /^.+@.+\..+$/),

    message: '',
    isMessageValid: Ember.computed.gte('message.length', 5),


// whether to disable the button based on validations above:
    isValid: Ember.computed.and('isEmailValid', 'isMessageValid'),
    isDisabled: Ember.computed.not('isValid'),

    actions: {

      contactUs() {

        const email = this.get('emailAddress');
        const message = this.get('message');

        const newContact = this.store.createRecord('contact', {
          email: email,
          message: message
        });

        newContact.save().then((response) => {
          this.set('responseMessage', `Thank you! Your message has been sent.`);
          this.set('emailAddress', '');
          this.set('message', '');
                    
        });

      }
    }

});
