import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';

@Controller('students')
export class StudentController {
  @Get()
  getStudents() {
    return 'All students';
  }

  @Get('/:studentId')
  getStudentById(@Param('studentId') studentId: string) {
    console.log(studentId);
    return `Get student with id of ${studentId}`;
  }

  @Post()
  storeStudent(@Body() body) {
    return `Store student record with the following data ${JSON.stringify(
      body,
    )}`;
  }

  @Put('/:studentId')
  updateStudent(@Param('studentId') studentId: string, @Body() body) {
    return `update student record ${studentId} with data of ${JSON.stringify(
      body,
    )}`;
  }
}
