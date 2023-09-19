## Steps to reproduce

### Run the backend server

- Navigate to `backend` direcotry
- Install dependencies using `npm i`
- run the server using `node index.js`

The server will now run on `http://127.0.0.1:3000`

Use ngrok or similar tunneling software to expose port 3000.

Copy the URL that is returned by the tunneling software. We will use that on the frontend server.

### Run the frontend server

- Navigate to `frontend` directory.
- Install dependencies using `npm i`
- Update the fetch url of line 18 in `app/page.tsx` to your tunneling url of the backend.
- run the server using `npm run dev`

Your frontend server will be running on `http://127.0.0.1:3001`

Now expose the frontend server using the same tunneling software.

You can now use this domain to fetch the id_token value from the browser into your backend server.

Happy Coding.
