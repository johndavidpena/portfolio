import React from 'react';
import formStyles from './form.module.css';

const Form = () => (
  <div className={formStyles.formWrapper}>

    <p className={formStyles.text}>Want to get in touch?</p>

    <form name="contact" method="POST" data-netlify="true" className={formStyles.form}>
      <input type="hidden" name="form-name" value="contact" />
      <div className={formStyles.nameEmail}>
        <div className={formStyles.input}>
          <label>Name
            <input type="text" name="name" />
          </label>
        </div>

        <div className={formStyles.input}>
          <label>Email
            <input type="email" name="email" />
          </label>
        </div>
      </div>

      <div className={formStyles.message}>
        <label className={formStyles.textarea}>Message
            <textarea name="message"></textarea>
        </label>
      </div>

      <button type="submit"
        className={formStyles.button}>
        <span>&#8603;</span>send</button>
    </form>

  </div>
);

export default Form;
