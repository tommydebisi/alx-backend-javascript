export default function getListStudentIds(getListStudents) {
  if (!(Array.isArray(getListStudents))) { return []; }

  return getListStudents.map((val) => val.id);
}
