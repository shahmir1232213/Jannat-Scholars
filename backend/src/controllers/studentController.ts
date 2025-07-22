import { Request, Response } from "express";
import Student from '../models/studentSchema'

export interface IStudent {
  studentId: number;
  studentName: string;
  fatherName: string;
  phoneNumber: number;
  age: number;
  className: string; // or: ClassModel if you're populating
  gender: string;
}

export async function register(req: Request, res: Response): Promise<void> {
  //  console.log('req reached: ', req.body)
    const studentsFromFrontend: IStudent[] = req.body;

    try {
       for (const student of studentsFromFrontend) {
        await Student.create({
            studentId: student.studentId,
            studentName: student.studentName,
            fatherName: student.fatherName,
            phoneNumber: student.phoneNumber,
            className: student.className,
            age: student.age,
            gender: student.gender
        });
       }
       res.status(201).json({ message: "Students registered successfully" });
    } catch (err) {
        console.log("Error: ", err);
        res.status(500).json({ error: "Internal server error" });
    }
}

export async function fetch(req:Request,res:Response) {
    try {
        const students = await Student.find(); // Fetches all students
        res.status(200).json(students);
    } catch (err) {
        res.status(500).json({ error: "Failed to fetch students" });
    }
}