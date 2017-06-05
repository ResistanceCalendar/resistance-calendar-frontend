import React from 'react';
import sinon from 'sinon';
import sinonStubPromise from 'sinon-stub-promise';
import { shallow } from 'enzyme';
import AddEvent from './AddEvent';

// Extend sinon to handle promises
sinonStubPromise(sinon);

describe('Component: AddEvent', () => {
  const submitButtonSelector = 'input[type="submit"]';
  let props = { };
  let wrapper;

  beforeEach(() => {
    props = {
      closeModal: sinon.spy(),
      onSubmit: sinon.stub().returnsPromise()
    };
    wrapper = shallow(<AddEvent {...props} />);
  });

  it('renders without crashing', () => {
    expect(wrapper).toHaveLength(1);
  });

  it('submit button is disabled by default', () => {
    expect(wrapper.find(submitButtonSelector).debug())
      .toBe('<input type="submit" value="Submit" disabled={true} onClick={[Function]} />');
  });

  it('form submits succesfullly with valid entry and performs redirect', () => {
    props.onSubmit.resolves({ status: 200 });

    wrapper.setState({ email: 'contributor@example.com', eventName: 'demonstration', eventLink: 'facebook.com' });
    wrapper.find(submitButtonSelector).simulate('click', { preventDefault() {} });

    expect(wrapper.state('submitted')).toBe(true);
    expect(wrapper.is('Redirect')).toBe(true);
  });

  it('form submits unsuccessfully if external service is down and does not perform redirect', () => {
    props.onSubmit.resolves({ status: 500 });

    wrapper.setState({ email: 'contributor@example.com', eventName: 'demonstration', eventLink: 'facebook.com' });
    wrapper.find(submitButtonSelector).simulate('click', { preventDefault() {} });

    expect(wrapper.state('submitted')).toBe(false);
    expect(wrapper.is('Redirect')).toBe(false);
  });


  describe('validations', () => {
    const expectFormState = ({
      component, stateProperty, optionArray, message, submitDisabled
    }) => {
      optionArray.forEach((string) => {
        component.setState({ [stateProperty]: string });
        component.find(`input[name="${stateProperty}"]`).simulate('blur');
        expect(component.find(`label[htmlFor="${stateProperty}"] div`).text()).toBe(message);
        const submitButtonString = component.find(submitButtonSelector).debug();
        expect(submitButtonString.includes(`disabled={${submitDisabled}}`)).toBe(true);
      });
    };

    describe('event link validation', () => {
      beforeEach(() => {
        wrapper.setState({ email: 'contributor@example.com', eventName: 'adfsjlk' });
      });

      it('invalid event urls trigger validation warning and disables submit button', () => {
        const invalidURLs = ['fake url', 'facebook', ' javascript:alert("Hello World!");'];

        expectFormState({
          component: wrapper,
          stateProperty: 'eventLink',
          optionArray: invalidURLs,
          message: 'You must enter a valid url.',
          submitDisabled: true
        });
      });

      it('valid event urls show no validation warning and enables submit', () => {
        const validURLs = ['google.com', 'io.io', 'https://facebook.com', 'http://example.org/path'];

        expectFormState({
          component: wrapper,
          stateProperty: 'eventLink',
          optionArray: validURLs,
          message: '',
          submitDisabled: false
        });
      });
    });
    describe('email validation', () => {
      beforeEach(() => {
        wrapper.setState({ eventLink: 'facebook.com/test', eventName: 'adfsjlk' });
      });

      it('valid email shows no validation warning and enables submit', () => {
        const validEmails = ['user@example.io', 'test@gmail.com', 'blacklist@account.com', ''];

        expectFormState({
          component: wrapper,
          stateProperty: 'email',
          optionArray: validEmails,
          message: '',
          submitDisabled: false
        });
      });
      it('invalid email triggers validation warning and disables submit button', () => {
        const invalidEmails = ['useratexample.com', '@34awefsd.com'];

        expectFormState({
          component: wrapper,
          stateProperty: 'email',
          optionArray: invalidEmails,
          message: 'You must enter a valid email.',
          submitDisabled: true
        });
      });
    });
  });
});
