import React from 'react'
import { Button, Form, Input, Message } from 'semantic-ui-react'

const FormErrorExample = () => (
  <Form warning>
    <Form.Input label='Email' placeholder='joe@schmoe.com' />
    <Message
      warning
      header='Could you check something!'
      list={[
        'That e-mail has been subscribed, but you have not yet clicked the verification link in your e-mail.',
      ]}
    />
    <Button>Submit</Button>
  </Form>
)

export default FormErrorExample
