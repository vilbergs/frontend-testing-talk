# Frontend Testing

This is code used in a testing presentation

## Setup

The project is split into two directories, server and client.

### Server

The server is a Laravel api. Provided you have all the required tools for running a laravel project you should be able to run the following:

1. `cd server`
2. `composer install`
2. `php artisan migrate`
3. `php artisan serve --port 8080`

**Note:** The default laravel dev server uses port `8000`, but the client sends request to port `8080` specifically

### Client

The client uses Vite for development and production build. Provided you have a recent version of Node installed you can run:

1. `cd client`
2. `npm install`
3. `npm run dev`
4. For testing you'll need to tun `npx msw init ./public`

The dev servers should now be running, and the client app should work (see "Mocking" below).

## Testing

**Caveat:** The e2e don't work right now as I set up the auth incorrectly (A pr to fix this is very welcome)

### Unit / Integration tests

The client uses Vitest as a test runner. run `npm run test` to start the runner in watch mode.

See `test/unit` for test implementations.

#### Mocking

Endpoints are mocked using [msw](https://mswjs.io/), make sure you run the init script so that the mock server works properly.
