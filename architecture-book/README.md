# [The Casium Front-End Architecture](https://michaeljwiebe.github.io/axios-site/index.html)

The Casium Front-End Architecture is a _data_ and _effects_ management system that helps you manage the complexity of large React applications reliably and predictably.

It does this by modeling the state of your application (yes, all of it) as a single, immutable value, and handling side-effects in application logic with _messages_. If this reminds you of [Redux](http://redux.js.org/), that might be because both are derived from [The Elm Architecture](https://guide.elm-lang.org/architecture/). However, this library attempts to hew more closely to Elm's design in order to gain [more of Elm's advantages](https://www.youtube.com/watch?v=XsNk5aOpqUc&t=16m24s), and to provide a better, more cohesive developer experience.

## Application Structure

Applications implemented on the architecture are organized into two different types of React components:

 - **Views** (or view components), which are implemented as [pure functions](https://www.reactenlightenment.com/react-state/8.4.html)
 - **Containers** (or container components), which are implemented using a builder function exported by the architecture

In other words...

```javascript
class Never extends Component { /* 😉 */ }
```
