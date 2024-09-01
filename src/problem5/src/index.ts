import express from 'express';
import { json } from 'body-parser';
import { resourceRouter } from './routes/resource';

const app = express();
// Set the port to listen on using the PORT environment variable or default to 3000
const PORT = process.env.PORT || 3000;

app.use(json());
// Mount the resource router at the /api/resources path
app.use('/api/resources', resourceRouter);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
