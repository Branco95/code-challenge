import { Request, Response } from 'express';
import { prisma } from '../prisma/client';


// Create a new resource given a name and description in the request body 
export const createResource = async (req: Request, res: Response) => {
    const { name, description } = req.body;
    try {
        const resource = await prisma.resource.create({
            data: { name, description },
        });
        // Return the created resource in the response body if successful
        res.status(201).json(resource);
    } catch (error) {
        console.log(error);
        // Return an error response if the operation fails
        res.status(500).json({ error: "Failed to create resource" });
    }
};

// Fetch all resources from the database
export const getResources = async (req: Request, res: Response) => {
    try {
        const resources = await prisma.resource.findMany();
        // Return the list of resources in the response body if successful
        res.status(200).json(resources);
    } catch (error) {
        // Return an error response if the operation fails
        res.status(500).json({ error: "Failed to fetch resources" });
    }
};

// Fetch a single resource by its ID
export const getResourceById = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const resource = await prisma.resource.findUnique({
            where: { id },
        });
        // Return a 404 response if the resource is not found
        if (!resource) {
            return res.status(404).json({ error: "Resource not found" });
        }
        // Return the resource in the response body if successful
        res.status(200).json(resource);
    } catch (error) {
        // Return an error response if the operation fails
        res.status(500).json({ error: "Failed to fetch resource" });
    }
};

// Update a resource given its ID from the request parameters and new name and description in the request body
export const updateResource = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { name, description } = req.body;
    try {
        // Update the resource with the new name and description given the ID
        const resource = await prisma.resource.update({
            where: { id },
            data: { name, description },
        });
        // Return the updated resource in the response body if successful
        res.status(200).json(resource);
    } catch (error) {
        // Return an error response if the operation fails
        res.status(500).json({ error: "Failed to update resource" });
    }
};

// Delete a resource given its ID from the request parameters
export const deleteResource = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        await prisma.resource.delete({
            where: { id },
        });
        // Return a 204 response if the operation is successful
        res.status(204).send();
    } catch (error) {
        // Return an error response if the operation fails
        res.status(500).json({ error: "Failed to delete resource" });
    }
};
