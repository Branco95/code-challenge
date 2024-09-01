import { Router } from 'express';
import {
    createResource,
    getResources,
    getResourceById,
    updateResource,
    deleteResource,
} from '../controllers/resource';

export const resourceRouter = Router();

//Post request to create a new resource
resourceRouter.post('/', createResource);
//Get request to fetch all resources
resourceRouter.get('/', getResources);
//Get request to fetch a single resource by its ID
resourceRouter.get('/:id', getResourceById);
//Put request to update a resource by its ID
resourceRouter.put('/:id', updateResource);
//Delete request to delete a resource by its ID
resourceRouter.delete('/:id', deleteResource);


