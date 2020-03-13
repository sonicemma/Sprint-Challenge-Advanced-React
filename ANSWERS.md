- [ ] Why would you use class component over function components (removing hooks from the question)?

    Although class components, which require you to extend from react.component, requires more code, it offers benefits such as being able to use setState(). It also lets you use lifecycle hooks. Function components are easier to read, and use less code, but you lose some power in doing so.

- [ ] Name three lifecycle methods and their purposes.

    1) render(), which is a required method in a class component. It happens during the mounting and updating stage of the component. It returns JSX and displays it.

    2) componentDidUpdate(). It is invoked when updating happens. It can be used to update te DOM when there's a prop or state change. You can use setState() here.

    3) componentDidMount() is called when the component is mounted. You could use API calls here, and you can also use setState here. With this, you can make it so the user won't see UI updates during double rendering.

- [ ] What is the purpose of a custom hook?

    Custom hooks extract component logic into reusable functions. It's DRY, and keeps your code clean and reusable. 

- [ ] Why is it important to test our apps?

    Testing helps you easily identify errors within development of an application. It can ensure quality, and make sure a developer can identify if important parts of the application break in development.
