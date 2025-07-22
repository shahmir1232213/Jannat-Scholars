import { Request, Response } from "express";
import teacherSchema from '../models/teacherSchema';

export interface ITeacher {
  name: string;
  email: string;
  phone?: string;
  hire_date?: Date;
  qualification?: string;
  experience_years?: number;
  subject_specialization?: string;
  status?: 'active' | 'inactive' | 'on_leave';
}

export async function register (req:Request,res:Response){
    const teachersFromFrontend: ITeacher[] = req.body;
     for (const teacher of teachersFromFrontend) {
        try {
        await teacherSchema.create({
            name: teacher.name,
            email: teacher.email,
            phone: teacher.phone || undefined,
            hire_date: teacher.hire_date ? new Date(teacher.hire_date) : undefined,
            qualification: teacher.qualification || undefined,
            experience_years: teacher.experience_years,
            subject_specialization: teacher.subject_specialization || undefined,
            status: teacher.status || 'active',
        });
        console.log(`Saved teacher: ${teacher.email}`);
        } catch (error) {
        console.error(`Error saving teacher ${teacher.email}:`, error);
        }
    }
}
export async function fetch (req:Request,res:Response){
    try {
        const teachers = await teacherSchema.find(); // Fetches all students
        res.status(200).json(teachers);
    } catch (err) {
        res.status(500).json({ error: "Failed to fetch teachers" });
    }
}