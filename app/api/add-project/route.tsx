// app/api/add-project/route.ts
import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function POST(request: Request) {
  const body = await request.json();
  
  const newProject = {
    ...body,
    project_id: Math.floor(Math.random() * 1000), // Generating a random ID for now
    technologies: body.technologies.split(',').map((tech: string) => tech.trim()), // Convert string to array
  };

  const dataPath = path.join(process.cwd(), 'data.js');
  let fileData = fs.readFileSync(dataPath, 'utf8');

  // Append new project
  const updatedData = fileData.replace(
    'const projectData = [',
    `const projectData = [${JSON.stringify(newProject)},`
  );

  fs.writeFileSync(dataPath, updatedData);
  return NextResponse.json({ message: 'Project added successfully!' }, { status: 200 });
}
