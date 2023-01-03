export default function updateStudentGradeByCity(getListStudents, city, newGrades) {
  if (!(Array.isArray(getListStudents)) && !(Array.isArray(newGrades))) { return []; }

  const studsCityArr = getListStudents.filter((val) => val.location === city);

  return studsCityArr.map((studObj) => {
    const gradeValArr = newGrades.filter((gradeObj) => gradeObj.studentId === studObj.id);

    const newStudObj = studObj;
    if (gradeValArr[0]) {
      Object.assign(newStudObj, gradeValArr[0]);
    } else {
      newStudObj.grade = 'N/A';
    }

    return newStudObj;
  });
}
