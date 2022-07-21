
# Disney+ Clone

A clone built with Next.js, utilizing it's server side and client side rendering features. It also uses Tailwind CSS for styling, Next-Auth for user authentication with Google Provider, and TMDB API for the movies and tv shows.

## Run Locally

Clone the project

```bash
  git clone https://github.com/5thDimensionalVader/next-disney-plus-clone.git
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```


## Screenshots

![App Screenshot](https://via.placeholder.com/468x300?text=App+Screenshot+Here)


## Environment Variables

To run this project, you will need to add the following environment variables to your .env.local file

`GOOGLE_CLIENT_ID`: [ Google Configuration](https://console.developers.google.com/apis/credentials) 

`GOOGLE_CLIENT_SECRET`: *see above* &#8593;

`NEXTAUTH_URL`: [Documentation](https://next-auth.js.org/configuration/options#nextauth_url)

`JWT_SECRET`: This can be generated using either: 
```bash
$ openssl rand -base64 32
```
#### or

[Visit this URL](https://generate-secret.vercel.app/32)
## Authors

- [Daniel Chinye](https://github.com/5thDimensionalVader)

