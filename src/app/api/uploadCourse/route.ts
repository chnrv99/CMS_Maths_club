import { connectMongoDB } from "@/lib/mongodb";
import Course from "@/models/courses";

import { NextResponse } from "next/server";
import { GetServerSidePropsContext } from 'next';


export async function POST(request: any, response: any) {
    const {course_code, course_title, course_description} = await request.json();
    await connectMongoDB();
    if (!course_code || !course_title) {
        return NextResponse.json({message:"Missing fields"}, {status: 400});
    }
    else {
        await Course.create({
            course_code,
            course_title,
            course_description,
            videos: [],
            pdfs: []
        });
        return NextResponse.json({message:"Course created successfully"}, {status: 201});
    }
}