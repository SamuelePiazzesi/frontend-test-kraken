# Octopus Frontend Task

## Instructions

To start the Next App, simply run these commands

```bash

cd client && yarn && yarn dev
```

Now you should be able to navigate to http://[localhost:3000/](http://localhost:3000/) and land to the home page.

Just click the button and you should redirect to the product page. ( otherwise simply navigate to [http://localhost:3000/product/1](http://localhost:3000/product/1) ).

## Dynamic Routing and GetServerSideProps choice

I decided to move the product page into a dynamic route page.

Since it’s a typical product detail page that displays all the product information, i choose to use the GetServerSideProps function, so the product data can easily fetch at request time. I think it’s the best option since in these cases product information don’t change so often, so one request is enough.

## Fetching the data from a Graphql Server

I decided to use the built-in Node API `fetch` to make request to the graphql server.

I think there are a lot of useful libraries, such as Apollo Client, to handle a Graphql client with a lot of fantastic helpers, but in this case i had just one only pretty simple request to do.

For testing i used the `jest-fetch-mock` library to mock the fetch API, since is not available in the `js-dom` environment.

## Styling the app

For styling I decided to use Tailwind CSS.

I really like the utility first approach of this library and it’s very easy to use. For theme colours i simply extend the tailwind default theme with css-variables colours, so i’m able to use custom color to style background and texts

## Use of Typescript

I prefer to use Typescript (even in small projects) for a lot of reasons:

- **Safety**: I want to sleep peaceful dreams
- **IDE Autocomplete**: It’ really nice when you have a big object with a lot of properties and VScode suggests you
- **Tools**: A lot of libraries, extensions, communities that help and improve your developer experience

## Testing

For all the task implementation i kept sort of TDD approach, so:

- Write a failing test
- Write the minimum code to make the test pass
- Refactor
- Repeat
