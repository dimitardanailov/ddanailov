#

The course URL is: https://egghead.io/lessons/graphql-send-a-query-with-graphql-playground

The playground URL is: https://pet-library.moonhighway.com/

### Send a Query with GraphQL Playground

```graphql
query {
  totalPets
}
```

the response is:

```json
{
  "data": {
    "totalPets": 25
  }
}
```

### Query a List of Objects with GraphQL

```graphql
query {
  allPets {
    name
    weight
  }
  totalPets
}
```

```json
{
  "data": {
    "allPets": [
      {
        "name": "Biscuit",
        "weight": 10.2
      },
      {
        "name": "Jungle",
        "weight": 9.7
      }
    ]
  }
}
```

### Query an Enumeration Type with GraphQL

```graphql
query {
  allPets {
    name
    weight
    category
  }
  totalPets
}
```

### Send a Nested GraphQL Query

```graphql
query {
  allPets {
    name
    weight
    category
    photo {
      thumb
      full
    }
  }
  totalPets
}
```

### Filter a GraphQL Query Result Using Arguments

```graphql
query {
  totalPets(status: AVAILABLE)
  allPets {
    name
    weight
    category
    photo {
      thumb
      full
    }
  }
}
```

### Renaming Fields with GraphQL Aliases

```graphql
query {
  available: totalPets(status: AVAILABLE)
  checkedOut: totalPets(status: CHECKEDOUT)
  allPets {
    name
    weight
    category
    photo {
      thumb
      full
    }
  }
}
```

### Use Variables to Filter a Query Result with GraphQL

```graphql
query {
  allPets(category: DOG, status: AVAILABLE) {
    id
    name
    category
    status
  }
}
```

### Use Variables to Filter a Query Result with GraphQL

```graphql
query($category: PetCategory = STINGRAY, $status: PetStatus) {
  allPets(category: $category, status: $status) {
    id
    name
    category
    status
  }
}
```

### Query Connected Data with the GraphQL Query Language

```graphql
query {
  allCustomers {
    name
    username
    currentPets {
      name
    }
  }
  petById(id: "C-1") {
    name
    inCareOf {
      name
      username
    }
  }
}
```

### Authenticate a User with a GraphQL Mutation

```graphql
mutation {
  logIn(username: "ep123", password: "pass") {
    customer {
      name
    }
    token
  }
}
```

HTTP HEADERS

```json
{
  "Authorization": "Bearer ..."
}
```

```graphql
query {
  me {
    name
    username
    dateCreated
  }
}
```

```graphql
query Me {
  me {
    name
    username
    dateCreated
  }
}

mutation Login {
  logIn(username: "ep123", password: "pass") {
    customer {
      name
    }
    token
  }
}
```

### Send a checkOut Mutation with GraphQL as an Authorized User

```graphql
mutation Checkout {
  checkOut(id: "S-1") {
    pet {
      name
    }
    customer {
      name
    }
  }
}

query Me {
  me {
    name
    username
    dateCreated
  }
}

mutation Login {
  logIn(username: "ep123", password: "pass") {
    customer {
      name
    }
    token
  }
}
```

### Send a checkOut Mutation with GraphQL as an Authorized User

```graphql
mutation Checkout {
  checkOut(id: "C-6") {
    pet {
      name
    }
    customer {
      name
    }
  }
}

query Me {
  me {
    name
    username
    dateCreated
  }
}

mutation Login {
  logIn(username: "ep123", password: "pass") {
    customer {
      name
    }
    token
  }
}
```

### Change Check In Status with a GraphQL Mutation

```graphql
mutation CheckIn {
  checkIn(id: "S-2") {
    pet {
      name
    }
    checkOutDate
    checkInDate
    late
  }
}

mutation Checkout {
  checkOut(id: "C-6") {
    pet {
      name
    }
    customer {
      name
    }
  }
}

query Me {
  me {
    name
    username
    dateCreated
  }
}

mutation Login {
  logIn(username: "ep123", password: "pass") {
    customer {
      name
    }
    token
  }
}
```

### Reuse GraphQL Selection Sets with Fragments

```graphql
query {
  allPets(category: RABBIT, status: AVAILABLE) {
    ...PetDetails
    photo {
      full
    }
  }
}

fragment PetDetails on Pet {
  name
  weight
  category
  status
}
```

### Explore Refactored GraphQL Queries

URL: https://funded-pet-library.moonhighway.com/

```graphql
query {
  customersWithPets {
    username
    name
  }
  totalPets
  availablePets
  checkedOutPets
}
```

### Query GraphQL Interface Types in GraphQL Playground

```graphql
query {
  allPets {
    __typename
    id
    name
  }
}
```

```graphql
query {
  allPets {
    __typename
    id
    name
    ... on Cat {
      sleepAmount
    }
  }
}
```

```graphql
query {
  allPets {
    __typename
    id
    name
    ... on Cat {
      sleepAmount
    }
    ... on Stingray {
      chill
    }
  }
}
```

### Query a GraphQL API's Types With Introspection Queries

```graphql
query InterfaceTypes {
  __type(name: "Pet") {
    kind
    name
    fields {
      name
    }
    possibleTypes {
      name
      kind
      description
    }
  }
}

query AvailableQueries {
  __schema {
    queryType {
      name
      fields {
        name
        description
      }
    }
  }
}

query Customer {
  __type(name: "Customer") {
    fields {
      name
      description
    }
  }
}

query AllTypes {
  __schema {
    types {
      name
      kind
      description
    }
  }
}
```
