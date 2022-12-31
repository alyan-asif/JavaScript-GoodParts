class Program {
    constructor() {
    }
  
    run() {
      console.log('Running Program');
    }
  }
  
  
  class StudentProgram extends Program {
    constructor() {
      super();
    }
  
    debug() {
      console.log('Debugging Program');
    }
  }
  
  class TeacherProgram extends Program {
    constructor() {
      super();
    }
  
    release() {
      console.log('Releasing Program');
    }
  }
  
  TeacherProgram.prototype = Object.create(Program.prototype);
  StudentProgram.prototype = Object.create(Program.prototype);
  
  
  const teacherProgram = new TeacherProgram();
  console.log(teacherProgram.run); 
  console.log(teacherProgram.release); 
  console.log(teacherProgram.debug); 
  
  const studentProgram = new StudentProgram();
  console.log(studentProgram.run); 
  console.log(studentProgram.release); 
  console.log(studentProgram.debug); 
  