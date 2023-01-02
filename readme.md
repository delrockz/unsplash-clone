[Unsplash Clone](http://unsplash-clone-client.s3-website.ap-south-1.amazonaws.com/)

Tech Stack:
[React](https://reactjs.org/), [Vite](https://vitejs.dev/), [Redux](https://redux.js.org/), [Redux-Saga](https://redux-saga.js.org/), [Redux-Persist](https://www.npmjs.com/package/redux-persist), [Tailwind CSS](https://tailwindcss.com/), [Chakra UI](https://chakra-ui.com/), [AWS S3 (Static Website Hosting)](https://aws.amazon.com/s3/), [Unsplash API](https://unsplash.com/documentation), [TypeScript](https://www.typescriptlang.org/) 

Run development server:
`````
npm run dev
`````
Deployment steps:

1. `npm run build`
2. Upload the contents of `dist/*` to a S3 bucket with Static Website Hosting enabled