## Growing applications

**@TODO**: Container composition, delegation, etc.


## Extending messages

**@TODO**:

 - Subclassing messages
 - Constructor logic
 - Validators
 - etc.

## Extending commands

**@TODO**: Explanation on extending commands...

```javascript
import { Post, formData } from 'architecture/commands/http';

export default class SignIn extends Post {

  constructor({ email, password, ...values }) {
    const clientId = 'my-app';
    const clientSecret = 'woo-sekrit';

    super({
      url: '/oauth/token',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'Basic ' + btoa(clientId + ':' + clientSecret)
      },
      data: formData({
        username: email,
        password,
        grant_type: 'password',
        scope: 'read write',
        client_secret: clientSecret,
        client_id: clientId
      }),
      ...values
    });
  }
}
```
