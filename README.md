# Talk is cheap, show me the code (4)

# Let's Get Hooked (5)

# Exploring The World (6)

# Finding The Path (7)

# Let's Get Classy (8)

# Optimising The App (9)

# Jo Dikhta Hai, Vo Bikta Hai (10)

# Data is the new Oil (11)

# Let's Build our store (12)


### React Hooks 
(normal JS utility functions)

- useState() :- superpowerful state variables in react 
- useEffect()

const [name] = useState() ;
this is how we create a state variable


whenever a state variable updates, React re renders the component.

### Reconciliation algorithm (REACT Fibre)

- Virtual DOM is a  representation of actual DOM.


### monolith and microservice architecture



- whenever a state variable is updated, React triggers a reconciliation cycle (re-renders the component)


### useEffect 

```
// if no dependency array => useEffect is called on every render
    // if dependency array is empty => useEffect is called only the initial render (just once)
    // if dependency array is [btnName] => useEffect is called everytime btnName is updated
    useEffect( () => {
        console.log("useEffect Called")
    }, [])
```


### 2 types of Routing in web apps

- Client side Routing
- Server side Routing

### advantages of using Single Responsibility Principle -> code becomes 

- USABLE
- MAINTAINABLE
- TESTABLE


# Redux Toolkit
    - Install @reduxjs/toolkit and react-redux
    - Build our store
    - connect our store to app
    - create Cart Slice
    - dispatch an action
    - Selector
