interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

class Director implements DirectorInterface {
  workFromHome(): string {
    return 'Working from home';
  }

  getCoffeeBreak(): string {
    return 'Getting a coffee break';
  }

  workDirectorTasks(): string {
    return 'Getting to director tasks'
  }
}

class Teacher implements TeacherInterface {
  workFromHome(): string {
    return 'Cannot work from home';
  }

  getCoffeeBreak(): string {
    return 'Cannot have a break'
  }

  workTeacherTasks(): string {
    return 'Getting to work'
  }
}

function createEmployee(salary: number | string): Director | Teacher {
  if (typeof salary === 'number' && salary < 500) {
    return new Teacher()
  }
  return new Director()
}

// use of type predicate, it returns a bool
function isDirector(employee: Teacher | Director): employee is Director {
  return employee instanceof Director
}

function executeWork(employee: Teacher | Director): void {
  console.log(isDirector(employee) ? employee.workDirectorTasks()
    : employee.workTeacherTasks())
  }

type Subjects = 'Math' | 'History';

function teachClass(todayClass: Subjects): string {
  if (todayClass === 'Math') {
    return 'Teaching Math'
  } else {
    return 'Teaching History'
  }
}


console.log(createEmployee(100))
console.log(createEmployee(1000))
console.log(createEmployee('$100'))
executeWork(createEmployee(199))
executeWork(createEmployee(1999))

console.log(teachClass('Math'))
console.log(teachClass('History'))

